import { Leaf, HardHat, Briefcase, GraduationCap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Gestión Ambiental",
    desc: "Aseguramos tu viabilidad operativa mediante estrictos controles ambientales y de cumplimiento.",
    icon: Leaf,
    items: ["Instrumentos de gestión (DIA, EIA)", "Monitoreos de aire, agua y ruido"],
    colSpan: "lg:col-span-2",
    theme: "bg-surface-slate text-white border-none",
    iconTheme: "bg-white/10 text-accent-secondary",
    titleTheme: "text-white",
    descTheme: "text-white/70",
    itemTheme: "text-white/80"
  },
  {
    title: "Seguridad Ocupacional",
    desc: "Blindamos a tu equipo y operaciones.",
    icon: HardHat,
    items: ["Implementación SSOMA", "Monitoreos Ergonómicos"],
    colSpan: "lg:col-span-1",
    theme: "bg-white border border-border-bento text-foreground-slate",
    iconTheme: "bg-accent/10 text-accent",
    titleTheme: "text-foreground-slate",
    descTheme: "text-foreground-muted",
    itemTheme: "text-foreground-muted"
  },
  {
    title: "Capacitación Estratégica",
    desc: "Inyectamos cultura preventiva en la matriz de tu personal.",
    icon: GraduationCap,
    items: ["Entrenamientos de Alta Eficiencia", "Certificación Técnica"],
    colSpan: "lg:col-span-1",
    theme: "bg-background-master border border-border-bento text-foreground-slate",
    iconTheme: "bg-accent-secondary/10 text-accent-secondary",
    titleTheme: "text-foreground-slate",
    descTheme: "text-foreground-muted",
    itemTheme: "text-foreground-muted"
  },
  {
    title: "Representación Empresarial",
    desc: "Tu escudo técnico legal frente a reguladores.",
    icon: Briefcase,
    items: ["Soluciones Normativas", "Optimización Integral"],
    colSpan: "lg:col-span-2",
    theme: "bg-[#0A2640] text-white border-none relative overflow-hidden",
    iconTheme: "bg-white/10 text-white",
    titleTheme: "text-white",
    descTheme: "text-white/70",
    itemTheme: "text-white/80"
  }
];

export default function ServicesCatalog() {
  return (
    <section id="servicios" className="py-32 bg-background-master scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent" />
              Catálogo de Especialidad
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-foreground-slate leading-tight">
              Diseñado para un Cumplimiento de <span className="text-accent underline decoration-accent-secondary/50 underline-offset-8">Alta Eficiencia</span>.
            </h3>
          </div>
          <Link href="#contacto" className="hidden md:flex items-center gap-2 font-bold text-accent hover:text-accent-hover transition-colors group">
            Ver Todos Nuestros Servicios 
            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center group-hover:bg-accent-hover transition-colors">
               <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`group ${service.colSpan} ${service.theme} rounded-[2rem] p-8 lg:p-12 hover:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] drop-shadow-xl`}
              >
                
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${service.iconTheme}`}>
                      <Icon size={28} strokeWidth={2} />
                    </div>
                    
                    {/* Texts */}
                    <h4 className={`text-3xl font-heading font-black mb-4 ${service.titleTheme}`}>
                      {service.title}
                    </h4>
                    <p className={`text-lg font-medium leading-relaxed mb-10 ${service.descTheme}`}>
                      {service.desc}
                    </p>
                  </div>
                  
                  {/* Footer Items of the Bento Card */}
                  <ul className="space-y-3 mt-auto">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                         <span className={`font-semibold ${service.itemTheme}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
