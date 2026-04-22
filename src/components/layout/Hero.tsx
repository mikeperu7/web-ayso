import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full h-[100vh] flex flex-col justify-center overflow-hidden bg-surface-slate scroll-mt-24">
      
      {/* Video Inmersivo Absoluto (Artlist Style) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/hero-bg.mp4"
      />
      
      {/* Cinescopic Overlays para forzar jerarquía visual */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent z-10" />

      {/* Hero Title Floating Center */}
      <div className="relative z-20 flex-1 flex flex-col justify-center items-center px-4 w-full h-full text-center mt-12">
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-black text-foreground-light leading-[1.05] tracking-tight drop-shadow-2xl">
          Consultoría en <span className="text-accent-secondary drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">Ambiente</span> & <br className="hidden md:block" />
          Seguridad Ocupacional.
        </h1>
        
        <p className="mt-8 text-xl md:text-2xl text-foreground-light/90 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Estándares tecnológicos mundiales aplicados al rigor de su cumplimiento corporativo.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link 
            href="#contacto" 
            className="w-full sm:w-auto bg-accent text-white px-10 py-5 rounded-full font-bold tracking-wide text-lg hover:bg-accent-hover hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-xl shadow-accent/30 group"
          >
            Agendar Evaluación
          </Link>
          <Link 
            href="#servicios" 
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold tracking-wide text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center gap-2 group"
          >
            Explorar Servicios <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Floating Glassmorphism Data Bar en el 'suelo' de la pantalla */}
      <div className="relative z-30 w-full px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-5xl mx-auto backdrop-blur-2xl bg-[#0F172A]/70 border border-white/10 rounded-[2rem] p-6 flex flex-col md:flex-row items-center justify-around gap-8 drop-shadow-2xl">
           <div className="text-center">
             <div className="text-3xl font-heading font-black text-white">ISO</div>
             <div className="text-xs text-foreground-light/70 uppercase tracking-widest font-bold mt-1">Estatus Normativo</div>
           </div>
           <div className="hidden md:block w-px h-12 bg-white/10" />
           <div className="text-center">
             <div className="text-3xl font-heading font-black text-accent-secondary">0</div>
             <div className="text-xs text-foreground-light/70 uppercase tracking-widest font-bold mt-1">Brechas Legales</div>
           </div>
           <div className="hidden md:block w-px h-12 bg-white/10" />
           <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
               <FileText className="text-white" size={20} />
             </div>
             <div className="text-left">
               <div className="text-sm font-bold text-white">Resolución INMEDIATA</div>
               <div className="text-xs text-foreground-light/70 font-medium">Informes Ejecutivos</div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
