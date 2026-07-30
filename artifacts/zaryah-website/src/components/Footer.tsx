import { Link } from "wouter";

export function Footer() {
  return (
    <footer style={{ background: "#060D1F", color: "#CBD5E1" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b" style={{ borderColor: "#1E3A5F" }}>
          <div className="md:col-span-2 space-y-4">
            <div className="font-bold text-base text-white tracking-tight" style={{ fontFamily: "var(--app-font-display)" }}>
              DIGITECH EVOQE
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#94A3B8" }}>
              We build the AI software that grows your business. Custom software, agentic AI, AI agents, and embedded engineers — production-grade, shipped in weeks.
            </p>
            <p className="text-xs font-mono tracking-wider uppercase" style={{ color: "#475569" }}>
              India · UAE · Global
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-mono tracking-widest uppercase font-semibold" style={{ color: "#F97316" }}>Services</div>
            <ul className="space-y-2.5 text-sm" style={{ color: "#94A3B8" }}>
              <li><Link href="/services#custom-ai"><span className="cursor-pointer hover:text-white transition-colors">Custom AI Software</span></Link></li>
              <li><Link href="/services#agentic"><span className="cursor-pointer hover:text-white transition-colors">Agentic AI</span></Link></li>
              <li><Link href="/services#agents"><span className="cursor-pointer hover:text-white transition-colors">AI Agents</span></Link></li>
              <li><Link href="/services#placement"><span className="cursor-pointer hover:text-white transition-colors">Resource Placement</span></Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-mono tracking-widest uppercase font-semibold" style={{ color: "#F97316" }}>Company</div>
            <ul className="space-y-2.5 text-sm" style={{ color: "#94A3B8" }}>
              <li><Link href="/how-we-work"><span className="cursor-pointer hover:text-white transition-colors">How We Work</span></Link></li>
              <li><Link href="/work"><span className="cursor-pointer hover:text-white transition-colors">Our Work</span></Link></li>
              <li><Link href="/about"><span className="cursor-pointer hover:text-white transition-colors">About</span></Link></li>
              <li><Link href="/contact"><span className="cursor-pointer hover:text-white transition-colors">Contact</span></Link></li>
            </ul>
            <div className="pt-2 space-y-2 text-sm" style={{ color: "#94A3B8" }}>
              <a href="mailto:info@digitechevoqe.com" className="block hover:text-white transition-colors">
                info@digitechevoqe.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs" style={{ color: "#475569" }}>
          <span>© {new Date().getFullYear()} Digitech Evoqe. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
