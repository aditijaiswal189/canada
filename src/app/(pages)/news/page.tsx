"use client";

import Container from "@/components/ui/container";
import MovingCardBorder from "@/components/ui/moving-card-border";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// import "@/components/ui/style.css";
// import "";
import "react-vertical-timeline-component/style.min.css";
import "./styles.css";
import { Badge } from "@/components/ui/badge";
// import { useQuery } from "@tanstack/react-query";
// import { supabase } from "./../../supabaseClient";
import { title } from "process";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
// import { Link } from "react-router-dom";

export default function News() {
  interface NewsItem {
    id: number;
    pub_date: string;
    title: string;
    description: string;
    categories: string[];
    creator: string;
  }

  const [data, setData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await supabase.from("News").select("*");

        // Parse and sort data from newest to oldest based on &apos;Date&apos;
        // const parsedData = response.data
        //   .map((row) => JSON.parse(row.content))
        //   .sort((a, b) => new Date(b.Date) - new Date(a.Date)); // Sort by date descending
        if (response.error) throw response.error;

        // Only parse fields that are actually JSON strings
        const parsedData = response.data.map((row) => ({
          ...row,
          categories: row.categories ? JSON.parse(row.categories) : [], // Parse only if it&aposs a JSON string
        }));

        setData(parsedData);
        console.log("Data fetched:", parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <Container effect="none" className="w-[80%] ">
      <VerticalTimeline layout={"2-columns"} className="w-full z-[999]" animate>
        {data &&
          data.map((item, index) => {
            const colors = ["#F2961B", "#007bff", "#28a745", "#ffc107"];
            const bgColor = colors[index % colors.length];
            const formattedDate = new Date(item.pub_date).toLocaleDateString(
              undefined,
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );

            return (
              <VerticalTimelineElement
                key={item.id}
                className="vertical-timeline-element--education"
                contentArrowStyle={{
                  borderRight: `7px solid ${bgColor}`,
                }}
                date={formattedDate}
                dateClassName="custom-date-class"
                contentStyle={{
                  background: bgColor,
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "start",
                  zIndex: "999999",
                  flexDirection: "column",
                  alignItems: "start",
                  color: "#000",
                  cursor: "pointer",
                  marginTop: "-20px",
                }}
                iconStyle={{
                  background: bgColor,
                  color: "#000",
                  width: "30px",
                  height: "30px",
                  marginLeft: "-13px",
                  padding: "2px",
                }}
                icon={
                  <Icon icon={"material-symbols:compost"} className="w-5 h-2" />
                }
              >
                <Link
                  href={`/news/${item.id}`}
                  className="flex w-full flex-col"
                >
                  <div className="flex gap-2 flex-col group">
                    <h3 className="text-left text-2xl text-black tracking-wide">
                      {item.title}
                    </h3>
                    <p
                      className="text-left !text-xs text-black
                     tracking-wider"
                    >
                      {item.description}
                      <span className="text-black group-hover:underline">
                        Read More
                      </span>
                    </p>
                  </div>

                  <div className="flex w-full justify-between items-center gap-2 mt-4">
                    <div className="flex gap-2 items-center">
                      {item.categories.map((category, index) => (
                        <Badge key={`${category}-${index}`}>{category}</Badge>
                      ))}
                    </div>
                    <div className="flex justify-start items-center -mt-4">
                      <p className="font-primary tracking-widest">
                        Author:{" "}
                        <span className="font-secondary text-white/90 tracking-normal">
                          {item.creator}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </VerticalTimelineElement>
            );
          })}
      </VerticalTimeline>
    </Container>
  );
}
