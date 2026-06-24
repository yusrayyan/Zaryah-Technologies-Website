import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { value, ref } = useCountUp(target, 1.4);
  return (
    <div ref={ref} className="space-y-2">
      <div className="text-5xl font-extrabold text-foreground tabular-nums">
        {value}{suffix}
      </div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Source: PDF Page 1 */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Floating orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[80px] pointer-events-none"
          style={{
            background: "hsl(220 90% 50%)",
            animation: "orb-float-1 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-[70px] pointer-events-none"
          style={{
            background: "hsl(260 80% 60%)",
            animation: "orb-float-2 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[60px] pointer-events-none"
          style={{
            background: "hsl(200 90% 55%)",
            animation: "orb-float-3 10s ease-in-out infinite",
          }}
        />

        <motion.div
          className="relative z-10 max-w-4xl space-y-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem} className="flex items-center justify-center space-x-4 text-xs font-bold tracking-widest text-muted-foreground mb-8">
            <span>India &middot; UAE &middot; Global</span>
          </motion.div>

          <motion.h1 variants={staggerItem} className="text-5xl md:text-7xl font-extrabold tracking-tighter">
            We build the AI software that grows your business.
          </motion.h1>

          <motion.p variants={staggerItem} className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            Custom software &middot; Agentic AI &middot; AI agents &middot; Embedded teams
          </motion.p>

          <motion.div variants={staggerItem} className="pt-8">
            <Link href="/get-started">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Section - Source: PDF Page 2 */}
      <section className="py-24 bg-muted/10">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Every business is becoming an AI business.</h2>
              <p className="text-lg text-muted-foreground">
                The question isn't whether to build with AI — it's who you trust to build it. The shops that move fastest, ship cleanest, and scale beyond the demo are the ones writing the next decade.
              </p>
              <blockquote className="mt-8 pl-6 border-l-4 border-primary text-xl font-medium italic">
                "The next billion-dollar businesses will be designed by humans and built with AI."
              </blockquote>
            </motion.div>

            <motion.div
              className="grid gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { stat: "78%", desc: "of enterprises now run AI in production" },
                { stat: "10×", desc: "faster shipping with agentic workflows" },
                { stat: "$4.4T", desc: "annual value AI is forecast to unlock" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="bg-card border p-6 rounded-lg flex items-center space-x-6 card-glow"
                >
                  <div className="text-4xl font-bold text-primary">{s.stat}</div>
                  <div className="text-muted-foreground">{s.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Snapshot - Source: PDF Page 3 */}
      <section className="py-24 border-y">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <StatCounter target={5} suffix="+" label="Years in production AI" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <StatCounter target={35} suffix="+" label="Specialist engineers" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <StatCounter target={30} suffix="K+" label="Active users on shipped platforms" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <StatCounter target={8} suffix="×" label="Cost-efficient vs Western shops" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-4 text-xs font-bold tracking-widest text-muted-foreground text-center"
          >
            <span>IIT-INCUBATED</span><span>&middot;</span>
            <span>FORBES TECH COUNCIL</span><span>&middot;</span>
            <span>SOC 2 / ISO 27001</span><span>&middot;</span>
            <span>MENA</span><span>&middot;</span>
            <span>APAC</span><span>&middot;</span>
            <span>NA</span>
          </motion.div>
        </div>
      </section>

      {/* Services Teaser - Source: PDF Page 4 */}
      <section className="py-24 bg-muted/5">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl font-bold">Four ways we plug in.</h2>
            <p className="text-xl text-muted-foreground">Pick one. Mix and match. Start with a POC and scale to a full team — your call.</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { num: "01", title: "Custom AI Software", sub: "Built from spec", desc: "Web, mobile, backend, ML pipelines. End-to-end product engineering with AI woven in." },
              { num: "02", title: "Agentic AI Development", sub: "Systems that act", desc: "Autonomous multi-step AI workflows that plan, decide, and execute — humans in the loop where it matters." },
              { num: "03", title: "AI Agent Creation", sub: "Purpose-built specialists", desc: "Support, research, coding, ops. Drop-in AI agents that own a workflow inside your stack." },
              { num: "04", title: "Resource Placement", sub: "Embedded talent", desc: "Senior AI engineers, ML scientists, full-stack devs — placed on your team. Vetted, ramped, billed monthly." },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group relative bg-card border p-8 rounded-xl card-glow cursor-pointer"
              >
                <div className="text-6xl font-black text-primary/10 absolute top-6 right-8 group-hover:text-primary/20 transition-colors duration-300">{s.num}</div>
                <h3 className="text-2xl font-bold mb-1">{s.title}</h3>
                <div className="text-primary font-medium mb-4">{s.sub}</div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Source: PDF Page 15/16 */}
      <section className="relative py-32 bg-primary text-primary-foreground text-center px-4 overflow-hidden">
        <div
          className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full opacity-10 blur-[100px] pointer-events-none"
          style={{ background: "white", animation: "orb-float-1 14s ease-in-out infinite" }}
        />
        <div className="container max-w-3xl mx-auto space-y-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold tracking-tight"
          >
            The first conversation is on the house.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-2xl opacity-90"
          >
            Bring us a problem, a sketch, or a vague hunch. We'll come back in 48 hours with a plan, a price, and a path to production.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="pt-8"
          >
            <Link href="/get-started">
              <Button variant="secondary" size="lg" className="h-14 px-10 text-lg font-bold shadow-xl hover:scale-105 transition-transform">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
