import Container from "@/components/ui/container";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { dummyCertificate } from "@/components/ui/dummycertificateMap";
import Title from "@/components/ui/Title";
import React from "react";
export default function CertificateMembership() {
  return (
    <Container className="flex flex-col py-20 gap-20">
      <Title title="Certificate and Membership" />
      <div className="">
        <div className="h-max md:h-[75rem] relative p-6 gap-x-16  grid-cols-1  grid md:grid-cols-3  items-center justify-center ">
          {dummyCertificate.map((item, index) => (
            <DirectionAwareHover
              imageUrl={item.url}
              key={item.id}
              className="w-full p-8 rounded-lg "
            >
              <p className="font-bold text-xl">{item.title}</p>
              {/* <p className="font-normal text-sm"></p> */}
            </DirectionAwareHover>
          ))}
        </div>
      </div>
    </Container>
  );
}
