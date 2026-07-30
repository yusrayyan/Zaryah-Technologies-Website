import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useCountUp } from "@/hooks/useCountUp";
import {
  BookOpen, TrendingUp, Users, Trophy, GraduationCap,
  Briefcase, Globe, Scale, Heart, Network,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const filters = ["All", "B2C", "B2B", "Education", "Islamic AI", "Legal", "Healthcare", "Infrastructure"];

const projects = [
  { tag: "B2C · Education", cats: ["B2C", "Education"], title: "Adaptive learning platform", desc: "Behavioural-science learning, personalised to each student's thinking style and outcome goal.", Icon: BookOpen, color: "#F97316", bg: "#FFF7ED" },
  { tag: "B2C · Skills & Career", cats: ["B2C", "Education"], title: "Career & skills builder", desc: "Coursework → job-ready capability for a specific target role, mapped to employer demand.", Icon: TrendingUp, color: "#0EA5E9", bg: "#F0F9FF" },
  { tag: "B2C · Jobs & Hiring", cats: ["B2C", "Education"], title: "Job-matching for seekers", desc: "Matches individuals to roles on 400+ behavioural parameters — not just keywords.", Icon: Users, color: "#8B5CF6", bg: "#F5F3FF" },
  { tag: "B2B · Competitive Exams", cats: ["B2B", "Education"], title: "Competitive-exam prep", desc: "Govt & civil-service exam preparation, measured directly against selection benchmarks.", Icon: Trophy, color: "#F59E0B", bg: "#FFFBEB" },
  { tag: "B2B · Colleges", cats: ["B2B", "Education"], title: "College placement platform", desc: "Every student tracked against one metric: did they get placed. Full lifecycle in one dashboard.", Icon: GraduationCap, color: "#F97316", bg: "#FFF7ED" },
  { tag: "B2B · Corporate Hiring", cats: ["B2B", "Education"], title: "Corporate hiring marketplace", desc: "Employers hire behaviourally-matched, job-ready candidates — hiring on fit, not keywords.", Icon: Briefcase, color: "#0EA5E9", bg: "#F0F9FF" },
  { tag: "Islamic AI · MENA", cats: ["Islamic AI"], title: "Ethical AI ecosystem", desc: "A culturally-aware, faith-conscious AI ecosystem built for the Islamic market — MENA and beyond.", Icon: Globe, color: "#10B981", bg: "#ECFDF5" },
  { tag: "LegalTech", cats: ["Legal"], title: "Legal AI agent", desc: "Document analysis, case management, and NLP-powered legal research in a single agent.", Icon: Scale, color: "#6366F1", bg: "#EEF2FF" },
  { tag: "Healthcare", cats: ["Healthcare"], title: "Maternal care AI", desc: "AI-powered support system for maternal and prenatal care — personalized and culturally sensitive.", Icon: Heart, color: "#EC4899", bg: "#FDF2F8" },
  { tag: "Infrastructure", cats: ["Infrastructure"], title: "Decentralized AI infrastructure", desc: "Decentralized infrastructure layer for AI workloads — distributed compute and storage.", Icon: Network, color: "#64748B", bg: "#F8FAFC" },
];

function CountStat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { value, ref } = useCountUp(target, 1.6);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "var(--app-font-display)", color: "#F8FAFC" }}>
        {value}{suffix}
      </div>
      <div className="mt-2 text-sm" style={{ color: "#94A3B8" }}>{label}</div>
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.cats.includes(active));

  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "#060D1F" }}>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
            <motion.div variants={stagger} className="grid grid-cols-3 gap-8 pb-10 border-b max-w-lg" style={{ borderColor: "#1E3A5F" }}>
              <CountStat target={20} suffix="M+" label="Value created ($)" />
              <CountStat target={30} suffix="K+" label="Active users" />
              <CountStat target={7} suffix="" label="Countries" />
            </motion.div>
            <motion.p variants={fadeUp} className="eyebrow" style={{ color: "#38BDF8" }}>Work</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold leading-tight"
              style={{ fontFamily: "var(--app-font-display)", color: "#F8FAFC" }}>
              Shipped to production. At scale.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg max-w-2xl" style={{ color: "#94A3B8" }}>
              Filter by what you're looking for.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20" style={{ background: "#FFFBF7" }}>
        <div className="container">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="px-4 py-2 rounded-full text-xs font-mono tracking-wide border transition-all cursor-pointer"
                style={{
                  background: active === f ? "#F97316" : "#fff",
                  color: active === f ? "#fff" : "#64748B",
                  borderColor: active === f ? "#F97316" : "#D1D5DB",
                }}
              >
                {f}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border bg-white p-6 card-hover"
                  style={{ borderColor: "#E2E8F0" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: p.bg }}
                  >
                    <p.Icon size={22} style={{ color: p.color }} />
                  </div>
                  <span className="eyebrow text-xs" style={{ color: "#64748B" }}>{p.tag}</span>
                  <h3 className="font-bold text-base mt-2 mb-2" style={{ fontFamily: "var(--app-font-display)", color: "#0F172A" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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
                  style={{ background: "#F97316", color: "#fff", boxShadow: "0 4px 20px rgba(249,115,22,0.4)" }}>
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
