// Source: PDF Page 12
import { motion } from "framer-motion";

const topStats = [
  { val: "$20M+", label: "Value created" },
  { val: "500K+", label: "Users impacted" },
  { val: "7", label: "Countries delivered" },
];

const cases = [
  {
    sector: "EDTECH",
    title: "EdgeUp Platform",
    badge: "30K+ paid users",
    desc: "Agentic AI for institutional intelligence. ₹7+ Cr ARR from one publicly-listed customer. Live April 2026.",
  },
  {
    sector: "FINTECH · MENA",
    title: "Ethical AI Advisor",
    badge: "1.8B addressable users",
    desc: "Culturally-aware financial guidance. Built for the Islamic finance market across 7 countries.",
  },
  {
    sector: "LEGAL TECH",
    title: "Legal AI Agent",
    badge: "Live production-ready",
    desc: "Document analysis, case management, NLP research with smart-contract integration.",
  },
  {
    sector: "HEALTHCARE",
    title: "Maternal Care AI",
    badge: "IIT Madras incubated",
    desc: "AI-driven maternal care platform incubated at IIT Madras.",
  },
  {
    sector: "RETAIL · IoT",
    title: "Supply Chain ML",
    badge: "Production deployed",
    desc: "Machine learning-powered supply chain optimization for retail and IoT environments.",
  },
  {
    sector: "INFRASTRUCTURE",
    title: "Decentralized AI",
    badge: "Production deployed",
    desc: "Decentralized AI infrastructure for distributed enterprise systems.",
  },
];

export default function TrackRecord() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="container max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Track Record</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
              Shipped to production. At scale.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Top Stats */}
      <section className="py-16 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            {topStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="text-5xl font-extrabold text-foreground">{s.val}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-xl p-8"
              >
                <div className="text-xs font-bold tracking-widest text-primary uppercase mb-3">{c.sector}</div>
                <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full mb-4">
                  {c.badge}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Badge bar */}
      <section className="py-12 border-t border-border bg-muted/10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold tracking-widest text-muted-foreground">
            {["IIT MADRAS INCUBATED", "ITNT ACCELERATED", "FORBES BUSINESS COUNCIL", "40+ AWARDS"].map((b) => (
              <span key={b} className="px-4 py-2 border border-border rounded-full">{b}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
