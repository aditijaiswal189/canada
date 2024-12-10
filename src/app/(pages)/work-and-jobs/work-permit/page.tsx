import React from "react";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FAQ } from "@/components/ui/FAQMap";
import ContentBox from "@/app/revamp/revamp-components/content-box";
import CallToAction from "@/app/revamp/revamp-components/cta";

export default function WorkPermit() {
  return (
    <>
      <ContentBox
        title="Work Permits (WP)"
        subtitle="Canada Immigration Program"
        description={[
          `Working in Canada typically requires foreign nationals to obtain a
              work permit. There are several different types of work permits
              available in Canada. Here are some common types`,
          ,
        ]}
      />

      <Container px-6>
        <Title
          subtitle="How to apply for a Work Permit"
          description={[
            `Applying for a work permit in Canada can be a multi-step process,
          depending on your situation and the type of work permit you require.
          Here are the general steps to follow`,
          ]}
        />

        <div className="flex flex-col gap-2">
          {workPermitFaq.map((item) => (
            <FAQ
              description={item.description()}
              key={item.id}
              title={item.question}
            />
          ))}
        </div>
      </Container>
      <CallToAction />
    </>
  );
}
const features = [
  {
    id: 1,
    title: "Closed Work Permit",
    description:
      "Closed Work Permit requires foreign nationals to work for a specific company in Canada",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 2,
    title: "Open Work Permit",
    description:
      "Open Work Permit allows foreign nationals to work anywhere in Canada and for any employer or in any field. Open work permits are often issued to foreign nationals with family members living, studying, or working in Canada",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[50px]"
      />
    ),
  },

  {
    id: 3,
    title: "Intra-Company Work Permit",
    description:
      "Intra-Company Transfer is used for special cases, such as foreign employees of a parent company with a branch in Canada",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 4,
    title: "Post-Graduation Work Permit",
    description:
      "Post-Graduation Work Permit is designed for international students who have graduated from Canadian universities, colleges, or vocational schools. This permit allows them to work in Canada for a specified period after completing their studies",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[50px]"
      />
    ),
  },
];

const workPermitFaq = [
  {
    id: 1,
    question: "Identify the type of work permit you need",
    description: () => (
      <>
        <p>
          Identifying the type of work permit you need is a crucial step in the
          process of working legally in a foreign country, such as Canada. The
          choice of work permit largely depends on the nature and duration of
          your intended employment. Understanding the various categories and
          requirements for work permits is essential to ensure you meet the
          specific criteria and regulations that apply to your situation.
        </p>
        <p>
          It&aposs important to research and consult with immigration
          authorities as GTR Worldwide to determine the right work permit for
          your needs. Ensuring that you have the correct work permit is not only
          a legal requirement but also crucial for your overall work experience,
          your rights, and your ability to take advantage of other
          opportunities, such as pathways to permanent residency in Canada
        </p>
      </>
    ),
  },
  {
    id: 2,
    question: "Get a Job Offer/ Provincial Nomination",
    description: () => (
      <>
        <p>
          You&aposll typically need a job offer from a Canadian employer before
          applying for a work permit (LMIA/ JAL process may needed).
        </p>
        <p>
          Foreigners can apply for a work permit in Canada without a job offer
          under specific circumstances. One of the primary pathways to obtaining
          a work permit without a job offer is through Canada&aposs Express
          Entry system and Provincial Nominee Programs (PNPs).
        </p>
      </>
    ),
  },
  {
    id: 3,
    question: "Gather the required documents and submit application",
    description: () => (
      <>
        <p>
          Collect all necessary documents to support your application. These
          documents may include:
          <ul className="pl-6 list-disc">
            <li>A valid passport.</li>
            <li>
              The job offer letter from your Canadian employer, if required.
            </li>
            <li>A Labor Market Impact Assessment (LMIA), if required.</li>
            <li>Educational credentials and qualifications.</li>
            <li>Proof of financial support.</li>
            <li>Passport-sized photos.</li>
            <li>Other supporting documents specific to your application</li>
          </ul>
        </p>
        <p>
          Once you have completed the application form and gathered all
          necessary documents, submit your application through your online
          account. Ensure that you have included all relevant information and
          supporting materials.
        </p>
        <p>
          Properly completing the application and gathering the required
          documents accurately is key to a successful work permit application in
          Canada
        </p>
      </>
    ),
  },
  {
    id: 4,
    question:
      "Pay the required fees and wait for your application to be processed",
    description: () => (
      <p>
        Processing times can vary depending on the type of work permit and your
        home country. You may be asked for an interview or additional
        documentation to support your application.
      </p>
    ),
  },
  {
    id: 5,
    question: "Receive Decision",
    description: () => (
      <p>
        You will receive a decision regarding your work permit application. If
        approved, you will receive a Port of Entry (POE) Letter of Introduction
        or a Temporary Resident Visa (TRV) in your passport, depending on your
        country of residence.
      </p>
    ),
  },
];
