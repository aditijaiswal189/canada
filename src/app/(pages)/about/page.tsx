"use client";
import ContentWithCard from "@/app/revamp/revamp-components/content-with-card";
import { Feature } from "@/app/revamp/revamp-components/feature";
import { FULLCTA } from "@/app/revamp/revamp-components/full-cta";
import {
  CardTitle,
  Description,
  ListItem,
  Subtitle,
  Title,
} from "@/app/revamp/revamp-components/heading";
import HighlightCards from "@/app/revamp/revamp-components/highlighting-card";
import IconBackground from "@/app/revamp/revamp-components/icon-background";
import ImageFrameSection from "@/app/revamp/revamp-components/image-frame-section";
import { StatsSection } from "@/app/revamp/revamp-components/stats-section";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/custom";
import MovingCardBorder from "@/components/ui/moving-card-border";
import Glass from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import CountUp, { useCountUp } from "react-countup";

const departmentsConfig = [
  {
    id: 1,
    title: "Business Immigration Department",
    description:
      "A dedicated team of business immigration specialists, with extensive experience and industry relationships, specializing in supporting business projects and Canadian investment immigration.",
  },
  {
    id: 2,
    title: "Canada Recruitment Department",
    description:
      "Specialized in working closely with partners and businesses in Canada. They also manage the CIC Canada Job Bank.",
  },
  {
    id: 3,
    title: "Application Processing Team",
    description:
      "A team of seasoned professionals skilled in the management and oversight of immigration applications to ensure that your documentation is complete, accurate, and submitted correctly to avoid errors or delays.",
  },
  {
    id: 4,
    title: "Asian Customer Service Center",
    description:
      "We have established a customer service center in the Philippines to ensure optimal service and support for our valued clients.",
  },
];

const ctaData = {
  flip: false,
  backgroundColor: "bg-black",
  imageSrc: "/hero-3.jpg",
  subtitle: "GreenTech Resource Worldwide Canada",
  title: "We Are The Leading Canada Immigration Company",
  description:
    "GreenTech Resource Worldwide Canada is ranked as the 3rd top recruitment agency and immigration consultant in Saskatchewan. We are confident in our ability to provide solutions to shorten the journey to the peaceful and beautiful country of Canada for your entire family",
  listItems: [
    {
      icon: "material-symbols:personal-injury",
      text: "Providing immigration solutions tailored to each client's profile",
    },
    {
      icon: "material-symbols:connecting-airports",
      text: "Connecting clients with employers in Canada",
    },
    {
      icon: "lineicons:investment",
      text: "Promoting business investment projects",
    },
  ],
  additionalDescription:
    "Established in 2016, GreenTech Resource Worldwide Canada has its headquarters based in Regina, Saskatchewan, Canada.",
  highlightClassName: "text-highlight",
};

