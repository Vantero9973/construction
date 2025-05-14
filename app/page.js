import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-zinc-900 pb-16">
        <Services />
        <Portfolio />
        <Testimonials />
      </div>
    </div>
  );
}
