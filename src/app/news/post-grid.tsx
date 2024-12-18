"use client";

import { useState, useEffect } from "react";
import { gql } from "graphql-request";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";
import { client } from "@/lib/graphql-client";
import Container from "@/components/ui/container";
import Link from "next/link";

// GraphQL Client

// GraphQL Query
const GET_PAGINATED_POSTS_QUERY = gql`
  query GetPaginatedPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        id
        title
        excerpt
        date
        slug
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export default function PostsGrid({ initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // Fetch more posts using GraphQL
  const fetchMorePosts = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const data = await client.request(GET_PAGINATED_POSTS_QUERY, {
        first: 9,
        after: cursor,
      });

      const newPosts = data.posts.nodes;
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setCursor(data.posts.pageInfo.endCursor);
      setHasMore(data.posts.pageInfo.hasNextPage);
    } catch (error) {
      console.error("Error loading more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                <CardHeader className="p-0 relative">
                  <Image
                    src={post.featuredImage?.node?.sourceUrl || "/default.jpg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant="outline"
                      className="bg-opacity-90 bg-black text-white rounded-lg backdrop-blur-sm"
                    >
                      {post.categories?.nodes[0]?.name || "Uncategorized"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="px-6 bg-gray-100 pt-6 pb-1 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-gray-100">
                  <h2 className="text-xl  font-bold mb-3 text-gray-800 dark:text-gray-100 line-clamp-2">
                    {post.title}
                  </h2>
                  <p
                    className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  ></p>
                  <div className="flex items-center mb-4">
                    <Image
                      src={"/7309681.jpg"}
                      alt={post.author?.node?.name || "Unknown"}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                        {post.author?.node?.name || "Unknown"}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 px-6 py-2">
                  <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {calculateReadTime(post.content)}
                  </span>
                  <Link
                    href={`/news/${post.slug}`}
                    className="border bg-gray-200 text-sm px-2 py-0.5 rounded-md"
                  >
                    Read More
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {hasMore && (
        <div className="text-center">
          <Button
            onClick={fetchMorePosts}
            disabled={loading}
            variant="outline"
            size="lg"
            className="bg-black text-white"
          >
            {loading ? "Loading more..." : "Discover More"}
          </Button>
        </div>
      )}
    </Container>
  );
}

const calculateReadTime = (content) => {
  console.log(content, "CheckCOntent");
  if (!content) return "0 min read"; // Handle missing or empty content
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = content.split(/\s+/).length; // Count words
  const time = Math.ceil(wordCount / wordsPerMinute); // Calculate time
  return `${time || 1} min read`; // Ensure at least "1 min read"
};
