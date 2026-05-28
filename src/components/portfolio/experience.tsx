import { motion } from "framer-motion";
import { Section } from "./section";

const experienceItems = [
  {
    role: "Software Engineer Intern",
    company: "Defence Research and Development Organization (DRDO)",
    date: "Jun 2024 — jul 2024",
    location: "Hyderabad, IN",
    points: [
      "Engineered and tested secure communication modules for the MIL-STD-1553 protocol, a military standard data busused for command and control in avionics, to improve data transmission reliability.",
      "Applied hands-on experience with software development processes tailored for high-reliability aerospace and defense applications.",
      "Implemented secure communication protocol modules for aerospace systems, improving data transmission reliability.",
    ],
    tech: ["MLT-STD-1553", "JAVA", "Python"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="/ 04"
      title={
        <>
          EXPERIENCE —<br />
          <span className="text-silver-dim">Where I've Worked</span>
        </>
      }
    >
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {experienceItems.map((item, idx) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.03]"
          >
            {/* Ambient hover light glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(500px circle at 50% 0%, rgba(255,255,255,0.05), transparent 60%)",
              }}
            />

            <div className="relative flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <h3 className="font-sans text-2xl font-normal tracking-wide text-foreground group-hover:text-white transition-colors duration-300">
                  {item.role}
                </h3>
                <span
                  className={`font-mono text-sm font-bold ${item.company === "Deepsolv AI" ? "text-[#8f95f5]" : "text-white/80"}`}
                >
                  {item.company}
                </span>
                <span className="font-mono text-xs text-silver-dark font-bold ml-2">
                  // {item.location}
                </span>
              </div>
              <span className="self-start rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[10px] text-silver-dim group-hover:border-white/25 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                {item.date}
              </span>
            </div>

            {/* Bullet list of achievements */}
            <ul className="space-y-3 font-mono text-xs text-silver-dim mb-6 pl-4">
              {item.points.map((pt, pIdx) => (
                <li
                  key={pIdx}
                  className="list-disc leading-relaxed pl-1 marker:text-[#8f95f5] group-hover:text-silver transition-colors duration-300"
                >
                  {pt}
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-[#8f95f5]/10 bg-[#8f95f5]/[0.02] px-3 py-1 font-mono text-[9px] text-[#8f95f5] tracking-wider uppercase group-hover:border-[#8f95f5]/30 group-hover:bg-[#8f95f5]/[0.05] transition-all duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
