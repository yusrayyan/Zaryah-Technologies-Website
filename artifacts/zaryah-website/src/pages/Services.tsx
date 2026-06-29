import { motion } from "framer-motion";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function Section({ id, num, children }: { id: string; num: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 scroll-mt-20" style={{ background: num === "02" || num === "04" ? "#F8FAFF" : "#fff" }}>
      <div className="container">{children}</div>
    </section>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-sm" style={{ color: "#374151" }}>
      <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs"
        style={{ background: "#EFF6FF", color: "#2563EB" }}>✓</span>
      {children}
    </div>
  );
}

export default function Services() {
  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="py-24" style={{ background: "#060D1F" }}>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6 max-w-3xl">
            <motion.p variants={fadeUp} className="eyebrow" style={{ color: "#38BDF8" }}>Services</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold leading-tight"
              style={{ fontFamily: "var(--app-font-display)", color: "#F8FAFC" }}>
              Four ways we plug in.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg" style={{ color: "#94A3B8" }}>
              Pick one. Mix and match. Start with a proof-of-concept and scale to a full team — your call. Each is a standalone engagement or part of one combined build.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {[
                { label: "↓ Custom AI Software", href: "#custom-ai" },
                { label: "↓ Agentic AI", href: "#agentic" },
                { label: "↓ AI Agent Creation", href: "#agents" },
                { label: "↓ Resource Placement", href: "#placement" },
              ].map(({ label, href }) => (
                <a key={href} href={href}
                  className="px-4 py-2 rounded-full text-xs font-mono tracking-wide border cursor-pointer transition-all"
                  style={{ color: "#CBD5E1", borderColor: "#1E3A5F", background: "rgba(255,255,255,0.04)" }}>
                  {label}
                </a>
              ))}
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <span className="inline-flex px-7 py-3.5 rounded-lg text-sm font-semibold cursor-pointer"
                  style={{ background: "#2563EB", color: "#fff", boxShadow: "0 4px 16px rgba(37,99,235,0.4)" }}>
                  Book a free consult
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 01 Custom AI Software */}
      <Section id="custom-ai" num="01">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.p variants={fadeUp} className="eyebrow mb-3" style={{ color: "#2563EB" }}>01 · Service</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>
            Custom AI Software Development
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base mb-10 max-w-2xl" style={{ color: "#475569" }}>
            Spec to ship. Web, mobile, backend, ML pipelines — all of it, with AI woven in from the first commit.
          </motion.p>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8">
            <motion.div variants={fadeUp} className="space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest font-bold mb-4" style={{ color: "#2563EB" }}>What you get</p>
              <Check>Full-stack web & mobile apps (React, Next.js, Flutter)</Check>
              <Check>Backend, APIs, and microservices on AWS / Azure / GCP</Check>
              <Check>ML pipelines, data infrastructure, model training & deployment</Check>
              <Check>Production-grade DevOps and observability from day one</Check>
            </motion.div>
            <motion.div variants={fadeUp} className="p-7 rounded-2xl border" style={{ background: "#F8FAFF", borderColor: "#E2E8F0" }}>
              <p className="text-xs font-mono uppercase tracking-widest font-bold mb-4" style={{ color: "#64748B" }}>Stack — modern rails</p>
              <div className="grid grid-cols-2 gap-y-2 text-sm" style={{ color: "#374151", fontFamily: "var(--app-font-mono)" }}>
                {["PyTorch", "TensorFlow", "LangChain", "MLflow", "Kubernetes", "Docker", "React", "Next.js", "FastAPI", "gRPC"].map(t => (
                  <span key={t} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#2563EB" }} />
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>

      {/* 02 Agentic AI */}
      <Section id="agentic" num="02">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.p variants={fadeUp} className="eyebrow mb-3" style={{ color: "#2563EB" }}>02 · Service</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>
            Agentic AI Development
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base mb-10 max-w-2xl" style={{ color: "#475569" }}>
            Systems that don't just answer — they plan, decide, execute, and adapt, with humans in the loop where it matters.
          </motion.p>
          <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
            {[
              { n: "1", title: "Perceive", desc: "Ingest data, context, and signals from your systems." },
              { n: "2", title: "Reason", desc: "Plan multi-step workflows with our engine." },
              { n: "3", title: "Act", desc: "Execute tools, write to systems, take real actions." },
              { n: "4", title: "Learn", desc: "Improve from feedback and get smarter over time." },
            ].map((s) => (
              <motion.div key={s.title} variants={fadeUp}
                className="p-6 rounded-2xl border text-center card-hover"
                style={{ background: "#fff", borderColor: "#E2E8F0" }}>
                <div className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-bold"
                  style={{ background: "#EFF6FF", color: "#2563EB", fontFamily: "var(--app-font-mono)" }}>{s.n}</div>
                <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>{s.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p variants={fadeUp} className="text-sm italic p-5 rounded-xl border" style={{ color: "#475569", borderColor: "#E2E8F0", background: "#F8FAFF", borderLeft: "3px solid #2563EB" }}>
            In the wild: marketing campaigns that self-optimize · supply chains that re-route in real time · sales pipelines that prioritize themselves.
          </motion.p>
        </motion.div>
      </Section>

      {/* 03 AI Agent Creation */}
      <Section id="agents" num="03">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.p variants={fadeUp} className="eyebrow mb-3" style={{ color: "#2563EB" }}>03 · Service</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>
            AI Agent Creation
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base mb-10 max-w-2xl" style={{ color: "#475569" }}>
            Specialist AI workers that live inside your stack and own a workflow end-to-end.
          </motion.p>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Support", desc: "Customer success — handles tier-1 tickets, reads order history, issues refunds via your API." },
              { title: "Research", desc: "Knowledge work — pulls from many sources, synthesizes briefs, cites everything." },
              { title: "Ops", desc: "Internal workflows — writes & tests code, triages alerts, updates Jira & Slack." },
            ].map((a) => (
              <motion.div key={a.title} variants={fadeUp}
                className="p-7 rounded-2xl border card-hover"
                style={{ background: "#F8FAFF", borderColor: "#E2E8F0" }}>
                <h3 className="font-bold text-base mb-3" style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{a.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p variants={fadeUp} className="text-sm" style={{ color: "#64748B" }}>
            Integrates with your existing tools — Salesforce, Slack, Jira, HubSpot, and custom APIs.
          </motion.p>
        </motion.div>
      </Section>

      {/* 04 Resource Placement */}
      <Section id="placement" num="04">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.p variants={fadeUp} className="eyebrow mb-3" style={{ color: "#2563EB" }}>04 · Service</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>
            Contractual Resource Placement
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base mb-10 max-w-2xl" style={{ color: "#475569" }}>
            Senior engineers embedded on your team. Monthly billing. Zero overhead.
          </motion.p>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8">
            <motion.div variants={fadeUp} className="space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest font-bold mb-4" style={{ color: "#2563EB" }}>Roles we place</p>
              <Check>AI / ML Engineers (LLMs, RAG, fine-tuning)</Check>
              <Check>Full-Stack Developers (React, Node, Python)</Check>
              <Check>Data Engineers (pipelines, warehousing)</Check>
              <Check>DevOps & Platform Engineers (AWS, K8s)</Check>
              <Check>Blockchain Engineers (Solidity, Web3)</Check>
              <Check>Product Designers & QA Specialists</Check>
              <p className="text-sm pt-2" style={{ color: "#64748B" }}>Hire fast. Pause anytime. Convert to full-time when you're ready.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-7 rounded-2xl border" style={{ background: "#fff", borderColor: "#E2E8F0" }}>
              <p className="text-xs font-mono uppercase tracking-widest font-bold mb-5" style={{ color: "#64748B" }}>The model</p>
              <div className="space-y-0 divide-y" style={{ borderColor: "#F1F5F9" }}>
                {[
                  { k: "Billing", v: "Monthly · USD or AED" },
                  { k: "Vetting", v: "Top 5% of our bench" },
                  { k: "Ramp time", v: "5 business days" },
                  { k: "Replacement", v: "Within 7 days" },
                ].map(({ k, v }) => (
                  <div key={k} className="flex justify-between py-3.5 text-sm">
                    <span style={{ color: "#64748B" }}>{k}</span>
                    <span className="font-semibold" style={{ color: "#0F172A" }}>{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA Band */}
      <section className="py-24" style={{ background: "#060D1F" }}>
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6 max-w-xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ fontFamily: "var(--app-font-display)", color: "#F8FAFC" }}>
              Not sure which service fits?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base" style={{ color: "#94A3B8" }}>
              Book a free 60-minute session. We'll map your problem and tell you exactly which approach makes sense — and why.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <span className="inline-flex px-8 py-4 rounded-lg text-sm font-semibold cursor-pointer"
                  style={{ background: "#2563EB", color: "#fff", boxShadow: "0 4px 20px rgba(37,99,235,0.4)" }}>
                  Book a free consult
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
