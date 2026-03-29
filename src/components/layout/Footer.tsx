import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white/80 pt-16 pb-8 border-t-4 border-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/logo-ayso-blanco.png" 
                alt="A&SO Logo" 
                width={160} 
                height={55} 
                className="object-contain mb-2" 
              />
            </Link>
            <p className="text-sm text-zinc-400 font-medium max-w-sm leading-relaxed">
              Consultora ambiental experta en ingeniería y servicios ambientales. Optimizamos recursos con competencia, confiabilidad y agilidad para el éxito de su proyecto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Servicios</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#servicios" className="text-sm font-medium hover:text-brand-orange transition-colors">
                  Gestión Ambiental
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-sm font-medium hover:text-brand-orange transition-colors">
                  Seguridad Ocupacional
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-sm font-medium hover:text-brand-orange transition-colors">
                  Monitoreos
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-sm font-medium hover:text-brand-orange transition-colors">
                  Capacitaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Internal */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Empresa</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#nosotros" className="text-sm font-medium hover:text-brand-orange transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#proyectos" className="text-sm font-medium hover:text-brand-orange transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-sm font-medium hover:text-brand-orange transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link 
                  href="/intranet" 
                  prefetch={false} 
                  title="Próximamente" 
                  className="text-sm font-medium text-brand-orange hover:text-white transition-colors flex items-center gap-1"
                >
                  Acceso Empleados &rarr;
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-500">
          <p>
            Copyright &copy; {currentYear} A&SO (Ambiente & Seguridad Ocupacional S.A.C.). Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link>
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
