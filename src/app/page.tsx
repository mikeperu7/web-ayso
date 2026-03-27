import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import TrustBar from "@/components/layout/TrustBar";
import ValuePillars from "@/components/layout/ValuePillars";
import ServicesCatalog from "@/components/layout/ServicesCatalog";
import ContactSection from "@/components/layout/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar />
      <main className="flex min-h-screen flex-col overflow-x-hidden">
        <Hero />
        <TrustBar />
        <ValuePillars />
        <ServicesCatalog />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
