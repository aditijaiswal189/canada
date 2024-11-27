"use client"

import { ChevronDown, ChevronRight, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface NavItem {
  title: string
  href?: string
  children?: NavItem[]
}

const navigation: NavItem[] = [
  { title: "HOME", href: "/" },
  {
    title: "PAGES",
    children: [
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
      {
        title: "Country",
        children: [
          { title: "Country", href: "/country" },
          { title: "Country Details", href: "/country-details" },
        ],
      },
      { title: "Project Grid", href: "/project-grid" },
      { title: "Team Grid", href: "/team-grid" },
      { title: "Team Details", href: "/team-details" },
      { title: "Testimonials", href: "/testimonials" },
      { title: "Shop", href: "/shop" },
      { title: "FAQ's", href: "/faqs" },
      { title: "404", href: "/404" },
    ],
  },
  { title: "VISA", href: "/visa" },
  { title: "COACHING", href: "/coaching" },
  { title: "SERVICES", href: "/services" },
  { title: "BLOG", href: "/blog" },
]

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <Link href="/" className="flex items-center">
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Visaz Logo"
            width={120}
            height={40}
          />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="md:hidden"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      <nav className="p-4">
        {navigation.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </nav>
    </div>
  )
}

function NavItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false)

  if (!item.children) {
    return (
      <Link
        href={item.href || "#"}
        className="flex items-center h-10 px-4 text-sm font-medium rounded-md hover:bg-gray-100"
      >
        {item.title}
        {!item.href && <ChevronRight className="ml-auto h-4 w-4" />}
      </Link>
    )
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <button className="flex items-center justify-between w-full h-10 px-4 text-sm font-medium rounded-md hover:bg-gray-100">
          {item.title}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4">
        {item.children.map((child, index) => (
          <NavItem key={index} item={child} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

