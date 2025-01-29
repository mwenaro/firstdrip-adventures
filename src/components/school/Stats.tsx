
// components/Stats.tsx
export  function Stats() {
    const stats = [
      { value: '45K+', label: 'Active Students' },
      { value: '72+', label: 'Expert Teachers' },
      { value: '90+', label: 'Premium Courses' },
      { value: '35', label: 'Years Experience' },
    ]
  
    return (
      <section className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }