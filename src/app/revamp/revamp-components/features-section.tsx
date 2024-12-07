import { Users, Plane, Users2, FileCheck } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const features = [
  {
    icon: FileCheck,
    title: "Legal Immigration Success"
  },
  {
    icon: Plane,
    title: "Regiments Document Support"
  },
  {
    icon: Users,
    title: "Family Ties & Visa Process & Report"
  },
  {
    icon: Users2,
    title: "Free Online Assessment"
  }
]

const trustedCustomers = [
  "/placeholder.svg?height=40&width=40",
  "/placeholder.svg?height=40&width=40",
  "/placeholder.svg?height=40&width=40"
]

export function FeaturesSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-muted-foreground mb-8 max-w-3xl">
          totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-green-50">
                <feature.icon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
            LEARN MORE US
          </Button>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {trustedCustomers.map((avatar, index) => (
                <Avatar key={index} className="border-2 border-white">
                  <AvatarImage src={avatar} />
                  <AvatarFallback>TC</AvatarFallback>
                </Avatar>
              ))}
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white text-sm">
                +
              </div>
            </div>
            <div>
              <div className="font-semibold">10m+ Trusted</div>
              <div className="text-sm text-muted-foreground">Customer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

