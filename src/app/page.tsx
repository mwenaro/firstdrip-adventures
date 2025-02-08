// app/page.tsx

import { ContactSection } from "@/components/home/ContactSection";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { HeroSection } from "@/components/home/HeroSection";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/home/Footer";
import { TourPackageList } from "@/components/packages/TourPackageList";


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedDestinations />
      <section className="w-full bg-gray-50 ">
        <div className="flex items-center justify-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Tour Packages
          </h2>
          
        </div>
        <TourPackageList />

      </section>
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}