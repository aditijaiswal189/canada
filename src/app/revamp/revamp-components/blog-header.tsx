import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export function BlogHeader() {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Blog</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Stay updated with the latest news, tips, and insights about visa processing, immigration, and travel.
        </p>
        <div className="flex gap-4 max-w-md mx-auto">
          <Input 
            type="text" 
            placeholder="Search articles..." 
            className="flex-grow"
          />
          <Button className="bg-green-600 hover:bg-green-700">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

