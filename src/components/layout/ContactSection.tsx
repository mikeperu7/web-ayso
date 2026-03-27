import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-white relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50 pointer-events-none skew-x-12 translate-x-1/4 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center md:text-left mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-3">
            Trabajemos Juntos
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight max-w-2xl">
            ¿Listo para optimizar la gestión de tu empresa?
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info */}
          <div className="flex flex-col space-y-10">
            <p className="text-brand-slate text-lg font-medium">
              Contáctanos hoy para recibir asesoría especializada. Responderemos a la brevedad con soluciones a medida para tu industria.
            </p>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-dark mb-1">Visítanos</h4>
                  <p className="text-brand-slate font-medium leading-relaxed">
                    Cal. 6 N° 153 Dpto. 201 APV.<br />
                    Las Praderas de Pariachi.<br />
                    Ate - Lima
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <Phone className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-dark mb-1">Llámanos</h4>
                  <p className="text-brand-slate font-medium leading-relaxed">
                    RPC: 965 351 379<br />
                    ENTEL: 977 538 318<br />
                    T: (51) 725 0059
                  </p>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <Mail className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-dark mb-1">Escríbenos</h4>
                  <p className="text-brand-slate font-medium leading-relaxed">
                    proyectos@ayso.com.pe<br />
                    consultora.ayso@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-xl shadow-zinc-200/50">
            <h4 className="text-xl font-bold text-brand-dark mb-6">Envíanos un mensaje</h4>
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-slate mb-1">
                    Nombre Completo
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-4 py-3 rounded-md bg-zinc-50 border border-zinc-200 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-brand-slate mb-1">
                    Empresa
                  </label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="AcmeCorp SAC"
                    className="w-full px-4 py-3 rounded-md bg-zinc-50 border border-zinc-200 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-slate mb-1">
                    Correo Electrónico
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="juan@empresa.com"
                    className="w-full px-4 py-3 rounded-md bg-zinc-50 border border-zinc-200 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-slate mb-1">
                    Mensaje o Requerimiento
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="¿En qué te podemos ayudar?"
                    className="w-full px-4 py-3 rounded-md bg-zinc-50 border border-zinc-200 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors resize-none"
                  ></textarea>
                </div>
              </div>
              <button 
                type="button"
                className="w-full bg-brand-orange text-white py-4 rounded-md font-bold tracking-wide shadow-md hover:bg-brand-orange/90 transition-all flex items-center justify-center gap-2 group"
              >
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
