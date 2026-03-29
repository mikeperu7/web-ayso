import Image from "next/image";

export default function TrustBar() {
  const clients = [
    { name: "Ransa", src: "/clientes_optimizado/ransa.webp" },
    { name: "Contrans", src: "/clientes_optimizado/contrans.webp" },
    { name: "Atento", src: "/clientes_optimizado/atento.webp" },
    { name: "Laive", src: "/clientes_optimizado/laive.webp" },
    { name: "Access World", src: "/clientes_optimizado/access world.webp" },
    { name: "Resemin", src: "/clientes_optimizado/resemin.webp" },
    { name: "Arcor", src: "/clientes_optimizado/arcor.webp" },
    { name: "Carvimsa", src: "/clientes_optimizado/carvimsa.webp" },
    { name: "Medlog", src: "/clientes_optimizado/medlog.webp" },
    { name: "Pandora", src: "/clientes_optimizado/pandora.webp" },
    { name: "SLA", src: "/clientes_optimizado/sla.webp" },
    { name: "Torre Blanca", src: "/clientes_optimizado/torre blanca.webp" },
    { name: "Unión", src: "/clientes_optimizado/union.webp" },
    { name: "Unión Editorial", src: "/clientes_optimizado/union editorial.webp" },
  ];

  return (
    <section id="proyectos" className="bg-zinc-50 border-y border-zinc-100 py-10 overflow-hidden flex flex-col items-center scroll-mt-24">
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

        <div className="flex animate-marquee items-center group-hover:[animation-play-state:paused] whitespace-nowrap">
          {/* We map multiple times to ensure the loop never breaks on wide screens */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div key={index} className="mx-8 md:mx-12 shrink-0 flex justify-center items-center h-[60px]">
              <Image
                src={client.src}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
