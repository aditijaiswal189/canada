import { Description, Subtitle } from "@/app/revamp/revamp-components/heading";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";
import { Title as TitleRevamp } from "@/app/revamp/revamp-components/heading";
// import { Link } from "react-router-dom";

export default function Title({
  title,
  subtitle,
  description,
  titleClassName,
  to,
  cta,
  className,
}: {
  title?: string | React.ReactNode;
  subtitle?: string;
  description?: string[] | React.ReactNode;
  to?: string;
  cta?: string;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className="flex w-full justify-between ">
      <div
        className={cn(
          "flex flex-col gap-1 justify-start items-start",
          className
        )}
      >
        <Subtitle className="text-2xl">{subtitle}</Subtitle>
        <div className="flex flex-col gap-3 w-full">
          {typeof title === "string" ? (
            <TitleRevamp
              className={cn("tracking-wider w-full text-left", titleClassName)}
            >
              {title}
            </TitleRevamp>
          ) : (
            title
          )}
        </div>
        <span className="block h-0.5 bg-highlight w-max"></span>

        {description &&
          (Array.isArray(description) ? (
            <Description className="text-left w-[80%]">
              {description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </Description>
          ) : (
            description
          ))}
      </div>
      {cta && (
        <div className="flex group justify-center flex-col text-black/50 border-b-highlight items-center  transition-all duration-150 cursor-pointer">
          <Link
            href={""}
            className="flex gap-3 justify-center items-center font-primary tracking-widest"
          >
            {cta}
            <Icon icon={"material-symbols:arrow-right-alt"} />
          </Link>
          <div className="h-0.5 w-28 group-hover:visible invisible bg-highlight"></div>
        </div>
      )}
    </div>
  );
}
