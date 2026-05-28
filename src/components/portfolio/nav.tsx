import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Calculate active section based on scroll position
      const sections = links.map((l) => l.href.substring(1));
      let currentSection = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = `#${section}`;
            break;
          }
        }
      }
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-background/70 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#about"
          className="flex items-center gap-2 font-sans text-2xl font-bold tracking-wider text-foreground hover:text-white transition-colors"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
          <span className="uppercase">kiran kumar</span>
          <span className="text-white font-sans font-black">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors duration-200 ${
                activeSection === l.href ? "text-white" : "text-silver-dim hover:text-white"
              }`}
            >
              {l.label}
              <span
                className={`absolute inset-x-4 -bottom-1 h-[1.5px] bg-white transition-transform duration-300 origin-left ${
                  activeSection === l.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Connect Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-md border border-white/10 bg-white/[0.02] px-5 py-2 font-mono text-xs text-silver tracking-widest transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-silver-dim font-bold">$</span> connect
              <span className="cursor-blink">▮</span>
            </span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center rounded-md border border-white/10 bg-white/[0.02] p-2 text-silver hover:border-white/20 lg:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-white/5 bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6 font-mono text-sm">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 text-xs uppercase tracking-widest transition-colors ${
                    activeSection === l.href ? "text-white" : "text-silver-dim hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex w-full justify-center rounded-md border border-white/10 bg-white/[0.02] py-3 text-center text-xs tracking-widest text-silver"
              >
                $ connect▮
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
