"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-cyan-500/20 px-8 py-20 text-center"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl animate-blob" />
          </div>

          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Bereit, deinen Workflow zu automatisieren?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
            Schließe dich über 2.000 Teams an, die mit Lumen jede Woche
            Stunden sparen. Kostenlos starten, kein Risiko.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="#"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black shadow-[0_0_50px_rgba(255,255,255,0.35)] transition-shadow hover:shadow-[0_0_70px_rgba(255,255,255,0.55)]"
            >
              Kostenlos starten
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white/80 hover:bg-white/5 hover:text-white"
            >
              Preise ansehen
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
