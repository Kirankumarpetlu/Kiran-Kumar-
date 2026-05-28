import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-silver-dim">
              <span className="h-px w-8 bg-white/30" />
              {eyebrow}
            </div>
            <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              {title}
            </h2>
          </div>
          <div className="hidden font-mono text-[10px] text-silver-dim md:block">
            // {id.padStart(2, "0")}
          </div>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
