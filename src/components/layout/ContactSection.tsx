"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error HTTP de servidor al procesar el mensaje.");
      }

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.error || "Error al enviar el mensaje.");
      }
      
      // Preparar URL dinámica de WhatsApp
      const waNumber = "51981300439";
      const waText = `Hola A&SO, soy ${formData.name}${formData.company ? ` de ${formData.company}` : ''}. Acabo de dejar un requerimiento en su web: ${formData.message}`;
      setWhatsappUrl(`https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`);

      setIsSuccess(true);
      setFormData({ name: "", company: "", email: "", message: "" }); // Clear form
      
      // Nota: Hemos retirado el timeout de 5 segundos para que el usuario pueda interactuar con el botón de WhatsApp temporalmente indefinido.

    } catch (error: any) {
      console.error("Error al enviar el formulario:", error);
      setErrorMsg("No pudimos enviar tu mensaje. Por favor revisa tu conexión o intenta mediante WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white relative scroll-mt-24">
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

          {/* Right Column: Contact Form / Dynamic Success UI */}
          <div className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-xl shadow-zinc-200/50">
            <h4 className="text-xl font-bold text-brand-dark mb-6">Envíanos un mensaje</h4>
            
            {isSuccess ? (
              <div className="bg-brand-green/5 border border-brand-green/20 p-8 rounded-xl flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-16 h-16 bg-brand-green/20 text-brand-green rounded-full flex items-center justify-center">
                  <CheckCircle2 size={36} strokeWidth={2} />
                </div>
                <div>
                  <h5 className="font-extrabold text-2xl text-brand-dark mb-3">¡Requerimiento recibido!</h5>
                  <p className="text-brand-slate font-medium leading-relaxed">
                    Hemos guardado tus datos y te contactaremos por correo. Si deseas atención inmediata, haz clic abajo para enviarnos un WhatsApp directo al equipo de A&SO.
                  </p>
                </div>
                <div className="w-full pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white py-4 px-6 rounded-md font-bold tracking-wide shadow-lg shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                    Enviar WhatsApp a Soporte
                  </a>
                </div>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-sm font-semibold text-brand-slate hover:text-brand-blue underline underline-offset-4 transition-colors mt-2"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-brand-slate mb-1">
                      Nombre Completo <span className="text-brand-orange">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 rounded-md bg-zinc-50 border border-zinc-200 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors disabled:opacity-50"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-brand-slate mb-1">
                      Empresa
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="AcmeCorp SAC"
                      className="w-full px-4 py-3 rounded-md bg-zinc-50 border border-zinc-200 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors disabled:opacity-50"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-slate mb-1">
                      Correo Electrónico <span className="text-brand-orange">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="juan@empresa.com"
                      className="w-full px-4 py-3 rounded-md bg-zinc-50 border border-zinc-200 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors disabled:opacity-50"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-brand-slate mb-1">
                      Mensaje o Requerimiento <span className="text-brand-orange">*</span>
                    </label>
                    <textarea 
                      id="message" 
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="¿En qué te podemos ayudar?"
                      className="w-full px-4 py-3 rounded-md bg-zinc-50 border border-zinc-200 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors resize-none disabled:opacity-50"
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                </div>

                {errorMsg && (
                  <div className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-md border border-red-100">
                    {errorMsg}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-orange text-white py-4 rounded-md font-bold tracking-wide shadow-md hover:bg-brand-orange/90 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
