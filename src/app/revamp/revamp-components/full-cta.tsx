"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Check, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Description, List, ListItem, Subtitle, Title } from "./heading";
import { cn } from "@/lib/utils";

export function FULLCTA({
  flip = true,
  backgroundColor = "bg-black",
  imageSrc = "/default-image.jpg",
  subtitle = "Why Choose Us?",
  title = "We Are The Leading Immigration Center For You",
  description = "",
  listItems = [],
  additionalDescription = "",
  highlightClassName = "",
}) {
  return (
    <section className={`relative overflow-hidden ${backgroundColor}`}>
      <div
        className={cn(
          "container flex relative w-full",
          flip && "flex-row-reverse"
        )}
      >
        {/* Image Section */}
        <div className="flex-1">
          <img src={imageSrc} alt="CTA Visual" className="w-full h-full" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-4 flex-1 relative py-16 px-8">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-20 w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Subtitle */}
          <Subtitle
            className=""
            position="left"
            highliterClassName={highlightClassName}
          >
            {subtitle}
          </Subtitle>

          {/* Title */}
          <Title className="text-4xl mx-0 w-full text-left md:text-5xl font-bold text-white mb-6">
            {title}
          </Title>

          {/* Description */}
          <Description className="text-white">{description}</Description>

          {/* List Items */}
          <List>
            {listItems.map((item, index) => (
              <ListItem
                key={index}
                icon={item.icon}
                descriptionClassName="text-white"
              >
                {item.text}
              </ListItem>
            ))}
          </List>

          {/* Additional Description */}
          <Description className="text-white mt-4">
            {additionalDescription}
          </Description>
        </div>
      </div>
    </section>
  );
}
