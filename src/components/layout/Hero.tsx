import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import FieldWorkCarousel from "./FieldWorkCarousel";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background-light scroll-mt-24 pt-20">
      {/* Luz Ambientadora Sutil */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center self-center lg:self-start bg-white border border-border-light px-5 py-2 rounded-full text-foreground-muted text-xs font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-secondary mr-2 animate-pulse" />
              Firma Top en Sostenibilidad Integral
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-heading font-black text-foreground-light leading-[1.05] tracking-tight">
              Consultoría en <br/>
              <span className="text-accent">Ambiente</span> & <br/>
              Seguridad Ocupacional.
            </h1>
            
            <p className="text-lg md:text-xl text-foreground-muted font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed py-2">
              Llevando el estándar corporativo a otro nivel. Soluciones ágiles con rigor técnico para proteger su capital más valioso y respaldar sus operaciones empresariales.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <Link 
                href="#contacto" 
                className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-xl font-bold tracking-wide text-lg hover:bg-accent-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20 group"
              >
                Agendar Evaluación Estratégica
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Side - Visual Elegido (Carousel) */}
          <div className="hidden lg:flex justify-end relative">
             <div className="w-full max-w-md rounded-[2.5rem] overflow-hidden border-8 border-white shadow-[0_20px_50px_rgb(15,76,129,0.1)] relative transform rotate-1 hover:rotate-0 transition-transform duration-500 ease-out">
               <FieldWorkCarousel />
               <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-black/5 pointer-events-none"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
