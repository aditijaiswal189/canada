import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import {
  Description,
  Subtitle,
  Title as TitleRevamp,
} from "@/app/revamp/revamp-components/heading";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import { truncateTextHeading } from "@/components/ui/newsCard";
import { ServicesCard } from "@/components/ui/services-card";
import { Button } from "@/components/ui/custom";
import { workersList } from "@/components/ui/workerlistMap";
import ContentBox from "@/app/revamp/revamp-components/content-box";
import CallToAction from "@/app/revamp/revamp-components/cta";
export default function FedralSkilledWorker() {
  return (
    <>
      <ContentBox
        className="lg:-mt-0.5"
        subtitle="Express Entry"
        title="Federal Skilled Worker"
        description={[
          "This program does not require a connection to Canada, making it an ideal immigration option for foreign citizens living outside of Canada. You do not need to be currently living in Canada, have any immediate family members residing in the country, nor have previous work or educational experiences in Canada.",
          "However, this program has high requirements for work experience, educational qualifications, age, and language proficiency in English/French. All applicants for the Federal Skilled Worker Program (FSW) must have at least one year of work experience in a specialized field",
        ]}
      />

      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Subtitle className="text-xl">Express Entry</Subtitle>
          <TitleRevamp className="w-full leading-[45px] text-left ">
            Factors that increase your chance to receive Invitation to Apply
            (ITA) in the Express Entry Program
          </TitleRevamp>
          <Description className="text-left">
            Through Express Entry, candidates and their family can participate
            and compete for points to receive an ITA – Invitation to Apply from
            the Canadian government to immigrate and work in the country.
          </Description>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workersList.map((item, index) => (
              <ServicesCard
                key={index}
                id={item.id}
                title={item.title}
                description={truncateTextHeading(item.description, 30)}
              />
            ))}
          </div>
        </div>
      </Container>
      <CTA />
      <CallToAction />
    </>
  );
}

function CTA() {
  return (
    <Container>
      <div className="flex-1 flex flex-col gap-2 pt-8 justify-center items-center">
        <Title
          subtitle="Express Entry"
          title="How can we help you?"
          description="GTR Worldwide can assist you in increasing your Comprehensive Ranking System (CRS) score for Express Entry in several ways:"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 w-full mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>

        {/* <Title
          className="justify-center items-center mt-4"
          title={
            <p className="text-2xl text-black/50 w-full text">
              Take the first step towards your family&aposs Canadian dream
            </p>
          }
          description={
            <p className="text-center  text-black/50 w-[70%]">
              For personalized assistance and expert guidance, contact GreenTech
              Resources Worldwide Canada so our experts can help you navigate
              the work permit application process and ensure a smooth transition
              to working in Canada
            </p>
          }
        /> */}
      </div>
    </Container>
  );
}

const features = [
  {
    id: 1,
    title: "Profile Assessment",
    description:
      "Our RCIC and expert team can evaluate your qualifications, work experience, and personal circumstances to identify your potential jobs and employers in Canada.",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 2,
    title: "Provincial Nominee Programs (PNPs)",
    description:
      "We can advise on PNPs and help you prepare for provincial nominations, which is suitable with your experiences.",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 3,
    title: "Secure a Job Offers",
    description:
      "We can assist in searching for job in Canada. We can also help you understand the requirements for a valid job offer, resume preparation and interview coaching.",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[54px]" />,
  },
  {
    id: 4,
    title: "Educational credential assessment",
    description:
      "We can help you navigate the process of obtaining an ECA for your foreign educational credentials,",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
];
