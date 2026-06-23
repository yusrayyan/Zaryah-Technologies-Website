// Source: PDF Page 7
import { motion } from "framer-motion";

const agents = [
  {
    type: "Support",
    category: "Customer success",
    items: [
      "Handles 80% of tier-1 tickets",
      "Reads order history",
      "Issues refunds via your API",
    ],
  },
  {
    type: "Research",
    category: "Knowledge work",
    items: [
      "Pulls from 50+ sources",
      "Synthesizes briefs",
      "Cites everything",
    ],
  },
  {
    type: "Ops",
    category: "Internal workflows",
    items: [
      "Writes & tests code",
      "Triages alerts",
      "Updates Jira & Slack",
    ],
  },
];

export default function AIAgents() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="container max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Service 03</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
              AI Agent Creation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Specialist AI workers that live inside your stack and own a workflow end-to-end.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agent Types */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {agents.map((agent, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="bg-card border border-border rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-1">{agent.type}</h3>
                <div className="text-primary text-sm font-semibold mb-6 tracking-wide">{agent.category}</div>
                <ul className="space-y-3">
                  {agent.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Integration note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-6 border border-primary/20 bg-primary/5 rounded-xl text-center"
          >
            <p className="text-muted-foreground">
              Each agent integrates with your existing tools — Salesforce, Slack, Jira, HubSpot, custom APIs.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
