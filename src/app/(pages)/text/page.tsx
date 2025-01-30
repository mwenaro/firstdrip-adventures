import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { BookOpen, Users, Target, CheckCircle, GraduationCap } from "lucide-react";

// Hero Section Component
const HeroSection = () => (
  <section className="text-center py-20 bg-purple-700 text-white">
    <h1 className="text-4xl font-bold">
      Providing Best Education For Brighter Future
    </h1>
    <p className="mt-4">
      Empowering learners with knowledge, skills, and values to become
      competent, responsible, and innovative leaders of tomorrow.
    </p>
    <Button className="mt-6">Get Started</Button>
    <Image
      width={100}
      height={100}
      src="/images/hero-image.jpg"
      alt="Hero"
      className="mt-6 mx-auto rounded-lg shadow-lg"
    />
  </section>
);

// Why Choose Us Component
const WhyChooseUs = () => (
  <section className="py-16 text-center">
    <h2 className="text-3xl font-bold">
      Why Students Choose Us for Gaining Knowledge!
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="p-6 border rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Practical Knowledge</h3>
        <p>90% hands-on learning experience.</p>
        <Image
          width={100}
          height={100}
          src="/images/practical-knowledge.jpg"
          alt="Practical Knowledge"
          className="mt-4 rounded-lg"
        />
      </div>
      <div className="p-6 border rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Overall Knowledge</h3>
        <p>85% comprehensive curriculum.</p>
        <Image
          width={100}
          height={100}
          src="/images/overall-knowledge.jpg"
          alt="Overall Knowledge"
          className="mt-4 rounded-lg"
        />
      </div>
    </div>
  </section>
);

// Course Categories Component
const CourseCategories = () => (
  <section className="py-16 text-center">
    <h2 className="text-3xl font-bold">Our Best Categories</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {[
        "Engineering",
        "IT & Software",
        "Chemistry",
        "Management",
        "Literature",
      ].map((category) => (
        <div key={category} className="p-6 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">{category}</h3>
          <Image
            width={100}
            height={100}
            src={`/images/${category.toLowerCase().replace(/ /g, "-")}.jpg`}
            alt={category}
            className="mt-4 rounded-lg"
          />
        </div>
      ))}
    </div>
  </section>
);

// Featured Courses Component
const FeaturedCourses = () => (
  <section className="py-16 text-center">
    <h2 className="text-3xl font-bold">Most Featured Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {[
        {
          title: "Advanced Management Study",
          instructor: "Dr. Samra John",
          image: "management-study",
        },
        {
          title: "Engineer’s Goal & Managing Course",
          instructor: "Alex White",
          image: "engineers-goal",
        },
        {
          title: "Advanced Technology & Architecture",
          instructor: "George Mills",
          image: "technology-architecture",
        },
      ].map((course) => (
        <div key={course.title} className="p-6 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">{course.title}</h3>
          <p>By: {course.instructor}</p>
          <Image
            width={100}
            height={100}
            src={`/images/${course.image}.jpg`}
            alt={course.title}
            className="mt-4 rounded-lg"
          />
        </div>
      ))}
    </div>
    <Button className="mt-6">View All Courses</Button>
  </section>
);

// Mission & Vision Component
const MissionVision = () => (
  <section className="py-16 text-center">
    <h2 className="text-3xl font-bold">
      Limitless Learning, Limitless Possibilities!
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="p-6 border rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Our Mission</h3>
        <p>
          Empower learners with knowledge, skills, and values to become
          competent and responsible leaders.
        </p>
        <Image
          width={100}
          height={100}
          src="/images/mission.jpg"
          alt="Mission"
          className="mt-4 rounded-lg"
        />
      </div>
      <div className="p-6 border rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Our Vision</h3>
        <p>
          To be a beacon of educational excellence in Mombasa, inspiring
          students to achieve their full potential.
        </p>
        <Image
          width={100}
          height={100}
          src="/images/vision.jpg"
          alt="Vision"
          className="mt-4 rounded-lg"
        />
      </div>
    </div>
  </section>
);

// Contact Component
const ContactSection = () => (
  <section className="py-16 text-center">
    <h2 className="text-3xl font-bold">Get in Touch</h2>
    <p>Phone: 0722 299 287 / 0723 755 108</p>
    <p>P.O Box 86845-80100 Mombasa</p>
    <Image
      width={100}
      height={100}
      src="/images/contact-us.jpg"
      alt="Contact"
      className="mt-4 rounded-lg shadow-md mx-auto"
    />
  </section>
);

// Main Component
export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <CourseCategories />
      <FeaturedCourses />
      <MissionVision />
      <ContactSection />
    </div>
  );
}
