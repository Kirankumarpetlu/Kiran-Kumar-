import { motion } from "framer-motion";
import { Section } from "./section";

const categories = [
  {
    title: "AI/ML & Deep Learning",
    description: "Developing advanced neural architectures, large language models, custom agent orchestration grids, and computer vision pipelines to deliver intelligent systems.",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "LLMs",
      "RAG Pipelines",
      "Fine-Tuning",
      "NLP",
      "PyTorch",
      "TensorFlow",
      "HuggingFace",
      "Python"
    ],
  },
  {
    title: "MLOps & Production Deployment",
    description: "Automating validation gates, managing containerized model serving interfaces, setting up CI/CD pipelines, and establishing secure telemetry loops.",
    items: [
      "Docker",
      "Git",
      "FastAPI",
      "Linux",
      "MLflow",
      "Kubernetes",
      "AWS ECS",
      "Vercel",
      "Model Serving"
    ],
  },
  {
    title: "Data Engineering & Cloud",
    description: "Designing scalable data warehouse pipelines, optimizing analytical queries, configuring cloud compute clusters, and managing low-latency databases.",
    items: [
      "AWS",
      "Google Cloud",
      "SQL / MySQL",
      "MongoDB",
      "Vector Databases",
      "Java",
      "JavaScript",
      "Apache Spark",
      "Airflow"
    ],
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
      {/* Three Column Responsive Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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

            <div className="relative flex flex-col h-full justify-between">
              <div>
                {/* Heading: Title in VT323 pixel font (uppercase matching Fixedsys style) */}
                <h3 className="font-sans text-2xl font-normal tracking-wide text-white text-shadow-[0_0_8px_rgba(255,255,255,0.15)] uppercase">
                  {c.title}
                </h3>

                {/* Short descriptive paragraph */}
                <p className="mt-3 text-sm text-silver-dim font-mono leading-relaxed">
                  {c.description}
                </p>
              </div>

              {/* Wrapped Skill Tag Pills list inside Card */}
              <div className="mt-8 flex flex-wrap gap-x-2 gap-y-2.5 font-mono">
                {c.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-white/10 bg-transparent px-3 py-1.5 text-xs text-silver-dim transition-all duration-300 hover:border-white/35 hover:text-white hover:-translate-y-0.5 select-none"
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
