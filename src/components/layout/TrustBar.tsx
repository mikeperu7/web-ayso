export default function TrustBar() {
  const clients = [
    "Ransa",
    "Contrans",
    "Grupo Transmeridian",
    "Torre Blanca",
    "Atento",
    "Laive",
    "Access World",
    "Resemin",
    "Productos Unión",
    "Arcor",
    "SLA Automotrices",
    "Meolog",
    "Pandora",
    "Carvimsa",
    "Grupo Comeca",
  ];

  return (
    <section className="bg-zinc-50 border-y border-zinc-100 py-10 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-sm font-semibold tracking-widest text-brand-slate uppercase">
          Empresas que confían en nosotros
        </p>
      </div>

      {/* Marquee Container */}
      <div className="w-full relative flex overflow-x-hidden group">
        {/* Gradient overlays for smooth entry/exit effect */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10" />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {/* We map twice to create an infinite loop effect */}
          {[...clients, ...clients].map((client, index) => (
            <span
              key={index}
              className="mx-8 md:mx-12 text-zinc-400 font-bold uppercase tracking-wider text-xl lg:text-3xl opacity-60 hover:opacity-100 hover:text-brand-blue transition-all cursor-default select-none"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
