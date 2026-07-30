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

const steps = [
  { week: "Week 0", num: "1", title: "Discovery", desc: "Free consult. Map the problem, define success." },
  { week: "Week 1–2", num: "2", title: "POC", desc: "Working prototype on your real data, real users." },
  { week: "Week 3–6", num: "3", title: "Build", desc: "Production engineering, daily standups in your TZ." },
  { week: "Week 7–8", num: "4", title: "Deploy", desc: "Cloud, CI/CD, observability, clean handoff." },
  { week: "Ongoing", num: "5", title: "Scale & Support", desc: "Monitor, optimize, extend. We stay close." },
];

const comparison = [
  { label: "Senior AI engineer (monthly)", them: "$22,000 – 32,000", us: "$3,500 – 5,500" },
  { label: "POC delivery", them: "8 – 14 weeks", us: "2 – 4 weeks" },
  { label: "Minimum engagement", them: "6+ months", us: "Project or month-to-month" },
  { label: "Proprietary AI frameworks", them: "Rare", us: "4 in production" },
];

const tiers = [
  { label: "Try us", title: "Discovery — Free", desc: "Two weeks. Scope, prototype, something working. Walk away with the code if we're not a fit.", featured: false },
  { label: "Most chosen", title: "Project Build — Fixed", desc: "Defined scope, fixed price, fixed timeline. Production-ready handoff in 6–12 weeks.", featured: true },
  { label: "Scale with us", title: "Embedded — Monthly", desc: "1 to 20 engineers on your roster. Pause, scale, or convert anytime.", featured: false },
];

export default function HowWeWork() {
  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="py-24" style={{ background: "#0A0A0A" }}>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6 max-w-3xl">
            <motion.p variants={fadeUp} className="eyebrow" style={{ color: "#38BDF8" }}>How we work</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold leading-tight"
              style={{ fontFamily: "var(--app-font-display)", color: "#FFFFFF" }}>
              From kickoff to production in weeks, not quarters.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg" style={{ color: "#999999" }}>
              An agile, lean delivery loop. We ship something real every two weeks and iterate with you in the room — daily syncs in your timezone, code in your repo from day one, no lock-in.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ background: "#fff" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {steps.map((s, i) => (
                <motion.div key={s.title} variants={fadeUp}
                  className="relative p-6 rounded-2xl border card-hover"
                  style={{ background: "#FFFBF7", borderColor: "#E5E5E5" }}>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 z-10">
                      <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                        <path d="M0 5h18M14 1l4 4-4 4" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "#FFF7ED", color: "#F97316", fontFamily: "var(--app-font-mono)" }}>{s.num}</span>
                    <span className="text-xs font-mono uppercase tracking-wider" style={{ color: "#999999" }}>{s.week}</span>
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "var(--app-font-display)", color: "#111111" }}>{s.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#777777" }}>{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-8">
              {["✓ Daily syncs in your timezone", "✓ Code in your repo from day one", "✓ No lock-in — your IP"].map((p) => (
                <span key={p} className="px-4 py-2 rounded-full text-xs font-medium border"
                  style={{ color: "#444444", borderColor: "#D4D4D4", background: "#fff" }}>{p}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Math */}
      <section className="py-24" style={{ background: "#FFFBF7" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.p variants={fadeUp} className="eyebrow mb-3" style={{ color: "#F97316" }}>The math</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--app-font-display)", color: "#111111" }}>
              World-class output, at a fraction of the bill.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base mb-10 max-w-2xl" style={{ color: "#666666" }}>
              Same caliber engineers. A different cost structure — and we pass it through to you.
            </motion.p>
            <motion.div variants={fadeUp} className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E5E5E5" }}>
              <div className="grid grid-cols-3 px-6 py-4" style={{ background: "#F5F5F5" }}>
                <span className="text-xs font-mono uppercase tracking-widest font-bold" style={{ color: "#777777" }}>What you're comparing</span>
                <span className="text-xs font-mono uppercase tracking-widest font-bold text-center" style={{ color: "#777777" }}>Typical US/EU shop</span>
                <span className="text-xs font-mono uppercase tracking-widest font-bold text-center" style={{ color: "#F97316" }}>Digitech Evoqe</span>
              </div>
              {comparison.map((row, i) => (
                <div key={row.label}
                  className="grid grid-cols-3 px-6 py-5 border-t items-center"
                  style={{ borderColor: "#E5E5E5", background: i % 2 === 0 ? "#fff" : "#FAFBFF" }}>
                  <span className="text-sm" style={{ color: "#444444" }}>{row.label}</span>
                  <span className="text-sm text-center" style={{ color: "#999999" }}>{row.them}</span>
                  <span className="text-sm font-bold text-center" style={{ color: "#F97316" }}>{row.us}</span>
                </div>
              ))}
            </motion.div>
            <motion.blockquote variants={fadeUp}
              className="mt-10 text-base italic px-6 py-5 rounded-xl border-l-4"
              style={{ color: "#666666", borderColor: "#F97316", background: "#fff", borderWidth: "0 0 0 4px", borderStyle: "solid", boxShadow: "0 0 0 1px #E5E5E5" }}>
              Save the runway. Spend it on something that matters — like winning the market.
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-24" style={{ background: "#fff" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.p variants={fadeUp} className="eyebrow mb-3" style={{ color: "#F97316" }}>Engagement options</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12 leading-tight"
              style={{ fontFamily: "var(--app-font-display)", color: "#111111" }}>
              Three doors. Walk through any of them.
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((t) => (
                <motion.div key={t.title} variants={fadeUp}
                  className="rounded-2xl border p-8 flex flex-col gap-5 card-hover"
                  style={{ background: t.featured ? "#111111" : "#FFFBF7", borderColor: t.featured ? "#111111" : "#E5E5E5" }}>
                  <div>
                    <span className="eyebrow text-xs" style={{ color: t.featured ? "#38BDF8" : "#777777" }}>{t.label}</span>
                    <h3 className="font-bold text-lg mt-2 mb-3" style={{ fontFamily: "var(--app-font-display)", color: t.featured ? "#FFFFFF" : "#111111" }}>{t.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: t.featured ? "#999999" : "#666666" }}>{t.desc}</p>
                  </div>
                  <Link href="/contact">
                    <span className="mt-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-all"
                      style={{
                        background: t.featured ? "#F97316" : "#fff",
                        color: t.featured ? "#fff" : "#F97316",
                        border: t.featured ? "none" : "1px solid #FED7AA",
                      }}>
                      Get started
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 text-xs text-center" style={{ color: "#999999" }}>
              All three include: dedicated PM · daily syncs · weekly demos · your repo · your IP.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24" style={{ background: "#0A0A0A" }}>
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6 max-w-xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--app-font-display)", color: "#FFFFFF" }}>
              Ready to start the conversation?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base" style={{ color: "#999999" }}>
              The first call is free. We'll come back with a plan, a price, and a path to production.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <span className="inline-flex px-8 py-4 rounded-lg text-sm font-semibold cursor-pointer"
                  style={{ background: "#F97316", color: "#fff", boxShadow: "0 4px 20px rgba(249,115,22,0.4)" }}>
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
