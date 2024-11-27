import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  rating: number
  quote: string
}

export function TestimonialCard({
  name,
  role,
  image,
  rating,
  quote
}: TestimonialCardProps) {
  return (
    <div className="relative">
      <div className="absolute -left-4 top-12 bottom-0 w-8 bg-green-600 rounded-r-full" />
      <Card className="relative border-none shadow-sm pl-8">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="text-sm text-muted-foreground">{role}</p>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating ? "fill-green-600 text-green-600" : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <blockquote className="text-muted-foreground relative">
            <span className="absolute -left-6 -top-2 text-4xl text-green-600">"</span>
            {quote}
            <span className="absolute text-4xl text-green-600">"</span>
          </blockquote>
        </CardContent>
      </Card>
    </div>
  )
}

