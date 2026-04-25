import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Trust } from "@/components/landing/Trust";
import { Ecosystem } from "@/components/landing/Ecosystem";
import { Pricing } from "@/components/landing/Pricing";
import { Platform } from "@/components/landing/Platform";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Ecosystem />
        <Pricing />
        <Platform />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
