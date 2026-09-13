"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    description: "Für einzelne Nutzer, die loslegen wollen.",
    features: ["Bis zu 3 Workflows", "1 Nutzer", "Community Support", "Basis-Analytics"],
    highlighted: false,
  },
  {
    name: "Pro",
    monthly: 29,
    yearly: 24,
    description: "Für Teams, die skalieren wollen.",
    features: [
      "Unbegrenzte Workflows",
      "Bis zu 20 Nutzer",
      "Priority Support",
      "Erweiterte Analytics",
      "300+ Integrationen",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: 99,
    yearly: 82,
    description: "Für Unternehmen mit hohen Ansprüchen.",
    features: [
      "Alles aus Pro",
      "Unbegrenzte Nutzer",
      "SSO & SCIM",
      "Dedizierter Success Manager",
      "SLA 99,9%",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Preise
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Einfache Preise, die mitwachsen
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Starte kostenlos. Upgrade, wann immer dein Team bereit ist.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                !yearly ? "bg-white text-black" : "text-white/60"
              }`}
            >
              Monatlich
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                yearly ? "bg-white text-black" : "text-white/60"
              }`}
            >
              Jährlich
              <span className="ml-1.5 text-xs text-emerald-500">-17%</span>
            </button>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-violet-500/50 bg-gradient-to-b from-violet-500/10 to-transparent shadow-[0_0_60px_rgba(139,92,246,0.15)]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-1 text-xs font-semibold text-white">
                  Beliebteste Wahl
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-white/50">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-white">
                  €{yearly ? plan.yearly : plan.monthly}
                </span>
                <span className="text-sm text-white/45">/ Monat</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`mt-8 block rounded-full py-3 text-center text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/15 text-white hover:bg-white/5"
                }`}
              >
                {plan.monthly === 0 ? "Kostenlos starten" : "Plan wählen"}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
