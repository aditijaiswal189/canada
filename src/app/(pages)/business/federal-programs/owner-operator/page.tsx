import ContentBox from "@/app/revamp/revamp-components/content-box";
import CallToAction from "@/app/revamp/revamp-components/cta";
import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import { Eligibility } from "@/components/ui/eligibilityMap";
import HoverCard from "@/components/ui/hover-card";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import { title } from "process";
import React from "react";

export default function OwnerOperator() {
  return (
    <>
      <ContentBox
        title="What is LMIA?"
        subtitle="LMIA"
        description={[
          `A Labour Market Impact Assessment (LMIA) is a document that an
            employer in Canada may need to get before hiring a foreign worker..`,
          `A positive LMIA will show that there is a need for a foreign worker
            to fill the job. It will also show that no Canadian worker or
            permanent resident is available to do the job. A positive LMIA is
            sometimes called a confirmation letter.`,
          `If the employer needs an LMIA, they must apply for one. Once an
            employer gets the LMIA, the worker can apply for a work permit. To
            apply for a work permit, a worker needs:`,
          `a job offer letter`,
          `a contract`,
          `a copy of the LMIA, and,`,
          `the LMIA number.`,
        ]}
      />
      <Container className="flex flex-col gap-20">
        <div>
          <div className="flex w-full flex-col gap-4 justify-start items-start ">
            <Title title={"Eligibility"} description={"What are the steps?"} />
            {Eligibility.map((item, index) => (
              <div
                key={index}
                className="text-left flex gap-2 items-start justify-center"
              >
                <Icon
                  icon={"material-symbols:library-add-check-rounded"}
                  className="mt-1"
                />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <Title
          title={"Ower operator lmia"}
          subtitle="What can we help you?"
          description={[
            "GreenTech Resource Worldwide Canada can help with all the resource and support during the process to help you choose the right place to settle in Canada and support you with launching or purchasing your business. Not only that, we will ensure to make a process of your immigration documents are properly filed with quality and professional manners.",
          ]}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 w-full">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </Container>
      <CallToAction />
    </>
  );
}

const features = [
  {
    id: 1,
    title: "Eligibility Assessment",
    description:
      "Our GTR Business Immigration experts evaluate your eligibility, ensuring you meet program requirements.",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 2,
    title: "Demonstrating Significant Benefit",
    description:
      "We guide you in showing how your business activities will benefit Canada.",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[50px]"
      />
    ),
  },

  {
    id: 3,
    title: "Job Offer Assistance/ Job offer excemption",
    description:
      "We can help you connect with employers to secure a valid job offer or make an exemption if you are entrepreneur or self-employed worker in the fields of arts, culturals or athelics.",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 3,
    title: "Application Completion",
    description:
      "Our RCIC can help applicants navigate the application process, ensuring that all required documentation is correctly completed and submitted. We also provide ongoing support and guidance throughout the application process, ensuring that applicants are well-prepared and informed at every stage.",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[50px]"
      />
    ),
  },
];
