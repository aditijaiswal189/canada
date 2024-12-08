import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import { featuresPage } from "@/components/ui/appointmentMap";
import { Description } from "@/app/revamp/revamp-components/heading";

export default function NorthwestTerritories() {
  return (
    <>
      <Container>
        <Title
          title={"The Northwest Territories Program (NBPNP)"}
          subtitle="canada provincial nomination program"
          description={[
            `In terms of its land, it is the second-largest territory of Canada. In terms of its population, the northwest territories have the highest population among all the three federal territories of northern Canada.`,
          ]}
        />

        <p className="text-sm text-black/60 text-left">
          The Northwest Territories accepts applications under two programs, one
          of which has three distinct streams
          <Title
            subtitle="Northwest Territories Employer Driven Program"
            className="pt-7"
          />
          <ul className="pl-6 list-disc">
            <li>Express Entry System for Skilled Workers</li>
            <li>Skilled Worker</li>
            <li>Entry Level/Semi-Skilled Occupations</li>
          </ul>
          <Title
            subtitle="Northwest Territories Business Immigration Program"
            className="pt-7"
          />
          <ul>
            <li>Business Stream</li>
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
            <Description className="text-sm text-black text-left">
              GreenTech Resources Worldwide Canada can assist you in increasing
              your Comprehensive Ranking System (CRS) score for Express Entry in
              several ways:
            </Description>
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
