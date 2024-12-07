"use client";
import { Search, Phone, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/custom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  return (
    <div className="w-full bg-white shadow-xl  px-0">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Link href="/" className="flex items-start bg-green-600 px-4">
            <img
              src="/gtr-white.png"
              alt="Visaz Logo"
              className="w-[160px] h-[80px]"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-2">
                {router.map((navItem) => (
                  <NavigationMenuItem
                    key={navItem.path}
                    className="relative min-w-12"
                  >
                    {navItem.element ? (
                      <NavigationMenuLink
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-white focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-highlight data-[state=open]:bg-highlight hover:bg-green-600 rounded-none text-black relative group bg-transparent "
                        )}
                      >
                        <Link
                          className={cn("text-black  group-hover:text-black")}
                          href={navItem.path}
                        >
                          {navItem.element}
                        </Link>
                      </NavigationMenuLink>
                    ) : (
                      <NavigationMenuTrigger
                        className={cn(
                          "bg-transparent data-[state=open]:text-white data-[state=open]:bg-green-600 rounded-none py-1 focus:bg-green-600 hover:bg-green-600 ",
                          "text-black"
                        )}
                      >
                        {navItem.path}
                      </NavigationMenuTrigger>
                    )}
                    {navItem.children && (
                      <NavigationMenuContent className="absolute bg-green-600 overflow-visible left-0 px-0 rounded-none border-none z-[9999999999]">
                        <div className="w-[200px] py-2 ">
                          {renderSubmenus(
                            navItem.children,
                            hoveredPath,
                            setHoveredPath
                          )}
                        </div>
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="flex items-center space-x-6 h-full">
          <div className="hidden lg:flex items-center">
            <div className="bg-green-600 rounded-full p-2 mr-3">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Call Anytime</p>
              <p className="text-green-600 ">+1-855-477-9797</p>
            </div>
          </div>

          <div className="bg-green-600 h-[80px]">
            <Sheet>
              <SheetTrigger className="h-full w-max px-4">
                <Icon
                  icon={"solar:hamburger-menu-broken"}
                  className="text-white text-4xl"
                />
              </SheetTrigger>
              <SheetContent>Will Add</SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}

const renderSubmenus = (submenus, hoveredPath, setHoveredPath) => {
  return (
    <ul className="z-[10000000000000000000]">
      {submenus.map((subPage) => (
        <li
          key={subPage.path}
          className="flex text-left w-full px-3 py-1 border-b last:border-b-0 relative"
          onMouseEnter={() => setHoveredPath(subPage.path)}
          onMouseLeave={() => setHoveredPath(null)}
        >
          {subPage.children ? (
            <div className="relative w-full">
              <div
                className={cn(
                  "flex justify-between cursor-pointer items-center text-left text-sm px-2 w-full rounded-none py-1",
                  hoveredPath === subPage.path
                    ? "bg-white  text-black"
                    : "text-white"
                )}
              >
                <span>{subPage.path}</span>
                <Icon icon={"zondicons:cheveron-right"} />
              </div>
              <div
                className={`absolute top-0 left-[188px] w-[300px] bg-green-600 overflow-visible text-left py-0.5 flex flex-col z-10 
                  transition-all duration-300 transform ease-out ${
                    hoveredPath === subPage.path
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4 pointer-events-none"
                  }`}
              >
                {subPage.children.map((item) => (
                  <Link
                    key={item.path}
                    className="group rounded-none text-left cursor-pointer text-sm border-b py-1 last:border-b-0 px-2 w-full !text-black"
                    href={item.path}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.01,
                        backgroundColor: "white",
                        color: "black",
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="px-3 py-1 rounded-none"
                    >
                      {item.element}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              className="text-left hover:bg-white hover:text-black py-1 rounded-none text-sm border-b last:border-b-0 px-2 w-full text-white"
              href={subPage.path}
            >
              {subPage.element}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

const router = [
  {
    path: "/",
    element: "Home",
  },
  {
    path: "About",
    children: [
      {
        path: "/about",
        element: "About",
      },
      {
        path: "/our-service",
        element: "Our Service",
      },
      {
        path: "/certificate-membership",
        element: "Certificate Membership",
      },
      {
        path: "/customer-testimonials",
        element: "Customer Testimonials",
      },
      {
        path: "/book-appointment",
        element: "Book Appointment",
      },
      {
        path: "/why-choose-us",
        element: "Why Choose Us",
      },
    ],
  },

  {
    path: "Immigration",
    children: [
      {
        path: "Express Entry",
        element: `Express Entry`,
        children: [
          {
            path: "/immigration/express-entry/federal-skilled-worker",
            element: "Fedral Skilled Worker",
          },
          {
            path: "/immigration/express-entry/federal-skilled-trade",
            element: "Fedral Skilled Trade",
          },
          {
            path: "/immigration/express-entry/canadian-experience-class",
            element: "Canadian Experience Class",
          },
        ],
      },
      {
        path: "Provincial Nominee Programs",
        children: [
          {
            path: "/immigration/provincial-nominee-programs/alberta-immigration-aaip",
            element: "Alberta (AAIP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/atlantic-immigration-aipp",
            element: "Atlantic Immigration (AIPP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/british-columbia-bcpnp",

            element: "British Colombia (BC PNP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/ontario-oinp",
            element: "Ontario (OINP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/manitoba-mpnp",
            element: "Manitoba (MPNP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/new-brunswick-nbpnp",
            element: "New Brunswick (NBPNP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/newfoundland-and-labrador",
            element: "Newfoundland and Labrador",
          },
          {
            path: "/immigration/provincial-nominee-programs/saskatchewan-sinp",
            element: "Saskatchewan (SINP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/northwest-territories",
            element: "Northwest Territories",
          },
          {
            path: "/immigration/provincial-nominee-programs/nova-scotia-nsnp",
            element: "Nova Scotia (NSNP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/prince-edward-island-peipnp",
            element: "Prince Edward Island (PEI PNP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/rural-and-northern-immigration-pilot-rnip",
            element: "Rural & Northern Immigration Pilot (RNIP)",
          },

          {
            path: "/immigration/provincial-nominee-programs/yukon-ynp",
            element: "Yukon (YNP)",
          },
        ],
      },
      {
        path: "/immigration/immigration-challenges",
        element: "Immigration Challenges",
      },
    ],
  },
  {
    path: "Business",
    children: [
      {
        path: "Quebec",
        children: [
          {
            path: "/business/quebec/quebec-investor",
            element: "Quebec Investor",
          },
          {
            path: "/business/quebec/quebec-entrepreneur",
            element: "Quebec Entrepreneur",
          },
          {
            path: "/business/quebec/quebec-self-employed",
            element: "Self Employed",
          },
        ],
      },
      {
        path: "Federal Programs",
        children: [
          {
            path: "/business/federal-programs/start-up-visa",
            element: " Start-Up Visa (SUV)",
          },
          {
            path: "/business/federal-programs/intra-company-transfer",
            element: "Intra-company transfer (ICT)",
          },
          {
            path: "/business/federal-programs/benefit-to-canada",
            element: "Significant Benefit to Canada (C10)",
          },
          {
            path: "/business/federal-programs/owner-operator",
            element: "Owner Operator LMIA",
          },
          {
            path: "/business/federal-programs/self-employed-persons",
            element: "Self-Employed Persons (C11)",
          },
        ],
      },
    ],
  },
  {
    path: "Work And Jobs",
    children: [
      {
        path: "/work-and-jobs/work-permit",
        element: "Work Permit",
      },
      {
        path: "/work-and-jobs/international-mobility-program",
        element: "International Mobility Program (IMP)",
      },
      {
        path: "/work-and-jobs/in-demand-jobs",
        element: "In Demand Jobs",
      },
      {
        path: "/work-and-jobs/support-for-employers",
        element: "Support For Employers",
      },

      {
        path: "/work-and-jobs/lmia",
        element: "LMIA",
      },
      // {
      //   path: "/work-and-jobs/caregiver-program",
      //   element: "Caregiver Program",
      // },
      {
        path: "/work-and-jobs/teer-categories-and-noc",
        element: "TEER Categories & NOC Codes",
      },
    ],
  },
  {
    path: "Study",
    children: [
      {
        path: "/study/post-graduate-work-permit",
        element: "Post Graduate Work Permit (PGWP)",
      },
      {
        path: "/study/study-in-canada",
        element: "Study In Canada",
      },
      {
        path: "/study/pathway-from-study-to-pr",
        element: "Pathway From Study To PR",
      },
      {
        path: "/study/designated-learning-institution",
        element: "Designated Learning Institution (DLI)",
      },
      {
        path: "/study/student-direct-stream",
        element: "Student Direct Stream (SDS)",
      },
    ],
  },
];
