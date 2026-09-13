const logos = [
  "Northwind",
  "Initech",
  "Globex",
  "Umbrella",
  "Hooli",
  "Stark Industries",
  "Wayne Ent.",
  "Soylent",
];

export default function Marquee() {
  const items = [...logos, ...logos];
  return (
    <section className="relative border-y border-white/5 bg-white/[0.02] py-10">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-white/40">
        Vertraut von über 2.000 Teams weltweit
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05050a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05050a] to-transparent" />
        <div className="flex w-max animate-marquee gap-16">
          {items.map((logo, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center text-xl font-semibold text-white/30 grayscale transition-colors hover:text-white/60"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
