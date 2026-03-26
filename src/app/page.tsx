import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import TrustBar from "@/components/layout/TrustBar";
import ValuePillars from "@/components/layout/ValuePillars";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <TrustBar />
        <ValuePillars />
      </main>
    </>
  );
}
