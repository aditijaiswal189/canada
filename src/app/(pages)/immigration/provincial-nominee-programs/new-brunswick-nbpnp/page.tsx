import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import Title from "@/components/ui/Title";
import { featuresPage } from "@/components/ui/appointmentMap";
import { Description } from "@/app/revamp/revamp-components/heading";
import CallToAction from "@/app/revamp/revamp-components/cta";

export default function NewBrunswick() {
  return (
    <>
      <Container>
        <div className="flex-1 flex flex-col gap-2">
          <Title
            subtitle="Canada Provincial Nomination Program "
            title="New Brunswick Provincial Nominee Program (NBPNP)​"
          />

          <div className="flex flex-col justify-start gap-6">
            <p className="text-sm text-black/60 text-left">
              Provincial nominee programs like the New Brunswick Skilled Worker
              Stream play a crucial role in addressing specific labor market
              needs in individual provinces, contributing to economic growth,
              and providing opportunities for skilled immigrants to establish
              themselves in Canada.
              <Title subtitle="Programs" className="pt-7" />
              <ul className=" list-disc flex flex-col gap-4">
                <div className="flex flex-col">
                  <li className="font-bold text-lg flex flex-col gap-2">
                    Express Entry Labor Market Stream
                    <Description>
                      This stream is part of the New Brunswick Provincial
                      Nominee Program Provincial Nominee Program and is aligned
                      with Canada’s Express Entry system. It targets skilled
                      workers who are already in the Express Entry pool and have
                      demonstrated a strong connection to New Brunswick
                      Provincial Nominee Program. Key requirements typically
                      include:
                    </Description>
                    <span>
                      - A valid Express Entry profile with a Comprehensive
                      Ranking System (CRS) score above the program’s minimum
                      threshold.
                    </span>
                    <span>
                      - Relevant work experience and qualifications that meet
                      New Brunswick Provincial Nominee Program's labor market
                      needs.
                    </span>
                    <span>
                      - A connection to New Brunswick Provincial Nominee
                      Program, such as having family or previous experience
                      living and working in the province.
                    </span>
                  </li>
                </div>
                <div className="flex flex-col">
                  <li className="font-bold text-lg flex flex-col gap-2">
                    Skilled Workers with Employer Support
                    <Description>
                      This stream is designed for skilled workers who have a
                      confirmed job offer from a New Brunswick Provincial
                      Nominee Program employer. It aims to address local labor
                      shortages by facilitating the immigration of workers with
                      skills that are in demand. Key features include:
                    </Description>
                    <span>
                      - A full-time, permanent job offer from a New Brunswick
                      Provincial Nominee Program employer in a high-demand
                      occupation.
                    </span>
                    <span>
                      - The employer must demonstrate efforts to recruit locally
                      before offering the job to an international candidate.
                    </span>
                    <span>
                      - Candidates must meet the qualifications and work
                      experience requirements for the job.
                    </span>
                  </li>
                </div>
                <div className="flex flex-col">
                  <li className="font-bold text-lg flex flex-col gap-2">
                    Post-Graduate Entrepreneurial Stream
                    <Description>
                      This stream is intended for recent graduates of recognized
                      New Brunswick Provincial Nominee Programpost-secondary
                      institutions who have the entrepreneurial skills and
                      resources to establish a business in the province. Key
                      aspects include:
                    </Description>
                    <span>
                      - Graduation from a post-secondary institution in New
                      Brunswick Provincial Nominee Programwithin the last two
                      years.
                    </span>
                    <span>
                      - A viable business plan and financial capacity to start
                      and run the business.
                    </span>
                    <span>
                      - The business must be located in New Brunswick Provincial
                      Nominee Program and contribute to the local economy.
                    </span>
                  </li>
                </div>
                <div className="flex flex-col">
                  <li className="font-bold text-lg flex flex-col gap-2">
                    Entrepreneurial Stream
                    <Description>
                      This stream targets experienced entrepreneurs who wish to
                      start or invest in a business in New Brunswick Provincial
                      Nominee Program. It focuses on individuals who can
                      contribute to the province's economic development.
                      Requirements typically include:
                    </Description>
                    <span>
                      - A proven track record of successful business ownership
                      or management.
                    </span>
                    <span>
                      - A detailed business plan demonstrating the viability and
                      potential economic impact of the business.
                    </span>
                    <span>
                      - Sufficient personal net worth and financial resources to
                      support the business and contribute to job creation in New
                      Brunswick Provincial Nominee Program.
                    </span>
                  </li>
                </div>
                <div className="flex flex-col">
                  <li className="font-bold text-lg flex flex-col gap-2">
                    Succession Connect Pilot Program
                    <Description>
                      The Succession Connect Pilot Program is aimed at
                      facilitating the transition of existing businesses in New
                      Brunswick Provincial Nominee Programto new owners. This
                      program helps address labor shortages by allowing skilled
                      immigrants to take over established businesses. Key
                      features include:
                    </Description>
                    <span>
                      - The candidate must have a plan to purchase or take over
                      an existing New Brunswick Provincial Nominee
                      Programbusiness.
                    </span>
                    <span>
                      - The business must be in good standing and demonstrate a
                      history of profitability.
                    </span>
                    <span>
                      - The program focuses on ensuring a smooth transition to
                      maintain the business’s operation and job creation.
                    </span>
                  </li>
                </div>
                <div className="flex flex-col">
                  <li className="font-bold text-lg flex flex-col gap-2">
                    Atlantic Pilot Immigration Program
                    <Description>
                      Although this program is not specific to Manitoba, it is
                      relevant to Canada’s immigration landscape. The Atlantic
                      Pilot Immigration Program is designed to attract skilled
                      workers and international graduates to the Atlantic
                      provinces (Newfoundland and Labrador, Nova Scotia, Prince
                      Edward Island, and New Brunswick Provincial Nominee
                      Program). Key aspects include:
                    </Description>
                    <span>
                      - The program includes several streams, such as the
                      Atlantic High-Skilled Program, Atlantic
                      Intermediate-Skilled Program, and Atlantic International
                      Graduate Program.
                    </span>
                    <span>
                      - Candidates must have a job offer from an employer in one
                      of the Atlantic provinces.
                    </span>
                    <span>
                      - The program aims to address labor market needs in these
                      regions and encourage long-term settlement.
                    </span>
                  </li>
                </div>
              </ul>
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <Title subtitle="Benefits" title={"Benefits for your family"} />
        <p className="text-sm text-black/60 text-left">
          With provincial nomination, your entire family, including your spouse
          and children under 22 years of age (at the time of submitting the
          provincial nomination application), can submit for Canada Permanent
          Resident to enjoy most of the benefits like Canadian citizen
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
            description={[
              "GreenTech Resources Worldwide Canada can assist you in increasing your Comprehensive Ranking System (CRS) score for Express Entry in several ways:",
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2  mx-auto">
          {featuresPage.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </Container>
      <CallToAction />
    </>
  );
}
