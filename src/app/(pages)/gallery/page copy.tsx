"use client"; // Required for Framer Motion in Next.js 14

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/featured-tours/lake-nakuru.jpg", alt: "Lion in the wild" },
  { src: "/featured-tours/amboseli-national-park.jpg", alt: "Elephants in the savannah" },
  { src: "/featured-tours/lake-nakuru.jpg", alt: "Giraffes at sunset" },
  { src: "/featured-tours/masai-mara-great-migration.jpg", alt: "Zebras grazing" },
  { src: "/featured-tours/serengeti-national-park.jpg", alt: "Cheetah running" },
  { src: "/featured-tours/zanzibar-baech.jpg", alt: "Hippos in the river" },
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        East African Safari Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-square"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill // Automatically fills the container
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-all duration-300">
                {image.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}