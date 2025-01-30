import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function FaqSection() {
    const faqs = [
      {
        question: "What destinations do you cover?",
        answer: "We cover all major East African destinations, including Kenya, Tanzania, and Uganda.",
      },
      {
        question: "Are your guides certified?",
        answer: "Yes, all our guides are highly qualified and experienced.",
      },
      {
        question: "Can you customize packages?",
        answer: "Absolutely! We tailor packages to suit your preferences.",
      },
      {
        question: "What is included in the tour packages?",
        answer: "Our packages include accommodation, transportation, guided tours, and some meals.",
      },
      {
        question: "Do you offer flight bookings?",
        answer: "Yes, we can arrange flights as part of your travel package.",
      },
      {
        question: "What is the best time to visit Kenya?",
        answer: "The best time to visit Kenya is during the dry seasons, from June to October and from December to March.",
      },
      {
        question: "Do you provide visa assistance?",
        answer: "Yes, we can guide you through the visa application process.",
      },
      {
        question: "Are your tours family-friendly?",
        answer: "Yes, we offer family-friendly tours with activities suitable for all ages.",
      },
      {
        question: "What should I pack for a safari?",
        answer: "We recommend packing lightweight clothing, a hat, sunscreen, binoculars, and a camera.",
      },
      {
        question: "Is travel insurance included?",
        answer: "Travel insurance is not included but highly recommended. We can help you arrange it.",
      },
      {
        question: "Can I book a private tour?",
        answer: "Yes, we offer private tours for a more personalized experience.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept credit cards, bank transfers, and mobile payments.",
      },
      {
        question: "Do you offer group discounts?",
        answer: "Yes, we offer discounts for group bookings. Contact us for more details.",
      },
      {
        question: "What happens if I need to cancel my booking?",
        answer: "Our cancellation policy varies depending on the package. Please refer to our terms and conditions.",
      },
      {
        question: "Are there any age restrictions for safaris?",
        answer: "Most safaris are suitable for all ages, but some activities may have age restrictions.",
      },
      {
        question: "Do you offer vegetarian or special diet options?",
        answer: "Yes, we can accommodate dietary restrictions. Please inform us in advance.",
      },
      {
        question: "What languages do your guides speak?",
        answer: "Our guides speak English, Swahili, and other local languages.",
      },
      {
        question: "Can I extend my stay?",
        answer: "Yes, we can help you arrange an extended stay.",
      },
      {
        question: "Do you offer airport transfers?",
        answer: "Yes, we provide airport transfers as part of our packages.",
      },
      {
        question: "How do I book a tour?",
        answer: "You can book a tour through our website or by contacting our team directly.",
      },
    ];
  
    return (
      <section id="faq" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    );
  }