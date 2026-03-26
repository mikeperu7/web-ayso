import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        {/* Placeholder for future sections */}
        <section className="bg-brand-dark py-20 text-center">
          <p className="text-white/50 text-sm tracking-widest uppercase font-bold">Continuará con Clientes y Servicios...</p>
        </section>
      </main>
    </>
  );
}
