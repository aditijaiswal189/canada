import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { CardTitle, Description } from "./heading";
import IconBackground from "./icon-background";

interface VisaCardProps {
  number: number;
  title: string;
  description: string;
  imageUrl: string;
  iconUrl: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  imageUrl,
  iconUrl,
}: VisaCardProps) {
  return (
    <Card className="max-w-[380px] bg-[#F8F5F0] overflow-hidden rounded-none shadow-lg">
      <div className="relative ">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[250px] object-fill border-[8px] border-[#F8F5F0]"
        />
      </div>
      <CardContent className="p-6 relative">
        <div className="space-y-2">
          <div className="space-y-2 bg-[#FAF8F7] absolute w-[85%] flex rounded-md -top-12 left-1/2 transform -translate-x-1/2 mx-auto px-4 justify-between items-center py-2">
            <div>
              <span className="text-sm text-gray-400">0{number}</span>
              <CardTitle className="text-lg">{title}</CardTitle>
            </div>
            <IconBackground
              icon={iconUrl}
              className="rounded-full -mt-2"
              iconClassName="text-xl"
            />
          </div>

          <Description className="text-sm line-clamp-4 my-8 relative">
            {description}
          </Description>
          <Link
            href="#"
            className="inline-flex border-t w-full pt-3 mt-5 items-center text-green-600 hover:text-green-500 transition-colors text-sm font-medium"
          >
            Know More
            <svg
              className="ml-1 h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
