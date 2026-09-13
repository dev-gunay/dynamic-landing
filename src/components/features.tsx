"use client";

import { motion, type Variants } from "framer-motion";
import {
  Zap,
  ChartColumn,
  ShieldCheck,
  Workflow,
  Puzzle,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Blitzschnelle Automatisierung",
    description:
      "Erstelle komplexe Workflows per Drag & Drop und lass Lumen wiederkehrende Aufgaben in Sekunden erledigen.",
  },
  {
    icon: ChartColumn,
    title: "Echtzeit-Analytics",
    description:
      "Behalte jede Metrik im Blick, mit Live-Dashboards, die sich automatisch an dein Team anpassen.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Sicherheit",
    description:
      "SOC2-konform, Ende-zu-Ende verschlüsselt und mit granularen Rollen für jedes Teammitglied.",
  },
  {
    icon: Workflow,
    title: "300+ Integrationen",
    description:
      "Verbinde Slack, Notion, Salesforce & Co. in wenigen Klicks — keine Entwickler nötig.",
  },
  {
    icon: Puzzle,
    title: "Individuell erweiterbar",
    description:
      "Baue eigene Bausteine mit unserer offenen API und passe Lumen exakt an deinen Prozess an.",
  },
  {
    icon: Clock,
    title: "Spart 12h pro Woche",
    description:
      "Unsere Kunden gewinnen im Schnitt über einen ganzen Arbeitstag pro Woche zurück.",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Features
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Alles was dein Team braucht, an einem Ort
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Von der ersten Automatisierung bis zum unternehmensweiten Rollout
            — Lumen wächst mit dir mit.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-violet-500/40"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-500/0 via-transparent to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-violet-500/10 group-hover:to-cyan-500/10" />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
