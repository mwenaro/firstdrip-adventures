import Image from 'next/image';
// import { Carousel } from 'magic-ui';

const testimonials = [
  {
    name: 'Sarah Thompson',
    quote: 'An unforgettable journey across East Africa. FirstDrip made every aspect seamless and unforgettable!',
    image: '/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    quote: 'The wildlife was beyond my expectations. Professional guides and amazing service.',
    image: '/michael.jpg',
  },
  // ... other testimonials
];

export const Testimonials = () => {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">What Our Travelers Say</h2>
      {/* <Carousel> */}
      <div>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="flex items-center">
            <Image src={testimonial.image} alt={testimonial.name} width={100} height={100} className="rounded-full mr-4" />
            <div>
              <p className="text-lg">{testimonial.quote}</p>
              <p className="text-sm"> - {testimonial.name}</p>
            </div>
          </div>
        ))}
        </div>
      {/* </Carousel> */}
    </section>
  );
};
