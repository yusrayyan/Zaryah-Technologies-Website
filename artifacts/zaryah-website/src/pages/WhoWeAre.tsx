// Source: PDF Page 3
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function WhoWeAre() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="container max-w-4xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Who We Are</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-8">
              An AI software studio, engineered for the second wave.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Five years deep in production AI. IIT-incubated. 35 engineers who care more about the work than the title. We ship enterprise-grade systems — and we ship them in weeks, not quarters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "5+", label: "Years in production AI" },
              { val: "35+", label: "Specialist engineers" },
              { val: "30K+", label: "Active users on shipped platforms" },
              { val: "8×", label: "Cost-efficient vs Western shops" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="space-y-2"
              >
                <div className="text-5xl font-extrabold text-foreground">{s.val}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/10">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-10">Certifications & Recognition</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["IIT-INCUBATED", "FORBES TECH COUNCIL", "SOC 2", "ISO 27001", "MENA", "APAC", "NA"].map((cert) => (
              <span
                key={cert}
                className="px-5 py-2 border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest rounded-full"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
