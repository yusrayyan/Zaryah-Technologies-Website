import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Check({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs"
        style={{ background: "rgba(37,99,235,0.25)", color: "#FB923C" }}>✓</span>
      <span className="text-sm" style={{ color: "#CCCCCC" }}>{children}</span>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", engagement: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0ACompany: ${form.company}%0AEngagement: ${form.engagement}%0A%0A${form.message}`;
    window.location.href = `mailto:info@digitechevoqe.com?subject=Project Inquiry — ${form.company}&body=${body}`;
  };

  const inputStyle = {
    width: "100%",
    background: "#0A0A0A",
    border: "1px solid #2A2A2A",
    borderRadius: "10px",
    padding: "12px 16px",
    color: "#FFFFFF",
    fontSize: "14px",
    fontFamily: "var(--app-font-sans)",
    outline: "none",
  };

  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="py-24" style={{ background: "#0A0A0A" }}>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-8">
              <motion.p variants={fadeUp} className="eyebrow" style={{ color: "#38BDF8" }}>Let's build</motion.p>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold leading-tight"
                style={{ fontFamily: "var(--app-font-display)", color: "#FFFFFF" }}>
                The first conversation is on the house.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg" style={{ color: "#999999" }}>
                Bring us a problem, a sketch, or a vague hunch. We'll come back in 48 hours with a plan, a price, and a path to production.
              </motion.p>
              <motion.div variants={stagger} className="space-y-3">
                <motion.div variants={fadeUp}><Check>Free 60-minute architecture review</Check></motion.div>
                <motion.div variants={fadeUp}><Check>Custom POC scope within 5 days</Check></motion.div>
                <motion.div variants={fadeUp}><Check>Fixed quote — no hourly games</Check></motion.div>
              </motion.div>
              <motion.p variants={fadeUp} className="text-sm" style={{ color: "#666666", fontFamily: "var(--app-font-mono)" }}>
                info@digitechevoqe.com · India · UAE · Global
              </motion.p>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-8"
              style={{ background: "#111111", border: "1px solid #2A2A2A" }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider" style={{ color: "#777777" }}>Name</label>
                    <input
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider" style={{ color: "#777777" }}>Work email</label>
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider" style={{ color: "#777777" }}>Company</label>
                  <input
                    placeholder="Your company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    style={inputStyle}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider" style={{ color: "#777777" }}>Engagement type</label>
                  <select
                    value={form.engagement}
                    onChange={(e) => setForm({ ...form, engagement: e.target.value })}
                    style={{ ...inputStyle, color: form.engagement ? "#FFFFFF" : "#666666" }}
                  >
                    <option value="" disabled>Discovery / Project / Embedded</option>
                    <option value="Discovery">Discovery — Free (2 weeks)</option>
                    <option value="Project Build">Project Build — Fixed price</option>
                    <option value="Embedded">Embedded — Monthly engineers</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider" style={{ color: "#777777" }}>What are you trying to build?</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your problem, idea, or project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all"
                  style={{ background: "#F97316", color: "#fff", boxShadow: "0 4px 16px rgba(249,115,22,0.4)", border: "none", cursor: "pointer" }}
                >
                  Send →
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-24" style={{ background: "#FFFBF7" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.p variants={fadeUp} className="eyebrow mb-3" style={{ color: "#F97316" }}>What happens next</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-12" style={{ fontFamily: "var(--app-font-display)", color: "#111111" }}>
              No bots. No wait. Just answers.
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: "1", title: "We reply in 48 hours", desc: "A real engineer reads it — not a sales bot. We assess whether we can help before we respond." },
                { n: "2", title: "Free architecture review", desc: "60 minutes mapping the problem, the options, and the rough technical path forward." },
                { n: "3", title: "Scope + fixed quote", desc: "A POC scope within 5 days and a clear, fixed price. No hourly games." },
              ].map((s) => (
                <motion.div key={s.n} variants={fadeUp}
                  className="p-8 rounded-2xl border card-hover"
                  style={{ background: "#fff", borderColor: "#E5E5E5" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-6"
                    style={{ background: "#FFF7ED", color: "#F97316", fontFamily: "var(--app-font-mono)" }}>{s.n}</div>
                  <h3 className="font-bold text-base mb-2" style={{ fontFamily: "var(--app-font-display)", color: "#111111" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
