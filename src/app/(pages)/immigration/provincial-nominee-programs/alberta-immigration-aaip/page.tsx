import { FeatureSection, FeatureSection2 } from "@/components/ui/feature";
import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import { truncateTextHeading } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FAQ } from "@/components/ui/FAQMap";
import { featuresPage } from "@/components/ui/appointmentMap";
import ContentBox from "@/app/revamp/revamp-components/content-box";
import HighlightCards from "@/app/revamp/revamp-components/highlighting-card";
import CallToAction from "@/app/revamp/revamp-components/cta";

export default function Alberta() {
  return (
    <>
      <ContentBox
        subtitle="Provincial Nominee Programs"
        title="Alberta Advantage Immigrant Program (AAIP)"
        description={[
          `Starting from March 16, 2022, the Alberta Immigrant Nominee Program (AINP) has been renamed the Alberta Advantage Immigration Program (AAIP). The Alberta Advantage Immigration Program (AAIP) encompasses various smaller programs`,
        ]}
      />

      <Container>
        <Title
          subtitle="Canada provincial nomination program"
          title="Alberta Advantage Immigrant Program (AAIP)"
          description="Starting from March 16, 2022, the Alberta Immigrant Nominee Program (AINP) has been renamed the Alberta Advantage Immigration Program (AAIP). The Alberta Advantage Immigration Program (AAIP) encompasses various smaller programs"
        />
        <h4 className="font-bold text-green-600">FOR SKILLED WORKERS</h4>
        <HighlightCards
          config={SkilledWorkersConfig}
          mainClassName="px-0 py-0"
        />
        <h4 className="font-bold text-green-600">FOR ENTREPRENEURS</h4>
        <HighlightCards
          config={EntrepreneursConfig}
          mainClassName="px-0 py-0"
        />
      </Container>

      <Container className="flex flex-col gap-2">
        <Title subtitle="Roadmap" title={"How to participate ?"} />
        <div className="">
          {faqAlberta.map((item) => {
            return (
              <FAQ
                key={item.id}
                title={item.title}
                id={item.id}
                description={item.description()}
              />
            );
          })}
        </div>
      </Container>
      <Container>
        <Title
          subtitle="Benefits"
          title={"Benefits for your family"}
          description={[
            `  With provincial nomination, your entire family, including your spouse
          and children under 22 years of age (at the time of submitting the
          provincial nomination application), can submit for Canada Permanent
          Resident to enjoy most of the benefits like Canadian citizen`,
          ]}
        />
        <p className="text-sm text-black/60 text-left ">
          During the wait for permanent residency, your family can apply to
          come, work and study in Canada
          <ul className="pl-6 list-disc">
            <li>Free access to elementary and highschool</li>
            <li>Legal protection under Canadian laws</li>
          </ul>
        </p>
        <p className="text-sm text-black/60 text-left ">
          When you become Canada Permanent Resident
          <ul className="pl-6 list-disc">
            <li>
              Freedom to live, study, and work across the entire Canadian
              territor
            </li>
            <li>Access to social welfare</li>
            <li>
              Eligibility to apply for Canadian citizenship after the waiting
              period. Qualify to apply forCanadian citizenship, own the 6th
              strongest passport globally, enjoy visa-free or direct ETA access
              to 185 countries
            </li>
            <li>
              With PR, university tuition fees are only one-third of what
              international students pay, with no restrictions on schools and
              programs
            </li>
          </ul>
        </p>
      </Container>

      <Container>
        <Title
          subtitle="ALBERTA ADvantage immigration program"
          title="What can we help you?"
          description="Each program has its specific requirements; please contact GTR Worldwide for personalized guidance."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 max-w-7xl mx-auto">
          {featuresPage.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </Container>
      <CallToAction />
    </>
  );
}

const faqAlberta = [
  {
    id: 1,
    title: "Alberta Opportunity Stream",
    description: () => (
      <ul className="pl-6 list-disc">
        <li>
          Eligibility Check: Ensure you meet Alberta’s eligibility criteria,
          including work experience, language proficiency, and occupation. A
          full-time job in Alberta is mandatory.
        </li>
        <li>
          Submit Expression of Interest (EOI): Create an EOI profile online,
          detailing your qualifications.
        </li>
        <li>
          Receive Notification of Interest (NOI): If selected, you’ll receive an
          NOI from Alberta, inviting you to apply for provincial nomination.
        </li>
        <li>
          Apply for Nomination: Submit a comprehensive application to AINP, and
          if approved, you’ll receive a provincial nomination certificate.
        </li>
        <li>
          Apply for Permanent Residency: Use the certificate to apply for
          permanent residency.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "Alberta express entry",
    description: () => (
      <ul className="pl-6 list-disc">
        <li>
          Eligibility Check: Ensure you meet Alberta’s eligibility criteria,
          including work experience, language proficiency, and occupation. A
          full-time job in Alberta is mandatory.
        </li>
        <li>
          Submit Expression of Interest (EOI): Create an EOI profile online,
          detailing your qualifications.
        </li>
        <li>
          Receive Notification of Interest (NOI): If selected, you’ll receive an
          NOI from Alberta, inviting you to apply for provincial nomination.
        </li>
        <li>
          Apply for Nomination: Submit a comprehensive application to AINP, and
          if approved, you’ll receive a provincial nomination certificate.
        </li>
        <li>
          Apply for Permanent Residency: Use the certificate to apply for
          permanent residency.
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Alberta Business Immigration Program for Entrepreneur",
    description: () => (
      <>
        <p>
          In general, the pathways of Alberta Business Immigration Nominee
          Programs for Entrepreneurs include the following steps:
        </p>
        <ul className="pl-6 list-disc">
          <li>
            Expression of Interest (EOI) Submission: You start by submitting
            your Expression of Interest to the program.
          </li>
          <li>
            EOI Selection and Invitation: The program officials evaluate your
            EOI based on specific criteria, and if you are selected, you receive
            an Invitation to Apply.
          </li>
          <li>
            Business Establishment: After being invited, you work on
            establishing your business in Alberta.
          </li>
          <li>
            Nomination: Once your business is established and meeting program
            requirements, you seek nomination from Alberta.
          </li>
          <li>
            Post-Nomination Application: You then submit your permanent
            residence application, and upon approval, you and your family can
            enjoy the benefits of permanent residency in Canada.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Alberta express entry",
    description: () => (
      <ul className="pl-6 list-disc">
        <li>
          Eligibility Check: Ensure you meet Alberta’s eligibility criteria,
          including work experience, language proficiency, and occupation. A
          full-time job in Alberta is mandatory.
        </li>
        <li>
          Submit Expression of Interest (EOI): Create an EOI profile online,
          detailing your qualifications.
        </li>
        <li>
          Receive Notification of Interest (NOI): If selected, you’ll receive an
          NOI from Alberta, inviting you to apply for provincial nomination.
        </li>
        <li>
          Apply for Nomination: Submit a comprehensive application to AINP, and
          if approved, you’ll receive a provincial nomination certificate.
        </li>
        <li>
          Apply for Permanent Residency: Use the certificate to apply for
          permanent residency.
        </li>
      </ul>
    ),
  },
];

const SkilledWorkersConfig = [
  {
    title: "Alberta Opportunity Stream",
    description:
      "The Alberta Opportunity Stream (AOS) is a pathway for foreign workers who are currently working in Alberta and have a valid job offer from an Alberta employer in an eligible occupation.",
  },
  {
    title: "Alberta Express Entry Stream",
    description:
      "The Alberta Express Entry Stream is for candidates who have an active Express Entry profile and meet the eligibility criteria",
  },
  {
    title: "Accelerated Tech Pathway",
    description: "The Accelerated Tech Pathway is a new stream under",
  },
];
const EntrepreneursConfig = [
  {
    title: "Graduate Entrepreneur Stream",
    description:
      "The Graduate Entrepreneur Stream is for recent international graduates from Alberta post-secondary institutions who want to start a business in Alberta.",
  },
  {
    title: "Foreign Graduate Entrepreneur Stream",
    description:
      "The Foreign Graduate Entrepreneur Stream is for recent international graduates from post-secondary institutions outside of Alberta who want to start a business in Alberta.",
  },
  {
    title: "Rural Renewal Stream",
    description:
      "The Rural Renewal Stream is for foreign nationals who want to start a business in a rural Alberta community.",
  },
  {
    title: "Rural Entrepreneur Stream",
    description:
      "The Rural Entrepreneur Stream is for foreign nationals who want to start a business in a rural Alberta community.",
  },
  {
    title: "Farm Stream",
    description:
      "The Farm Stream is for foreign nationals who want to purchase and manage a farm in Alberta.",
  },
];
