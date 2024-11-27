"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface AccordionItem {
  title: string
  content: string
}

interface AccordionSectionProps {
  items: AccordionItem[]
}

export function AccordionSection({ items }: AccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium">{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-green-600 transition-transform duration-200 ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-50">
              <p className="text-gray-700">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

