import Image from 'next/image';
import { Button } from '../ui/button';


export const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-96 flex items-center justify-center">
      <Image src="/featured-tours/zanzibar-archipelago.jpg" alt="Hero Image" width={1920} height={1080} />
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Explore East Africa&apos;s Spectacular Safaris and Pristine Coastal Paradises</h1>
        <Button >Book Now</Button>
      </div>
    </section>
  );
};

