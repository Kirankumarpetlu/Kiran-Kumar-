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
      className="relative flex min-h-screen lg:h-screen items-center justify-center px-6 pt-28 pb-12 lg:py-0 overflow-hidden"
    >
      {/* Cinematic Glowing Background Orbs */}
      <div className="hero-orb bg-white h-[450px] w-[450px] right-[-100px] top-[-100px] opacity-[0.04]" />
      <div className="hero-orb bg-white h-[350px] w-[350px] left-[-150px] bottom-[-100px] opacity-[0.03]" />
      <div className="hero-orb bg-white h-[280px] w-[280px] left-[45%] top-[40%] opacity-[0.02] -translate-x-1/2 -translate-y-1/2" />

      <div className="mx-auto flex flex-col-reverse lg:flex-row w-full max-w-7xl gap-12 lg:gap-8 items-center justify-start relative z-10">
        {/* Left Column: Identity details (moves to second row on mobile) */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left lg:translate-x-12">
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
              href="https://drive.google.com/file/d/1SCXOrxmcbtRCAFgCRbraTcHmKG_0OBa4/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-md bg-[#8f95f5] border border-[#8f95f5] px-6 py-3 font-mono text-xs uppercase tracking-widest text-[#0c0d0e] transition-all duration-300 hover:bg-[#a3a8f7] hover:border-[#a3a8f7] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(143,149,245,0.25)]"
            >
              <span className="text-[#0c0d0e]/60 font-bold">$</span> view.resume
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
                {s.icon === "github" ? <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                : s.icon === "linkedin" ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
                : s.icon === "leetcode" ? <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                : s.icon === "email" ? <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                : s.icon.substring(0, 2).toUpperCase()}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Perfectly circular avatar profile photo exactly matching layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="flex-1 flex justify-center items-center relative py-6 lg:py-0"
        >
          <div className="relative group animate-float">
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
    </section>
  );
}
