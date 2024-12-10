import HighlightCards from "@/app/revamp/revamp-components/highlighting-card";
import ListView from "@/app/revamp/revamp-components/list-view";
import TreeViewList from "@/app/revamp/revamp-components/tree-view-list";
import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import { FeatureSection, FeatureSection2 } from "@/components/ui/feature";
import Title from "@/components/ui/Title";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function QuebecInvestor() {
  return (
    <Container className="flex flex-col gap-10">
      <div className="flex flex-col py-10 gap-4 text-left text-black/60 px-8">
        <p className="">
          The Québec Entrepreneur Program is tailored for individuals interested
          in owning and managing a business in Quebec. Successful candidates
          will receive a Québec Selection Certificate (CSQ) and can apply for
          Canadian permanent residency. Applicants must have a legally acquired
          net worth of at least CAD 900,000 and have experience in managing a
          business.
        </p>
      </div>

      <FeatureSection
        title={"Eligibility"}
        description={[
          `With the Québec Entrepreneur Program, you can develop your project either alone or with up to three other people applying to this program for the same project.`,
          `To immigrate to Québec as an entrepreneur, starting and operating an innovative business, you must meet the following conditions.`,
          `Quebec’s dynamic cities, picturesque landscapes, and strong economy make it an appealing choice for immigration. The Business Immigration Programs serve as a bridge for those seeking to contribute to Quebec’s vibrant communities and economic development.`,
        ]}
        subtitle={"Quebec Immigrant Investor Program (QIIP)"}
        childClass="lg:grid-cols-1"
        className="py-8"
      >
        <div className="flex w-full flex-col gap-4 justify-start items-start ">
          {Eligibility.map((item, index) => (
            <div
              key={index}
              className="text-left flex gap-2 items-start justify-center"
            >
              <Icon
                icon={"material-symbols:library-add-check-rounded"}
                className="mt-1"
              />
              <p>{item.item}</p>
            </div>
          ))}
        </div>
      </FeatureSection>
      <Title
        subtitle="Organizations"
        title="Supporting Organizations"
        description={[
          `To establish and run an innovative business in Québec, you are required to collaborate with a support organization, which could be a business accelerator, business incubator, or a university entrepreneurship center`,
        ]}
      />
      <HighlightCards
        config={businessSupportConfig}
        icon={true}
        mainClassName="px-0 py-0"
      />
      <Title
        subtitle="Quebec Entrepreneur Program"
        title="Process"
        description={[
          `Here are the steps for applying for permanent selection under Québec Entrepreneur Program`,
        ]}
      />
      <TreeViewList items={applicationStepsConfig} />

      <Title
        subtitle="Express Entry"
        title="What can we help you?"
        description="GTR Worldwide can assist you in increasing your Comprehensive Ranking System (CRS) score for Express Entry in several ways:"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 w-full">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
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
const Eligibility = [
  {
    id: 1,
    item: "Two years of suitable management or business experience within the five years preceding the application",
  },
  {
    id: 2,
    item: "Investment of $1.2 million into a passive government-guaranteed investment for a period of five years bearing no interest",
  },
  {
    id: 3,
    item: "Intend to settle in the province of Quebec",
  },
  {
    id: 4,
    item: "Enter into an investment agreement with a financial intermediary.",
  },
  {
    id: 5,
    item: " Obtain enough points in the selection grid",
  },
  {
    id: 6,
    item: "Obtain an attestation of learning about democratic values and Québec values",
  },
];

const applicationStepsConfig = [
  {
    title: "Preparing and completing the required forms and documents",
    description: "",
  },
  {
    title: "Paying your application review fee",
    description: `The fees are adjusted on January 1 of each year.

Principal applicant: $1,176
Wife or husband, spouse or common-law partner: $186
Each dependent child: $186`,
  },
  {
    title: "Send your complete application by mail, in one envelope",
    description: "",
  },
];

const businessSupportConfig = [
  {
    title: "Business Accelerator",
    description:
      "An organization with an establishment in Québec that offers support services to individuals whose business projects are designed to grow innovative businesses. In particular, it must provide a service for seeking financing​.",
  },
  {
    title: "Business Incubator",
    description:
      "An organization with an establishment in Québec that offers coaching services to people whose business projects are designed to start innovative businesses.",
  },
  {
    title: "University Entrepreneurship Center",
    description:
      "An organization managed by an institution of higher learning incorporated under the laws of Québec or another province of Canada. It may also be an organization affiliated with such an institution that offers coaching services to entrepreneurs.",
  },
];
