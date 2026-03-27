import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AYSO SAC - Ambiente & Seguridad Ocupacional",
  description: "Consultoría y Asesoría en Ambiente & Seguridad Ocupacional. Optimizamos tus recursos con respuestas ágiles y especializadas.",
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
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
