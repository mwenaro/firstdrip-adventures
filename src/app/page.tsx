// app/page.tsx

import { ContactSection } from "@/components/home/ContactSection";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { HeroSection } from "@/components/home/HeroSection";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/home/Footer";


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedDestinations />
      <Testimonials  />
      <ContactSection />
      <Footer />
    </div>
  );
}