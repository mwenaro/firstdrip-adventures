"use client";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <LogOutIcon className="w-8 h-8 text-blue-500" />
          <span className="ml-2 text-xl font-bold">FirstDrip Adventures</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/destinations" className="hover:text-blue-500">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/packages" className="hover:text-blue-500">
                Packages
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
