"use client";
import "./style.css";
import "@/components/ui/style.css";
import React, { useState, useEffect } from "react";
import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Title from "@/components/ui/Title";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { gql } from "graphql-request";
import { client } from "@/lib/graphql-client";

export default function Post() {
  // let postId = useParams();
  // postId = postId.id;
  const { slug } = useParams();
  console.log(slug, "checkSlug");

  const [data, setData] = useState(null);
  const [recent, setRecent] = useState([]);
  const [nextPost, setNextPost] = useState(null);
  const [prevPost, setPrevPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the single post by slug
        const postQuery = gql`
          query GetPostBySlug($slug: String!) {
            postBy(slug: $slug) {
              id
              title
              content
              date
              excerpt
              slug
              categories {
                nodes {
                  id
                  name
                  slug
                  description
                }
              }
              tags {
                nodes {
                  id
                  name
                  slug
                }
              }
              featuredImage {
                node {
                  id
                  sourceUrl
                  altText
                  title
                }
              }
              author {
                node {
                  id
                  name
                  email
                  avatar {
                    url
                  }
                }
              }
              comments {
                nodes {
                  id
                  author {
                    node {
                      name
                    }
                  }
                  content
                  date
                }
              }
            }
          }
        `;

        const postResponse = await client.request(postQuery, { slug });

        console.log(postResponse, "checkPostResponse");
        if (postResponse?.postBy) {
          setData(postResponse.postBy);
        }
      } catch (error) {
        console.error("Error fetching post data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const recentPostsQuery = gql`
          query GetRecentPosts {
            posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
              nodes {
                id
                title
                date
                slug
                excerpt
                featuredImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
              }
            }
          }
        `;

        const response = await client.request(recentPostsQuery);
        console.log(response, "setRecent");
        setRecent(response.posts.nodes);
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  if (!data) return <div>Loading...</div>;

  const formattedDate = (dateString: string) => {
    return dateString.split("T")[0];
  };

  console.log(recent, "checkData");

  return (
    <Container className="text-left post flex gap-6 flex-row">
      <Glass className="px-14 w-[70%] py-10 flex flex-col gap-8">
        {data.featuredImage.node.sourceUrl ? (
          <img
            src={data.featuredImage.node.sourceUrl || getRandomImage()}
            alt="news"
            className="w-full rounded-2xl h-[400px] object-cover"
          />
        ) : (
          <img
            src={getRandomImage()}
            className="w-full rounded-2xl h-[400px] object-cover"
            alt=""
          />
        )}
        <div
          dangerouslySetInnerHTML={{ __html: data?.content }}
          className="text-sm dangerouHtml"
        />
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <Badge className="bg-yellow-400">{formattedDate(data.date)}</Badge>
            <Badge className="bg-sky-400">
              Author: {data.author.node.name}
            </Badge>
          </div>
          <div className="flex gap-2">
            {data.categories.nodes.map(
              (category: { name: string }, index: number) => (
                <li key={index}>{category.name}</li>
              )
            )}
          </div>
        </div>
        {/* 
        <div className="flex justify-between w-full gap-20 mt-10">
          <div className="w-full">
            {prevPost && (
              <HoverCard
                icon={"material-symbols:arrow-left-alt"}
                title={prevPost.Title}
                to={`/news/${Number(postId) - 1}`}
                subtitle="Previous Post"
                color="bg-sky-400"
              />
            )}
          </div>
          <div className="w-full">
            {nextPost && (
              <HoverCard
                icon="material-symbols:arrow-right-alt"
                to={`/news/${Number(postId) + 1}`}
                subtitle="Next Post"
                title={nextPost.Title}
                color="bg-yellow-400"
              />
            )}
          </div>
        </div> */}
      </Glass>
      <Glass className="w-[30%] px-8 flex flex-col gap-8 h-max">
        <div className="flex flex-col">
          <Title title={"Recent Posts"} />
          {/* <div className="bg-red-400 w-[90%] h-0.5"></div> */}
        </div>
        <div className="flex gap-2 flex-col">
          {recent.map((item) => (
            <Link
              className="flex text-xs gap-2"
              href={`/tin-tuc/${item.slug}`}
              key={item.id}
            >
              <Icon icon="material-symbols:article" className="mt-1" />
              <div className="w-[90%]">{item.title}</div>
            </Link>
          ))}
        </div>
      </Glass>
    </Container>
  );
}

function HoverCard({
  title,
  icon,
  color,
  className,
  to,
  subtitle,
}: {
  subtitle?: string;
  icon?: string | React.ReactNode;
  title?: string | React.ReactNode;
  color?: string;
  className?: string;
  to?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={cn(
        "group w-[300px] relative cursor-pointer overflow-hidden bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-gray-100 shadow-md rounded-2xl px-2 ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 py-4",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={cn(
          "absolute left-[40px] w-full h-full top-10 z-0 rounded-full transition-all duration-300 group-hover:scale-[10]",
          isHovered && color
        )}
      ></span>

      <Link href={to || "#"} className="relative z-10 mx-auto h-20 w-full ">
        <p className="text-xs font-primary tracking-widest flex gap-2 items-center">
          <span>
            {typeof icon === "string" && <Icon icon={icon} className="-mt-1" />}
          </span>
          {subtitle}
        </p>
        <p className="truncate">{title}</p>
      </Link>
    </div>
  );
}

function getRandomImage() {
  const images = [
    "/aaa.jpg",
    "/about.png",
    "/alberta.jpg",
    "/british.jpg",
    "/canada.jpg",
    "/cost.jpg",
    "/business.jpg",
    "/experince.jpg",
    "/expressEntry.png",
    "/family.jpg",
    "/federalSkill.png",
    "/foru1.png",
    "/foru2.png",
    "immigrate.jpg",
    "immigration.png",
  ];
  return images[Math.floor(Math.random() * images.length)];
}