export default function About() {
  return (
    <div>
      <FULLCTA {...ctaData} />
      <StatsSection />
      <ImageFrameSection
        subtitle="Our team"
        title="The minds behind the magic."
        descriptionClassName="text-sm"
        description="We take immense pride in our collaboration with licensed immigration experts certified by RCIC, under the experienced and passionate leadership of Mr. Manoj Goswami – Regulated Canadian Immigration Consultant (RCIC), Founder, CEO of GreenTech Resource Worldwide Canada. Mr. Manoj Goswami is a licensed and registered Regulated Canadian Immigration Consultant (RCIC) with over a decade of experience in recruitment, consulting, and immigration file support."
        additionalDescription={[
          "Manoj Goswami, an immigrant to Canada since the early 2000s, brings nearly two decades of experience to his role. He holds an Executive Master of Business Administration from the University of Regina’s Levin School of Business and has studied at prestigious institutions such as the University of Toronto and Ashton College in British Columbia. Manoj boasts a rich portfolio of designations, including P.Ag, PMP, SCMP, CPSM, and CRM, which paved the way for his career as an Immigration Consultant and Foreign Worker Recruiter since 2016. He is a Registered Canadian Immigration Consultant (RCIC) and a proud member of professional organizations like CICC and CAPIC.",
          "In addition to fluent English, Manoj is proficient in nine languages, including Hindi, Urdu, Nepali, and Bengali. The GreenTech Resources Worldwide Canada team serves clients from diverse backgrounds worldwide and can provide support in languages such as Vietnamese, Tagalog, Arabic, Chinese, French, and Spanish",
        ]}
      />

      <ContentWithCard />

      <div className="flex flex-col gap-6 w-full">
        <div>
          <Subtitle position="center" className="text-center">
            GreenTech Resource Worldwide Canada
          </Subtitle>
          <Title className="text-center">Our Services</Title>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 px-10 h-max justify-start items-start">
          {data.map((item, index) => (
            <Feature
              index={index}
              key={index}
              className=""
              description={
                <div className="flex gap-1.5 py-4 flex-col justify-start items-start w-full relative z-10 overflow-y-auto pretty-scroll ">
                  {item.list.map((item, index) => (
                    <ListItem
                      key={index}
                      className="list-none text-xs flex gap-1 justify-start items-start text-left text-black/60"
                    >
                      {item.title}
                    </ListItem>
                  ))}
                </div>
              }
              icon={"ooui:view-details-ltr"}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2 px-10">
        <Subtitle
          className="tracking-widest text-xl text-center"
          position="center"
        >
          Our Partners
        </Subtitle>

        <div className="flex flex-col justify-center items-center gap-6">
          <Title className="tracking-wide text-center  text-black/70">
            Strategic Partners
          </Title>
          <Description className="text-sm text-black/60 text-center">
            With an expansive vision in developing Canadian immigration
            services, we are committed to seeking and building close
            partnerships with partners in key markets such as Vietnam, India,
            South Africa, Mexico, and the Philippines. We see tremendous
            potential in these countries to support people in settling and
            working in Canada, including high-quality labor, multi-disciplinary
            experts, and entrepreneurs.
          </Description>
          <Description className="text-sm text-black/60 text-center">
            We believe that through close collaboration with partners in these
            markets, we can offer diverse and flexible Canadian immigration
            solutions, helping many individuals successfully complete their
            immigration journey and thrive in their new lives in Canada.
          </Description>
        </div>

        <Button
          className="py-3 w-[190px] mx-auto mt-6"
          icon={
            <div className="flex gap-2 text-[10px] justify-center items-center">
              <Icon icon={"mdi:phone"} />
              <span>+1855 477 9797</span>
            </div>
          }
        >
          <span className="text-[10px] text-white relative flex gap-1 justify-start items-center">
            <Icon
              icon={"teenyicons:appointments-outline"}
              className="-mt-0.5"
            />
            BOOK AN APPOINTMENT
          </span>
        </Button>
      </div>
      <HighlightCards config={departmentsConfig} />
    </div>
  );
}

const data = [
  {
    id: 1,
    title: "Entrepreneurs",
    image: "/aaa.jpg",
    icon: "",
    list: [
      {
        id: 1,
        title: "Conduct initial assessment based on intake criteria",
      },
      {
        id: 2,
        title: "Develop & refine the innovative business concepts",
      },
      {
        id: 3,
        title: "Incubator selection",
      },
      {
        id: 4,
        title: "Pitch deck refinement",
      },
      {
        id: 5,
        title: "Pitch coaching",
      },
      {
        id: 6,
        title: "Closed Work Permit for Applicant",
      },
    ],
  },
  {
    id: 2,
    title: "Foreign Workers",
    image: "/aaa.jpg",
    icon: "",
    list: [
      {
        id: 1,
        title: "Recruitment at CICCanadaJobs",
      },
      {
        id: 2,
        title: "Provincial nomination",
      },
      {
        id: 3,
        title: "Closed work permit for applicant",
      },
      {
        id: 4,
        title: "Open work permit for spouse",
      },
      {
        id: 5,
        title: "Visitor/ Study Permit for dependent children",
      },
      {
        id: 6,
        title: "PR application",
      },
    ],
  },
  {
    id: 3,
    title: "Students",
    icon: "",
    image: "/aaa.jpg",
    list: [
      {
        id: 1,
        title: "Study Permit",
      },
      {
        id: 2,
        title: "Post graduation work permit",
      },
      {
        id: 3,
        title: "Open Work Permit for spouses",
      },
      {
        id: 4,
        title: "Consulting Pathway to PR",
      },
      {
        id: 5,
        title: "Visitor/ Study Permit for dependent children",
      },
      {
        id: 6,
        title: "Settlement",
      },
    ],
  },
  {
    id: 4,
    title: "Employers",
    image: "/aaa.jpg",
    icon: "",
    list: [
      {
        id: 1,
        title: "PNP/LMIA registration for employers",
      },
      {
        id: 2,
        title: "Planning, searching, and screening suitable candidates",
      },
      {
        id: 3,
        title: "Streamlining the interview process",
      },
      {
        id: 4,
        title: "Assisting with employment offers",
      },
      {
        id: 5,
        title: "Handling PNP/LMIA and work permit procedures for candidates",
      },
      {
        id: 6,
        title: "Settlement",
      },
    ],
  },
];
