import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MessageSquare, User } from 'lucide-react'

interface BlogPostProps {
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  category: string
  comments: number
  slug: string
}

export function BlogPostCard({
  title,
  excerpt,
  image,
  author,
  date,
  category,
  comments,
  slug
}: BlogPostProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <Badge variant="secondary" className="bg-green-100 text-green-800 mb-4">
          {category}
        </Badge>
        <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-muted-foreground gap-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {author}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            {comments} Comments
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Link
          href={`/blog/${slug}`}
          className="text-green-600 font-semibold hover:underline inline-flex items-center"
        >
          Read More →
        </Link>
      </CardFooter>
    </Card>
  )
}

