import Hero from "@/components/home/Hero";
import WhyAnsiX from "@/components/home/WhyAnsiX";
import Programs from "@/components/home/Programs";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyAnsiX />
      <Programs />
      <Stats />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
