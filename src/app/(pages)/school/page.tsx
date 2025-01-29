// app/page.tsx

import { Categories } from "@/components/school/Categories";
import { FeaturedCourses } from "@/components/school/FeaturedCourses";
import { Features } from "@/components/school/Features";
import { Hero } from "@/components/school/Hero";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <WhyChooseUs /> */}
      <Categories  />
      <FeaturedCourses />
      {/* <LimitlessLearning /> */}
      <Features />
      {/* <Teachers />
      <Stats />
      <Reviews /> */}
    </main>
  )
}

