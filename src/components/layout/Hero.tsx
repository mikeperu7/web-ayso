import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center self-center lg:self-start bg-brand-blue/10 px-4 py-1.5 rounded-full text-brand-blue text-sm font-bold tracking-tight">
              Cumplimiento Normativo & Sostenibilidad
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-[1.1] tracking-tight">
              Consultoría y Asesoría en <span className="text-brand-blue">Ambiente</span> & <span className="text-brand-orange text-shadow-sm">Seguridad Ocupacional</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-brand-slate font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed italic border-l-4 border-brand-green pl-6 py-2">
              "El éxito es hacer más por la naturaleza, de lo que ella hace por ti."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <Link 
                href="#contacto" 
                className="w-full sm:w-auto bg-brand-orange text-white px-8 py-4 rounded-sm font-bold tracking-wide text-lg shadow-xl hover:bg-brand-orange/90 transition-all flex items-center justify-center gap-2 group shadow-brand-orange/20"
              >
                Solicitar Cotización
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="#" 
                className="w-full sm:w-auto border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-sm font-bold tracking-wide text-lg hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Descargar Brochure
              </Link>
            </div>
          </div>

          {/* Visual Element / Placeholder for Team Photo */}
          <div className="hidden lg:block relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/40 to-transparent mix-blend-overlay z-10" />
              <div className="absolute inset-0 bg-zinc-800 animate-pulse group-hover:hidden" />
              {/* Note: User will replace with real team photo */}
              <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-bold bg-zinc-100 flex-col gap-4">
                 <div className="w-16 h-1 bg-brand-orange" />
                 <span>FOTO EQUIPO TÉCNICO EN CAMPO</span>
                 <div className="w-16 h-1 bg-brand-green" />
              </div>
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-2xl border-l-8 border-brand-orange z-20 max-w-[200px]">
              <div className="text-brand-orange font-black text-3xl leading-none">0</div>
              <div className="text-brand-dark font-bold text-sm uppercase leading-tight mt-1">Accidentes Laborales Reportados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
