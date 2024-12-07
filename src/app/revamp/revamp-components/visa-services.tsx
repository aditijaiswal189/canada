"use client";
import { Description, Subtitle, Title } from "./heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ServiceCard from "./service-card";

export function VisaServices({
  title = "Explore Our Immigration Services",
  subtitle = "SERVICE WE PROVIDE",
  description = "Our goal is to provide customers with the best service, for us to help customers overcome their barriers and obtain Permanent Residency in Canada",
  services = [
    {
      id: 1,
      image: "/immigrate.jpg",
      icon: "mynaui:aeroplane",
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
      icon: "ic:baseline-work-outline",
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
      icon: "streamline:money-graph-bar-increase-up-product-performance-increase-arrow-graph-business-chart",

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
      icon: "guidance:study-room",
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
      icon: "guidance:changin-room-family",
      image: "/family.jpg",
      subtitle:
        "The program allows eligible individuals to sponsor their close family members for permanent residency in Canada.",
      labels: [
        "Sponsoring a spouse or partner",
        "Sponsoring dependent children",
      ],
      description:
        "Other than the regular visa application programs, people can also apply for a visa or even permanent residence under certain sponsorship programs which allow eligible individuals to sponsor their close family members for permanent residency in Canada.",
      href: "/family-sponsorship",
    },
  ],
}) {
  return (
    <section className="py-14 px-8">
      {/* Header Section */}
      <div className="text-center mb-12 flex flex-col gap-4">
        <Subtitle className="" position="center">
          {subtitle}
        </Subtitle>
        <Title className="text-3xl md:text-4xl font-bold">{title}</Title>
        <Description className="w-[50%] relative text-center mx-auto">
          {description}
        </Description>
      </div>

      {/* Swiper Section */}
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="flex gap-2"
        style={{ width: "100%" }}
        modules={[Autoplay]}
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.id || index}>
            <ServiceCard
              title={service.title}
              imageUrl={service.image}
              number={index + 1}
              description={service.description}
              iconUrl={service.icon}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
