import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Source: PDF Page 1 */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl space-y-6"
        >
          <div className="flex items-center justify-center space-x-4 text-xs font-bold tracking-widest text-primary mb-8">
            <span className="px-3 py-1 border border-primary/20 bg-primary/10 rounded-full">PITCH DECK &middot; 2026</span>
            <span className="text-muted-foreground">India &middot; UAE &middot; Global</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
            We build the AI software that builds your business.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            Custom software &middot; Agentic AI &middot; AI agents &middot; Embedded teams
          </p>

          <div className="pt-8">
            <Link href="/get-started">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold">Get Started</Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Intro Section - Source: PDF Page 2 */}
      <section className="py-24 bg-muted/10">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Every business is becoming an AI business.</h2>
              <p className="text-lg text-muted-foreground">
                The question isn't whether to build with AI — it's who you trust to build it. The shops that move fastest, ship cleanest, and scale beyond the demo are the ones writing the next decade.
              </p>
              <blockquote className="mt-8 pl-6 border-l-4 border-primary text-xl font-medium italic">
                "The next billion-dollar businesses will be designed by humans and built with AI."
              </blockquote>
            </div>
            
            <div className="grid gap-6">
              {[
                { stat: "78%", desc: "of enterprises now run AI in production" },
                { stat: "10×", desc: "faster shipping with agentic workflows" },
                { stat: "$4.4T", desc: "annual value AI is forecast to unlock" }
              ].map((s, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="bg-card border p-6 rounded-lg flex items-center space-x-6"
                >
                  <div className="text-4xl font-bold text-primary">{s.stat}</div>
                  <div className="text-muted-foreground">{s.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot - Source: PDF Page 3 */}
      <section className="py-24 border-y">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "5+", label: "Years in production AI" },
              { val: "35+", label: "Specialist engineers" },
              { val: "30K+", label: "Active users on shipped platforms" },
              { val: "8×", label: "Cost-efficient vs Western shops" }
            ].map((s, i) => (
              <div key={i} className="space-y-2">
                <div className="text-5xl font-extrabold text-foreground">{s.val}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-4 text-xs font-bold tracking-widest text-muted-foreground text-center">
            <span>IIT-INCUBATED</span>
            <span>&middot;</span>
            <span>FORBES TECH COUNCIL</span>
            <span>&middot;</span>
            <span>SOC 2 / ISO 27001</span>
            <span>&middot;</span>
            <span>MENA</span>
            <span>&middot;</span>
            <span>APAC</span>
            <span>&middot;</span>
            <span>NA</span>
          </div>
        </div>
      </section>

      {/* Services Teaser - Source: PDF Page 4 */}
      <section className="py-24 bg-muted/5">
        <div className="container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Four ways we plug in.</h2>
            <p className="text-xl text-muted-foreground">Pick one. Mix and match. Start with a POC and scale to a full team — your call.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { num: "01", title: "Custom AI Software", sub: "Built from spec", desc: "Web, mobile, backend, ML pipelines. End-to-end product engineering with AI woven in." },
              { num: "02", title: "Agentic AI Development", sub: "Systems that act", desc: "Autonomous multi-step AI workflows that plan, decide, and execute — humans in the loop where it matters." },
              { num: "03", title: "AI Agent Creation", sub: "Purpose-built specialists", desc: "Support, research, coding, ops. Drop-in AI agents that own a workflow inside your stack." },
              { num: "04", title: "Resource Placement", sub: "Embedded talent", desc: "Senior AI engineers, ML scientists, full-stack devs — placed on your team. Vetted, ramped, billed monthly." }
            ].map((s, i) => (
              <div key={i} className="group relative bg-card border p-8 rounded-xl hover:border-primary transition-colors duration-300">
                <div className="text-6xl font-black text-primary/10 absolute top-6 right-8">{s.num}</div>
                <h3 className="text-2xl font-bold mb-1">{s.title}</h3>
                <div className="text-primary font-medium mb-4">{s.sub}</div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Source: PDF Page 15/16 */}
      <section className="py-32 bg-primary text-primary-foreground text-center px-4">
        <div className="container max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl font-bold tracking-tight">The first conversation is on the house.</h2>
          <p className="text-2xl opacity-90">
            Bring us a problem, a sketch, or a vague hunch. We'll come back in 48 hours with a plan, a price, and a path to production.
          </p>
          <div className="pt-8">
            <Link href="/get-started">
              <Button variant="secondary" size="lg" className="h-14 px-10 text-lg font-bold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
