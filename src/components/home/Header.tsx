"use client";

import { MAIN_NAV_LINKS } from "@/data/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Header = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <header className="bg-blue-900 text-white fixed w-full z-50 left-0 top-0">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-blue-400"
        >
          First Drip Adventures
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {MAIN_NAV_LINKS
            .filter((link) => !link.isCTA)
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-blue-400 ${
                  pathname === link.href ? "text-blue-300 font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
        </nav>

        {/* Call-to-Action Button */}
        {MAIN_NAV_LINKS
          .filter((link) => link.isCTA)
          .map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hidden md:inline-block px-4 py-2 rounded transition ${
                pathname === link.href
                  ? "bg-blue-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => toggleMobileMenu()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobileMenu" className="hidden bg-blue-800 text-white">
        <nav className="flex flex-col space-y-4 py-4 px-6">
          {MAIN_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                link.isCTA
                  ? `px-4 py-2 rounded transition ${
                      pathname === link.href
                        ? "bg-blue-600"
                        : "bg-blue-500 hover:bg-blue-600"
                    }`
                  : `hover:text-blue-400 ${
                      pathname === link.href ? "text-blue-300 font-semibold" : ""
                    }`
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

// Mobile Menu Toggle Logic
const toggleMobileMenu = () => {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
};
