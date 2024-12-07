import { Button } from "@/components/ui/button";
import { BlogHeader } from "../../revamp-components/blog-header";
import { BlogPostList } from "../../revamp-components/blog-post-list";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader />
      <main className="container mx-auto px-4 py-16">
        <BlogPostList />
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
          >
            Load More Posts
          </Button>
        </div>
      </main>
    </div>
  );
}
