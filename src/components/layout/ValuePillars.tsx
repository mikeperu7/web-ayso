import { TrendingUp, UserCheck, Zap, ShieldCheck } from "lucide-react";

const pillars = [
  {
    title: "Optimización",
    description: "Buscamos optimizar los recursos de nuestros clientes.",
    icon: TrendingUp,
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
  },
  {
    title: "Especialización",
    description: "Contamos con especialistas para cada sector productivo y asistencia legal.",
    icon: UserCheck,
    color: "text-brand-orange",
    bgColor: "bg-brand-orange/10",
  },
  {
    title: "Agilidad",
    description: "Brindamos un servicio competente, confiable y ágil.",
    icon: Zap,
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
  },
  {
    title: "Respaldo",
    description: "Socios estratégicos con la debida acreditación e inscripción en los distintos sectores.",
    icon: ShieldCheck,
    color: "text-brand-orange",
    bgColor: "bg-brand-orange/10",
  },
];

export default function ValuePillars() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-3">
            Por qué elegirnos
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
            Pilares de nuestro servicio corporativo
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 border border-zinc-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${pillar.bgColor}`}>
                  <Icon className={`w-7 h-7 ${pillar.color}`} strokeWidth={2} />
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-4">{pillar.title}</h4>
                <p className="text-brand-slate font-medium leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
