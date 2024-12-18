"use client";
import Navbar from "./navbar";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCachedData } from "@/app/(pages)/custom";
// import { Link, useLocation } from "react-router-dom";
export default function HeroDefault() {
  const path = usePathname();
  const lastPath = path.split("/").pop();
  const { text, image } = getCachedData(lastPath);
  const img = image || "/gt-removebg.png";

  return (
    <div
      className="flex flex-col gap-2 mx-auto rounded-2xl bg-center relative bg-cover w-[97%] h-[85vh]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="relative">
        <Navbar defaultStyle={true} />
        <div className="flex justify-center items-center w-full h-full mt-10">
          <div
            className="text-6xl text-center h-full  z-[-10] flex justify-center items-center font-primary tracking-widest text-white md:mt-0 mt-40"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
      <div className="absolute bottom-8 px-12  flex justify-start items-center gap-2 cursor-pointer">
        <Link
          href={"/"}
          className="text-white/60 uppercase font-primary tracking-widest"
        >
          Home
        </Link>
        <Icon
          icon={"zondicons:cheveron-right"}
          className="text-white/60 -mt-1"
        />
        <span className="text-white font-bold uppercase font-primary tracking-widest">
          {lastPath}
        </span>
      </div>
      {/* </div> */}
    </div>
  );
}
