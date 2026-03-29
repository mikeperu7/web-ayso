import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AYSO SAC - Ambiente & Seguridad Ocupacional | Consultoría y Asesoría",
  description: "Optimizamos tus recursos con respuestas ágiles y soluciones integrales en Gestión Ambiental, Seguridad Ocupacional y Capacitaciones en Ate, Lima.",
  openGraph: {
    title: "AYSO SAC - Tu Socio en Seguridad Ocupacional y Gestión Ambiental",
    description: "Optimizamos tus recursos con respuestas ágiles y soluciones integrales en Gestión Ambiental, Seguridad Ocupacional y Capacitaciones en Ate, Lima.",
    url: "https://web-ayso.vercel.app", // REEMPLAZAR POR TU URL FINAL SI ES OTRA
    siteName: "AYSO SAC",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AYSO SAC - Consultoría en Ambiente y Seguridad",
      },
    ],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
