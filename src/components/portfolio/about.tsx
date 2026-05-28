import { Section } from "./section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="about / 01"
      title={
        <>
          Engineering autonomous AI systems
          <br />
          <span className="text-silver-dim">at the bleeding edge of agency.</span>
        </>
      }
    >
      <div className="flex justify-center w-full">
        <div className="max-w-3xl w-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.03] relative overflow-hidden group">
          {/* Ambient hover light glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(500px circle at 50% 0%, rgba(255,255,255,0.05), transparent 60%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-sm md:text-base leading-relaxed text-center text-silver font-mono">
            <div className="mb-4">
              <span className="font-mono text-xs text-[#8f95f5] font-bold">// identity.log</span>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-silver">
              I build and ship end-to-end intelligent automation pipelines — from LLM/agent
              pipelines and RAG backends to data analytics architectures.
            </p>
            <p className="text-silver-dim">
              My core engineering focus is on building robust autonomous intelligence systems:
              configuring structured fine-tuning weights adapter networks, deploying multi-agent
              CrewAI state execution routers, LangChain retrieval vectors context, and building
              cloud computing schedulers.
            </p>
            <p className="text-silver-dim">
              Dedicated to replacing heuristic bottlenecks with scalable probabilistic strategies
              and predictive compute calculations to optimize logistic grids and secure active
              vector deployment paths.
            </p>

            <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap justify-center gap-2">
              {[
                "python",
                "generative ai",
                "fine-tuning",
                "agentic frameworks",
                "langchain",
                "crewai",
                "data analytics",
                "cloud infrastructure",
                "cybersecurity",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-[#8f95f5]/10 bg-[#8f95f5]/[0.02] px-3 py-1 font-mono text-[9px] text-[#8f95f5] tracking-wider uppercase group-hover:border-[#8f95f5]/30 group-hover:bg-[#8f95f5]/[0.05] transition-all duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
