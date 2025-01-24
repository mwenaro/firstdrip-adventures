import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane Doe",
    location: "USA",
    text: "An incredible journey through East Africa. FirstDrip made every moment unforgettable!",
    image: "/testimonials/jane.webp"
  },
  {
    name: "John Smith",
    location: "Singapore",
    text: "The wildlife safari exceeded all my expectations. Professional guides and amazing experiences.",
    image: "/testimonials/john.webp"
  },
  {
    name: "Alice Brown",
    location: "Singapore",
    text: "Highly recommend! A fantastic experience with amazing customer service",
    image: "/testimonials/alice.webp"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 relative overflow-hidden">
      {/* Optional Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl transform -translate-x-20 -translate-y-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-300 rounded-full opacity-20 blur-3xl transform translate-x-20 translate-y-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 mt-2">
            Real stories from our adventurers around the world.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            >
              {/* Quote Icon */}
              <Quote className="text-blue-500 w-10 h-10 mb-4" />
              {/* Testimonial Text */}
              <p className="italic text-gray-700 text-lg mb-6 leading-relaxed">
                &quot;{test.text}&quot;
              </p>
              {/* Author Section */}
              <div className="flex items-center">
                {/* Avatar */}
                <Image
                  width={1024}
                  height={1024}
                  src={test.image}
                  alt={test.name}
                  className="w-16 h-16 rounded-full border-2 border-blue-500 shadow-lg object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{test.name}</h4>
                  <p className="text-gray-500">{test.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
