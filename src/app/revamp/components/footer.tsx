import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Mail, Phone, PinIcon as Pinterest, Twitter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const quickLinks = [
  "IELTS Coaching",
  "TOEFL Coaching",
  "GRE Coaching",
  "GMAT Coaching",
  "SAT Coaching"
]

const pages = [
  "About Company",
  "Meet the Team",
  "News & Media",
  "Our Projects",
  "Contact"
]

const galleryImages = [
  "/placeholder.svg?height=150&width=150",
  "/placeholder.svg?height=150&width=150",
  "/placeholder.svg?height=150&width=150",
  "/placeholder.svg?height=150&width=150",
  "/placeholder.svg?height=150&width=150",
  "/placeholder.svg?height=150&width=150"
]

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Visaz Logo"
              width={120}
              height={40}
              className="brightness-0 invert"
            />
          </div>
          <div className="flex-1 max-w-md">
            <div className="text-xl font-semibold mb-2">Subscribe to Newsletter</div>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/10 border-0 text-white placeholder:text-gray-400"
              />
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
                <span className="sr-only">Subscribe</span>
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Company */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">About Company</h3>
            <p className="text-sm mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quase
            </p>
            <div className="space-y-2">
              <a href="mailto:needhelp@company.com" className="flex items-center gap-2 hover:text-green-500">
                <Mail className="h-4 w-4" />
                needhelp@company.com
              </a>
              <a href="tel:+92666888000" className="flex items-center gap-2 hover:text-green-500">
                <Phone className="h-4 w-4" />
                +92 666 888 0000
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-green-500">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Pages</h3>
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page}>
                  <Link href="#" className="hover:text-green-500">
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <Link key={index} href="#" className="block relative aspect-square">
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:opacity-80 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © Copyright 2024 by ThemeMascot.com
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-green-500">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-green-500">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-green-500">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-green-500">
              <Pinterest className="h-5 w-5" />
              <span className="sr-only">Pinterest</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

