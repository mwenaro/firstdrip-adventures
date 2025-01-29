

// components/Features.tsx
import { Users, Book, Clock } from 'lucide-react'

export  function Features() {
  const features = [
    {
      icon: Users,
      title: 'Skilled Teachers',
      description: 'Learn from industry experts and experienced educators',
    },
    {
      icon: Book,
      title: 'Affordable Courses',
      description: 'Quality education at competitive prices',
    },
    {
      icon: Clock,
      title: 'Efficient & Flexible',
      description: 'Learn at your own pace with 24/7 access',
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Best Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-pink-500" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
