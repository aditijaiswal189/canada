"use client"

import { Button } from "@/components/ui/button"
import { Plane } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const services = [
  {
    title: "IN DOCUMENTATION",
    icon: Plane
  },
  {
    title: "TRAVEL PARTNERS",
    icon: Plane
  },
  {
    title: "TOURS & TRAVEL",
    icon: Plane
  }
]

const citizenshipTests = [
  {
    title: "Citizenship Test",
    description: "Sed perspice undm nise este natuse volutate",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    title: "Citizenship Test",
    description: "Sed perspice undm nise este natuse volutate",
    image: "/placeholder.svg?height=300&width=300"
  }
]

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative">
      {/* Hero Main Content */}
      <div className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left Column */}
          <div className="relative bg-black px-6 py-16 lg:px-12 xl:px-16">
            {/* Dot Pattern Background */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 max-w-xl">
              <div className="inline-block bg-green-600 px-4 py-2 text-sm text-white mb-6">
                Your Most Trusted Partners
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Easy & Simple Visa Processing Agency
              </h1>
              <p className="text-gray-300 mb-8">
                Lorem ipsum is simply dummy text of the printing Lorem ips is simply dummy text of the printi Lorem Ipsum
              </p>
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                DISCOVER MORE
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Happy family traveling"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Services Navigation */}
        <div className="bg-green-600">
          <div className="container mx-auto grid grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 px-4 py-4 text-white text-sm border-r border-white/20 last:border-0"
              >
                <service.icon className="h-5 w-5" />
                <span className="hidden sm:inline">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Citizenship Test Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-green-600 font-medium mb-2">TRAINING & CERTIFICATION</div>
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
              We Provide Special Care To Make Easy Your Dream
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {citizenshipTests.map((test, index) => (
              <div key={index} className="group relative bg-white rounded-lg p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={test.image}
                    alt={test.title}
                    fill
                    className="rounded-full object-cover"
                  />
                  <div className="absolute -bottom-4 right-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Plane className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{test.title}</h3>
                <p className="text-muted-foreground mb-4">{test.description}</p>
                <Link 
                  href="#" 
                  className="inline-block text-green-600 hover:text-green-700"
                >
                  →
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === activeIndex ? 'bg-green-600' : 'bg-gray-200'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

