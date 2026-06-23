// Source: PDF Page 6
import { motion } from "framer-motion";

const phases = [
  {
    label: "PERCEIVE",
    desc: "Ingest data, context, signals from your systems",
  },
  {
    label: "REASON",
    desc: "Plan multi-step workflows with our engine",
  },
  {
    label: "ACT",
    desc: "Execute tools, write to systems, take real actions",
  },
  {
    label: "LEARN",
    desc: "Improve from feedback, retrain, get smarter weekly",
  },
];

export default function AgenticAI() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="container max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Service 02</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
              Agentic AI Development
            </h1>
            <p className="text-xl text-muted-foreground">
              Systems that don't just answer — they act. Plan, decide, execute, adapt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Phase Flow */}
      <section className="py-20 px-4 border-y border-border">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <div className="text-3xl font-black text-primary mb-3">{String(i + 1).padStart(2, "0")}</div>
                  <div className="text-sm font-bold tracking-widest text-primary uppercase mb-3">{phase.label}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{phase.desc}</p>
                </div>
                {i < phases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-muted-foreground text-lg z-10">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-20 px-4 bg-muted/10">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-10">Examples in the Wild</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Marketing campaigns that self-optimize",
              "Supply chains that re-route in real time",
              "Sales pipelines that prioritize themselves",
            ].map((ex, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="h-2 w-8 bg-primary rounded mb-4 mx-auto" />
                <p className="font-semibold text-foreground">{ex}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
