import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import Title from "@/components/ui/Title";
import { Icon } from "@iconify/react/dist/iconify.js";
import { featuresPage } from "@/components/ui/appointmentMap";
import ContentBox from "@/app/revamp/revamp-components/content-box";

export default function Yukon() {
  return (
    <>
      <ContentBox
        className="lg:-mt-0.5"
        title="Yukon Provincial Nominee Program (YNP)​"
        subtitle="Canada Provincial Immigration Program"
        description={[
          ` The Yukon Nominee Program (YNP), a Provincial Nominee Program
                (PNP), is a collection of immigration pathways enabling foreign
                nationals to become Canadian permanent residents. The Yukon
                territory operates several immigration streams.`,
        ]}
      />
      <Container>
        <Title subtitle="The BC PNP has two main components" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  relative z-10 py-2 w-full">
          {twoFeatures.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
        <Title subtitle="Yukon Nominee Program (YNP) Requirements" />
        <p className="text-sm text-black text-left">
          Just like other provinces Yukon is also required, skilled workers. To
          fill that Yukon is providing an excellent opportunity to nominate
          Skilled Foreign Workers for permanent residence in Canada using YNP.
          Requirements:
          <ul className="pl-6 list-disc">
            <li>Must have a job offer.</li>
            <li>
              Must have the language proficiency of CLB 7 for NOC 0 & A, of CLB
              5 for NOC B.
            </li>
            <li>Minimum 1 year of working experience in the field.</li>
            <li>Minimum high school level education as per the job profile.</li>
          </ul>
        </p>
        <Title subtitle="Yukon Business Nominee Requirements" />
        <p className="text-sm text-black text-left">
          <ul className="pl-6 list-disc">
            <li>Language proficiency of minimum CLB LVL 4.</li>
            <li>Education must minimum at a high school level</li>
            <li>
              Should have business ownership or management of 5 years
              experience.
            </li>
            <li>
              Can invest CA$300,000 and need to show personal assets of
              CA$500,000
            </li>
          </ul>
        </p>
      </Container>
      <Container>
        <Title subtitle="Benefits" title={"Benefits for your family"} />
        <p className="text-sm text-black text-left">
          With provincial nomination, your entire family, including your spouse
          and children under 22 years of age (at the time of submitting the
          provincial nomination application), can submit for Canada Permanent
          Resident to enjoy most of the benefits like Canadian citizen
        </p>
        <p className="text-sm text-black text-left ">
          During the wait for permanent residency, your family can apply to
          come, work and study in Canada
          <ul className="pl-6 list-disc">
            <li>Free access to elementary and highschool</li>
            <li>Legal protection under Canadian laws</li>
          </ul>
        </p>
        <p className="text-sm text-black text-left ">
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
        <div className="flex-1 flex flex-col gap-4">
          <Title
            subtitle="
British Columbia provincial nominee program"
            title={"What can we help you?"}
          />

          <div className="flex flex-col justify-start gap-6">
            <p className="text-sm text-black text-left">
              GreenTech Resources Worldwide Canada can assist you in increasing
              your Comprehensive Ranking System (CRS) score for Express Entry in
              several ways:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 w-full ">
          {featuresPage.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </Container>
    </>
  );
}
const twoFeatures = [
  {
    id: 1,
    title: "Yukon Nominee Program (YNP)",
    description:
      "The Yukon Nominee Program allows employers to hire long-term employees. Foreign workers, called nominees, nominated to work under the Yukon Nominee Program are accepted with the expectation that they&aposll live in Yukon over the long term.",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 2,
    title: "Yukon Business Nominee Program.",
    description:
      "Apply to run your own business in Yukon (foreign entrepreneurs)",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[54px]"
      />
    ),
  },
];
