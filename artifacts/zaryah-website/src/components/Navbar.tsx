import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import zaryahMark from "@assets/af522dd8-adc7-4119-8495-83a4d391c046_1782792991386.jpeg";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const active = (href: string) => location === href;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid #E2E8F0" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(15,23,42,0.07)" : "none",
      }}
    >
      <div className="container flex items-center h-[66px] gap-8">
        <Link href="/">
          <span className="flex items-center gap-2.5 cursor-pointer select-none shrink-0">
            <img
              src={zaryahMark}
              alt="Zaryah mark"
              className="h-8 w-auto object-contain"
            />
            <span
              className="font-bold text-[14.5px] tracking-tight"
              style={{ fontFamily: "var(--app-font-display)", color: "#0F172A", letterSpacing: "-0.01em" }}
            >
              ZARYAH TECHNOLOGIES
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5 flex-1">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span
                className="px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-150 block"
                style={{
                  color: active(href) ? "#2563EB" : "#374151",
                  background: active(href) ? "#EFF6FF" : "transparent",
                  fontFamily: "var(--app-font-sans)",
                }}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center ml-auto">
          <Link href="/contact">
            <span
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-150 shrink-0"
              style={{
                background: "#2563EB",
                color: "#fff",
                fontFamily: "var(--app-font-sans)",
                letterSpacing: "-0.01em",
                boxShadow: "0 1px 6px rgba(37,99,235,0.28), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              Book a free consult
            </span>
          </Link>
        </div>

        <button
          className="md:hidden ml-auto p-2 rounded-md transition-colors"
          style={{ color: "#374151" }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden" style={{ background: "#fff", borderTop: "1px solid #F1F5F9" }}>
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <span
                  className="block px-4 py-3 rounded-lg text-sm font-medium cursor-pointer"
                  style={{ color: active(href) ? "#2563EB" : "#374151", background: active(href) ? "#EFF6FF" : "transparent" }}
                >
                  {label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <span
                className="block mt-3 px-4 py-3 rounded-lg text-sm font-semibold text-center cursor-pointer"
                style={{ background: "#2563EB", color: "#fff" }}
              >
                Book a free consult
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
