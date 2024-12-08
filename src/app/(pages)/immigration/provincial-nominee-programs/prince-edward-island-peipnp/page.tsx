import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import Title from "@/components/ui/Title";
import { featuresPage } from "@/components/ui/appointmentMap";
import { CardTitle, Description } from "@/app/revamp/revamp-components/heading";

export default function PrinceEdwardIsland() {
  return (
    <>
      <Container>
        <Title
          title="Prince Edward Island Provincial Nominee Program (PNP)​"
          subtitle="Canada Provincial Immigration Program"
          description={[
            `The island has several nicknames: “Garden of the Gulf”,
                “Birthplace of Confederation” and “Cradle of Confederation”. Its
                capital and largest city is Charlottetown. It is one of the
                three Maritime provinces and one of the four Atlantic provinces.`,
          ]}
        />

        <div className="text-sm text-black text-left">
          If you wish to immigrate to PEI, then you have three options to choose
          from:
          <Title subtitle="PEI PNP Programs" className="pt-7" />
          <ul className="p list-disc">
            <li className="flex flex-col gap-2">
              <CardTitle> PEI PNP Express Entry</CardTitle>
              <Description>
                If you are part of the Express Entry system and interested in
                living and working in PEI, this stream allows you to be
                nominated by the province. You’ll need to meet the eligibility
                criteria, such as having skilled work experience and
                demonstrating a genuine interest in settling on the island.
              </Description>
            </li>
            <li className="flex flex-col gap-2">
              <CardTitle>Labour Impact Category</CardTitle>
              <Description>
                This category is designed for individuals who already have a
                valid job offer from a PEI employer. It focuses on skilled
                workers, critical workers, and international graduates with the
                skills and experience needed in the island’s growing industries.
                By fulfilling the labor market needs of PEI, you can fast-track
                your path to permanent residency.
              </Description>
            </li>
            <li className="flex flex-col gap-2">
              <CardTitle>Business Impact Category</CardTitle>
              <Description>
                Entrepreneurs looking to start or invest in a business in Prince
                Edward Island can apply through the Business Impact Category.
                This stream encourages individuals to actively manage and
                operate a business in the province, contributing to its economic
                growth. The business category is ideal for those ready to invest
                and bring innovative ideas to PEI.
              </Description>
            </li>
          </ul>
          <Title
            subtitle="Northwest Territories Business Immigration Program"
            className="pt-7"
          />
          <ul>
            <li>Business Stream</li>
          </ul>
        </div>

        <div className="text-sm text-black text-left">
          <p>
            Prince Edward Island (PEI), known for its stunning landscapes and
            welcoming communities, offers a Provincial Nominee Program (PNP)
            designed to attract skilled workers, entrepreneurs, and graduates.
            The PEI PNP provides several immigration streams, each tailored to
            meet the province’s economic needs and help individuals and families
            settle in this beautiful island province.
          </p>
          <Title subtitle="PEI PNP Programs" className="pt-7" />
          <ul className="p list-disc">
            {/* PEI PNP Express Entry */}
            <li className="flex flex-col gap-2">
              <CardTitle>PEI PNP Express Entry</CardTitle>
              <Description>
                The PEI PNP Express Entry stream is for candidates already in
                the Express Entry pool who wish to live and work in Prince
                Edward Island. If you meet the eligibility criteria for skilled
                work and show a genuine intent to settle in PEI, this stream can
                fast-track your application for permanent residency. A
                provincial nomination from PEI gives you additional points under
                the Express Entry system, boosting your chances of receiving an
                invitation to apply for Canadian permanent residency.
              </Description>
            </li>

            {/* Labour Impact Category */}
            <li className="flex flex-col gap-2">
              <CardTitle>Labour Impact Category</CardTitle>
              <Description>
                The Labour Impact Category is ideal for skilled workers and
                graduates who have a valid job offer from a PEI employer. This
                category is divided into three streams:
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Skilled Worker Stream:</strong> For individuals with
                    the skills and experience needed in PEI’s labor market.
                  </li>
                  <li>
                    <strong>Critical Worker Stream:</strong> For workers in
                    occupations facing shortages.
                  </li>
                  <li>
                    <strong>International Graduate Stream:</strong> For recent
                    graduates of PEI post-secondary institutions with job offers
                    in the province.
                  </li>
                </ul>
                This category allows candidates to work and live in PEI while
                contributing to its growing economy.
              </Description>
            </li>

            {/* Business Impact Category */}
            <li className="flex flex-col gap-2">
              <CardTitle>Business Impact Category</CardTitle>
              <Description>
                The Business Impact Category is designed for experienced
                entrepreneurs and business owners who are ready to invest in and
                manage a business in PEI. This stream provides a pathway for
                those looking to establish or buy a business in the province and
                contribute to its economic development. Successful applicants
                must demonstrate the financial capacity and management
                experience needed to run a business in PEI, as well as a
                commitment to actively managing the enterprise.
              </Description>
            </li>
          </ul>
        </div>
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
          <ul className=" list-disc">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 w-full">
          {featuresPage.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </Container>
    </>
  );
}
