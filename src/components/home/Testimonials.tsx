// components/sections/Testimonials.tsx
import { Quote } from "lucide-react";
import { SparklesText } from "../ui/sparkles-text";

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "USA",
    text: "An incredible journey through East Africa. FirstDrip made every moment unforgettable!",
    image: "/testimonial-1.jpg"
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    text: "The wildlife safari exceeded all my expectations. Professional guides and amazing experiences.",
    image: "/testimonial-2.jpg"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">What Our Travelers Say</h2>
          
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((test, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <Quote className="text-blue-500 mb-4" />
              <p className="italic text-gray-700 mb-6">"{test.text}"</p>
              <div className="flex items-center">
                <img 
                  src={test.image} 
                  alt={test.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{test.name}</h4>
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