import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Check, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    category: "Immigration",
    title: "Accurate & Expert",
    image: "/placeholder.svg?height=400&width=300",
    href: "#"
  },
  {
    category: "Consultancy",
    title: "Visa Enquiry",
    image: "/placeholder.svg?height=400&width=300",
    href: "#"
  }
]

export function CountrySelection() {
  return (
    <section className="relative overflow-hidden bg-green-600 py-16">
      {/* Dot pattern background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)',
          backgroundSize: '30px 30px',
        }}
      />
      
      <div className="container relative mx-auto px-4">
        <div className="mb-12">
          <div className="text-white/80 text-sm font-medium mb-4">LATEST PROJECTS</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Select the Country of Your Choice
          </h2>
          <p className="text-white/80 max-w-2xl">
            At vero eoset accusam etusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quose
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 text-white">
            <Check className="h-5 w-5" />
            <span>Faster & Reliable Execution</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Check className="h-5 w-5" />
            <span>Accurate & Expert Advice</span>
          </div>
        </div>

        <div className="flex gap-4 mb-12">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-white/20 bg-transparent text-white hover:bg-white hover:text-green-600"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-white/20 bg-transparent text-white hover:bg-white hover:text-green-600"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white overflow-hidden group">
              <div className="relative h-[300px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-green-600 font-medium mb-2">{service.category}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={service.href}>
                  <Button 
                    size="icon"
                    className="rounded-full bg-green-600 text-white hover:bg-green-700"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

