import React from "react";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import { featuresPage } from "@/components/ui/appointmentMap";
import ContentBox from "@/app/revamp/revamp-components/content-box";

export default function Lmia() {
  return (
    <>
      <ContentBox
        title="LMIA"
        subtitle="Canada Immigration Program"
        description={[
          `LMIA job offer, where LMIA stands for Labour Market Impact
                Assessment is well known to those who seeking Canada immigration
                as a confirm selection. First of all, one must know about LMIA
                and why it is important for any employer!Labour Market Impact
                Assessment as it’s reflected by the name, paperwork needed to be
                done if any Canadian employer wants to hire a foreign national
                to work for him or her.`,
          `According to the Canada law, you can not hire someone from
                outside Canada if there are candidates within Canada. Canada
                always gives priority to them who living in Canada as a citizen
                or with work-permit or holding permanent residence. So as you
                can see it’s quite difficult to get an LMIA and costly as well.
                Any employer must go through a 3-4 advertisement before applying
                for the LMIA.`,
          `The Canadian Visitor Visa is designed for individuals who wish
                to enter the country temporarily for tourism, family visits, or
                business purposes. It is essential to distinguish between a
                tourist visa and other types of visas, such as work or study
                permits, as they serve different purposes.`,
        ]}
      />
      <Container>
        <Title
          subtitle="LMIA job offer is basically two types"
          title={"Permanent Job Offer"}
          description={[
            `For NOC 0, A, or B position this LMIA job offer is applicable.
                There’s no requirement of application fee but it won’t provide a
                work permit. Moreover, it will support your Express Entry
                application. It may take time between 10-20 days to process.`,
          ]}
        />

        <Title
          title={"Temporary Job Offer"}
          description={[
            `For the temporary LMIA job offer, things are a little different.
                Here an application fee of 1000$ needed to be paid. It basically
                provides you a work permit and can be used to support your
                Express Entry application for NOC 0, A, or B positions only. It
                may take months to process.`,
            `** There’s a Dual Intent LMIA where you can apply for both
                LMIAs.`,
          ]}
        />
        <Title subtitle="LMIA exempted job offers" />
        <p className="text-sm text-black/60 text-left">
          There are some LMIA exempted job offers for the skilled immigrants
          looking for CANADA PR through Express Entry.
          <ul className="pl-6 list-disc">
            <li>
              If you have a valid work permit and work for your employer for
              more than one year.
            </li>
            <li>
              If your work permit is LMIA exempted under an international
              agreement like the USA, AUS, etc. or a federal-provincial
              agreement or the Canadian interest category.
            </li>
            <li>
              In the case of international students with an open work permit,
              they are free with all these.
            </li>
          </ul>
        </p>
      </Container>
      <Container>
        <Title
          subtitle="LMIA"
          title={"Take the first step towards your family&aposs Canadian dream"}
          description={[
            ` For personalized assistance and expert guidance, contact
                GreenTech Resources Worldwide Canada so our experts can help you
                navigate the work permit application process and ensure a smooth
                transition to working in Canada`,
          ]}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 w-full">
          {featuresPage.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </Container>
    </>
  );
}
