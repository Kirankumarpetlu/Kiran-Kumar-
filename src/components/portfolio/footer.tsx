export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 font-mono text-[11px] text-silver-dim md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.6)]" />
           @2026 Kiran Kumar Petlu. All rights reserved.
        </div>
        <div>© {new Date().getFullYear()} · built in the forge</div>
      </div>
    </footer>
  );
}
