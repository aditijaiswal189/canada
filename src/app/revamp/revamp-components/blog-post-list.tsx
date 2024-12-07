import { BlogPostCard } from "./blog-post-card"

const blogPosts = [
  {
    title: "10 Tips for a Successful Visa Application",
    excerpt: "Learn the essential steps to ensure your visa application process goes smoothly and increases your chances of approval.",
    image: "/placeholder.svg?height=200&width=400",
    author: "Jane Doe",
    date: "June 15, 2023",
    category: "Visa Application",
    comments: 5,
    slug: "10-tips-successful-visa-application"
  },
  {
    title: "Understanding the New Immigration Policies",
    excerpt: "Stay informed about the latest changes in immigration laws and how they might affect your travel or residency plans.",
    image: "/placeholder.svg?height=200&width=400",
    author: "John Smith",
    date: "July 2, 2023",
    category: "Immigration",
    comments: 8,
    slug: "understanding-new-immigration-policies"
  },
  {
    title: "Top 5 Destinations for Digital Nomads",
    excerpt: "Discover the best countries offering digital nomad visas and learn about their unique benefits and requirements.",
    image: "/placeholder.svg?height=200&width=400",
    author: "Alex Johnson",
    date: "July 20, 2023",
    category: "Digital Nomad",
    comments: 12,
    slug: "top-5-destinations-digital-nomads"
  },
  // Add more blog posts as needed
]

export function BlogPostList() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {blogPosts.map((post, index) => (
        <BlogPostCard key={index} {...post} />
      ))}
    </div>
  )
}

