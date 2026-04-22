import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-light text-foreground-muted pt-16 pb-8 border-t border-border-light relative overflow-hidden">
      {/* Decorative Accent Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent to-accent-secondary opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <div className="font-heading font-black text-3xl tracking-tighter text-foreground-light mr-2 inline-block">AYSO</div>
            </Link>
            <p className="text-sm font-medium max-w-sm leading-relaxed text-foreground-muted/90">
              Firma especialista en ingeniería y servicios ambientales. Nuestra consultoría optimiza sus recursos con agilidad y rigor corporativo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground-light font-bold text-lg mb-6 tracking-wide font-heading">Servicios</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#servicios" className="text-sm font-medium hover:text-accent transition-colors">
                  Gestión Ambiental
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-sm font-medium hover:text-accent transition-colors">
                  Seguridad Ocupacional
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-sm font-medium hover:text-accent transition-colors">
                  Auditorías
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-sm font-medium hover:text-accent transition-colors">
                  Estrategia ESG
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact (Digital First) */}
          <div>
            <h4 className="text-foreground-light font-bold text-lg mb-6 tracking-wide font-heading">Hablemos</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#contacto" className="text-sm font-medium hover:text-accent transition-colors">
                  Agendar Llamada
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-sm font-medium hover:text-accent transition-colors">
                  Soporte WhatsApp
                </Link>
              </li>
              <li>
                <a href="mailto:estrategia@ayso.com.pe" className="text-sm font-medium hover:text-accent transition-colors">
                  consultoria@ayso.com.pe
                </a>
              </li>
              <li className="pt-4">
                <Link 
                  href="/intranet" 
                  prefetch={false} 
                  className="text-xs font-bold text-accent hover:text-accent-hover transition-colors flex items-center gap-1 uppercase tracking-wider"
                >
                  Acceso Corporativo &rarr;
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-foreground-muted/80">
          <p>
            Copyright &copy; {currentYear} A&SO (Ambiente & Seguridad Ocupacional S.A.C.). Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">Aviso Legal</Link>
            <Link href="#" className="hover:text-accent transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
