
// components/sections/ContactSection.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6">Contact FirstDrip Adventures</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <Mail className="mr-4 text-blue-500" />
              <span>info@firstdripadventures.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-4 text-blue-500" />
              <span>+254 (0) 123 456 789</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-4 text-blue-500" />
              <span>Diani Beach, Kenya</span>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input placeholder="Email Address" type="email" />
            <Textarea placeholder="Your Message" rows={5} />
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
