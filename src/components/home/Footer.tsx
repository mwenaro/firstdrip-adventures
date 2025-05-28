'use client'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">FirstDrip Adventures</h3>
            <p className="text-gray-400 mb-4">
              Discover East Africa&apos;s hidden treasures with our expertly curated safaris and custom travel experiences.
            </p>
            <p className="text-sm text-gray-500">Your journey begins with us.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/packages" className="hover:text-blue-400">
                  Explore Packages
                </Link>
              </li>
              <li>
                <Link href="/custom-trip" className="hover:text-blue-400">
                  Plan a Custom Trip
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-blue-400">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-2" />
                <Link href="mailto:info@firstdripadventures.co.ke" className="hover:text-blue-400">
                  info@firstdripadventures.co.ke
                </Link>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-2" />
                <Link href="tel:+254123456789" className="hover:text-blue-400">
                  +254 (0) 123 456 789
                </Link>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-400 mr-2" />
                <span>Diani Beach, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex justify-between items-center flex-wrap">
            {/* Social Media */}
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <Instagram className="w-6 h-6" />
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500 mt-4 md:mt-0">
              © {new Date().getFullYear()} FirstDrip Adventures. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
