"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-violet-600/30 blur-3xl animate-blob" />
        <div className="absolute right-[5%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute left-[5%] bottom-[-10%] h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-violet-400" />
          Jetzt neu: KI-Workflow-Builder 2.0
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
        >
          Booste deinen{" "}
          <span className="animate-gradient-x bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            gesamten Workflow
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-balance text-lg text-white/60 sm:text-xl"
        >
          Lumen verbindet deine Tools, automatisiert Routineaufgaben und gibt
          dir in Echtzeit die Insights, die dein Team wirklich braucht.
          Ohne Code, in Minuten eingerichtet.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-medium text-black shadow-[0_0_40px_rgba(167,139,250,0.45)] transition-shadow hover:shadow-[0_0_60px_rgba(167,139,250,0.65)]"
          >
            Kostenlos starten
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-base font-medium text-white/80 backdrop-blur transition-colors hover:bg-white/5 hover:text-white"
          >
            <Play className="h-4 w-4" />
            Demo ansehen
          </motion.a>
        </motion.div>

        <motion.p variants={item} className="mt-6 text-sm text-white/40">
          Keine Kreditkarte nötig · 14 Tage kostenlos testen
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-6 rounded-full border border-white/20 p-1"
        >
          <div className="h-2 w-1 rounded-full bg-white/50 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
