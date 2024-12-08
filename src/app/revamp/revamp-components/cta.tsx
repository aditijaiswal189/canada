import React from "react";
import { Description, Title } from "./heading";
import { Button } from "@/components/ui/custom";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function CallToAction() {
  return (
    <div className="bg-green-600 h-80 flex justify-between items-center w-full  relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="py-4 flex-1 flex flex-col gap-2 px-6 lg:px-12 ">
        <Title className="text-2xl text-white w-full text-left">
          Take the first step towards your Family's Canadian dream
        </Title>
        <Description className="text-white">
          For personalized assistance and expert guidance, contact GreenTech
          Resources Worldwide Canada so our experts can help you navigate the
          work permit application process and ensure a smooth transition to
          working in Canada
        </Description>
        <Button
          className="py-2 px-4 mt-3 w-max bg-white text-black"
          icon={
            <div className="flex gap-2 justify-center items-center text-xs ">
              <Icon icon={"mdi:phone"} className="text-black" />
              <span className="text-black">+1855 477 9797</span>
            </div>
          }
        >
          <span className="text-sm ">Book An Appointment</span>
        </Button>
      </div>
      <div className="w-full h-80 flex-1 flex justify-end items-end">
        <img
          src="/revamp/immigration-couple.webp"
          className="object-fit w-full h-full"
          alt=""
        />
      </div>
    </div>
  );
}
