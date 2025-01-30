'use client'
import { ArrowRight,  Star,  Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button"; // shadcn button
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaqSection } from "./FaqSection";


// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 to-slate-50 text-black">
        
      {/* Navbar */}
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <div className="text-2xl font-bold">FirstDrip Adventures</div>
        <div className="flex space-x-4">
          <Link href="#packages" className="hover:text-gray-300">
            Packages
          </Link>
          <Link href="#about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="#gallery" className="hover:text-gray-300">
            Gallery
          </Link>
          <Link href="#contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative h-screen flex items-center justify-center text-center bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div variants={fadeInUp} className="relative z-10">
          <h1 className="text-6xl font-bold mb-4">Explore East Africa with FirstDrip Adventures</h1>
          <p className="text-xl mb-8">Your gateway to unforgettable safaris, pristine beaches, and cultural experiences.</p>
          <Button className="bg-white text-primary hover:bg-gray-100">
            <Link href="#packages" className="flex items-center">
              Explore Packages <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* Featured Destinations Section */}
      <motion.section
        id="destinations"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="container mx-auto px-6 py-20"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-12">
          Featured Destinations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              image: "/images/masai-mara.jpg",
              title: "Maasai Mara",
              description: "Witness the incredible Great Migration.",
            },
            {
              image: "/images/zanzibar.jpg",
              title: "Zanzibar Archipelago",
              description: "Explore pristine beaches and rich Swahili culture.",
            },
            {
              image: "/images/serengeti.jpg",
              title: "Serengeti National Park",
              description: "Unparalleled wildlife and breathtaking landscapes.",
            },
          ].map((destination, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative h-64 rounded-lg overflow-hidden"
            >
              <Image
                src={destination.image}
                alt={destination.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
                <div>
                  <h3 className="text-2xl font-bold">{destination.title}</h3>
                  <p>{destination.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="container mx-auto px-6 py-20"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-12">
          What Our Travelers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Jane Doe",
              review: "An incredible journey through East Africa. FirstDrip made every moment unforgettable.",
              rating: 5,
            },
            {
              name: "Mike Brown",
              review: "Highly recommended. A fantastic experience with amazing customer service.",
              rating: 5,
            },
            {
              name: "John Smith",
              review: "The wildlife safari exceeded all my expectations. Professional guides and amazing experiences.",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/10 p-8 rounded-lg hover:bg-white/20 transition-all"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400" />
                ))}
              </div>
              <p className="mb-4">{testimonial.review}</p>
              <p className="font-bold">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="bg-white/10 py-20"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-8">
            Contact FirstDrip Adventures
          </motion.h2>
          <motion.p variants={fadeInUp} className="mb-8">
            Reach out to us for any inquiries or to book your adventure.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col items-center space-y-4">
            <div className="flex items-center">
              <Mail size={20} className="mr-2" />
              <span>info@firstdripadventures.com</span>
            </div>
            <div className="flex items-center">
              <Phone size={20} className="mr-2" />
              <span>+254 (0) 123 456 789</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} FirstDrip Adventures. All rights reserved.</p>
      </footer>
    </div>
  );
}