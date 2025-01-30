// components/Hero.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-purple-900 text-white py-20">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-6">
            Providing Best Education For Brighter Future
          </h1>
          <p className="text-lg mb-8">
            Transform your future with our comprehensive educational programs
          </p>
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
            Get Started
          </Button>
        </div>
        <div className="hidden lg:block">
          <Image
            width={100}
            height={100}
            src="/api/placeholder/500/500"
            alt="Student learning"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
