"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { client } from "@/lib/graphql-client";
import { gql, GraphQLClient } from "graphql-request";
import { Calendar, MessageSquare, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Title } from "./heading";

const GET_INITIAL_POSTS_QUERY = gql`
  query GetInitialPosts($first: Int!) {
    posts(first: $first) {
      nodes {
        id
        title
        excerpt
        content
        slug
        date
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
        endCursor
      }
    }
  }
`;

export default function NewsShowcase() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.request(GET_INITIAL_POSTS_QUERY, {
          first: 12,
        });
        setPosts(data.posts.nodes);
        console.log(data.posts.nodes, "data.posts.nodes");
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  function formatDateAndDay(isoString) {
    const date = new Date(isoString);

    // Extract the day number
    const dayNumber = date.getDate();

    // Format the date (e.g., "Oct, 2024")
    const formattedDate = date.toLocaleDateString("en-GB", {
      month: "short",
      year: "numeric",
    });

    return { dayNumber, formattedDate };
  }

  return (
    <div className="px-10">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="flex gap-2"
        style={{ width: "100%" }}
        modules={[Autoplay]}
      >
        {posts &&
          posts.map((posts, index) => {
            const result = formatDateAndDay("2024-10-24T09:11:55");
            return (
              <SwiperSlide key={index}>
                <Card
                  className="overflow-hidden group rounded-none"
                  key={index}
                >
                  <div className="relative h-[250px] overflow ">
                    <div className="absolute left-6  -bottom-4 z-10">
                      <div className="bg-green-600 text-center text-white text-4xl ">
                        {result.dayNumber}
                      </div>
                      <div className="bg-[#727272] text-white text-xs px-2 py-0.5">
                        {result.formattedDate.toUpperCase()}
                      </div>
                    </div>
                    <Image
                      src={posts?.featuredImage?.node?.sourceUrl}
                      alt={posts?.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    {posts?.categories?.nodes.map((category, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-green-100 text-green-800 mb-4"
                      >
                        {category.name}
                      </Badge>
                    ))}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                      <Link
                        //   href={`/blog/${slug}`}
                        href={"/"}
                        className="hover:underline "
                      >
                        <Title className="w-full line-clamp-2 text-left text-base">
                          {posts?.title}
                        </Title>
                      </Link>
                    </h3>
                    <p
                      className="text-muted-foreground mb-4 line-clamp-5 text-[#727272] leading-[30px] font-normal text-sm"
                      dangerouslySetInnerHTML={{ __html: posts?.excerpt }}
                    />
                    <div className="flex items-center text-sm text-muted-foreground gap-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {posts?.author?.node?.name}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {posts?.date}
                      </div>
                      {/* <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {comments} Comments
                </div> */}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6">
                    <Link
                      //    href={`/blog/${slug}`}
                      href={"/"}
                      className="text-green-600  hover:underline inline-flex items-center gap-3"
                    >
                      Read More <span> →</span>
                    </Link>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
