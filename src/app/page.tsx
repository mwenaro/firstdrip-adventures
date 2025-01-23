// app/page.tsx

import { ContactSection } from "@/components/home/ContactSection";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { HeroSection } from "@/components/home/HeroSection";
import { Testimonials } from "@/components/home/Testimonials";


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedDestinations />
      <Testimonials  />
      <ContactSection />
    </div>
  );
}