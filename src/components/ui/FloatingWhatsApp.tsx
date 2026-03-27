"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "51981300439";

const QUICK_REPLIES = [
  "Cotizar Servicios",
  "Monitoreos Ambientales",
  "Otro",
];

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to generate the WhatsApp API URL
  const generateWaUrl = (option: string) => {
    const text = `Hola, vengo de la página web y deseo información sobre: ${option}. Por favor, en breve responderemos su consulta.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden shadow-zinc-300/50 animate-in fade-in slide-in-from-bottom-5 duration-300 origin-bottom-right">
          
          {/* Header */}
          <div className="bg-[#25D366] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
                  A&SO
                </div>
                {/* Online Indicator */}
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#25D366] rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold leading-tight">Soporte A&SO</h4>
                <p className="text-xs text-white/80">En línea</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors focus:outline-none"
              aria-label="Cerrar chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 bg-zinc-50 border-b border-zinc-100">
            {/* Chat Bubble */}
            <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-zinc-100 text-sm text-brand-dark mb-4 leading-relaxed font-medium">
              ¡Hola! 👋 Soy el asistente virtual de A&SO. ¿Sobre qué servicio deseas consultar hoy?
            </div>
            
            {/* Quick Replies */}
            <div className="flex flex-col gap-2">
              {QUICK_REPLIES.map((option, index) => (
                <a
                  key={index}
                  href={generateWaUrl(option)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-blue/5 border border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all text-center flex items-center justify-between group shadow-sm active:scale-95"
                >
                  <span className="truncate">{index + 1}. {option}</span>
                  <MessageCircle size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-3 text-center text-[10px] text-zinc-400 font-medium">
            Respuestas protegidas por cifrado extremo a extremo
          </div>

        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-[#25D366]/40 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 z-50 group"
        aria-label="Toggle WhatsApp Chat"
      >
        {isOpen ? (
          <X size={32} className="animate-in zoom-in duration-200" />
        ) : (
          <MessageCircle size={32} strokeWidth={2.5} className="animate-in zoom-in duration-200" />
        )}
      </button>
      
    </div>
  );
}
