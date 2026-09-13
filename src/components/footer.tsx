import { Sparkles, Mail, AtSign, Globe } from "lucide-react";

const columns = [
  {
    title: "Produkt",
    links: ["Features", "Preise", "Changelog", "Roadmap"],
  },
  {
    title: "Unternehmen",
    links: ["Über uns", "Karriere", "Blog", "Presse"],
  },
  {
    title: "Ressourcen",
    links: ["Dokumentation", "API", "Community", "Support"],
  },
  {
    title: "Rechtliches",
    links: ["Datenschutz", "AGB", "Impressum"],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              Lumen
            </a>
            <p className="mt-4 max-w-xs text-sm text-white/45">
              Automatisierung und Insights für Teams, die schneller vorankommen
              wollen.
            </p>
            <div className="mt-6 flex gap-4 text-white/40">
              <a href="#" aria-label="Mail" className="hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X / Twitter" className="hover:text-white">
                <AtSign className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Webseite" className="hover:text-white">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/45 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} Lumen Inc. Alle Rechte vorbehalten.</p>
          <p>Nur ein Demo-Projekt zu Testzwecken.</p>
        </div>
      </div>
    </footer>
  );
}
