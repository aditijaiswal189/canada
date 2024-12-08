import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import Title from "@/components/ui/Title";
import { featuresPage } from "@/components/ui/appointmentMap";
import { CardTitle, Description } from "@/app/revamp/revamp-components/heading";

export default function RuralNorthern() {
  return (
    <>
      <Container>
        <Title
          title="Rural and Northern Immigration Pilot (RNIP)"
          subtitle="Canada Provincial Immigration Program"
          description={[
            `The Rural and Northern Immigration Pilot is a community-driven
                program. It’s designed to spread the benefits of economic
                immigration to smaller communities by creating a path to
                permanent residence for skilled foreign workers who want to work
                and live in one of the participating communities.`,
          ]}
        />
        <Title subtitle="Participating Communities" className="pt-7" />
        <ul className="pl-6 list-disc">
          <li>North Bay, ON - https://northbayrnip.ca/</li>
          <li>
            Sudbury, ON -
            https://investsudbury.ca/why-sudbury/move-to-sudbury/rnip/
          </li>
          <li>Timmins, ON - www.timminsedc.com</li>
          <li>Sault Ste. Marie, ON - www.welcometossm.com</li>
          <li>Thunder Bay, ON - https://gotothunderbay.ca/</li>
          <li>Brandon, MB - www.economicdevelopmentbrandon.com</li>
          <li>Altona/Rhineland, MB - www.seedrgpa.com</li>
          <li>Moose Jaw, SK - https://www.moosejawrnip.ca/</li>
          <li>Claresholm, AB - www.claresholm.ca</li>
          <li>Vernon, BC - https://rnip-vernon-northok.ca/</li>
          <li>
            West Kootenay (Trail, Castlegar, Rossland, Nelson), BC -
            https://wk-rnip.ca/
          </li>
        </ul>
      </Container>
      <Container>
        <Title subtitle="RNIP" title={"Process"} />
        <div className="text-sm text-black text-left">
          <p>
            The <strong>Rural and Northern Immigration Pilot (RNIP)</strong> is
            a unique, community-driven immigration program designed to attract
            skilled workers to rural and northern communities in Canada. If
            you’re looking to gain permanent residence in Canada through this
            program, follow these step-by-step guidelines to ensure a successful
            application:
          </p>
          <Title
            subtitle="Steps to Apply for the Rural and Northern Immigration Pilot (RNIP)"
            className="pt-7"
          />
          <ul className=" list-disc">
            <li className="flex flex-col gap-2">
              <CardTitle>Meet the Eligibility Requirements</CardTitle>
              <Description>
                Before applying for the Rural and Northern Immigration Pilot,
                you must meet both the IRCC (
                <strong>Immigration, Refugees, and Citizenship Canada</strong>)
                eligibility requirements and the community-specific
                requirements. These general criteria include aspects like work
                experience, language proficiency, and education. Additionally,
                each participating community will have its own requirements,
                such as residency, specific skill sets, or the ability to
                integrate into the local community.
              </Description>
            </li>

            <li className="flex flex-col gap-2">
              <CardTitle>
                Find an Eligible Job in a Participating Community
              </CardTitle>
              <Description>
                The next step is to find an eligible job with an employer in one
                of the participating RNIP communities. It’s important to ensure
                the job offer is full-time, permanent, and meets the wage
                standards of that community. Only specific jobs are considered
                eligible under the RNIP, so it’s crucial that the position
                aligns with the community’s labor needs.
              </Description>
            </li>

            {/* Step 3 */}
            <li className="flex flex-col gap-2">
              <CardTitle>
                Submit Your Application for a Community Recommendation
              </CardTitle>
              <Description>
                After securing a job offer, you will need to apply for a
                community recommendation. Each community participating in the
                Rural and Northern Immigration Pilot has its own process for
                evaluating candidates. In addition to standard requirements,
                they may assess your intent to live in the community, local
                connections, or family ties before issuing a recommendation.
              </Description>
            </li>

            {/* Step 4 */}
            <li className="flex flex-col gap-2">
              <CardTitle>Apply for Permanent Residence</CardTitle>
              <Description>
                Once you receive a community recommendation, you can then apply
                for permanent residence through the IRCC. While the community
                recommendation significantly strengthens your application, you
                will still need to meet general IRCC criteria. Upon submission,
                your application will be reviewed, and if approved, you will be
                on your way to obtaining permanent residence in Canada.
              </Description>
            </li>
          </ul>
        </div>
      </Container>
      <Container>
        <Title
          subtitle="Benefits"
          title={
            <p className="text-4xl text-black w-full text-left pt-3">
              Benefits for your family
            </p>
          }
        />
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
