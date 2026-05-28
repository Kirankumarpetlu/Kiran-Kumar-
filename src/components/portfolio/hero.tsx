import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const roles = ["  AI Engineer"];

export function Hero() {
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Simple pure React typewriter animation loop
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setRoleText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 35);
    } else {
      timer = setTimeout(() => {
        setRoleText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 70);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before delete
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-6 pt-24 overflow-hidden"
    >
      {/* Cinematic Glowing Background Orbs */}
      <div className="hero-orb bg-white h-[450px] w-[450px] right-[-100px] top-[-100px] opacity-[0.04]" />
      <div className="hero-orb bg-white h-[350px] w-[350px] left-[-150px] bottom-[-100px] opacity-[0.03]" />
      <div className="hero-orb bg-white h-[280px] w-[280px] left-[45%] top-[40%] opacity-[0.02] -translate-x-1/2 -translate-y-1/2" />

      <div className="mx-auto grid w-full max-w-7xl grid-flow-row-dense grid-cols-1 gap-12 lg:grid-cols-12 items-center relative z-10 lg:grid-flow-col-dense">
        {/* Left Column: Identity details (moves to second row on mobile) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[rgba(16,185,129,0.2)] bg-[rgba(16,185,129,0.04)] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#10b981]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
            Currently Open to Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="font-sans text-5xl font-bold leading-tight tracking-tight sm:text-7xl md:text-8xl lg:text-[7rem] flex flex-wrap gap-x-4 items-baseline justify-center lg:justify-start w-full"
          >
            <span className="text-foreground text-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              KIRAN
            </span>
            <span className="bg-gradient-to-b from-white via-white/80 to-white/20 bg-clip-text text-transparent">
              KUMAR<span className="text-[#8f95f5] font-sans font-black">.</span>
            </span>
          </motion.h1>

          {/* Monospace Subtitle / Typewriter Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-6 flex items-center font-mono text-sm md:text-base text-silver hover:text-white transition-colors duration-200"
          >
            <span className="text-white font-bold mr-3">{`>`}</span>
            <span className="tracking-[0.12em] uppercase text-[#8f95f5]">{roleText}</span>
            <span className="inline-block h-3.5 w-2 bg-[#8f95f5] ml-1.5 cursor-blink" />
          </motion.div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="mt-8 max-w-xl text-sm leading-relaxed text-silver-dim md:text-base font-mono"
          >
            An AI Engineer specializing in building custom LLMs, developing robust RAG pipelines,
            and designing autonomous agentic workflows to deliver production-ready intelligent
            applications.
          </motion.p>

          {/* Primary & Secondary Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-md bg-[#8f95f5] border border-[#8f95f5] px-6 py-3 font-mono text-xs uppercase tracking-widest text-[#0c0d0e] transition-all duration-300 hover:bg-[#a3a8f7] hover:border-[#a3a8f7] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(143,149,245,0.25)]"
            >
              <span className="text-[#0c0d0e]/60 font-bold">$</span> view.projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.02] px-6 py-3 font-mono text-xs uppercase tracking-widest text-silver transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:scale-[1.02]"
            >
              <span className="text-silver-dim font-bold">$</span> get.in.touch
              <span className="cursor-blink text-silver-dim">▮</span>
            </a>
          </motion.div>

          {/* Social icons row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-12 flex items-center gap-4"
          >
            {[
              { icon: "github", link: "https://github.com/Kirankumarpetlu" },
              { icon: "linkedin", link: "https://www.linkedin.com/in/kiran-kumar-petlu/" },
              { icon: "leetcode", link: "https://leetcode.com/u/KiranKumarPetlu/" },
              { icon: "email", link: "mailto:kirankumarpetlu48@gmail.com" },
            ].map((s) => (
              <a
                key={s.icon}
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.01] font-mono text-xs text-silver-dim transition-all duration-300 hover:border-white/25 hover:text-white hover:-translate-y-1 hover:bg-white/[0.03]"
                aria-label={s.icon}
              >
                {s.icon.substring(0, 2).toUpperCase()}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Perfectly circular avatar profile photo exactly matching layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="lg:col-span-5 flex justify-center items-center relative py-6 lg:py-12 order-1 lg:order-2"
        >
          <div className="relative group animate-float lg:-mt-12">
            {/* Soft backdrop purple glow */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8f95f5]/20 to-transparent blur-xl opacity-40 group-hover:opacity-75 transition duration-1000" />

            <div className="relative h-60 w-60 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full border-[3px] border-white/10 group-hover:border-[#8f95f5]/30 shadow-[0_0_40px_rgba(143,149,245,0.05),inset_0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_60px_rgba(143,149,245,0.15),inset_0_0_30px_rgba(143,149,245,0.1)] overflow-hidden bg-[#0c0d0e] transition-all duration-500 flex items-center justify-center">
              <img
                src="/profile.png"
                alt="Kiran Kumar"
                className="h-full w-full object-cover filter grayscale-[10%] contrast-[105%] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-silver-dim"
      >
        <span>scroll.telemetry</span>
        <div className="h-10 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
