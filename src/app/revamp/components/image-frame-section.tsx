import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { CardTitle, Description, Subtitle, Title } from "./heading";
import IconBackground from "./icon-background";

export default function ImageFrameSection({
  image = "/revamp/immigration-couple.webp",
  bgImage = "/revamp/bg-1.jpg",
  subtitle,
  title,
  description,
  point1,
  point2,
  point3,
  point4,
}: {
  image?: string;
  bgImage?: string;
  subtitle?: string;
  title?: string;
  description?: string;
  point1?: string;
  point2?: string;
  point3?: string;
  point4?: string;
}) {
  return (
    <div className="px-8 flex gap-2 min-h-[80vh] py-14">
      <div className="flex-1">
        <div className="flex relative h-[580px] w-[470px]">
          <img
            src={image}
            className="aspect-square object-cover h-full w-full"
          />
          <img
            src={bgImage}
            className="absolute h-[350px] w-[262px] object-cover -right-20 border-[6px] border-white top-[40%] transform -translate-y-1/2"
          />
          <div className="absolute bottom-1 -right-14 bg-green-600 w-8 h-40 "></div>
          <div className="absolute top-1/2 left-[60%] transform -translate-y-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-black bg-opacity-20 flex justify-center items-center  rounded-full">
            <div className="w-[100px] rounded-full h-[100px] bg-green-600 flex justify-center items-center">
              <Icon
                icon={"mdi:airplane-settings"}
                className="text-6xl text-white"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <Subtitle>ABOUT COMPANY</Subtitle>
        <Title className="w-full leading-[50px]">
          We Always Ready To Make Your Canada Dream Come True.
        </Title>
        <Description>
          Our team of experienced professionals is dedicated to your success,
          offering personalized guidance, up-to-date expertise, and unwavering
          support throughout your immigration process. With our proven track
          record, we ensure a smooth, stress-free, and successful transition to
          your new life in Canana
        </Description>
        <div className="grid grid-cols-2 gap-6 mt-4">
          {point1 && point2 && (
            <>
              <div className="flex gap-4 items-center">
                <IconBackground
                  icon={"fluent:people-team-28-regular"}
                  className="bg-green-100"
                  iconClassName="text-5xl text-green-600"
                />
                <CardTitle className="text-xl ">
                  Professional consulting team
                </CardTitle>
              </div>
              <div className="flex gap-4 items-center">
                <IconBackground
                  icon={"ant-design:solution-outlined"}
                  className="bg-green-100"
                  iconClassName="text-5xl text-green-600"
                />
                <CardTitle className="text-xl">
                  Personalized solutions
                </CardTitle>
              </div>
            </>
          )}
          {point3 && point4 && (
            <>
              <div className="flex gap-4 items-center">
                <IconBackground
                  icon={"solar:hand-money-linear"}
                  className="bg-green-100"
                  iconClassName="text-5xl text-green-600"
                />
                <CardTitle className="text-xl ">Affordable cost</CardTitle>
              </div>
              <div className="flex gap-4 items-center">
                <IconBackground
                  icon={"arcticons:adobe-experience-manager"}
                  className="bg-green-100"
                  iconClassName="text-5xl text-green-600"
                />
                <CardTitle className="text-xl ">10+ years experience</CardTitle>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
