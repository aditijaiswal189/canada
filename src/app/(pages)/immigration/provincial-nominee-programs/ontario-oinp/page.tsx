import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import Title from "@/components/ui/Title";
import { featuresPage } from "@/components/ui/appointmentMap";
import ContentBox from "@/app/revamp/revamp-components/content-box";
import HighlightCards from "@/app/revamp/revamp-components/highlighting-card";
import CallToAction from "@/app/revamp/revamp-components/cta";

export default function Ontario() {
  return (
    <>
      <ContentBox
        subtitle="Canada Provincial Nomination Program"
        title="Ontario Immigrant Nominee Program (OINP)"
        description={[
          `  For individuals aspiring to immigrate to Ontario, the Ontario
                Immigrant Nominee Program (OINP) plays a crucial role. This
                program allows the province to nominate individuals for
                permanent residence in Canada based on their skills, work
                experience, and ability to contribute to the local economy.`,
          `The OINP has various streams, including those for skilled
                workers, entrepreneurs, and international students, providing
                diverse opportunities for immigrants to establish themselves in
                Ontario and contribute to its continued growth and prosperity.`,
        ]}
      />
      <HighlightCards config={ontarioImmigrationStreamsConfig} />
      <Container>
        <div className="flex flex-col gap-2">
          <Title
            subtitle="Benefits"
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                Benefits for your family
              </p>
            }
          />
          <p className="text-sm text-black/60 text-left">
            With provincial nomination, your entire family, including your
            spouse and children under 22 years of age (at the time of submitting
            the provincial nomination application), can submit for Canada
            Permanent Resident to enjoy most of the benefits like Canadian
            citizen
          </p>
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
                strongest passport globally, enjoy visa-free or direct ETA
                access to 185 countries
              </li>
              <li>
                With PR, university tuition fees are only one-third of what
                international students pay, with no restrictions on schools and
                programs
              </li>
            </ul>
          </p>
        </div>
      </Container>
      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            subtitle="
British Columbia provincial nominee program"
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                What can we help you?
              </p>
            }
          />

          <div className="flex flex-col justify-start gap-6">
            <p className="text-sm text-black/60 text-left">
              GreenTech Resources Worldwide Canada can assist you in increasing
              your Comprehensive Ranking System (CRS) score for Express Entry in
              several ways:
            </p>
          </div>
        </div>
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

const ontarioImmigrationStreamsConfig = [
  {
    title: "Foreign Worker Stream",
    description:
      "If you are a skilled foreign worker with a job offer in Ontario.",
  },
  {
    title: "Masters Graduate Stream",
    description:
      "If you have a Masters from an Ontario university, you can apply to the following streams.",
  },
  {
    title: "International Student Stream",
    description: "If you are a recent graduate with a job offer in Ontario.",
  },
  {
    title: "PhD Graduate Stream",
    description:
      "If you have a PhD degree from an Ontario university, you can apply to the following streams.",
  },
  {
    title: "In-Demand Skills Stream",
    description:
      "If you are a foreign worker in an in-demand occupation with a job offer in Ontario.",
  },
  {
    title: "Ontario’s Express Entry Streams",
    description:
      "To qualify, you must have an Express Entry profile and receive a notification of interest from Ontario.",
  },
  {
    title: "OINP Entrepreneur Stream",
    description:
      "If you are a foreign entrepreneur with a great business idea, apply to the Entrepreneur stream as your opportunity to come to Ontario to establish a new business or buy and grow an existing business in the province.",
  },
  {
    title: "Human Capital Priorities Stream",
    description:
      "Apply for the Human Capital Priorities stream if you have the required skilled work experience, education and language abilities.",
  },
  {
    title: "Skilled Trades Stream",
    description:
      "Apply for the Skilled Trades stream if you are a foreign worker with Ontario work experience in an eligible skilled trade.",
  },
  {
    title: "French-Speaking Skilled Worker Stream",
    description:
      "Apply for the French-Speaking Skilled Worker stream if you are a French-speaking foreign worker with strong English language abilities.",
  },
];
