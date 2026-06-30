import { motion } from "framer-motion";
import { Link } from "wouter";
import { useCountUp } from "@/hooks/useCountUp";
import founderImg from "@assets/IMG_1715_1782792991386.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { value, ref } = useCountUp(target, 1.6);
  return (
    <div ref={ref} className="text-center p-6 rounded-2xl border" style={{ background: "#F8FAFF", borderColor: "#E2E8F0" }}>
      <div className="text-4xl font-extrabold" style={{ fontFamily: "var(--app-font-display)", color: "#2563EB" }}>
        {value}{suffix}
      </div>
      <div className="mt-2 text-sm" style={{ color: "#64748B" }}>{label}</div>
    </div>
  );
}

const advisors = {
  civil: [
    { name: "Shakeel Akhter", role: "IPS — Indian Police Service" },
    { name: "Saravana Kumar", role: "IRS — Indian Revenue Service" },
    { name: "Tamizh Vendhan", role: "IRS — Indian Revenue Service" },
    { name: "Hameed Ibrahim", role: "Executive Director — Mohammed Sathak Trust" },
    { name: "Amarnaath S", role: "Chairman — S.A. Engineering" },
  ],
  academia: [
    { name: "Ilanchezhian K M", role: "Academic Director — Competitive Exams" },
  ],
};

