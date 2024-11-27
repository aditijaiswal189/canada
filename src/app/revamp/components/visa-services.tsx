import { Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: "01",
    title: "Student Visa",
    description: "We denounce righteous indigna dislike beguiled demoralized charms",
    image: "/placeholder.svg?height=400&width=300",
    icon: Shield
  },
  {
    id: "02",
    title: "Business Visa",
    description: "We denounce righteous indigna dislike beguiled demoralized charms",
    image: "/placeholder.svg?height=400&width=300",
    icon: Shield
  }
]

export function VisaServices() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-green-600 font-medium mb-2">SERVICE WE PROVIDE</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore Our Visa Citizenship & Immigration Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-sm group">
              <div className="relative h-[300px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg text-muted-foreground">{service.id}</div>
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link 
                  href="#" 
                  className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

