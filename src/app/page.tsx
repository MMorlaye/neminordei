import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedDishes } from "@/components/sections/FeaturedDishes";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedDishes />
        <WhyChooseUs />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
