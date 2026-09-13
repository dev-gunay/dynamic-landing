"use client";

import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lumen hat unsere Onboarding-Zeit von zwei Wochen auf zwei Tage reduziert. Der Workflow-Builder ist ein Gamechanger.",
    name: "Mara Weiss",
    role: "COO, Northwind",
  },
  {
    quote:
      "Wir haben endlich einen echten Überblick über alle Prozesse. Das Team liebt die Automatisierungen.",
    name: "Jonas Keller",
    role: "Head of Ops, Initech",
  },
  {
    quote:
      "Setup in unter einer Stunde, seitdem sparen wir jede Woche massiv Zeit bei Reportings.",
    name: "Elena Fischer",
    role: "Gründerin, Soylent Labs",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Kundenstimmen
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Teams, die schneller geworden sind
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              whileHover={{ y: -8 }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition-colors hover:border-white/20"
            >
              <div>
                <div className="mb-4 flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-white/75 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-semibold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-white/45">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
