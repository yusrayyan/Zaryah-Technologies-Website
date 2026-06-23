import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 w-full flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg tracking-tight">ZARYAH TECHNOLOGIES</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>
          <Link href="/who-we-are" className="transition-colors hover:text-primary">Who We Are</Link>
          <div className="group relative">
            <Link href="/what-we-build" className="transition-colors hover:text-primary">What We Build</Link>
            <div className="absolute left-0 top-full hidden w-48 flex-col bg-popover border p-2 group-hover:flex">
              <Link href="/services/custom-ai-software" className="block px-4 py-2 hover:bg-muted">Custom AI Software</Link>
              <Link href="/services/agentic-ai" className="block px-4 py-2 hover:bg-muted">Agentic AI</Link>
              <Link href="/services/ai-agents" className="block px-4 py-2 hover:bg-muted">AI Agents</Link>
              <Link href="/services/resource-placement" className="block px-4 py-2 hover:bg-muted">Resource Placement</Link>
            </div>
          </div>
          <Link href="/how-we-work" className="transition-colors hover:text-primary">How We Work</Link>
          <Link href="/track-record" className="transition-colors hover:text-primary">Track Record</Link>
          <Link href="/the-math" className="transition-colors hover:text-primary">The Math</Link>
          <Link href="/founder" className="transition-colors hover:text-primary">Our Founder</Link>
        </nav>

        <div className="hidden md:flex items-center">
          <Link href="/get-started">
            <Button>Get Started</Button>
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-b bg-background">
          <div className="container flex flex-col space-y-4 py-4">
            <Link href="/who-we-are" onClick={() => setIsOpen(false)}>Who We Are</Link>
            <Link href="/what-we-build" onClick={() => setIsOpen(false)}>What We Build</Link>
            <Link href="/how-we-work" onClick={() => setIsOpen(false)}>How We Work</Link>
            <Link href="/track-record" onClick={() => setIsOpen(false)}>Track Record</Link>
            <Link href="/the-math" onClick={() => setIsOpen(false)}>The Math</Link>
            <Link href="/founder" onClick={() => setIsOpen(false)}>Our Founder</Link>
            <Link href="/get-started" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
