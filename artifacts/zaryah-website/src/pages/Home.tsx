import { motion } from "framer-motion";
import { Link } from "wouter";
import { useCountUp } from "@/hooks/useCountUp";
import { BookOpen, GraduationCap, Briefcase } from "lucide-react";
import founderImg from "@assets/IMG_1715_1782792991386.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function CountStat({ target, suffix, label, light = false }: { target: number; suffix: string; label: string; light?: boolean }) {
  const { value, ref } = useCountUp(target, 1.6);
  return (
    <div ref={ref} className="text-center">
      <div
        className="text-4xl md:text-5xl font-extrabold tabular-nums"
        style={{ fontFamily: "var(--app-font-display)", color: light ? "#fff" : "#0F172A" }}
      >
        {value}{suffix}
      </div>
      <div className="mt-2 text-sm" style={{ color: light ? "#94A3B8" : "#64748B" }}>{label}</div>
    </div>
  );
}

const services = [
  {
    num: "01",
    title: "Custom AI Software",
    desc: "Spec to ship. Full-stack web and mobile, backends, ML pipelines — end-to-end product engineering with AI woven in.",
  },
  {
    num: "02",
    title: "Agentic AI Development",
    desc: "Systems that don't just answer — they plan, decide, and act. Autonomous multi-step workflows, with humans in the loop where it matters.",
  },
  {
    num: "03",
    title: "AI Agent Creation",
    desc: "Purpose-built AI workers that live inside your stack and own a workflow end-to-end — support, research, ops.",
  },
  {
    num: "04",
    title: "Resource Placement",
    desc: "Senior AI engineers, ML scientists, and full-stack devs embedded on your team. Vetted, ramped in days, billed monthly.",
  },
];

const steps = [
  { week: "Week 0", title: "Discovery", desc: "Free consult. We map the problem and define what success looks like." },
  { week: "Week 1–2", title: "POC", desc: "A working prototype on your real data, in front of real users." },
  { week: "Week 3–6", title: "Build", desc: "Production engineering, with daily standups in your timezone." },
  { week: "Week 7–8", title: "Deploy", desc: "Cloud setup, CI/CD, observability, and a clean handoff." },
  { week: "Ongoing", title: "Scale & Support", desc: "We monitor, optimize, and extend. We stay close." },
];

const products = [
  { tag: "B2C · Education", title: "Adaptive learning platform", desc: "Behavioural-science learning for individual students — personalised to how each learner thinks, pointed at a real outcome.", Icon: BookOpen },
  { tag: "B2B · Colleges", title: "College placement platform", desc: "Colleges onboard their students, and every learner is tracked against one metric: did they get placed.", Icon: GraduationCap },
  { tag: "B2B · Corporate Hiring", title: "Corporate hiring marketplace", desc: "Employers get access to a pool of behaviourally-matched, job-ready candidates — hiring on fit, not keywords.", Icon: Briefcase },
];

