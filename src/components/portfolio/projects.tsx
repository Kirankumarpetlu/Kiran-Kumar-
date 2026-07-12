import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Section } from "./section";

const ease = [0.22, 1, 0.36, 1] as const;

type Project = {
  id: string;
  title: string;
  tagline: string;
  date?: string;
  description: string;
  details: string[];
  stack: string[];
  category: "ai" | "pipelines";
  github: string;
  live: string;
  featured: boolean;
  image?: string;
};

const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "pipelines", label: "Data Pipelines" },
];

const projects: Project[] = [
  {
    id: "01",
    title: "HIRE SMART: AI RESUME ANALYSER",
    tagline: "Multi-agent assessment & scoring engine",
    image: "/HireSmart.png",
    description:
      "Multi-agent architectural pipeline to automate resume assessment, scoring matrices, and compatibility analysis engine frameworks.",
    details: [
      "•Developed an Agentic AI framework for automated resume screening, integrating a fine-tuned LLM into a dual-matching architecture that combines vector-based semantic search with qualitative analysis.",
      "• Fine-tuned a Gemma-2B base model using LoRA and QLoRA techniques to optimize domain-specific tasks, specifically for high-accuracy proficiency inference and unstructured data extraction.",
      "• Engineered a Proficiency-Aware Inference Engine to categorize candidate skill level based on contextual project experience and tenure rather than simple keyword matching.",
      "• Orchestrated multi-turn agent execution loops using CrewAI with task dispatchers.",
      "• Engineered text-extraction and structure parser using LlamaIndex for parsing raw PDF resumes.",
      "• Designed semantic scoring metrics that evaluate candidates against exact role constraints with 94%+ correlation to human reviews.",
      "• Built a secure vector chunk memory indexing pipeline using LangChain to retrieve prompt contexts rapidly.",
    ],
    stack: ["CrewAI", "LangChain", "Python", "LoRA/QLoRA", "Vector DB", "FastAPI", "Gemma-2B"],
    category: "ai",
    github: "https://github.com/Kirankumarpetlu/Hire-Smart-/blob/main/README.md",
    live: "https://github.com/Kirankumarpetlu/Hire-Smart-/blob/main/README.md",
    featured: true,
  },
  {
    id: "02",
    title: "Alzheimer's Dementia Detection",
    tagline: "Automated Alzheimer's disease detection from MRI brain scans using a 3-layer CNN and Explainable AI.",
    date: "JUL 2026",
    image: "/alzeimers.png",
    description: "Developed a deep learning pipeline to classify MRI brain scans into three stages of Alzheimer's dementia. The model utilizes a custom 3-layer CNN trained on the OASIS-2 dataset and integrates LIME for prediction visualization.",
    details: [
      "• Built a custom 3-layer Convolutional Neural Network (CNN) using TensorFlow and Keras to classify MRI scans.",
      "• Designed the model architecture with sequential 32, 64, and 128 filter Conv2D layers, each paired with MaxPooling for spatial reduction.",
      "• Configured fully connected layers with a 128-neuron Dense layer, 0.5 Dropout for regularization, and a 3-class Softmax output.",
      "• Processed 3D NIfTI MRI scans from the OASIS-2 dataset, analyzing 373 sessions across 150 subjects.",
      "• Achieved a classification accuracy of 96.8% across three dementia stages: Non-Demented, Mildly Demented, and Demented.",
      "• Integrated Explainable AI (LIME) to provide transparent, interpretable visualizations of the model's diagnostic predictions."
    ],
    stack: [
      "Deep Learning",
      "CNN",
      "Python",
      "TensorFlow",
      "Keras",
      "LIME",
      "Computer Vision"
    ],
    category: "ai",
    github: "https://github.com/Kirankumarpetlu/Alzheimers-Dementia-Detection",
    live: "",
    featured: true,
  },
  {
    id: "03",
    title: "Agentic RAG",
    tagline: "Retrieval-Augmented Generation with Agentic AI using AutoGen",

    image: "/AgenticRag.png",
    description:
      "An Agentic RAG system uses autonomous AI agents to dynamically reason, self-correct, and multi-step search for data rather than just following a fixed retrieval path.",
    details: [
      "•Designed and deployed a complete Retrieval-Augmented Generation (RAG) pipeline using FastAPI (Python backend) and a React Frontend. The system integrates LangChain and OpenAI models for contextually accurate, natural language querying of user-uploaded PDF/TXT documents.",
      "•Built a multi-chat support system where each session maintains an independent, persistent Chroma vector database to store embeddings, ensuring robust data isolation and non-conflicting query contexts across different knowledge bases.",
      "•Developed high-performance, modular services with FastAPI for document ingestion and management (CRUD operations).",
      "•An Agentic RAG system utilizes autonomous agents to minimize LLM hallucinations through self-correction while conducting deep, multi-step research for precise answers.",
      "•system built with AutoGen and compiled using an open-source LLM",
    ],
    stack: ["AutoGen", "Python", "Vector DB", "NLP", "FastAPI", "Data Ingestion", "embeddings"],
    category: "ai",
    github: "https://github.com/Kirankumarpetlu/Agentic-RAG/blob/main/README.md",
    live: "https://agentic-rag-taupe.vercel.app/",
    featured: true,
  },
  {
    id: "04",
    title: "Llama-3-8B-Instruct_Fine_Tunning",
    tagline:
      "Custom fine-tuning of LLaMA 3 8B Instruct for enhanced instruction-following capabilities",
    date: "DEC 2025",
    image: "/finetune.webp",

    description:
      "Fine-tuned LLaMA 3 8B Instruct on a custom dataset of 100K+ instruction-response pairs using LoRA and QLoRA techniques to optimize for instruction-following tasks while maintaining parameter efficiency.",
    details: [
      "•Fine-tuned a Llama-3-8B base model using LoRA and QLoRA techniques to optimize domain-specific tasks and maximize parameter efficiency.",
      "•Engineered a custom training pipeline with specialized preprocessing to adapt the model for high-accuracy contextual understanding.",
      "•Implemented hardware-optimized training configurations to reduce memory footprint and enhance throughput during the fine-tuning process.",
      "•Evaluated post-training model performance using custom inference benchmarks to verify accuracy improvements and minimize domain-specific hallucination.",
    ],
    stack: [
      "Fine-Tuning",
      "Python",
      "Llama-3-8B-Instruct",
      "google colab",
      "LoRA/QLoRA",
      "Data Pipelines",
    ],
    category: "ai",
    github: "https://github.com/Kirankumarpetlu/Llama-3-8B-Instruct_Fine_Tunning",
    live: "https://huggingface.co/kirankumarpetlu/Fine_Tunned_LLM",
    featured: true,
  },
  {
    id: "05",
    title: "Brain Tumor Detection ",
    tagline: "Brain Tumor Detection using Resnet-18 ",
    date: "DEC 2025",
    image: "/brain.png",
    description:
      "This project focuses on detecting brain tumors from MRI scans using a deep learning model based on ResNet-18. It also applies Grad-CAM (Gradient-weighted Class Activation Mapping) to highlight the region of interest in the MRI image where the model is focusing, making the predictions more interpretable for medical professionals.",

    details: [
      "•This repository implements brain tumor detection from MRI scans using a fine-tuned ResNet-18 model in PyTorch.",
      "•It loads MRI images with ImageFolder, preprocesses them to 224x224 RGB tensors, and trains/evaluates using DataLoader.",
      "•It also applies GradCAM for explainable visualizations showing where the model focuses in each scan.",
      "•workflow reports the ResNet-18 tumor detector achieving around 90% classification accuracy during training/evaluation.",
    ],
    stack: [
      "Deep Learning",
      "Python",
      "ResNet-18",
      "google colab",
      "GradCAM",
      "Data Pipelines",
      "CNN",
      "Data Preprocessing",
    ],
    category: "ai",
    github: "http://github.com/Kirankumarpetlu/Brain-Tumor-Detection/blob/main/README.md",
    live: "http://github.com/Kirankumarpetlu/Brain-Tumor-Detection/blob/main/README.md",
    featured: true,
  },
  {
    id: "06",
    title: "Sales-Data-Analysis",
    tagline: "Sales Data Analysis using RFM",
    date: "DEC 2025",
    image: "/sales.png",
    description:
      "This project performs a comprehensive analysis of Online Retail sales data to uncover key business insights. It includes a robust data processing pipeline, RFM (Recency, Frequency, Monetary) analysis for customer segmentation, and interactive dashboards built with Streamlit, Tableau, and Power BI.",
    details: [
      "•This repository implements sales data analysis using RFM (Recency, Frequency, Monetary) techniques.",
      "•It loads sales data with pandas, preprocesses it to extract relevant features, and performs customer segmentation.",
      "•It also creates interactive dashboards using Streamlit, Tableau, and Power BI for visualizing sales trends and customer behavior.",
      "•workflow reports the RFM model achieving around 85% accuracy in customer segmentation during training/evaluation.",
    ],
    stack: [
      "Data Analysis",
      "Python",
      "RFM",
      "Streamlit",
      "Tableau",
      "Power BI",
      "Data Preprocessing",
      "EDA",
    ],
    category: "ai",
    github: "https://github.com/Kirankumarpetlu/Sales-Data-Analysis/blob/main/README.md",
    live: "https://github.com/Kirankumarpetlu/Sales-Data-Analysis/blob/main/README.md",
    featured: true,
  },
  {
    id: "07",
    title: "Multi-Lingual Ticket Classification",
    tagline: "Multi-Lingual Ticket Classification using SVM",
    date: "DEC 2025",
    image: "/SVM.png",
    description:
      "This project focuses on classifying tickets in multiple languages using a machine learning model based on SVM. It also applies various preprocessing techniques to handle the diverse linguistic characteristics of the input data.",

    details: [
      "•This repository implements multi-lingual ticket classification using a Support Vector Machine (SVM) model.",
      "•It loads and preprocesses ticket data in multiple languages, converting text to numerical features for model training.",
      "•It also applies various evaluation metrics to assess the performance of the SVM model across different languages.",
      "•Implemented a data preprocessing pipeline including TF-IDF vectorization and used SMOTE to address significant imbalance in the training data.",
      "•Designed and deployed an interactive web interface using Streamlit for real-time complaint submission and classification.",
    ],
    stack: ["Machine Learning", "Python", "Support Vector Machine", "Data Preprocessing"],
    category: "ai",
    github: "https://github.com/Kirankumarpetlu/Multilingual-Ticket-Classifer/blob/main/README.md",
    live: "https://github.com/Kirankumarpetlu/Multilingual-Ticket-Classifer/blob/main/README.md",
    featured: true,
  },
  {
    id: "08",
    title: "SKYNET – Document Intelligence",
    tagline: "Enterprise AI platform automating document ingestion, risk analysis, and CRM synchronization.",
    image: "/skynet.png",
    description: "Developed an enterprise-grade AI Document Intelligence Platform that automates multi-format document ingestion, clause extraction, anomaly detection, and cross-document comparison through an intelligent, real-time processing pipeline.",
    details: [
      "• Engineered a real-time multi-stage processing pipeline using FastAPI and Python, automating OCR, document classification, and entity/clause extraction.",
      "• Implemented intelligent risk analysis and cross-document comparison to automatically detect legal inconsistencies, missing clauses, and financial anomalies.",
      "• Integrated an AI Document Assistant leveraging the Groq API, enabling users to query, summarize, and interact with uploaded documents using natural language.",
      "• Built a responsive frontend with React 19, TypeScript, and Tailwind CSS, featuring live pipeline progress via WebSockets and automated CRM synchronization with Notion."
    ],
    stack: [
      "LLM's",
      "React ",
      "FastAPI",
      "Python",
      "Groq API",
      "Supabase",
      "OCR"
    ],
    category: "ai",
    github: "https://github.com/Kirankumarpetlu/skynet",
    live: "https://skynet-n2mz.vercel.app/projects",
    featured: true,
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <Section
      id="projects"
      eyebrow="projects / 03"
      title={
        <>
          Things I've Built
          <br />
          <span className="text-silver-dim text-2xl font-normal block mt-2">
            A selection of projects spanning full-stack apps, AI/ML, and generative AI.
          </span>
        </>
      }
    >
      {/* Category filters */}
      <div className="mb-10 flex flex-wrap gap-2 border-b border-white/5 pb-6 justify-start">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveTab(c.id)}
            className={`rounded-md px-5 py-2 font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${activeTab === c.id
              ? "bg-white text-background font-bold shadow-[0_0_12px_rgba(255,255,255,0.15)]"
              : "border border-white/10 text-silver-dim hover:border-white/20 hover:text-white"
              }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid of project cards */}
      <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: ease }}
              key={p.id}
              onClick={() => setSelectedProject(p)}
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.03] hover:translate-y-[-4px] cursor-pointer"
            >
              {/* Card visual header */}
              <div className="relative h-44 overflow-hidden border-b border-white/5">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover object-center opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <ProjectPreview seed={i} />
                )}
                <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-silver-dim drop-shadow-md">
                  proj.{p.id}
                </div>

                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(400px circle at 50% 50%, rgba(255,255,255,0.06), transparent 60%)",
                  }}
                />
              </div>

              {/* Card info body */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-sans text-2xl font-normal tracking-wide text-foreground group-hover:text-white transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] text-silver-dim uppercase tracking-wider">
                      {p.tagline}
                    </p>
                  </div>
                  <span className="font-mono text-silver-dim group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px]">
                    ↗
                  </span>
                </div>

                <p className="mt-4 font-mono text-xs leading-relaxed text-silver-dim min-h-[72px] group-hover:text-silver transition-colors duration-300">
                  {p.description}
                </p>

                {/* Card footer stack & details link */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1 font-mono text-[9px] text-silver-dim">
                    {p.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="rounded border border-white/5 bg-white/[0.01] px-2 py-0.5"
                      >
                        {s}
                      </span>
                    ))}
                    {p.stack.length > 3 && (
                      <span className="px-1 text-silver-dark font-bold">+{p.stack.length - 3}</span>
                    )}
                  </div>
                  <span className="font-mono text-[10px] text-white/60 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all">
                    read.more →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Detail Modal Disclosure Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-background/85 backdrop-blur-md"
            />

            {/* Modal Contents */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: ease }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-secondary p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.02] text-silver-dim hover:border-white/20 hover:text-white transition-all"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="font-mono text-[10px] uppercase tracking-widest text-silver-dim mb-2">
                PROJECT METRIC // PROJ.{selectedProject.id}
              </div>

              <h3 className="font-sans text-3xl font-normal tracking-wide text-white leading-tight">
                {selectedProject.title}
              </h3>

              <div className="mt-1 flex flex-wrap gap-4 font-mono text-[11px] text-silver-dim">
                <span>{selectedProject.tagline}</span>
              </div>

              <div className="my-6 h-px w-full bg-white/5" />

              {/* Description */}
              <p className="font-mono text-sm leading-relaxed text-silver">
                {selectedProject.description}
              </p>

              {/* Bullet details */}
              <div className="mt-6">
                <div className="font-mono text-[11px] uppercase tracking-widest text-white/80 font-bold mb-3">
                  SYSTEM DETAILS & METRICS:
                </div>
                <ul className="space-y-3 font-mono text-xs text-silver-dim">
                  {selectedProject.details.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-white/60 font-bold mt-0.5">▶</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack & tags */}
              <div className="mt-8">
                <div className="font-mono text-[11px] uppercase tracking-widest text-white/80 font-bold mb-3">
                  TECHNOLOGY INDEX:
                </div>
                <div className="flex flex-wrap gap-2 font-mono text-[10px] text-white">
                  {selectedProject.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 my-4 h-px w-full bg-white/5" />

              {/* Comms link */}
              <div className="flex flex-wrap justify-between items-center gap-4 pt-2">
                <div className="flex gap-4 font-mono text-xs">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-silver hover:text-white transition-all underline underline-offset-4 decoration-white/10 hover:decoration-white"
                  >
                    <span>$ cat source_code</span>
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-silver hover:text-white transition-all underline underline-offset-4 decoration-white/10 hover:decoration-white"
                  >
                    <span>$ live_preview</span>
                  </a>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-md border border-white/10 bg-white/[0.01] px-5 py-2 font-mono text-xs uppercase tracking-widest text-silver-dim hover:border-white/20 hover:text-white transition-all"
                >
                  close.details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function ProjectPreview({ seed }: { seed: number }) {
  // procedural neural-net-style canvas-like nodes per card
  const nodes = Array.from({ length: 14 }, (_, i) => {
    const x = 8 + ((i * 73 + seed * 31) % 84);
    const y = 12 + ((i * 47 + seed * 19) % 72);
    return { x, y };
  });
  return (
    <div className="relative h-full w-full bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.06),transparent_60%)]">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => {
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d > 35) return null;
            return (
              <line
                key={`${i}-${j}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="0.2"
              />
            );
          }),
        )}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="0.6" fill="rgba(255,255,255,0.7)">
            <animate
              attributeName="r"
              values="0.5;0.9;0.5"
              dur={`${3 + (i % 4)}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}
