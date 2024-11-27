"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from "react"
import { TestimonialCard } from "./testimonial-card"

const testimonials = [
  {
    name: "Arthur A. Vandusen",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=64&width=64",
    rating: 5,
    quote: "At vero eos accusamus etuy edioe ways dignissimos blands praesentium voluptaue atque corrupti quosy dolores quas"
  },
  {
    name: "Richard H. Dupont",
    role: "Junior Manager",
    image: "/placeholder.svg?height=64&width=64",
    rating: 4,
    quote: "At vero eos accusamus etuy edioe ways dignissimos blands praesentium voluptaue atque corrupti quosy dolores quas"
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="text-red-600 font-medium mb-2">HAVE ANY QUESTIONS?</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Explore Why People Say About Us
          </h2>
          <p className="text-muted-foreground">
            At vero eoset accusam etusto dio dignissimos blanditiis praesentium voluptatum
          </p>
        </div>
        
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={index === currentIndex ? "block" : "hidden md:block"}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
          
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-2 hover:bg-red-600 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-2 hover:bg-red-600 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

