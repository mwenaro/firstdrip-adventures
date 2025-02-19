"use client"; // Required for Framer Motion and useState in Next.js 14

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react"; // Icons for close, prev, next

const images = [
    { src: "/featured-tours/lake-nakuru.jpg", alt: "Lion in the wild" },
    { src: "/featured-tours/amboseli-national-park.jpg", alt: "Elephants in the savannah" },
    { src: "/featured-tours/lake-nakuru.jpg", alt: "Giraffes at sunset" },
    { src: "/featured-tours/masai-mara-great-migration.jpg", alt: "Zebras grazing" },
    { src: "/featured-tours/serengeti-national-park.jpg", alt: "Cheetah running" },
    { src: "/featured-tours/zanzibar-baech.jpg", alt: "Hippos in the river" },
    { src: "/featured-tours/lake-nakuru.jpg", alt: "Lion in the wild" },
    { src: "/featured-tours/amboseli-national-park.jpg", alt: "Elephants in the savannah" },
    { src: "/featured-tours/lake-nakuru.jpg", alt: "Giraffes at sunset" },
    { src: "/featured-tours/masai-mara-great-migration.jpg", alt: "Zebras grazing" },
    { src: "/featured-tours/serengeti-national-park.jpg", alt: "Cheetah running" },
    { src: "/featured-tours/zanzibar-baech.jpg", alt: "Hippos in the river" },
    { src: "/featured-tours/lake-nakuru.jpg", alt: "Lion in the wild" },
    { src: "/featured-tours/amboseli-national-park.jpg", alt: "Elephants in the savannah" },
    { src: "/featured-tours/lake-nakuru.jpg", alt: "Giraffes at sunset" },
    { src: "/featured-tours/masai-mara-great-migration.jpg", alt: "Zebras grazing" },
    { src: "/featured-tours/serengeti-national-park.jpg", alt: "Cheetah running" },
    { src: "/featured-tours/zanzibar-baech.jpg", alt: "Hippos in the river" },
    { src: "/featured-tours/lake-nakuru.jpg", alt: "Lion in the wild" },
    { src: "/featured-tours/amboseli-national-park.jpg", alt: "Elephants in the savannah" },
    { src: "/featured-tours/lake-nakuru.jpg", alt: "Giraffes at sunset" },
    { src: "/featured-tours/masai-mara-great-migration.jpg", alt: "Zebras grazing" },
    { src: "/featured-tours/serengeti-national-park.jpg", alt: "Cheetah running" },
    { src: "/featured-tours/zanzibar-baech.jpg", alt: "Hippos in the river" },
    { src: "/featured-tours/lake-nakuru.jpg", alt: "Lion in the wild" },
    { src: "/featured-tours/amboseli-national-park.jpg", alt: "Elephants in the savannah" },
    { src: "/featured-tours/lake-nakuru.jpg", alt: "Giraffes at sunset" },
    { src: "/featured-tours/masai-mara-great-migration.jpg", alt: "Zebras grazing" },
    { src: "/featured-tours/serengeti-national-park.jpg", alt: "Cheetah running" },
    { src: "/featured-tours/zanzibar-baech.jpg", alt: "Hippos in the river" },
  ];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = () => {
    setSelectedImage((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );
  };

  const handlePrev = () => {
    setSelectedImage((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        East African Safari Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px, auto)]">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            style={{
              gridRowEnd: "span 2", // Default row span (can be adjusted dynamically if needed)
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setSelectedImage(index)}
          >
            {/* Image with Automatic Dimensions */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
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

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-4 p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Next Button */}
            <button
              className="absolute right-4 p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all"
              onClick={handleNext}
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Selected Image */}
            <motion.div
              className="relative w-full h-full max-w-4xl max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}