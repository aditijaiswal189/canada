"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { getCachedData } from "../../(pages)/custom";
import { TopBar } from "./top-bar";
import { MainNav } from "./navbar-main";
import { Title } from "./heading";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function HeroWithNav() {
  const path = usePathname();
  const lastPath = path.split("/").pop();
  const { text, image } = getCachedData(lastPath);
  const img = image || "/gt-removebg.png";
  return (
    <section className="relative w-full h-[75vh]">
      <header className="w-full">
        <TopBar />
        <MainNav />
      </header>
      <div className="relative overflow-hidden h-full flex justify-center items-center">
        <div className="w-full h-full ">
          <div className="relative h-full bg-black px-6 py-16 lg:px-12 xl:px-16 flex justify-center items-center">
            <div
              className="absolute h-full top-0 left-0 w-full inset-0 opacity-40 background-position-center bg-cover"
              style={{ backgroundImage: `url(${img})` }}
            />

            <div
              className="z-10 text-white  text-center relative w-[70%] mx-auto leading-[60px]  text-[60px] font-bold"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>
      </div>
      <div className="absolute bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 w-full py-1 bottom-[-111px] px-12 flex justify-start items-center gap-2 cursor-pointer">
        <Link
          // to={"/"}
          href={"/"}
          className="text-white/60 uppercase font-primary tracking-widest"
        >
          HOME
        </Link>
        <Icon
          icon={"zondicons:cheveron-right"}
          className="text-white/60 -mt-0.5"
        />
        <span className="text-white relative  font-bold uppercase font-primary tracking-widest">
          {lastPath}
        </span>
      </div>
    </section>
  );
}

{
  /* <div className="relative z-10 max-w-xl">
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
</div> */
}
