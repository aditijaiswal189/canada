import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import { truncateTextHeading } from "@/components/ui/newsCard";
import { ServicesCard } from "@/components/ui/services-card";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import { workersList } from "@/components/ui/workerlistMap";
import ContentBox from "@/app/revamp/revamp-components/content-box";
import CallToAction from "@/app/revamp/revamp-components/cta";
import { Description } from "@/app/revamp/revamp-components/heading";
import HighlightCards from "@/app/revamp/revamp-components/highlighting-card";
import { AccordionSection } from "@/app/revamp/revamp-components/accordion-section";
import { title } from "process";

export default function FedralSkilledTrade() {
  return (
    <>
      <ContentBox
        className="lg:-mt-0.5"
        subtitle="Express Entry"
        title="Federal Skilled Trades"
        description={[
          `To be eligible for the Federal Skilled Trades Program (FST),
      candidates must have a minimum of two years of work experience
      in a skilled trade within the last five years. Additionally,
      candidates may be required to have trade certificates issued by
      a Canadian province or territory.`,
        ]}
      />

      <Container>
        <div className="flex-1 flex flex-col gap-1">
          <Title
            subtitle="Federal Skilled Trades​"
            title={" Minimum Criteria"}
          />

          <div className="flex flex-col justify-start gap-1">
            <Description className=" text-left">
              To be eligible, you must meet all the minimum requirements for
              your skilled trades work experience, job offer or certificate of
              qualification and language ability
            </Description>
            <Description className="  text-left">
              Before applying, candidates should carefully review the program
              requirements and ensure they meet the necessary qualifications.
              Additionally, individuals in skilled trades may also consider
              seeking employment through the Provincial Nominee Program (PNP) if
              a particular province has a demand for their skills.
            </Description>
          </div>
          <AccordionSection items={minimumCriteria} className="mt-4" />
        </div>
      </Container>
      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            titleClassName="leading-[45px]"
            subtitle="Express Entry"
            title={
              "Factors that increase your chance to receive Invitation to Apply (ITA) in the Express Entry Program"
            }
          />

          <Description className=" text-left">
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
      <Container>
        <Title
          subtitle="Federal Skilled Trades​"
          title="Common Skilled Trades​"
        />

        <HighlightCards
          mainClassName="px-0 py-0"
          config={skilledTradesConfig}
          icon={true}
        />
      </Container>
      <Container>
        <Title
          subtitle="Express Entry"
          title="What can we help you?"
          description="GTR Worldwide can assist you in increasing your Comprehensive Ranking System (CRS) score for Express Entry in several ways:"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 max-w-7xl mx-auto">
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
    title: "Profile Assessment",
    description:
      "Our RCIC and expert team can evaluate your qualifications, work experience, and personal circumstances to identify your potential jobs and employers in Canada.",
    icon: (
      <div className="w-full rounded-md flex justify-center items-center">
        <div className="w-[100px] h-[100px] relative">
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-blue-100/40 to-cyan-300/40"></div>
          <img
            src="/electric.png"
            className="rounded-full w-full h-full"
            alt=""
          />
        </div>
      </div>
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

const skilledTradesConfig = [
  {
    title: "Electricians",
    description:
      "Electricians install, maintain, and repair electrical systems",
  },
  {
    title: "Plumbers",
    description:
      "Plumbers work on water and drainage systems in residential, commercial, and industrial settings",
  },
  {
    title: "Welders",
    description:
      "Welders join and cut metal parts using various welding techniques",
  },
  {
    title: "Carpenters",
    description:
      "Carpenters construct, renovate, and repair wooden structures and frameworks",
  },
  {
    title: "Machinists",
    description:
      "Machinists operate machine tools to produce precision parts and instruments",
  },
  {
    title: "Construction Managers",
    description:
      "Construction managers oversee and coordinate construction projects, ensuring they are completed on time and within budget",
  },
  {
    title: "Heavy-Duty Equipment Mechanics",
    description:
      "These mechanics maintain and repair heavy machinery used in construction, manufacturing, and transportation.",
  },
  {
    title: "Automotive Service Technicians",
    description:
      "Automotive service technicians diagnose and repair problems in vehicles",
  },
  {
    title: "Crane Operators",
    description:
      "Crane operators operate cranes to lift and move heavy materials",
  },
  {
    title: "Chefs, Cooks, Butchers, and Bakers",
    description:
      "Prepare and cook a wide variety of foods; package meat products; create and bake a diverse range of bread, pastries, and desserts",
  },
];

const minimumCriteria = [
  {
    title: "SKILLED TRADES WORK EXPERIENCE",
    content: [
      "Have at least 2 years of full-time work experience (or an equal amount of part-time work experience) in a skilled trade within the 5 years before you apply.",
      "Meet the job requirements for that skilled trade as set out in the National Occupational Classification (NOC)",
    ],
  },
  {
    title: "language",
    content: [
      "At least CLB/NCLC 4 for Reading and Writing, and CLB/NCLC 5 for Listening and Speaking",
    ],
  },
  {
    title: "Job Offer or Certificate of Qualification",
    content: [
      `You must have a valid job offer of full-time employment for a total period of at least 1 year or
certificate of qualification in your skilled trade issued by a Canadian provincial, territorial or federal authority. This certificate is issued by the provincial or territorial body that governs trades in their province or territory, or a federal authority. To get a certificate, the provincial, territorial or federal authority must assess your training, trade experience and skills to decide if you’re eligible to write a certification exam.`,
    ],
  },
  {
    title: "CRS",
    content: [`Pass the initial screening with a score of 67 points`],
  },
];
