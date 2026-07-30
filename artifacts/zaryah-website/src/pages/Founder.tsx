// Source: PDF Pages 13, 14
import { motion } from "framer-motion";
import { Link } from "wouter";

const roles = [
  "Vice Chairman — UN Sustainable Development Council",
  "President — Global AI Research Council",
  "Director — United Economic Forum (UEF)",
  "Member — Forbes Business Council",
  "Founder — ZaryahX, Zaryah Angels, Billion Dollar Dream",
  "Director — Zaryah Investment Company, Evoqe",
];

const credentials = [
  { type: "Doctorate", detail: "AI — Walsh College, USA" },
  { type: "MBA", detail: "Finance & Financial Management" },
  { type: "BBA", detail: "Islamic Finance & Investment" },
  { type: "CFA", detail: "Level 1 — CFA Institute" },
  { type: "NISM", detail: "Equity Derivatives" },
  { type: "Blockchain", detail: "Solutions Architect · RegTech · NFT" },
];

const appearances = [
  "TEDx", "Harvard", "LSE", "WEF", "Forbes",
  "Doha Islamic Finance Conference (3 yrs, by invitation of PM of Qatar)",
  "GITEX", "DIFC", "World Finance Council",
  "Times of India", "Islam Channel UK",
];

const achievements = [
  "40+ AWARDS",
  "2M+ SOCIAL VIEWS",
  "IIT MADRAS INCUBATED",
  "STARTUP INDIA",
  "STARTUP TN",
  "TiE CHARTER",
];

export default function Founder() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="container max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Our Founder</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
              Built by Jubran Siddique.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Specialist in building technology for social impact. Intelligence driven by collective conscience.
            </p>
            <div className="mt-6 text-sm font-bold tracking-widest text-muted-foreground">
              CEO & FOUNDER · DIGITECH EVOQE · TECHNOLOGY & AI VISIONARY
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">Roles & Governance</h2>
              <ul className="space-y-4">
                {roles.map((role, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">Credentials</h2>
              <div className="space-y-4">
                {credentials.map((c, i) => (
                  <div key={i} className="flex items-start gap-4 py-3 border-b border-border/50 last:border-b-0">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase min-w-[90px]">{c.type}</span>
                    <span className="text-muted-foreground">{c.detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Speaker & Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">Speaker · Published · Recognized</h2>
            <div className="flex flex-wrap gap-3">
              {appearances.map((a, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground"
                >
                  {a}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Advisors CTA */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 bg-card border border-border rounded-2xl px-10 py-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-1">The team behind the founder</h3>
              <p className="text-muted-foreground text-sm">Senior civil servants, institutional leaders, and academic directors guiding the work.</p>
            </div>
            <Link href="/advisors">
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline whitespace-nowrap">
                Meet our advisors →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Achievement bar */}
      <section className="py-12 border-t border-border bg-muted/10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold tracking-widest text-muted-foreground">
            {achievements.map((a) => (
              <span key={a} className="px-4 py-2 border border-border rounded-full">{a}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
