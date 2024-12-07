"use client"

import { useState } from "react"

interface Tab {
  label: string
  content: React.ReactNode
}

interface TabbedContentProps {
  tabs: Tab[]
}

export function TabbedContent({ tabs }: TabbedContentProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 font-medium text-sm focus:outline-none ${
              activeTab === index
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-green-600"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

