"use client";
import React from "react";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ServicesCard } from "@/components/ui/services-card";
import HoverCard from "@/components/ui/hover-card";
import ContentBox from "@/app/revamp/revamp-components/content-box";

export default function PathwayFromStudyToPr() {
  return (
    <>
      <ContentBox
        title="Pathway from Study to PR"
        subtitle="Canada Immigration Program"
        description={[
          `Common Pathway for International Students to Become Permanent
                Residents in Canada`,
        ]}
      />
      <div className="flex flex-col gap-8">
        <Container>
          <Title
            subtitle="Completion of a Study Program in Canada"
            description={[
              `Enroll in a study program at a designated learning
                      institution in Canada.`,
              `Ensure compliance with immigration and study regulations
                      during your study period.`,
            ]}
          />

          <Title
            subtitle="Working under Post-Graduation Work Permit (PGWP)"
            description={[
              `After completing your study program in Canada, apply for a
                      Post-Graduation Work Permit (PGWP). PGWP allows you to
                      work in Canada for a specific duration after graduation (8
                      months to 3 years, depending on your program)`,
              ` Accumulating work experience in Canada can enhance your
                      chances of obtaining permanent residency.`,
            ]}
          />

          <Title
            subtitle="Get Permanent Residency through Popular Routes"
            description={[`Permanent Residency through Popular Routes`]}
          />
        </Container>
        <Container className="flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <Title
              subtitle="For Post-Graduate students"
              title={"Where is it easy to apply for permanent residency?"}
              description={[
                `The competition in Canada’s Express Entry system is currently very
              high, and the required scores for receiving an Invitation to Apply
              (ITA) for permanent residency through the Canadian Experience
              Class (CEC) or Federal Skilled Worker (FSW) programs are quite
              competitive. Therefore, if you plan to study abroad and wish to
              stay, work, and obtain permanent residency in Canada, you should
              consider your choice of school, study programs, and provincial
              immigration policies.`,
                `Some provinces and territories in Canada offer Post-Graduation
              Immigration Programs specifically for international students.
              These programs typically require that international students have
              completed a study program in the respective province or territory
              and meet specific requirements. If you’re interested, consider
              reaching out to GTR Worldwide to learn more about the specific
              criteria for nomination`,
              ]}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            {dummypathway.map((item, index) => (
              <HoverCard
                className=""
                key={item.id}
                color={item.color}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
        <Container className="flex flex-col gap-10">
          <Title
            subtitle="STUDY TO PR"
            title={"What can we help you?"}
            description={[
              `Immigration policies can change over time, so it’s essential to
                stay updated with us for the latest information from the
                respective provincial or territorial immigration authorities.`,
              `Consult GreenTech Resources Worldwide Canada experts to
                understand specific requirements and eligibility for these
                pathways based on your circumstances`,
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-2 w-full ">
            {countriesProgram.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Container>
      </div>
      <CTADefault
        title="Take the first step towards your family&aposs Canadian dream
"
        subtitle={`Book a consultation today to explore immigration options
                and secure your family&aposs future in Canada.`}
        image={"/service.jpg"}
      />
    </>
  );
}
const dummypathway = [
  {
    id: 1,
    color: "bg-sky-400",
    title: "Federal Skilled Worker (FSW)",
    description:
      "Participate in the Canadian Express Entry system, where you compete with other candidates to receive an Invitation to Apply for permanent residency. Express Entry uses a ranking system based on various factors, including age, education, work experience, and language proficiency in English or French",
  },
  {
    id: 2,
    title: "Canadian Experience Class (CEC)",
    color: "bg-red-400",
    description:
      "If you have sufficient work experience in Canada and meet the criteria of the Canadian Experience Class program, you can apply for permanent residency through this pathway. CEC is often a favorable choice for individuals with Canadian work experience",
  },
  {
    id: 3,
    color: "bg-yellow-400",
    title: "Provincial Nominee Program (PNP)",
    description:
      "If you intend to settle in a specific province or territory of Canada, consider the Provincial Nominee Program (PNP). Each province has its own unique requirements and criteria. If you are nominated through a PNP stream, you will have the opportunity to apply for provincial nomination and qualify for permanent residency",
  },
  {
    id: 4,
    color: "bg-green-400",
    title: "Other pathways to Canada PR",
    description:
      "Explore other immigration options, such as Family Sponsorship, the Start-Up Visa (SUV) program, and more. Consulting with GTR Worldwide to navigate the complex process of Canadian immigration and choose the best option for your personal circumstances and objectives.",
  },
];

const countriesProgram = [
  {
    id: 1,
    title: "Sasketchewan SINP",
    description:
      "Saskatchewan is well-known for the Saskatchewan Immigrant Nominee Program (SINP). Saskatchewan has a strong and diverse economy, providing opportunities for employment and entrepreneurship.",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 2,
    title: "Ontario OINP",
    description:
      "Ontario offers the Ontario Immigrant Nominee Program (OINP) - International Students stream for international students. If you have graduated in Ontario and meet specific requirements, you may be nominated for permanent residency",
    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 3,
    title: "British Columbia BC PNP",
    description:
      "British Columbia offers the BC Provincial Nominee Program (BC PNP) - International Post-Graduate category for international graduates from universities and colleges in BC",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 4,
    title: "Alberta AINP",
    description:
      "Alberta Immigrant Nominee Program (AINP) also has options for international students, including the Alberta Opportunity Stream and Alberta Express Entry Stream​",
    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 5,
    title: "Manitoba MPNP",
    description:
      "Manitoba offers the Manitoba Provincial Nominee Program (MPNP) - International Education Stream for nominating international graduates in Manitoba.",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[54px]" />,
  },

  {
    id: 6,
    title: "Nova Scotia NSNP",
    description:
      "Nova Scotia has the Nova Scotia Nominee Program (NSNP) - International Graduate Entrepreneur Stream for international graduates in Nova Scotia with a business plan",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
];
