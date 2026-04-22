import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AYSO SAC - Ambiente & Seguridad Ocupacional | Consultoría Premium",
  description: "Firma especialista en Gestión Ambiental, Seguridad Ocupacional y Capacitaciones en Lima.",
  openGraph: {
    title: "AYSO SAC - Especialistas en Seguridad y Ambiente",
    description: "Firma especialista en Gestión Ambiental, Seguridad Ocupacional y Capacitaciones en Lima.",
    url: "https://web-ayso.vercel.app",
    siteName: "AYSO SAC",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AYSO SAC - Consultoría Premium",
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
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden bg-background-light text-foreground-light">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
