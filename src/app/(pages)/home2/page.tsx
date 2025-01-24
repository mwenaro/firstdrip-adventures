import { ContactForm } from '@/components/home2/ContactForm'
import { Footer } from '@/components/home2/Footer'
import { Header } from '@/components/home2/Header'
import { HeroSection } from '@/components/home2/HeroSection'
import { Testimonials } from '@/components/home2/Testimonials'
import React from 'react'

export default function LandingPageTwo() {
  return (
    <div>
        <Header />
        <HeroSection />
        <ContactForm />
        <Testimonials />
        <Footer />
    </div>
  )
}
