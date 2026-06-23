// Source: PDF Page 5
import { motion } from "framer-motion";

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } },
});

export default function CustomAISoftware() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="container max-w-5xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp(0)}>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Service 01</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
              Custom AI Software Development
            </h1>
            <p className="text-xl text-muted-foreground">
              Spec to ship. Web, mobile, backend, ML pipelines — all of it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* What You Get */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0)}
            >
              <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">What You Get</h2>
              <ul className="space-y-4">
                {[
                  "Full-stack web & mobile apps (React, Next.js, Flutter)",
                  "Backend, APIs, microservices on AWS / Azure / GCP",
                  "ML pipelines, data infra, model training & deployment",
                  "Production-grade DevOps, observability, SOC 2 baseline",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Stack */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(1)}
            >
              <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">Stack — Modern Rails</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "PyTorch",
                  "TensorFlow",
                  "LangChain",
                  "MLflow",
                  "Kubernetes",
                  "Docker",
                  "React",
                  "Next.js",
                  "FastAPI",
                  "gRPC",
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 bg-card border border-border rounded-lg text-sm font-semibold text-foreground"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
