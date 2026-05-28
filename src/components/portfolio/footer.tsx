export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-white/[0.03] px-6 py-6">
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
