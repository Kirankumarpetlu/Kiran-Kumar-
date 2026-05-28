import { useState } from "react";
import { Section } from "./section";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const handshakeSteps = [
    "SYNCHRONIZING TENSOR CONTEXT ROUTING LAYER...",
    "VALIDATING SECURE COMPLIANCE CHANNELS...",
    "DELIVERING PAYLOAD CHUNKS SECURE COMMS...",
    "ESTABLISHED SECURE HANDSHAKE. RESPONSE 200 SUCCESS.",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTransmitting(true);
    setTransmitted(false);
    setLogs([]);

    let stepIdx = 0;
    const runLogs = async () => {
      if (stepIdx < handshakeSteps.length) {
        setLogs((prev) => [...prev, `> ${handshakeSteps[stepIdx]}`]);
        stepIdx++;
        setTimeout(runLogs, 450);
      } else {
        // Send the actual email securely via FormSubmit
        try {
          await fetch("https://formsubmit.co/ajax/kirankumarpetlu48@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              message: msg,
            }),
          });
        } catch (error) {
          console.error("Transmission failed:", error);
        }

        setIsTransmitting(false);
        setTransmitted(true);
        setName("");
        setEmail("");
        setMsg("");
      }
    };
    setTimeout(runLogs, 150);
  };

  return (
    <Section
      id="contact"
      eyebrow="connection / 05"
      title={
        <>
          contact —<br />
          <span className="text-silver-dim">Let's Work Together</span>
          <span className="text-silver-dim text-2xl font-normal block mt-2">
            Have a project idea or opportunity? I'd love to hear from you.
          </span>
        </>
      }
    >
      <div className="mx-auto max-w-5xl grid grid-cols-1 gap-10 lg:grid-cols-12 font-mono">
        {/* Left Column: Contact info */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.01] p-8 backdrop-blur-xl">
          <div className="space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-silver-dim">
                email.channel
              </span>
              <a
                href="mailto:kirankumarpetlu48@gmail.com"
                className="mt-2 block text-lg text-foreground hover:text-white transition-colors underline underline-offset-4 decoration-white/10 hover:decoration-white"
              >
                kirankumarpetlu48@gmail.com
              </a>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-silver-dim">
                geocentre
              </span>
              <span className="mt-2 block text-lg text-foreground">Hyderabad, India</span>
            </div>

            <div className="h-px w-10 bg-white/10" />
          </div>

          <div className="mt-10 pt-6 border-t border-white/5 space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-silver-dim">
              active.links
            </span>
            <div className="flex gap-3">
              {[
                { label: "GH", link: "https://github.com/Kirankumarpetlu" },
                { label: "LI", link: "https://www.linkedin.com/in/kiran-kumar-petlu/" },
                { label: "LC", link: "https://leetcode.com/u/KiranKumarPetlu/" },
              ].map((soc) => (
                <a
                  key={soc.label}
                  href={soc.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.01] text-xs text-silver-dim transition-all hover:border-white/20 hover:text-white hover:-translate-y-0.5 hover:bg-white/[0.03]"
                >
                  {soc.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sleek form panel */}
        <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[10px] uppercase tracking-widest text-silver-dim"
              >
                &gt; Name:
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=""
                className="rounded-md border border-white/10 bg-white/[0.01] px-4 py-3 text-xs text-foreground outline-none transition-all focus:border-white/25 focus:bg-white/[0.03]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[10px] uppercase tracking-widest text-silver-dim"
              >
                &gt; Email:
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className="rounded-md border border-white/10 bg-white/[0.01] px-4 py-3 text-xs text-foreground outline-none transition-all focus:border-white/25 focus:bg-white/[0.03]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[10px] uppercase tracking-widest text-silver-dim"
              >
                &gt; Message :
              </label>
              <textarea
                id="message"
                required
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder=" "
                rows={4}
                className="rounded-md border border-white/10 bg-white/[0.01] px-4 py-3 text-xs text-foreground outline-none transition-all focus:border-white/25 focus:bg-white/[0.03] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isTransmitting}
              className="group inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-6 py-3 text-xs uppercase tracking-widest text-silver transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:scale-[1.02] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isTransmitting ? "TRANSMITTING..." : "[TRANSMIT_]"}</span>
            </button>
          </form>

          {/* Comms logging interface */}
          {isTransmitting && (
            <div className="mt-6 rounded-lg border border-white/10 bg-background/80 p-4 font-mono text-[10px] text-silver-dim">
              <div className="font-bold text-white mb-2 uppercase animate-pulse"></div>
              <div className="space-y-1">
                {logs.map((log, i) => (
                  <div key={i} className="leading-relaxed">
                    {log}
                  </div>
                ))}
              </div>
              <div className="mt-4 h-1 w-full bg-white/5 overflow-hidden rounded">
                <div
                  className="h-full bg-white animate-pulse"
                  style={{ width: `${(logs.length / handshakeSteps.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {transmitted && (
            <div className="mt-6 rounded-lg border border-white/10 bg-background/80 p-4 font-mono text-[10px] text-white">
              <span className="text-white font-bold">[SUCCESS]</span>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
