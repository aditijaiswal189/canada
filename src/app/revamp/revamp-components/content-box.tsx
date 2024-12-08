import { cn } from "@/lib/utils";
import React from "react";
import { Description, Subtitle, Title } from "./heading";
import Container from "@/components/ui/container";

export default function ContentBox({
  className,
  title,
  subtitle,
  description,
  colorClassName,
  subtitleBgColor,
}: {
  className?: string;
  title?: string;
  subtitle?: string;
  description?: string[];
  colorClassName?: string;
  subtitleBgColor?: string;
}) {
  return (
    <Container className={cn("px-0 lg:px-0 w-full py-0", className)}>
      <div
        className={cn(
          "px-6 lg:px-12 lg:py-20 w-full relative bg-green-800 text-white",
          colorClassName
        )}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className={cn("relative z-10 flex flex-col gap-3")}>
          <Subtitle
            className="text-inherit text-xl "
            highliterClassName={cn("bg-white", subtitleBgColor)}
          >
            {subtitle}
          </Subtitle>
          <Title className="text-inherit w-full text-left">{title}</Title>
          {description?.map((desc, index) => (
            <Description
              key={index}
              className="text-inherit leading-[30px] font-normal"
            >
              {desc}
            </Description>
          ))}
        </div>
      </div>
    </Container>
  );
}
