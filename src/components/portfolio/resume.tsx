import { Section } from "./section";

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="dossier / 05"
      title={
        <>
          The full record —<br />
          <span className="text-silver-dim">one document, signed and dated.</span>
        </>
      }
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl md:p-14">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(800px circle at 80% 0%, rgba(255,255,255,0.08), transparent 60%)",
          }}
        />
        <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-silver-dim">
              resume.pdf — v2026.05
            </div>
            <h3 className="mt-4 text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              Engineering history,
              <br />
              in a single transmission.
            </h3>
            <p className="mt-6 max-w-md text-silver-dim">
              Roles, systems, and outcomes — distilled. Reach out if you want the long version.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/file/d/12hmYMa4XpQuK8oXCsmx-7kbus-rUliqT/view
                "
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-background transition-all hover:bg-white/90"
              >
                <span className="font-mono text-[11px] text-background/60">$</span>
                download.resume
                <span className="transition-transform group-hover:translate-y-0.5">↓</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.02] px-5 py-3 text-sm text-silver transition-all hover:border-white/40"
              >
                request.long.form →
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent" />
            <div className="relative rounded-2xl border border-white/10 bg-background/70 p-6 font-mono text-[11px] leading-relaxed text-silver-dim">
              <div className="text-silver">$ cat resume.txt</div>
              <div className="mt-3 space-y-1">
                <div>
                  <span className="text-silver">name</span> = "Kiran Kumar"
                </div>
                <div>
                  <span className="text-silver">role</span> = "AI Engineer"
                </div>
                <div>
                  <span className="text-silver">focus</span> = ["agentic-pipelines", "rag-systems",
                  "fullstack-ai"]
                </div>
                <div>
                  <span className="text-silver">based</span> = "Hyderabad, India / Remote"
                </div>
                <div>
                  <span className="text-silver">status</span> = "active / open to select work"
                </div>
                <div className="text-foreground">✓ ready to transmit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
