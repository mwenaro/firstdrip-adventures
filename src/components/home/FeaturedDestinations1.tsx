"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextReveal } from "@/components/ui/text-reveal";
import { AnimatedBeam } from "../ui/animated-beam";


const featuredDestinations = [
  {
    name: "Maasai Mara",
    description: "Witness the incredible Great Migration",
    image: "/featured-tours/masai-mara-great-migration.jpg",
  },
  {
    name: "Zanzibar Archipelago",
    description: "Explore pristine beaches and rich Swahili culture",
    image: "/featured-tours/zanzibar-archipelago.jpg",
  },
  {
    name: "Serengeti National Park",
    description: "Unparalleled wildlife and breathtaking landscapes",
    image: "/featured-tours/serengeti-national-park.jpg",
  },
  {
    name: "Ngorongoro Crater",
    description: "A UNESCO World Heritage site teeming with diverse wildlife",
    image: "/featured-tours/ngorongoro-crater.jpg",
  },
  {
    name: "Amboseli National Park",
    description: "Iconic views of Mount Kilimanjaro and large elephant herds",
    image: "/featured-tours/amboseli-national-park.jpg",
  },
  {
    name: "Lake Nakuru",
    description: "Famous for its flamingo populations and diverse birdlife",
    image: "/featured-tours/lake-nakuru.jpg",
  },
];

export const FeaturedDestinations: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleNext = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % (featuredDestinations.length - 2));
  }, []);

  const handlePrev = useCallback(() => {
    setStartIndex((prev) =>
      prev === 0 ? featuredDestinations.length - 3 : prev - 1
    );
  }, []);

  useEffect(() => {
    const autoScrollInterval = setInterval(handleNext, 30000);
    return () => clearInterval(autoScrollInterval);
  }, [handleNext]);

  return (
    <div className="container mx-auto py-16 px-4 relative">
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl font-bold text-gray-900">
          <TextReveal text="Featured Destinations" />
        </h2>
        <p className="text-gray-600 mt-4">
          Discover East Africa's Most Iconic Locations
        </p>
      </div>

      <div 
        ref={containerRef}
        className="relative flex items-center justify-center z-10"
      >
        {/* Previous Button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 z-20"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Destination Cards */}
        <div className="flex space-x-6 overflow-hidden relative">
          {featuredDestinations
            .slice(startIndex, startIndex + 3)
            .map((dest, index) => (
              <Card
                key={index}
                ref={(el) => cardRefs.current[index] = el as any}
                className="w-80 hover:shadow-xl transition-all flex-shrink-0 relative overflow-hidden"
              >
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={cardRefs.current[index] as any}
                  toRef={(cardRefs.current[index + 1] || cardRefs.current[0]) as any}
                  className="absolute inset-0 z-0 opacity-30"
                  duration={3}
                />
                <Image
                  width={320}
                  height={256}
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-64 object-cover rounded-t-lg relative z-10"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="mr-2 text-blue-500" />
                    <h3 className="text-2xl font-semibold">{dest.name}</h3>
                  </div>
                  <p className="text-gray-600">{dest.description}</p>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Next Button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 z-20"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2 relative z-10">
        {featuredDestinations.slice(0, -2).map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`h-2 w-2 rounded-full ${
              index === startIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setStartIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};