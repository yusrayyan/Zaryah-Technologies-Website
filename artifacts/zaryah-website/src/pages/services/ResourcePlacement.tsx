// Source: PDF Page 8
import { motion } from "framer-motion";

const roles = [
  "AI / ML Engineers (LLMs, RAG, fine-tuning)",
  "Full-Stack Developers (React, Node, Python)",
  "Data Engineers (pipelines, warehousing)",
  "DevOps & Platform Engineers (AWS, K8s)",
  "Blockchain Engineers (Solidity, Web3)",
  "Product Designers & QA Specialists",
];

const model = [
  { label: "Engagement", value: "3-month minimum" },
  { label: "Billing", value: "Monthly · USD or AED" },
  { label: "Vetting", value: "Top 5% of our bench" },
  { label: "Ramp time", value: "5 business days" },
  { label: "Replacement", value: "Within 7 days" },
];

export default function ResourcePlacement() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="container max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Service 04</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
              Contractual Resource Placement
            </h1>
            <p className="text-xl text-muted-foreground">
              Senior engineers embedded on your team. Monthly billing. Zero overhead.
            </p>
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
              <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">Roles We Place</h2>
              <ul className="space-y-4">
                {roles.map((role, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* The Model */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">The Model</h2>
              <div className="space-y-0 border border-border rounded-xl overflow-hidden">
                {model.map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-6 py-4 ${
                      i < model.length - 1 ? "border-b border-border" : ""
                    } ${i % 2 === 0 ? "bg-card" : "bg-muted/10"}`}
                  >
                    <span className="text-sm font-semibold text-muted-foreground">{row.label}</span>
                    <span className="text-sm font-bold text-foreground">{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="text-xl font-semibold text-foreground">
              Hire fast. Pause anytime. Convert to full-time when you're ready.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
