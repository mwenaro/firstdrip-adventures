'use client'
import { ArrowRight, MapPin, Globe, Hotel, Plane, Star, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button"; // shadcn button
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary text-white">
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
        className="container mx-auto px-6 py-20 text-center"
      >
        <motion.h1 variants={fadeInUp} className="text-6xl font-bold mb-4">
          Explore the Best of East Africa
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-xl mb-8">
          Discover breathtaking landscapes, pristine beaches, and unforgettable
          adventures with FirstDrip Adventures.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Button className="bg-white text-primary hover:bg-gray-100">
            <Link href="#packages" className="flex items-center">
              View Packages <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* Packages Section */}
      <motion.section
        id="packages"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="container mx-auto px-6 py-20"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-12">
          Our Packages
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <MapPin size={40} />,
              title: "Beach Getaways",
              description: "Relax on the white sand beaches of Diani.",
            },
            {
              icon: <Globe size={40} />,
              title: "Safari Adventures",
              description: "Explore Kenya's iconic national parks.",
            },
            {
              icon: <Hotel size={40} />,
              title: "Hotel & Flight Booking",
              description: "We handle all your travel arrangements.",
            },
          ].map((packageItem, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/10 p-8 rounded-lg text-center hover:bg-white/20 transition-all"
            >
              <div className="flex justify-center mb-4">{packageItem.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{packageItem.title}</h3>
              <p>{packageItem.description}</p>
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
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "John Doe",
              review: "FirstDrip Adventures made our safari unforgettable! Highly recommended.",
              rating: 5,
            },
            {
              name: "Jane Smith",
              review: "The beach getaway was pure bliss. Thank you for the amazing experience!",
              rating: 5,
            },
            {
              name: "Mike Johnson",
              review: "Professional guides and seamless arrangements. Will book again!",
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

      {/* Gallery Section */}
      <motion.section
        id="gallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="container mx-auto px-6 py-20"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-12">
          Gallery
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "/images/gallery1.jpg",
            "/images/gallery2.jpg",
            "/images/gallery3.jpg",
            "/images/gallery4.jpg",
            "/images/gallery5.jpg",
            "/images/gallery6.jpg",
          ].map((image, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative h-64 rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="bg-white/10 py-20"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-8">
            Ready for an Adventure?
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Button className="bg-white text-primary hover:bg-gray-100">
              <Link href="#contact" className="flex items-center">
                Book Now <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section
        id="faqs"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="container mx-auto px-6 py-20"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-12">
          FAQs
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          {[
            {
              question: "What destinations do you cover?",
              answer: "We cover all major East African destinations, including Kenya, Tanzania, and Uganda.",
            },
            {
              question: "Are your guides certified?",
              answer: "Yes, all our guides are highly qualified and experienced.",
            },
            {
              question: "Can you customize packages?",
              answer: "Absolutely! We tailor packages to suit your preferences.",
            },
          ].map((faq, index) => (
            <motion.div key={index} variants={fadeInUp} className="mb-6">
              <div className="flex items-center mb-2">
                <Check size={20} className="mr-2" />
                <h3 className="text-xl font-bold">{faq.question}</h3>
              </div>
              <p>{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="bg-white/10 py-20"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-8">
            Stay Updated
          </motion.h2>
          <motion.p variants={fadeInUp} className="mb-8">
            Subscribe to our newsletter for the latest offers and updates.
          </motion.p>
          <motion.form variants={fadeInUp} className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-l-lg bg-white/10 placeholder-white/50"
            />
            <Button type="submit" className="bg-white text-primary rounded-l-none">
              <Mail size={20} />
            </Button>
          </motion.form>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} FirstDrip Adventures. All rights reserved.</p>
      </footer>
    </div>
  );
}