export default function About() {
  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="py-24" style={{ background: "#060D1F" }}>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6 max-w-3xl">
            <motion.p variants={fadeUp} className="eyebrow" style={{ color: "#38BDF8" }}>About</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold leading-tight"
              style={{ fontFamily: "var(--app-font-display)", color: "#F8FAFC" }}>
              Intelligence, driven by collective conscience.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg" style={{ color: "#94A3B8" }}>
              Zaryah Technologies is an AI software studio building production-grade systems across education, Islamic finance, and AI infrastructure. Five years in, IIT-incubated, 35 engineers — we exist to turn AI from a demo into an outcome.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <motion.div variants={fadeUp}><Stat target={5} suffix="+" label="Years in production AI" /></motion.div>
            <motion.div variants={fadeUp}><Stat target={35} suffix="+" label="Specialist engineers" /></motion.div>
            <motion.div variants={fadeUp}><Stat target={7} suffix="" label="Countries delivered" /></motion.div>
            <motion.div variants={fadeUp}><Stat target={40} suffix="+" label="Awards" /></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24" style={{ background: "#F8FAFF" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.p variants={fadeUp} className="eyebrow mb-8" style={{ color: "#2563EB" }}>Founder & CEO · Zaryah Technologies</motion.p>
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start mb-14">
              <motion.div variants={fadeUp}>
                <img
                  src={founderImg}
                  alt="Jubran Siddique — Founder & CEO"
                  className="w-full rounded-2xl object-cover"
                  style={{ height: "380px", objectPosition: "center top" }}
                />
              </motion.div>
              <motion.div variants={stagger} className="space-y-5">
                <motion.h2 variants={fadeUp} className="text-4xl font-bold"
                  style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>
                  Jubran Siddique
                </motion.h2>
                <motion.p variants={fadeUp} className="text-base leading-relaxed" style={{ color: "#374151" }}>
                  A technology and AI specialist building systems for social impact — where intelligence is driven by collective conscience. Across the studio's ventures he plays one role: the architect. He defines how the systems are built and what outcome they're accountable to, then the engineering bench ships them.
                </motion.p>
                <motion.p variants={fadeUp} className="text-base leading-relaxed" style={{ color: "#374151" }}>
                  His work spans behavioural-science education, ethical financial technology, and decentralized AI — incubated at IIT Madras and recognized internationally, from the Forbes Business Council to the world's leading finance and technology forums.
                </motion.p>
              </motion.div>
            </div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: "Roles & Governance",
                  items: [
                    "Vice Chairman — UN Sustainable Development Council",
                    "President — Global AI Research Council",
                    "Director — United Economic Forum",
                    "Member — Forbes Business Council",
                    "Founder — ZaryahX · Zaryah Angels · Billion Dollar Dream",
                    "Director — Zaryah Investment Company · Evoqe",
                  ],
                },
                {
                  label: "Credentials",
                  items: [
                    "Doctorate, AI — Walsh College, USA",
                    "MBA, Finance & Financial Management",
                    "BBA, Islamic Finance & Investment",
                    "CFA Level 1 — CFA Institute",
                    "NISM Equity Derivatives",
                    "Blockchain Solutions Architect · RegTech · NFT",
                  ],
                },
                {
                  label: "Speaker · Published · Recognized",
                  items: [
                    "TEDx · Harvard · LSE · WEF · Forbes",
                    "Doha Islamic Finance Conference (3 yrs, by invitation)",
                    "GITEX · DIFC · World Finance Council",
                    "Times of India · Islam Channel UK",
                    "40+ awards · 2M+ social views",
                  ],
                },
              ].map(({ label, items }) => (
                <motion.div key={label} variants={fadeUp}
                  className="p-7 rounded-2xl border" style={{ background: "#fff", borderColor: "#E2E8F0" }}>
                  <p className="text-xs font-mono uppercase tracking-widest font-bold mb-5" style={{ color: "#64748B" }}>{label}</p>
                  <ul className="space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="text-sm leading-snug flex items-start gap-2" style={{ color: "#374151" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#2563EB" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-24" style={{ background: "#fff" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.p variants={fadeUp} className="eyebrow mb-3" style={{ color: "#2563EB" }}>Advisory board</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>
              Counsel that compounds.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base mb-12 max-w-2xl" style={{ color: "#475569" }}>
              Senior civil service, deep institutional networks, and academic leadership — guiding the work and opening the doors.
            </motion.p>

            <motion.p variants={fadeUp} className="text-xs font-mono uppercase tracking-widest font-bold mb-5" style={{ color: "#64748B" }}>Civil service & industry</motion.p>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {advisors.civil.map((a) => (
                <motion.div key={a.name} variants={fadeUp}
                  className="p-5 rounded-xl border card-hover"
                  style={{ background: "#F8FAFF", borderColor: "#E2E8F0" }}>
                  <div className="font-bold text-sm mb-1" style={{ color: "#0F172A" }}>{a.name}</div>
                  <div className="text-xs" style={{ color: "#64748B" }}>{a.role}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="text-xs font-mono uppercase tracking-widest font-bold mb-5" style={{ color: "#64748B" }}>Academia & education</motion.p>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {advisors.academia.map((a) => (
                <motion.div key={a.name} variants={fadeUp}
                  className="p-5 rounded-xl border card-hover"
                  style={{ background: "#F8FAFF", borderColor: "#E2E8F0" }}>
                  <div className="font-bold text-sm mb-1" style={{ color: "#0F172A" }}>{a.name}</div>
                  <div className="text-xs" style={{ color: "#64748B" }}>{a.role}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}
              className="p-7 rounded-2xl border" style={{ background: "#F8FAFF", borderColor: "#E2E8F0", borderLeft: "4px solid #2563EB" }}>
              <p className="text-xs font-mono uppercase tracking-widest font-bold mb-2" style={{ color: "#64748B" }}>Institutional access</p>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                Direct relationships across India's education ecosystem, government bodies, and Tier-1 institutions — translating into faster procurement and warmer doors.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24" style={{ background: "#060D1F" }}>
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6 max-w-xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--app-font-display)", color: "#F8FAFC" }}>
              Want to build something with this team?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base" style={{ color: "#94A3B8" }}>
              The first conversation is on the house.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <span className="inline-flex px-8 py-4 rounded-lg text-sm font-semibold cursor-pointer"
                  style={{ background: "#2563EB", color: "#fff", boxShadow: "0 4px 20px rgba(37,99,235,0.4)" }}>
                  Book a free consult
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
