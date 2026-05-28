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
                { label: "GH", icon: <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>, link: "https://github.com/Kirankumarpetlu" },
                { label: "LI", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>, link: "https://www.linkedin.com/in/kiran-kumar-petlu/" },
                { label: "LC", icon: <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>, link: "https://leetcode.com/u/KiranKumarPetlu/" },
                { label: "EM", icon: <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>, link: "mailto:kirankumarpetlu48@gmail.com" }
              ].map((soc) => (
                <a
                  key={soc.label}
                  href={soc.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.01] text-xs text-silver-dim transition-all hover:border-white/20 hover:text-white hover:-translate-y-0.5 hover:bg-white/[0.03]"
                >
                  {soc.icon ? soc.icon : soc.label}
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
