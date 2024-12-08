import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";

import { Feature } from "@/components/ui/cards-set";
import Title from "@/components/ui/Title";
import { featuresPage } from "@/components/ui/appointmentMap";
import { CardTitle, Description } from "@/app/revamp/revamp-components/heading";

export default function NovaScotia() {
  return (
    <>
      <Container>
        <Title
          title="Nova Scotia Nominee Program (NSNP)"
          subtitle="Canada Provincial Immigration Program"
          description={[
            `Nowhere in Nova Scotia is more than 67 km (42 mi) from the
                ocean. Halifax is the capital city and is known as a major
                centre for culture and the arts, as well as for its high
                standard of living.`,
          ]}
        />

        <div className="text-sm text-black/60 text-left">
          <Title
            subtitle="Nova Scotia Immigration Streams are as follows"
            title="The Nova Scotia Nominee Program (NSNP)"
            className="flex flex-col gap-6"
            description={[
              `The Nova Scotia Nominee Program (NSNP)</strong> offers
            various streams to help individuals and families settle in Nova
            Scotia. If you’re looking for an immigration pathway, the NSNP
            provides tailored options depending on your background, work
            experience, and qualifications. Here are the key streams offered
            under the Nova Scotia Nominee Program:`,
            ]}
          />

          {/* Streams List */}
          <div className="space-y-8">
            {/* Stream 1 */}
            <div>
              <CardTitle className="text-xl font-semibold">
                1. Nova Scotia Experience: Express Entry
              </CardTitle>
              <Description className="">
                This stream is designed for highly skilled individuals with
                experience in Nova Scotia. By connecting to the{" "}
                <strong>Express Entry system</strong>, this program allows
                faster processing for those who meet the criteria, such as
                having skilled work experience and an intent to live in Nova
                Scotia.
              </Description>
            </div>

            {/* Stream 2 */}
            <div>
              <CardTitle className="text-xl font-semibold">
                2. Nova Scotia Labour Market Priorities
              </CardTitle>
              <Description className="">
                The <strong>Labour Market Priorities</strong> stream selects
                candidates from the Express Entry pool who meet Nova Scotia’s
                labor market needs. These priorities shift depending on the
                province’s economic requirements, making it an adaptable option
                for various professions.
              </Description>
            </div>

            {/* Stream 3 */}
            <div>
              <CardTitle className="text-xl font-semibold">
                3. Nova Scotia Labour Market Priorities for Physicians
              </CardTitle>
              <Description className="">
                Specifically designed for doctors, this stream addresses the
                demand for healthcare professionals in Nova Scotia. If you are a
                physician and meet the qualifications, this program can
                streamline your immigration process and help you practice in the
                province.
              </Description>
            </div>

            {/* Stream 4 */}
            <div>
              <CardTitle className="text-xl font-semibold">
                4. Skilled Worker Stream
              </CardTitle>
              <Description className="">
                The <strong>Skilled Worker Stream</strong> targets individuals
                with a job offer from a Nova Scotia employer. Whether you are a
                skilled professional, semi-skilled worker, or in an
                intermediate-skilled occupation, this stream could be the right
                path for you.
              </Description>
            </div>

            {/* Stream 5 */}
            <div>
              <CardTitle className="text-xl font-semibold">
                5. Occupation In-Demand Stream
              </CardTitle>
              <Description className="">
                Focusing on specific in-demand occupations, this stream is ideal
                for workers in industries facing labor shortages, such as
                healthcare or construction. The{" "}
                <strong>Occupation In-Demand Stream</strong> helps fill critical
                gaps in Nova Scotia’s workforce.
              </Description>
            </div>

            {/* Stream 6 */}
            <div>
              <CardTitle className="text-xl font-semibold">
                6. International Graduates In-Demand
              </CardTitle>
              <Description className="">
                This stream is designed for recent international graduates from
                recognized institutions with job offers in high-demand fields.
                The <strong>International Graduates In-Demand</strong> stream
                focuses on attracting young talent to the province’s growing
                sectors.
              </Description>
            </div>

            {/* Stream 7 */}
            <div>
              <CardTitle className="text-xl font-semibold">
                7. Entrepreneur Stream
              </CardTitle>
              <Description className="">
                For experienced business owners or senior managers, the{" "}
                <strong>Entrepreneur Stream</strong> offers an opportunity to
                establish or buy a business in Nova Scotia. This stream is ideal
                for those who wish to make a significant investment and actively
                manage their business.
              </Description>
            </div>

            {/* Stream 8 */}
            <div>
              <CardTitle className="text-xl font-semibold">
                8. International Graduate Entrepreneur Stream
              </CardTitle>
              <Description className="">
                Graduates from Nova Scotia institutions who have already started
                or purchased a business in the province may qualify for the{" "}
                <strong>International Graduate Entrepreneur Stream</strong>. It
                encourages graduates to stay and contribute to Nova Scotia’s
                economy.
              </Description>
            </div>

            {/* Stream 9 */}
            <div>
              <CardTitle className="text-xl font-semibold">
                9. Physician Stream
              </CardTitle>
              <Description className="">
                Like the Labour Market Priorities for Physicians, the{" "}
                <strong>Physician Stream</strong> targets medical professionals
                with job offers from Nova Scotia’s health authorities. This
                pathway is designed to fill vital positions in the healthcare
                sector.
              </Description>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <Title subtitle="Benefits" title={"Benefits for your family"} />
        <Description className="text-sm text-black/ text-left">
          With provincial nomination, your entire family, including your spouse
          and children under 22 years of age (at the time of submitting the
          provincial nomination application), can submit for Canada Permanent
          Resident to enjoy most of the benefits like Canadian citizen
        </Description>
        <Description className="text-sm text-black text-left ">
          During the wait for permanent residency, your family can apply to
          come, work and study in Canada
          <ul className="pl-6 list-disc">
            <li>Free access to elementary and highschool</li>
            <li>Legal protection under Canadian laws</li>
          </ul>
        </Description>
        <Description className="text-sm text-black text-left ">
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
        </Description>
      </Container>
      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            subtitle="New Brunswick Provincial Nominee Program
"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 w-full">
          {featuresPage.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </Container>
    </>
  );
}
