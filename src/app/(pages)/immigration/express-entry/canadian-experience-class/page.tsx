import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { ServicesCard } from "@/components/ui/services-card";
import { truncateTextHeading } from "@/components/ui/newsCard";
import { workersList } from "@/components/ui/workerlistMap";
import ContentBox from "@/app/revamp/revamp-components/content-box";
import CallToAction from "@/app/revamp/revamp-components/cta";

export default function CanadianExperienceClass() {
  return (
    <>
      <ContentBox
        title="Canadian Experience Class (CEC)"
        subtitle="Express entry"
        description={[
          `  The Canadian Experience Class (CEC) is an economic immigration
                program that requires work experience in Canada. Applicants must
                have a minimum of 12 months of full-time work experience in a
                skilled occupation in Canada within the last 3 years.`,
          `The CEC Express Entry program is a popular choice for foreign
                workers who have accumulated work experience in Canada and
                international students who have found employment in Canada after
                graduation, all of whom aspire to fulfill their Canadian
                immigration dreams. This program is not suitable for foreign
                nationals without any prior work experience in Canada`,
        ]}
      />
      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            subtitle="Canadian Experience Class"
            title={" Minimum Criteria"}
          />

          <div className="flex flex-col justify-start gap-6">
            <p className="text-sm text-black text-left">
              To be eligible, you must meet all the minimum requirements
            </p>
            <p className="text-sm text-black text-left">
              Before applying, candidates should carefully review the program
              requirements and ensure they meet the necessary qualifications.
              Additionally, individuals in skilled trades may also consider
              seeking employment through the Provincial Nominee Program (PNP) if
              a particular province has a demand for their skills.
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            subtitle="Express Entry"
            title={
              "Factors that increase your chance to receive Invitation to Apply (ITA) in the Express Entry Program"
            }
            titleClassName="leading-[45px]"
            description={[
              `Through Express Entry, candidates and their family can participate
              and compete for points to receive an ITA – Invitation to Apply
              from the Canadian government to immigrate and work in the country.`,
            ]}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workersList.map((item, index) => (
              <ServicesCard
                key={index}
                id={item.id}
                title={item.title}
                description={truncateTextHeading(item.description, 30)}
              />
            ))}
          </div>
        </div>
      </Container>
      <CallToAction />
    </>
  );
}
