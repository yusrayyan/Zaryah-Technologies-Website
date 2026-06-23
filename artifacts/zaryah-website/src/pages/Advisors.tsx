// Source: PDF Page 14
import { motion } from "framer-motion";

const civilService = [
  { name: "Shakeel Akhter", title: "IPS — Indian Police Service" },
  { name: "Saravana Kumar", title: "IRS — Indian Revenue Service" },
  { name: "Tamizh Vendhan", title: "IRS — Indian Revenue Service" },
  { name: "Hameed Ibrahim", title: "Executive Director — Mohammed Sathak Trust" },
  { name: "Amarnaath S", title: "Chairman — S.A. Engineering" },
];

const academia = [
  { name: "Ilanchezhian K M", title: "Academic Director — Competitive Exams" },
  { name: "Dr. Nisha Nujumudeen", title: "Coordinator — Competitive Exams" },
  { name: "Dr. VijayaKumar", title: "Academic Director — Colleges & Universities" },
];

export default function Advisors() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="container max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Advisors & Board</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
              Counsel that compounds.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Senior civil service, deep institutional networks, and academic leadership — guiding the work, opening the doors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Civil Service */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-bold mb-8 pb-4 border-b border-border uppercase tracking-wide">
                Civil Service & Industry
              </h2>
              <div className="space-y-5">
                {civilService.map((person, i) => (
                  <div key={i} className="border-l-2 border-primary/30 pl-5">
                    <div className="font-bold text-foreground">{person.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{person.title}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Academia */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-bold mb-8 pb-4 border-b border-border uppercase tracking-wide">
                Academia & Education
              </h2>
              <div className="space-y-5">
                {academia.map((person, i) => (
                  <div key={i} className="border-l-2 border-primary/30 pl-5">
                    <div className="font-bold text-foreground">{person.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{person.title}</div>
                  </div>
                ))}
              </div>

              {/* Institutional Access */}
              <div className="mt-10 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Institutional Access</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Direct relationships across India's education ecosystem, government bodies, and Tier-1 institutions — translating into faster procurement and warmer doors.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
