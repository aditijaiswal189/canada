"use client";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { use, useState } from "react";
import { getSearchedIcon } from "./get-icons";

export default function HoverCard({
  icon = true,
  title,
  description,
  cta,
  color,
  className,
}: {
  icon?: boolean;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  cta?: string | React.ReactNode;
  color?: string;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const iconName = use(getSearchedIcon(title));
  return (
    <div
      className={cn(
        "group relative cursor-pointer overflow-hidden bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-gray-100 shadow-2xl rounded-2xl  px-6 pt-10 pb-8 ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl  sm:rounded-lg sm:px-10 w-full",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 mx-auto max-w-md">
        <span
          className={cn(
            "absolute left-0 top-0 z-0 h-20 w-20 rounded-full transition-all duration-300 group-hover:scale-[10] flex justify-center items-center",
            color
          )}
        ></span>
        <div
          className={cn(
            "flex h-20 w-20 justify-center z-[10000] items-center rounded-full transition-all duration-300 ",
            isHovered && color
          )}
        >
          <Icon
            icon={iconName}
            className="text-white h-10 w-full text-center z-[10000]"
          />
        </div>
        <div className="space-y-1 pt-8 text-base text-gray-600 transition-all duration-300 group-hover:text-white/90 flex flex-col gap-1">
          <h6 className="text-2xl text-left">{title}</h6>
          {description && <p className="text-left">{description}</p>}
        </div>
        <div className="pt-5 text-base font-semibold leading-7 flex justify-start items-start">
          {cta && (
            <p className="flex gap-2 justify-center items-center">
              {cta} <Icon icon={"zondicons:cheveron-right"} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
