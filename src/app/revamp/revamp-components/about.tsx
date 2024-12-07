import React from "react";
import { Description, Subtitle, Title } from "./heading";

export default function About() {
  return (
    <div className="w-full">
      <div className="w-[70%] mx-auto flex">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <Subtitle position="left">About Company</Subtitle>
          <Title>The minds behind the magic </Title>
          <Description>
            We take immense pride in our collaboration with licensed immigration
            experts certified by RCIC, under the experienced and passionate
            leadership of Mr. Manoj Goswami – Regulated Canadian Immigration
            Consultant (RCIC), Founder, CEO of GreenTech Resource Worldwide
            Canada. Mr. Manoj Goswami is a licensed and registered Regulated
            Canadian Immigration Consultant (RCIC) with over a decade of
            experience in recruitment, consulting, and immigration file support.
          </Description>
          <Description>
            Manoj Goswami, an immigrant to Canada since the early 2000s, brings
            nearly two decades of experience to his role. He holds an Executive
            Master of Business Administration from the University of Regina’s
            Levin School of Business and has studied at prestigious institutions
            such as the University of Toronto and Ashton College in British
            Columbia. Manoj boasts a rich portfolio of designations, including
            P.Ag, PMP, SCMP, CPSM, and CRM, which paved the way for his career
            as an Immigration Consultant and Foreign Worker Recruiter since
            2016. He is a Registered Canadian Immigration Consultant (RCIC) and
            a proud member of professional organizations like CICC and CAPIC.
          </Description>
          <Description>
            In addition to fluent English, Manoj is proficient in nine
            languages, including Hindi, Urdu, Nepali, and Bengali. The GreenTech
            Resources Worldwide Canada team serves clients from diverse
            backgrounds worldwide and can provide support in languages such as
            Vietnamese, Tagalog, Arabic, Chinese, French, and Spanish
          </Description>
        </div>
      </div>
    </div>
  );
}
