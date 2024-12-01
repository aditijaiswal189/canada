"use client";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { CardWithImage } from "./card-with-image";

export default function PnpProgramSlider() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      className="flex  gap-2 overflow-hidden mt-4 mb-4"
      style={{ width: "100%" }}
      modules={[Autoplay]}
      breakpoints={{
        // When the viewport is >= 768px
        1300: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 4,
        },
        608: {
          slidesPerView: 2,
        },
        // When the viewport is >= 320px
        320: {
          slidesPerView: 1,
        },
      }}
    >
      {config.map((item, index) => (
        <SwiperSlide key={index}>
          <CardWithImage
            image={item.image}
            title={item.title}
            description={item.des}
            href={item.href}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const config = [
  {
    id: 1,
    image: "/alberta.png",
    title: "Alberta",
    des: "Highlighting the Alberta Rural Renewal program, which provides opportunities for skilled workers to apply for PR directly from Vietnam.",
    href: "/provincial-nomination-pnp/alberta-immigration-aaip",
  },
  {
    id: 2,
    image: "/saskatchewan.jpg",
    title: "Saskatchewan",
    des: "The Saskatchewan Experience pathway allows workers to apply for provincial nomination and PR after 6 months of work. Apply for PR from Vietnam with JAL.",
    href: "/provincial-nomination-pnp/saskatchewan-sinp",
  },
  {
    id: 4,
    image: "/british.jpg",
    title: "British Columbia",
    des: "British Columbia (BC) is a province in western Canada, famous for its breathtaking and diverse natural landscapes. The provincial capital is Victoria, located on Vancouver Island, while the largest city is Vancouver, located on the mainland.",
    href: "/provincial-nomination-pnp/british-columbia-bcpnp",
  },
  {
    id: 5,
    image: "/ontario.png",
    title: "Ontario",
    des: "The Ontario Immigrant Nominee Program (OINP) is the province's main immigration program. It aims to attract skilled workers, entrepreneurs, and investors to live and work in Ontario, contributing to the province’s economic growth. Through this program, applicants nominated by Ontario can apply for permanent residence in Canada.",
    href: "/provincial-nomination-pnp/ontario-oinp",
  },
  {
    id: 6,
    image: "/manitoba.png",
    title: "Manitoba",
    des: "The Manitoba Provincial Nominee Program (MPNP) is the main immigration program for Manitoba. This program is designed to support the province's economic development based on labor market and economic needs. Through this program, future immigrants with skills and experience selected by the province can receive Manitoba’s provincial nomination certificate.",
    href: "/provincial-nomination-pnp/manitoba-mpnp",
  },
  {
    id: 7,
    image: "/newbrunswick.png",
    title: "New Brunswick",
    des: "The New Brunswick Provincial Nominee Program (NBPNP) aims to attract and retain skilled workers, entrepreneurs, and graduates who can successfully integrate into the province’s labor market and community. Successful applicants will receive a provincial nomination certificate, which supports their application for permanent residence with the Government of Canada.",
    href: "/provincial-nomination-pnp/new-brunswick-nbpnp",
  },
  {
    id: 8,
    image: "/northwestterritories.png",
    title: "Prince Edward Island",
    des: "Prince Edward Island (PEI) is a small province located in eastern Canada. It is the smallest and greenest province in Canada, known for its pristine nature, clean water, and fresh air. Agriculture, fisheries, and tourism are the key industries driving the economy of Prince Edward Island.",
    href: "/provincial-nomination-pnp/prince-edward-island-peipnp",
  },
];