const tiers = [
  {
    label: "Try us",
    title: "Discovery — Free",
    desc: "Two weeks. We scope, prototype, and show you something working. Walk away with the code if we're not a fit.",
    note: "Best for: testing the partnership",
    cta: "Start here",
    featured: false,
  },
  {
    label: "Most chosen",
    title: "Project Build — Fixed",
    desc: "Defined scope, fixed price, fixed timeline. Production-ready handoff in 6–12 weeks.",
    note: "Best for: known specs, deadline pressure",
    cta: "Get a quote",
    featured: true,
  },
  {
    label: "Scale with us",
    title: "Embedded — Monthly",
    desc: "1 to 20 engineers on your roster. Pause, scale, or convert anytime. They feel like your own team.",
    note: "Best for: long-haul, evolving roadmaps",
    cta: "Talk to us",
    featured: false,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{ background: "#060D1F" }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Orbs */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)", filter: "blur(40px)", animation: "orb-float-1 14s ease-in-out infinite" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.16) 0%, transparent 70%)", filter: "blur(50px)", animation: "orb-float-2 18s ease-in-out infinite" }} />

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-8">
              <motion.p variants={fadeUp} className="eyebrow" style={{ color: "#38BDF8" }}>
                AI software studio · India · UAE · Global
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight"
                style={{ fontFamily: "var(--app-font-display)", color: "#F8FAFC" }}
              >
                We build the AI software that{" "}
                <span style={{ color: "#3B82F6" }}>grows your business.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg leading-relaxed max-w-lg" style={{ color: "#94A3B8" }}>
                Custom software, agentic AI, drop-in AI agents, and embedded engineers — production-grade, shipped in weeks. You bring the problem; we bring the team that's spent five years putting AI into production.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <span className="inline-flex items-center px-7 py-3.5 rounded-lg text-sm font-semibold cursor-pointer transition-all"
                    style={{ background: "#F97316", color: "#fff", boxShadow: "0 4px 20px rgba(249,115,22,0.4)" }}>
                    Book a free consult
                  </span>
                </Link>
                <Link href="/work">
                  <span className="inline-flex items-center px-7 py-3.5 rounded-lg text-sm font-semibold cursor-pointer transition-all border"
                    style={{ color: "#CBD5E1", borderColor: "#1E3A5F", background: "rgba(255,255,255,0.04)" }}>
                    See our work
                  </span>
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── THE MOMENT ────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#fff" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.h2 variants={fadeUp}
              className="text-3xl md:text-4xl font-bold max-w-3xl mb-6 leading-tight"
              style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>
              Every business is becoming an AI business. The only question is who you trust to build it.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base max-w-2xl mb-14 leading-relaxed" style={{ color: "#475569" }}>
              The companies pulling ahead aren't the ones with the flashiest demo — they're the ones who got AI into production and kept it there. Most never make it past the pilot. We close that gap.
            </motion.p>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { stat: "88%", label: "of enterprises now use AI in at least one function — but most are still stuck in pilots, not production." },
                { stat: "$4.4T", label: "in annual value generative AI is forecast to unlock across the global economy." },
                { stat: "10×", label: "faster shipping when agentic workflows replace manual, hand-built ones." },
              ].map(({ stat, label }) => (
                <motion.div key={stat} variants={fadeUp}
                  className="p-8 rounded-2xl border card-hover"
                  style={{ background: "#FFFBF7", borderColor: "#E2E8F0" }}>
                  <div className="text-5xl font-extrabold mb-3" style={{ fontFamily: "var(--app-font-display)", color: "#F97316" }}>{stat}</div>
                  <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES + PROCESS (merged 04+05) ─────────────────── */}
      <section className="py-24" style={{ background: "#FFFBF7" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.p variants={fadeUp} className="eyebrow mb-3" style={{ color: "#F97316" }}>What we build</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>
              Four ways we plug in.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base mb-12 max-w-2xl" style={{ color: "#475569" }}>
              Pick one. Mix and match. Start with a proof-of-concept and scale to a full team — your call.
            </motion.p>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
              {services.map((s) => (
                <motion.div key={s.num} variants={fadeUp}
                  className="p-7 rounded-2xl border bg-white card-hover group cursor-pointer"
                  style={{ borderColor: "#E2E8F0" }}>
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-xs font-bold shrink-0 mt-1 px-2.5 py-1 rounded-md"
                      style={{ color: "#F97316", background: "#FFF7ED" }}>
                      {s.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-base mb-2" style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>{s.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{s.desc}</p>
                      <Link href="/services">
                        <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold cursor-pointer transition-colors" style={{ color: "#F97316" }}>
                          Learn more <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* By the numbers bar */}
            <motion.div variants={fadeUp}
              className="rounded-2xl p-10 mb-16 grid grid-cols-2 md:grid-cols-4 gap-8"
              style={{ background: "#0F172A" }}>
              {[
                { target: 5, suffix: "+", label: "Years in production AI" },
                { target: 35, suffix: "+", label: "Specialist engineers" },
                { target: 30, suffix: "K+", label: "Active users on shipped platforms" },
                { target: 6, suffix: "×", label: "More cost-efficient than US/EU shops" },
              ].map(({ target, suffix, label }) => (
                <CountStat key={label} target={target} suffix={suffix} label={label} light />
              ))}
            </motion.div>

            {/* Process steps */}
            <motion.p variants={fadeUp} className="eyebrow mb-3" style={{ color: "#F97316" }}>How we work</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>
              From kickoff to production in weeks, not quarters.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base mb-10 max-w-2xl" style={{ color: "#475569" }}>
              An agile, lean delivery loop. We ship something real every two weeks and iterate with you in the room.
            </motion.p>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
              {steps.map((s, i) => (
                <motion.div key={s.title} variants={fadeUp}
                  className="p-5 rounded-xl border bg-white relative"
                  style={{ borderColor: "#E2E8F0" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                      style={{ background: "#FFF7ED", color: "#F97316", fontFamily: "var(--app-font-mono)" }}>
                      {i + 1}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider" style={{ color: "#94A3B8" }}>{s.week}</span>
                  </div>
                  <h4 className="font-bold text-sm mb-1.5" style={{ color: "#0F172A", fontFamily: "var(--app-font-display)" }}>{s.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              {["✓ Daily syncs in your timezone", "✓ Code in your repo from day one", "✓ No lock-in — your IP"].map((p) => (
                <span key={p} className="px-4 py-2 rounded-full text-xs font-medium border"
                  style={{ color: "#374151", borderColor: "#D1D5DB", background: "#fff" }}>{p}</span>
              ))}
              <Link href="/how-we-work">
                <span className="text-xs font-semibold cursor-pointer" style={{ color: "#F97316" }}>See how we work, in detail →</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TRACK RECORD + ENGAGEMENT (merged 06+07) ──────────── */}
      <section className="py-24" style={{ background: "#fff" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            {/* Header stats */}
            <motion.div variants={stagger} className="grid grid-cols-3 gap-8 pb-14 border-b mb-14" style={{ borderColor: "#E2E8F0" }}>
              {[
                { target: 20, suffix: "M+", label: "Value created ($)" },
                { target: 30, suffix: "K+", label: "Active users" },
                { target: 7, suffix: "", label: "Countries delivered" },
              ].map(({ target, suffix, label }) => (
                <CountStat key={label} target={target} suffix={suffix} label={label} />
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="eyebrow mb-3" style={{ color: "#F97316" }}>Track record</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>
              Shipped to production. At scale.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base mb-12 max-w-2xl" style={{ color: "#475569" }}>
              A run of products taken to production across the education-to-employment journey — and beyond, into fintech, legal, healthcare, and infrastructure.
            </motion.p>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {products.map(({ tag, title, desc, Icon }) => (
                <motion.div key={title} variants={fadeUp}
                  className="rounded-2xl border bg-white p-6 card-hover"
                  style={{ borderColor: "#E2E8F0" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "#FFF7ED" }}>
                    <Icon size={22} style={{ color: "#F97316" }} />
                  </div>
                  <span className="eyebrow text-xs" style={{ color: "#64748B" }}>{tag}</span>
                  <h3 className="font-bold text-base mt-2 mb-2" style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="text-center mb-20">
              <Link href="/work">
                <span className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-semibold cursor-pointer border transition-all card-hover"
                  style={{ color: "#F97316", borderColor: "#FED7AA", background: "#FFF7ED" }}>
                  See all work →
                </span>
              </Link>
            </motion.div>

            {/* Engagement models */}
            <motion.p variants={fadeUp} className="eyebrow mb-3" style={{ color: "#F97316" }}>Engagement models</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12 leading-tight"
              style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>
              Three doors. Walk through any of them.
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((t) => (
                <motion.div key={t.title} variants={fadeUp}
                  className="rounded-2xl border p-8 flex flex-col gap-5 card-hover"
                  style={{
                    background: t.featured ? "#0F172A" : "#fff",
                    borderColor: t.featured ? "#0F172A" : "#E2E8F0",
                  }}>
                  <div>
                    <span className="eyebrow text-xs" style={{ color: t.featured ? "#38BDF8" : "#64748B" }}>{t.label}</span>
                    <h3 className="font-bold text-lg mt-2 mb-3" style={{ fontFamily: "var(--app-font-display)", color: t.featured ? "#F8FAFC" : "#0F172A" }}>{t.title}</h3>
                    <p className="text-sm leading-relaxed mb-2" style={{ color: t.featured ? "#94A3B8" : "#475569" }}>{t.desc}</p>
                    <p className="text-xs font-medium" style={{ color: t.featured ? "#F59E0B" : "#F97316" }}>{t.note}</p>
                  </div>
                  <Link href="/contact">
                    <span className="mt-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-all"
                      style={{
                        background: t.featured ? "#F97316" : "#FFFBF7",
                        color: t.featured ? "#fff" : "#F97316",
                        border: t.featured ? "none" : "1px solid #FED7AA",
                      }}>
                      {t.cta}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 text-xs text-center" style={{ color: "#94A3B8" }}>
              All three include: dedicated PM · daily syncs · weekly demos · your repo · your IP.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDER TEASER ────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#FFFBF7" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 items-center max-w-3xl">
              <motion.div variants={fadeUp}>
                <img
                  src={founderImg}
                  alt="Jubran Siddique — Founder & CEO"
                  className="w-full rounded-2xl object-cover"
                  style={{ height: "260px", objectPosition: "center top" }}
                />
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-4">
                <p className="eyebrow" style={{ color: "#F97316" }}>Founder & CEO</p>
                <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>
                  Built by Jubran Siddique.
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
                  A technologist building AI for real-world impact — incubated at IIT Madras, recognized by the Forbes Business Council. He sets the architecture; the team ships it.
                </p>
                <Link href="/about">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold cursor-pointer" style={{ color: "#F97316" }}>
                    Read the full story & meet the team →
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA BAND ────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#060D1F" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="space-y-6">
              <motion.p variants={fadeUp} className="eyebrow" style={{ color: "#38BDF8" }}>Let's build</motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold leading-tight"
                style={{ fontFamily: "var(--app-font-display)", color: "#F8FAFC" }}>
                The first conversation is on the house.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base leading-relaxed" style={{ color: "#94A3B8" }}>
                Bring us a problem, a sketch, or a vague hunch. We'll come back in 48 hours with a plan, a price, and a path to production.
              </motion.p>
              <motion.div variants={stagger} className="space-y-3">
                {["Free 60-minute architecture review", "Custom POC scope within 5 days", "Fixed quote — no hourly games"].map((item) => (
                  <motion.div key={item} variants={fadeUp} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs"
                      style={{ background: "rgba(37,99,235,0.3)", color: "#60A5FA" }}>✓</span>
                    <span className="text-sm" style={{ color: "#CBD5E1" }}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-8 space-y-4" style={{ background: "#0F1A35", border: "1px solid #1E3A5F" }}>
              {["Name", "Work email", "Company"].map((f) => (
                <div key={f} className="w-full rounded-lg px-4 py-3 text-sm"
                  style={{ background: "#06111F", border: "1px solid #1E3A5F", color: "#475569", fontFamily: "var(--app-font-mono)" }}>
                  {f}
                </div>
              ))}
              <div className="w-full rounded-lg px-4 py-3 text-sm"
                style={{ background: "#06111F", border: "1px solid #1E3A5F", color: "#475569", fontFamily: "var(--app-font-mono)", minHeight: "100px" }}>
                What are you trying to build?
              </div>
              <Link href="/contact">
                <span className="block w-full text-center py-3.5 rounded-lg text-sm font-semibold cursor-pointer transition-all"
                  style={{ background: "#F97316", color: "#fff", boxShadow: "0 4px 16px rgba(249,115,22,0.35)" }}>
                  Send
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
