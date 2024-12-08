import { CardTitle, Description } from "@/app/revamp/revamp-components/heading";
import Glass from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, CardContent } from "./card";
import IconBackground from "@/app/revamp/revamp-components/icon-background";
import Link from "next/link";
import { cache, use } from "react";
import { getSearchedIcon } from "./get-icons";

const images = [
  "/revamp/cards/card3.jpg",
  "/revamp/cards/card4.jpg",
  "/revamp/cards/card5.jpg",
  "/revamp/cards/card6.jpg",
  "/revamp/cards/card7.jpg",
  "/revamp/cards/card8.jpg",
  "/revamp/cards/card9.jpg",
  "/revamp/cards/card10.jpg",
  "/revamp/cards/card11.jpg",
];

export const ServicesCard = ({
  title,
  description,
  imageUrl = images[Math.floor(Math.random() * images.length)],
  id,
  link = "/",
  number = false,
}: {
  title?: string;
  description?: string;
  id?: number;
  imageUrl?: string;
  number?: boolean;
  link?: string;
}) => {
  const icon = use(getSearchedIcon(title));
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
          <div className="space-y-2 h-16 bg-[#FAF8F7] absolute w-[85%] flex rounded-md -top-12 left-1/2 transform -translate-x-1/2 mx-auto px-4 justify-between items-center py-4">
            <div className="w-[80%] ">
              {number && (
                <span className="text-sm text-gray-400">0{number}</span>
              )}
              <CardTitle className="text-lg">{title}</CardTitle>
            </div>
            <IconBackground
              icon={icon}
              className="rounded-full -mt-2"
              iconClassName="text-xl !text-green-600"
            />
          </div>

          <Description className="text-sm line-clamp-4 my-8 relative">
            {description}
          </Description>
          {link !== "/" && (
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
          )}
        </div>
      </CardContent>
    </Card>
  );
};
