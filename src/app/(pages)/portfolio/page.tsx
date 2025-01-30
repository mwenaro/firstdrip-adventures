"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Moon,
  Sun,
  Menu,
  X,
  Send,
} from "lucide-react";
import Link from "next/link";

const NavLink = ({ href, children }: any) => (
  <a
    href={href}
    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-4 py-2"
  >
    {children}
  </a>
);

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="#home" className="text-xl font-bold">
              Mwero
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {[
                "home",
                "about",
                "skills",
                "experience",
                "projects",
                "testimonials",
                "contact",
              ].map((section) => (
                <NavLink
                  key={section}
                  href={`#${section}`}
                  className={activeSection === section ? "text-blue-600" : ""}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </NavLink>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="ml-4"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {[
                "home",
                "about",
                "skills",
                "experience",
                "projects",
                "testimonials",
                "contact",
              ].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <div
          className={`bg-gradient-to-r ${
            isDarkMode
              ? "from-blue-900 to-blue-700"
              : "from-blue-600 to-blue-800"
          } text-white py-32`}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 animate-fadeIn">
              Mwero Abdalla
            </h1>
            <h2 className="text-2xl mb-8 animate-fadeIn delay-100">
              Full-Stack Developer
            </h2>
            <div className="flex justify-center gap-4 animate-fadeIn delay-200">
              <Button
                asChild
                variant="outline"
                className="text-white border-white hover:bg-white/20"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-white border-white hover:bg-white/20"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Dynamic Full-Stack Developer with extensive experience in
                    front-end and back-end development. Passionate about
                    building efficient, scalable, and user-focused applications
                    while fostering collaboration and innovation in
                    cross-functional teams.
                  </p>
                  <div className="flex gap-4">
                    {[
                      {
                        icon: <Phone className="w-5 h-5" />,
                        text: "+254 792 982 134",
                      },
                      {
                        icon: <Mail className="w-5 h-5" />,
                        text: "mweroabdalla@gmail.com",
                      },
                      {
                        icon: <MapPin className="w-5 h-5" />,
                        text: "Mombasa, Kenya",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold">BSc in Biochemistry</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Karatina University | 2012 – 2016
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Languages</h3>
                    <div className="flex gap-4">
                      <Badge>English (Fluent)</Badge>
                      <Badge>Swahili (Fluent)</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Frontend",
                skills: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "HTML/CSS",
                  "Tailwind CSS",
                ],
              },
              {
                category: "Backend",
                skills: ["Node.js", "Express", "PHP", "Laravel", "REST APIs"],
              },
              {
                category: "Database",
                skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
              },
              {
                category: "DevOps",
                skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
              },
              {
                category: "Tools & Methods",
                skills: ["Agile", "Scrum", "Jest", "Webpack", "Vite"],
              },
            ].map((skillSet, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {skillSet.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2">Message</label>
                  <textarea
                    className="w-full p-2 border rounded h-32 dark:bg-gray-800 dark:border-gray-700"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mwero Abdalla</h3>
              <p className="text-gray-400">
                Full-Stack Developer based in Mombasa, Kenya
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                {["About", "Projects", "Skills", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/mwenaro"
                  className="text-gray-400 hover:text-white"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mwero-the-webmaker/"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Mwero Abdalla. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
