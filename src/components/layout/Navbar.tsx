"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Nosotros", href: "#" },
  { name: "Servicios", href: "#" },
  { name: "Proyectos", href: "#" },
  { name: "Contacto", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-zinc-100">
      {/* Top Bar */}
      <div className="hidden sm:flex w-full bg-brand-dark px-6 py-2 justify-between items-center text-white text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone size={14} className="text-brand-orange" />
            <span>(51) 725 0059</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={14} className="text-brand-orange" />
            <span>proyectos@ayso.com.pe</span>
          </div>
        </div>
        <div className="font-semibold italic">Ambiente & Seguridad Ocupacional</div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-black italic tracking-tighter text-brand-blue leading-none">A&SO</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-slate">Consultoría & Asesoría</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-slate hover:text-brand-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="bg-brand-blue text-white px-6 py-2.5 rounded-sm text-sm font-bold tracking-wide hover:bg-brand-blue/90 transition-all shadow-md active:scale-95"
            >
              Solicitar Cotización
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-slate hover:text-brand-blue focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-100 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-brand-slate hover:bg-zinc-50 hover:text-brand-blue rounded-md transition-all"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Link
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-brand-blue text-white text-center px-6 py-3 rounded-sm text-sm font-bold tracking-wide shadow-lg"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
