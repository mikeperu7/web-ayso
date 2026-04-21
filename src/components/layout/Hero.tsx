import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import FieldWorkCarousel from "./FieldWorkCarousel";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-background-dark scroll-mt-24">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/hero-bg.mp4"
      />
      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center self-center lg:self-start bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full text-white text-xs font-bold tracking-widest uppercase">
              Firma Top en Sostenibilidad Integral
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-heading font-bold text-white leading-[1.05] tracking-tight">
              Consultoría en <span className="text-accent">Ambiente</span> & Seguridad Ocupacional.
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-300 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed py-2">
              Llevando el estándar corporativo a otro nivel. Soluciones ágiles con rigor técnico para proteger su capital más valioso y respaldar sus operaciones empresariales.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <Link 
                href="#contacto" 
                className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded font-bold tracking-wide text-lg hover:bg-accent-hover transition-all flex items-center justify-center gap-2 group"
              >
                Agendar Evaluación Estratégica
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Complementary Section / Empty space for breathing room */}
          <div className="hidden lg:flex justify-end relative">
             {/* Retiramos el contador genérico y optamos por minimalismo o un feature sutil */}
             <div className="w-full max-w-sm rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
               <FieldWorkCarousel />
               <div className="absolute inset-0 border border-white/20 rounded-[2rem] pointer-events-none mix-blend-overlay"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
