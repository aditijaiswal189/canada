import ContentBox from "@/app/revamp/revamp-components/content-box";
import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function StudentDirectStream() {
  return (
    <>
      <ContentBox
        title="Student Direct Stream (SDS)"
        description={[
          ` In order to be eligible for SDS and benefit from expedited
                processing, according to High Commission of Canada, students
                will need to:`,
        ]}
        subtitle="Canada Immigration Program"
      />
      <Container>
        <Title
          className="text-center"
          subtitle="Understanding the Canadian Visitor Visa"
          description={[
            `The Canadian Visitor Visa is designed for individuals who wish
                to enter the country temporarily for tourism, family visits, or
                business purposes. It is essential to distinguish between a
                tourist visa and other types of visas, such as work or study
                permits, as they serve different purposes.`,
          ]}
        />
        <Title subtitle="Criteria" />

        <p className="text-sm text-black/60 text-left">
          <ul className="pl-6 list-disc">
            <li>
              Have been accepted by an eligible post secondary Designated
              Learning Institute (DLI)
            </li>
            <li>Have paid their tuition for the first year</li>
            <li>
              Have obtained a Guaranteed Investment Certificate (GIC) of $20,635
              from one of the financial institutions approved by Immigration,
              Refugees, and Citizenship Canada to provide this service
            </li>
            <li>have completed an upfront medical examination</li>
            <li>
              have the minimum-required IELTS level of English language ability
              of 6.0 in all categories (listening, reading, writing and
              speaking)
            </li>
          </ul>
        </p>
      </Container>
      <Container>
        <Title
          subtitle="Student direct stream (SDS)"
          title={"What can we help you?"}
          description={[
            `Immigration policies can change over time, so it’s essential to stay
          updated with us for the latest information from the respective
          provincial or territorial immigration authorities.`,
            `Consult GreenTech Resources Worldwide Canada experts to understand
          specific requirements and eligibility for these pathways based on your
          circumstances`,
          ]}
        />

        {/* <CTADefault
            title="Take the first step towards your family&aposs Canadian dream
  "
            subtitle={
              <p className="text-4xl text-white/90">
                Book a consultation today to explore immigration options
                <br />
                and secure your family&aposs future in Canada.
              </p>
            }
            image={"/service.jpg"}
          /> */}
      </Container>
    </>
  );
}
