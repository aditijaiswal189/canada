import {
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  PinIcon as Pinterest,
} from "lucide-react";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="w-full bg-[#1E1E1E] text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin className="w-3 h-3" />
            <span className="text-xs">
              2124 Broad St, Regina, Saskatchewan,Canada S4P 1Y5 (Registered
              office)
            </span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <Mail className="w-3 h-3" />
            <a href="mailto:needhelp@company.com" className="">
              info@gtrworldwide.com
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-xs">Help / Support / Contact</span>
          <div className="flex items-center space-x-3">
            <Link href="#" className="hover:text-gray-300">
              <Twitter className="w-3 h-3" />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Facebook className="w-3 h-3" />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Instagram className="w-3 h-3" />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Pinterest className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
