import { Leaf, HardHat, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Gestión Ambiental",
    icon: Leaf,
    items: [
      "Instrumentos de gestión (DIA, EIA, PAMA).",
      "Monitoreos Ambientales (aire, agua, ruido, suelo).",
    ]
  },
  {
    title: "Seguridad, Salud e Higiene Ocupacional",
    icon: HardHat,
    items: [
      "Implementación de Sistemas de Gestión.",
      "Monitoreos (ruido, stress térmico, iluminación, ergonomía).",
    ]
  },
  {
    title: "Representación Empresarial",
    icon: Briefcase,
    items: [
      "Soluciones prácticas orientadas a generar un justo equilibrio.",
      "Optimización de costos y beneficios en base a la normativa."
    ]
  },
  {
    title: "Capacitaciones",
    icon: GraduationCap,
    items: [
      "Orientadas a temas ambientales y de seguridad.",
      "Enfocadas en alcanzar resultados organizacionales y cultura preventiva."
    ]
  }
];

export default function ServicesCatalog() {
  return (
    <section id="servicios" className="py-24 bg-zinc-50 border-t border-zinc-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-3">
            Nuestro Catálogo
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
            Nuestros Servicios
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-xl p-8 lg:p-10 border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Decorative Bottom Border that lights up on hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-100 group-hover:bg-brand-orange transition-colors duration-300" />
                
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  
                  {/* Icon Container */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                    <Icon className="w-8 h-8 text-brand-blue" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h4>
                    <ul className="space-y-3">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" strokeWidth={2} />
                          <span className="text-brand-slate font-medium leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
