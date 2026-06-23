// Source: PDF Page 10
import { motion } from "framer-motion";

const phases = [
  {
    week: "Week 0",
    num: "1",
    title: "Discovery",
    desc: "Free consult. Map the problem. Define success.",
  },
  {
    week: "Week 1-2",
    num: "2",
    title: "POC",
    desc: "Working prototype. Real data. Real users.",
  },
  {
    week: "Week 3-6",
    num: "3",
    title: "Build",
    desc: "Production engineering. Daily standups in your TZ.",
  },
  {
    week: "Week 7-8",
    num: "4",
    title: "Deploy",
    desc: "Cloud setup, CI/CD, observability, handoff.",
  },
  {
    week: "Ongoing",
    num: "5",
    title: "Scale & Support",
    desc: "Monitor, optimize, extend. We stay close.",
  },
];

const guarantees = [
  "Daily syncs in your timezone",
  "Code in your repo from day one",
  "No lock-in — your IP",
];

export default function HowWeWork() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="container max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">How We Work</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
              From kickoff to production in weeks, not quarters.
            </h1>
            <p className="text-xl text-muted-foreground">
              An agile, lean delivery loop. We ship something real every two weeks and iterate with you in the room.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-5 gap-4">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col">
                  <div className="text-xs font-bold tracking-widest text-primary uppercase mb-2">{phase.week}</div>
                  <div className="text-4xl font-black text-primary/20 mb-2">{phase.num}</div>
                  <h3 className="text-lg font-bold mb-3">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{phase.desc}</p>
                </div>
                {i < phases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 text-muted-foreground z-10 text-sm font-bold">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 px-4 border-t border-border bg-muted/10">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="h-1 w-8 bg-primary rounded mx-auto mb-4" />
                <p className="font-semibold text-foreground">{g}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
