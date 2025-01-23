"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

  const handleNext = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % (featuredDestinations.length - 2));
  }, []);

  const handlePrev = useCallback(() => {
    setStartIndex((prev) =>
      prev === 0 ? featuredDestinations.length - 3 : prev - 1
    );
  }, []);

  useEffect(() => {
    // Auto-scroll every 30 seconds
    const autoScrollInterval = setInterval(handleNext, 30000);
    return () => clearInterval(autoScrollInterval);
  }, [handleNext]);

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Featured Destinations
        </h2>
        <p className="text-gray-600 mt-4">
          Discover East Africa&lsquo;s Most Iconic Locations
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Previous Button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 z-10"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Destination Cards */}
        <div className="flex space-x-6 overflow-hidden">
          {featuredDestinations
            .slice(startIndex, startIndex + 3)
            .map((dest, index) => (
              <Card
                key={index}
                className="w-80 hover:shadow-xl transition-all flex-shrink-0"
              >
                <Image
                  width={100}
                  height={100}
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-64 object-cover rounded-t-lg"
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
          className="absolute right-0 z-10"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {featuredDestinations.slice(0, -2).map((_, index) => (
          <button
            key={index}
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
