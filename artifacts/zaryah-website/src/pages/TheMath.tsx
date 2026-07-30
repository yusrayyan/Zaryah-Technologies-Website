// Source: PDF Page 11
import { motion } from "framer-motion";

const rows = [
  {
    label: "Senior AI Engineer (monthly)",
    western: "$22,000 – 32,000",
    zaryah: "$3,500 – 5,500",
    highlight: true,
  },
  {
    label: "POC delivery",
    western: "8 – 14 weeks",
    zaryah: "2 – 4 weeks",
    highlight: false,
  },
  {
    label: "Minimum engagement",
    western: "6+ months",
    zaryah: "Project or month-to-month",
    highlight: false,
  },
  {
    label: "Proprietary AI frameworks",
    western: "Rare",
    zaryah: "4 in production",
    highlight: false,
  },
  {
    label: "Compliance baseline",
    western: "Varies",
    zaryah: "SOC 2 · ISO 27001 · GDPR",
    highlight: false,
  },
];

export default function TheMath() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="container max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">The Math</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
              World-class output, at a third of the bill.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Same caliber engineers. Same compliance posture. Different cost structure — and we pass it through to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-border rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="grid grid-cols-3 bg-muted/30 border-b border-border">
              <div className="px-6 py-5 text-sm font-bold text-muted-foreground uppercase tracking-wider">
                What You're Comparing
              </div>
              <div className="px-6 py-5 text-sm font-bold text-muted-foreground uppercase tracking-wider border-l border-border">
                Typical US / EU Shop
              </div>
              <div className="px-6 py-5 text-sm font-bold text-primary uppercase tracking-wider border-l border-border bg-primary/5">
                Digitech Evoqe
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-b border-border last:border-b-0 ${
                  i % 2 === 0 ? "bg-card" : "bg-muted/10"
                }`}
              >
                <div className="px-6 py-5 text-sm font-medium text-foreground">{row.label}</div>
                <div className="px-6 py-5 text-sm text-muted-foreground border-l border-border">{row.western}</div>
                <div className="px-6 py-5 text-sm font-bold text-primary border-l border-border bg-primary/5">
                  {row.zaryah}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center text-2xl font-medium italic text-foreground max-w-3xl mx-auto"
          >
            "Save the runway. Spend it on something that matters — like winning the market."
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
}
