import { useState } from "react";
import "./footer.css";

export function Footer() {
  const [petPaused, setPetPaused] = useState(false);

  return (
    <footer className="relative mt-20 border-t border-white/20 bg-white/[0.03] px-6 py-6">
      <div className="dino-track mx-auto max-w-7xl" data-paused={petPaused}>
        <div className="dino-walk">
          <button
            type="button"
            className="dino-pet"
            onClick={() => setPetPaused(!petPaused)}
            aria-label="Pause dinosaur pet"
            aria-pressed={petPaused}
            title={petPaused ? "Click to resume your dinosaur" : "Click to pause your dinosaur"}
          >
            <svg viewBox="0 0 32 32" width="64" height="64" aria-hidden="true" shapeRendering="crispEdges">
              <g fill="currentColor">
                <path d="M16 3h13v2h2v10H20v3h5v2h-3v-1h-2v5h-3v3H9v-3H6v-3H4v-3H2v-8h2v5h3v3h4v-3h3v-3h2z" />
                <path className="dino-leg dino-leg-back" d="M9 24h4v5h3v2H9z" />
                <path className="dino-leg dino-leg-front" d="M16 23h4v5h3v2h-7z" />
              </g>
              <path fill="#0c0d0e" d="M25 6h2v2h-2zM24 12h7v1h-7z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 font-mono text-[11px] text-white/80 md:flex-row md:items-center">
        <div className="flex items-center gap-2 text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.6)]" />
           @2026 Kiran Kumar Petlu. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-white/80">
          <span>© {new Date().getFullYear()}</span>
          <div className="flex h-18 w-18 items-center justify-center rounded-3xl border border-white/20 bg-white/10 shadow-[0_0_24px_rgba(255,255,255,0.18)] transition-all duration-200 hover:scale-105">
            <img src="/linux.svg" alt="Linux" className="h-14 w-14" />
          </div>
        </div>
      </div>
    </footer>
  );
}
