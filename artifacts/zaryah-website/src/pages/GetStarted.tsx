// Source: PDF Pages 15, 16
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
  {
    tag: "TRY US",
    title: "Discovery",
    price: "FREE",
    sub: "first sprint",
    desc: "Two weeks. We scope, prototype, and show you something working. Walk away with the code if we're not a fit.",
    best: "testing the partnership",
    featured: false,
  },
  {
    tag: "MOST CHOSEN",
    title: "Project Build",
    price: "FIXED",
    sub: "per milestone",
    desc: "Defined scope, fixed price, fixed timeline. We deliver, you ship. Production-ready handoff in 6–12 weeks.",
    best: "known specs, deadline pressure",
    featured: true,
  },
  {
    tag: "SCALE WITH US",
    title: "Embedded",
    price: "MO/MO",
    sub: "per engineer",
    desc: "1 to 20 engineers placed on your roster. Pause, scale, or convert anytime. They feel like your own team.",
    best: "long-haul, evolving roadmaps",
    featured: false,
  },
];

export default function GetStarted() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="container max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">How to Start</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
              Three doors. Walk through any of them.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.featured
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border bg-card"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold tracking-widest rounded-full">
                    MOST CHOSEN
                  </div>
                )}
                <div className="text-xs font-bold tracking-widest text-primary uppercase mb-4">{plan.tag}</div>
                <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2 text-sm">{plan.sub}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{plan.desc}</p>
                <div className="text-sm text-muted-foreground mb-6">
                  <span className="font-semibold text-foreground">Best for:</span> {plan.best}
                </div>
                <a href="mailto:info@zaryahtech.com">
                  <Button
                    className="w-full"
                    variant={plan.featured ? "default" : "outline"}
                    data-testid={`button-plan-${plan.title.toLowerCase().replace(" ", "-")}`}
                  >
                    Get Started
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Guarantee line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center text-sm text-muted-foreground"
          >
            All three include: dedicated PM · daily syncs · weekly demos · your repo · your IP.
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            The first conversation is on the house.
          </h2>
          <p className="text-xl opacity-90">
            Bring us a problem, a sketch, or a vague hunch. We'll come back in 48 hours with a plan, a price, and a path to production.
          </p>

          <ul className="text-left inline-block space-y-3 mt-4">
            {[
              "Free 60-min architecture review",
              "Custom POC scope within 5 days",
              "Fixed quote — no hourly games",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary-foreground/60 flex-shrink-0" />
                <span className="text-primary-foreground/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 space-y-2">
            <a
              href="mailto:info@zaryahtech.com"
              className="block text-xl font-bold underline underline-offset-4"
              data-testid="link-email"
            >
              info@zaryahtech.com
            </a>
            <a
              href="https://zaryahtech.com"
              className="block text-lg opacity-80 hover:opacity-100"
              data-testid="link-website"
            >
              zaryahtech.com
            </a>
            <p className="text-sm opacity-70 pt-2">India · UAE · Global</p>
          </div>
        </div>
      </section>
    </div>
  );
}
