"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CardTitle, Description } from "./heading";
import { cn } from "@/lib/utils";

interface AccordionItem {
  title: string;
  content: string[];
}

interface AccordionSectionProps {
  items: AccordionItem[];
  classNmame?: string;
}

export function AccordionSection({
  items,
  className = "",
}: AccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="border  rounded-sm border-gray-200 overflow-hidden"
        >
          <button
            className={cn(
              "flex justify-between items-center w-full px-4 py-2 text-left bg-green-600 rounded-sm  focus:outline-none",
              openIndex === index ? "rounded-none rounded-t-sm" : "rounded-sm"
            )}
            onClick={() => toggleItem(index)}
          >
            <CardTitle className="font-medium text-base text-white">
              {item.title.toLocaleUpperCase()}
            </CardTitle>
            <ChevronDown
              className={`w-5 h-5 text-white transition-transform duration-200 ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-50">
              {item.content.map((content, index) => (
                <Description key={index} className="text-sm text-gray-700">
                  {content}
                </Description>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
