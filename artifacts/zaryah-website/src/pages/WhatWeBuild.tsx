// Source: PDF Page 4
import { motion } from "framer-motion";
import { Link } from "wouter";

const services = [
  {
    num: "01",
    title: "Custom AI Software",
    sub: "Built from spec",
    desc: "Web, mobile, backend, ML pipelines. End-to-end product engineering with AI woven in.",
    href: "/services/custom-ai-software",
  },
  {
    num: "02",
    title: "Agentic AI Development",
    sub: "Systems that act",
    desc: "Autonomous multi-step AI workflows that plan, decide, and execute — humans in the loop where it matters.",
    href: "/services/agentic-ai",
  },
  {
    num: "03",
    title: "AI Agent Creation",
    sub: "Purpose-built specialists",
    desc: "Support, research, coding, ops. Drop-in AI agents that own a workflow inside your stack.",
    href: "/services/ai-agents",
  },
  {
    num: "04",
    title: "Resource Placement",
    sub: "Embedded talent",
    desc: "Senior AI engineers, ML scientists, full-stack devs — placed on your team. Vetted, ramped, billed monthly.",
    href: "/services/resource-placement",
  },
];

export default function WhatWeBuild() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="container max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">What We Build</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
              Four ways we plug in.
            </h1>
            <p className="text-xl text-muted-foreground">
              Pick one. Mix and match. Start with a POC and scale to a full team — your call.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link href={s.href}>
                  <div className="group relative bg-card border border-border hover:border-primary transition-colors duration-300 p-8 rounded-xl cursor-pointer h-full">
                    <div className="text-7xl font-black text-primary/10 absolute top-4 right-6 select-none">{s.num}</div>
                    <h3 className="text-2xl font-bold mb-1">{s.title}</h3>
                    <div className="text-primary font-semibold mb-4 text-sm tracking-wide">{s.sub}</div>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                    <div className="mt-6 text-primary text-sm font-semibold group-hover:underline">
                      Learn more →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
