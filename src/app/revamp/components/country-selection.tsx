import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Check, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Description, List, ListItem, Subtitle, Title } from "./heading";
import { cn } from "@/lib/utils";

const services = [
  {
    category: "Immigration",
    title: "Accurate & Expert",
    image: "/placeholder.svg?height=400&width=300",
    href: "#",
  },
  {
    category: "Consultancy",
    title: "Visa Enquiry",
    image: "/placeholder.svg?height=400&width=300",
    href: "#",
  },
];

export function CountrySelection({ flip = true }) {
  return (
    <section className="relative overflow-hidden bg-black ">
      <div
        className={cn(
          "container flex relative w-full",
          flip && "flex-row-reverse"
        )}
      >
        <div className="flex-1">
          <img src="/revamp/hero.jpg" className="w-full h-full " />
        </div>
        <div className="flex flex-col gap-4 flex-1 relative py-16 px-8">
          <div
            className="absolute inset-0 opacity-20 w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <Subtitle className="" position="left" highliterClassName="">
            WHY CHOOSE US?
          </Subtitle>
          <Title className="text-4xl mx-0 w-full text-left md:text-5xl font-bold text-white mb-6">
            We Are The Leading Immigration Center For You
          </Title>
          <Description className="text-white">
            GreenTech Resource Worldwide Canada is ranked as the 3rd top
            recruitment agency and immigration consultant in Saskatchewan. We
            are confident in our ability to provide solutions to shorten the
            journey to the peaceful and beautiful country of Canada for your
            entire family
          </Description>
          <List className="">
            <ListItem
              icon={"material-symbols:personal-injury"}
              descriptionClassName="text-white"
            >
              Providing immigration solutions tailored to each client's profile
            </ListItem>
            <ListItem
              icon={"material-symbols:connecting-airports"}
              descriptionClassName="text-white"
            >
              Connecting clients with employers in Canada Promoting business
            </ListItem>
            <ListItem
              descriptionClassName="text-white"
              icon={"lineicons:investment"}
            >
              Investment projects Ensure safe and smooth settlement services
            </ListItem>
          </List>
          <Description className="text-white mt-4">
            The GreenTech Resources Worldwide Canada team serves clients from
            diverse backgrounds worldwide and can provide support in languages
            such as Vietnamese, Tagalog, Arabic, Chinese, French, and Spanish.
          </Description>
        </div>
      </div>
    </section>
  );
}
