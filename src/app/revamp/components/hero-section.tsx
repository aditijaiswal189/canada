"use client";

import { Button } from "@/components/ui/button";
import { CassetteTape, Plane, Handshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Subtitle, Title } from "./heading";
import CutCard from "./cut-card";
import PatternBackground from "./pattern-background";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const services = [
  {
    title: "RECRUITMENT",
    icon: Handshake,
  },
  {
    title: "IMMIGRATION",
    icon: Plane,
  },
  {
    title: "SETTLEMENT",
    icon: CassetteTape,
  },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative">
      {/* Hero Main Content */}
      <div className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left Column */}
          <div className="relative bg-black px-6 py-16 lg:px-12 xl:px-16">
            {/* Dot Pattern Background */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-xl">
              <div className="inline-block bg-green-600 px-4 py-2 text-sm text-white mb-6">
                Trusted Recruitment Agency
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Achieve your family Canada dreams with us
              </h1>
              <p className="text-gray-300 mb-8">
                We support companies in their digital transformation by creating
                internal tools and providing software development consulting.
              </p>
              <Button
                size="lg"
                className="bg-green-600 rounded-none text-sm hover:bg-green-700 text-white"
              >
                DISCOVER MORE
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="/revamp/hero.jpg"
              alt="Happy family traveling"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Services Navigation */}
        <div className="bg-green-600">
          <div className="container mx-auto grid grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 px-4 py-4 text-white text-sm border-r border-white/20 last:border-0"
              >
                <service.icon className="h-5 w-5" />
                <span className="hidden sm:inline">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Citizenship Test Section */}
      <PatternBackground>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 flex flex-col gap-3">
            <Subtitle position="center">WHAT ARE YOU LOOKING FOR?</Subtitle>
            <Title>Comprehensive solutions for all your needs!</Title>
          </div>

          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="flex gap-2"
            style={{ width: "100%" }}
            modules={[Autoplay]}
          >
            {CtaDetails.map((test, index) => (
              <SwiperSlide key={index}>
                <CutCard
                  key={index}
                  title={test.title}
                  description={test.description}
                  href={test.href}
                  image={test.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </PatternBackground>
    </section>
  );
}

const CtaDetails = [
  {
    id: 1,
    image: "/immigrate.jpg",
    title: "Immigrate",
    subtitle:
      "Exploring Canada for immigration is an exciting and life-altering choice.",
    labels: ["Express Entry Program", "Family Sponsorship"],
    description:
      "With immigration to Canada at an all-time high, now is the perfect time to start your immigration journey. There are numerous pathways to immigrate to Canada and attain permanent residency. While immigration to Canada requires significant financial and emotional investment, the ultimate results are well worth it. Canada consistently ranks among the top countries for quality of life and is known for its positive attitude toward immigration.",
    href: "/immigration/express-entry/federal-skilled-worker",
  },
  {
    id: 2,
    image: "/work.jpg",
    title: "Work",
    subtitle:
      "Working in Canada offers a wide array of opportunities for skilled workers from around the world.",
    labels: ["Express Entry", "PR eligibility"],
    description:
      "Canada with strong economy, quality of life, and inclusive society make it an appealing destination for those seeking career growth and a high standard of living for their family. However, navigating the immigration process and meeting language requirements are essential aspects.",
    href: "work-and-jobs/work-permit",
  },
  {
    id: 3,
    title: "Business",
    image: "/business.jpg",
    subtitle:
      "Invest and build your business while ensuring Canadian permanent residency for your family. ",
    labels: ["Quebec Investor", "Start Up Visa"],
    description:
      "The business immigration visa programs in Canada are designed for individuals who wish to immigrate to Canada to start, invest in, or manage a business. These programs aim to promote economic growth and job creation in Canada.",
    href: "business/federal-programs/self-employed-persons",
  },
  {
    id: 4,
    title: "Study",
    image: "/study.jpg",
    subtitle:
      "Studying in Canada offers a world-class education, diverse cultural experiences, and excellent opportunities for personal and professional growth.",
    labels: ["High Quality Education", "Diverse Campuses and Programs"],
    description:
      "Canada is known for its top-notch educational institutions. Many universities and colleges consistently rank among the best globally. Canadian degrees and diplomas are recognized and respected worldwide..",
    href: "study/study-in-canada",
  },

  {
    id: 5,
    title: "Family Sponsor",
    image: "/family.jpg",
    subtitle:
      "The program allows eligible individuals to sponsor their close family members for permanent residency in Canada.",
    labels: ["Sponsoring a spouse or partner", "Sponsoring dependent children"],
    description:
      "Other than the regular visa application programs, people can also apply for a visa or even permanent residence under certain sponsorship programs which allow eligible individuals to sponsor their close family members for permanent residency in Canada.",
    href: "/family-sponsorship",
  },

  {
    id: 6,
    image: "/doubt.jpg",
    title: "Not Sure",
    subtitle:
      "Feeling uncertain about your immigration journey? Our experienced team of GreenTech Resource Worldwide Canada is here to provide expert guidance and support you!",
    labels: ["Why GTR Immigration?", "Reasonable cost guaranteed quality"],
    description:
      "Saskatchewan stands out as a province in Canada with open immigration schemes that are suitable for many individuals seeking to establish themselves in the country.",
    href: "/about",
  },
];
