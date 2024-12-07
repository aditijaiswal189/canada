"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { TestimonialCard } from "./testimonial-card";
import { Subtitle } from "./heading";

const testimonials = [
  {
    quote:
      "Green Tech Resources are quite professional and helpful. They provided excellent Immigration Consulting required for our smooth processing of Canadian PR. Thank you so much Manoj and team for your great support and counselling.",
    name: "Aditi Joshi",
    image: "/customer/aditi.png",
    role: "feedback published in our google page by customer",
    rating: 5,
  },
  {
    quote:
      "Work with Gtr resources is the best decision that i could took. They helped me with all the process until i got my Pr approved a couple of days ago, me and all my family are so grateful with them. I know that all this process could be scary but they are the best option.",
    name: "Viky Díaz",
    image: "/customer/viky.png",
    role: "feedback published in our google page by customer",
    rating: 5,
  },
  {
    quote:
      "It&aposs been an amazing journey, a friend refered me to Mr Manoj Goswam a very welcoming and patient man.He got me to send my credentials ,I had not done my IELTS test yet and he recommended I do the test,very patient he was all took time but he never gave up on me.Later he introduced me to Ms Zinal I love how transparent they are good bussiness ethics.",
    name: "Freeman Chinonzwa",
    image: "/customer/freeman.jpg",
    role: "feedback published in our google page by customer",
    rating: 5,
  },
  {
    quote:
      "This is Manaswi Chakma from Bangladesh.I am very pleased to work with Mr. Manoj Goswami the way he consult me to reach here in Canada. Specially mention to Mrs. Zinal who was very professional,reliable and smart in each and every step.Finally I will suggest to work with GTR Immigration who is really trying to move in Canada.",
    name: "Manaswi Chakma",
    image: "/customer/manmasi.png",
    role: "feedback published in our google page by customer",
    rating: 5,
  },
  {
    quote:
      "Would like to thank Mr. Manoj Goswami of GTR immigration to get my visitor visa approved in less than a month’s time.  He and his team are very efficient, prompt, and professional.  They know how to get things done.  They assisted me with all the documentation and i had to only sign the documents.",
    name: "Sumita Kolte",
    image: "/customer/sumita.png",
    role: "feedback published in our google page by customer",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Subtitle position="left">HAVE ANY QUESTIONS?</Subtitle>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Explore Why People Say About Us
          </h2>
        </div>

        <div className="relative">
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="flex gap-2"
            style={{ width: "100%" }}
            modules={[Autoplay]}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="">
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-2 hover:bg-red-600 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-2 hover:bg-red-600 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
