
// components/Categories.tsx
import { Book, Code,  Calculator, Users, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export  function Categories() {
  const categories = [
    { icon: Code, name: 'Engineering' },
    { icon: Book, name: 'IT & Software' },
    { icon: Calculator, name: 'Chemistry' },
    { icon: Users, name: 'Management' },
    { icon: BookOpen, name: 'Literature' },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Best Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <category.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
