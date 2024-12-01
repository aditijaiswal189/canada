import React from "react";
import { CardTitle, Description } from "./heading";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function CutCard({ title, description, href = "/", image }) {
  return (
    <div className="h-[490px] flex justify-center items-center">
      <div className="bg-white flex flex-col justify-center items-center w-[520px]">
        <div className="-mt-[90px]">
          <img
            src={image}
            alt=""
            className="w-[180px] h-[180px] rounded-full"
          />
        </div>
        <div className="flex w-full flex-col justify-center items-center gap-2  px-3 py-8">
          <CardTitle className={"text-center"}>{title}</CardTitle>
          <Description className={"text-center line-clamp-3"}>
            {description}
          </Description>
          <Link href={href}>
            <Icon icon="material-symbols:arrow-right-alt-rounded" />
          </Link>
        </div>
      </div>
    </div>
  );
}
