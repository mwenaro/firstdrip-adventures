
// components/FeaturedCourses.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export  function FeaturedCourses() {
  const courses = [
    {
      title: 'The Complete Advance Management Study',
      image: '/api/placeholder/400/250',
      instructor: 'Prof. Sarah Smith',
      price: '$99',
    },
    {
      title: "Advanced Beginner's React & Javascript Course",
      image: '/api/placeholder/400/250',
      instructor: 'John Doe',
      price: '$89',
    },
    {
      title: 'Advance Technology & Architecture Course',
      image: '/api/placeholder/400/250',
      instructor: 'Mike Johnson',
      price: '$79',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Most Featured Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index}>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{course.instructor}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-purple-600">{course.price}</span>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}