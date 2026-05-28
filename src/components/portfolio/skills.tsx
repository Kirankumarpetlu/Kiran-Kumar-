import { motion } from "framer-motion";
import { Section } from "./section";

const categories = [
  {
    title: "AI / ML",
    code: "cognitive.core",
    items: [
      "Machine Learning",
      "EDA",
      "Deep Learning",
      "Generative AI",
      "Large Language Models",
      "RAG Pipelines",
      "Fine-Tuning",
      "Agentic AI",
      "NLP",
    ],
  },
  {
    title: "FRAMEWORKS",
    code: "frameworks.run",
    items: [
      "FastAPI",
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "LangGraph",
      "AutoGen",
      "CrewAI",
      "Streamlit",
      "React",
    ],
  },
  {
    title: "LANGUAGES & DBS",
    code: "lang.analytics",
    items: ["Python", "Java", "JavaScript", "HTML / CSS", "MySQL", "MongoDB", "Vector DB"],
  },
  {
    title: "CLOUD & TOOLS",
    code: "cloud.security",
    items: ["AWS", "Docker", "Git", "Linux", "Google Colab", "Jupyter", "HuggingFace"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="capabilities / 02"
      title={
        <>
          SKILLS —<br />
          <span className="text-silver-dim">Tech I Work With</span>
        </>
      }
    >
      {/* Categorized Skills Cards Grid replicating user attachment */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {categories.map((c, idx) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: idx * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.01] p-7 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.02]"
          >
            {/* Ambient hover glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(500px circle at 50% 0%, rgba(255,255,255,0.04), transparent 60%)",
              }}
            />

            <div className="relative">
              {/* Header: Title in VT323 pixel font (uppercase matching Fixedsys style) */}
              <h3 className="font-sans text-2xl font-normal tracking-wide text-white text-shadow-[0_0_8px_rgba(255,255,255,0.15)]">
                {c.title}
              </h3>

              {/* Wrapped Skill Tag Pills list inside Card */}
              <div className="mt-6 flex flex-wrap gap-x-2.5 gap-y-3 font-mono">
                {c.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-md border border-white/5 bg-white/[0.02] px-4 py-2 text-xs text-silver-dim transition-all duration-300 hover:border-white/20 hover:text-white hover:-translate-y-0.5 select-none"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
