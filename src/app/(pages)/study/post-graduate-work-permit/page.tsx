import React from "react";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { FAQ } from "@/components/ui/FAQMap";
import ContentBox from "@/app/revamp/revamp-components/content-box";
import { Description } from "@/app/revamp/revamp-components/heading";

export default function PostGraduateWorkPermit() {
  return (
    <>
      <ContentBox
        title="Post Graduate Work Permit"
        subtitle="Canada Immigration Program"
        description={[
          `Canada offers a Post-Graduation Work Permit (PGWP) program to
                international students who have completed a program of study at
                a designated learning institution in Canad`,
          `The PGWP allows you to work in Canada after completing your
                studies. You can work for any employer in Canada, and you are
                not restricted to a specific job or location.`,
          `Work experience gained through the PGWP increases your
                opportunities when you apply for permanent residency in Canada
                through the Canadian Experience Class or other immigration
                pathways.`,
        ]}
      />
      <Container>
        <div className="flex flex-col justify-start gap-6">
          <Title
            subtitle="Eligibility:"
            description={[
              `To be eligible for a PGWP, you must have completed a program of
                study at a designated learning institution in Canada. The
                program must be at least 8 months in duration. The length of the
                work permit issued will depend on the length of your program.`,
              `The validity of the PGWP will depend on the length of your
                program. If your program was 8 months or more but less than 2
                years, the PGWP will be valid for a period equal to the length
                of your program. If your program was 2 years or more, the PGWP
                may be issued for 3 years.`,
              `You must apply for the PGWP within 180 days (approximately 6
                months) of receiving written confirmation of completing your
                program and being awarded your degree, diploma, or certificate`,
              `You apply for the PGWP online. Ensure that you have all the
                required documents, such as proof of completion of your program
                and other necessary documentation.`,
              ``,
            ]}
          />

          <div>
            <Title subtitle="PGWP validity: " />
            <Description>
              The validity of the PGWP will depend on the length of your
              program. If your program was 8 months or more but less than 2
              years, the PGWP will be valid for a period equal to the length of
              your program. If your program was 2 years or more, the PGWP may be
              issued for 3 years.
            </Description>
          </div>

          <div>
            <Title subtitle="Application Process:" />
            <Description>
              You must apply for the PGWP within 180 days (approximately 6
              months) of receiving written confirmation of completing your
              program and being awarded your degree, diploma, or certificate.
            </Description>
          </div>
          <p className="text-sm text-highlight text-left">
            https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html
          </p>
        </div>
      </Container>
      <Container>
        <Title title={"FAQ&aposs"} />
        <div className="flex flex-col gap-2">
          {pgFaq.map((item, index) => (
            <FAQ
              key={index}
              description={item.description()}
              title={item.question}
            />
          ))}
        </div>
      </Container>

      <Container>
        <Title
          subtitle="Post Graduate Work Permit"
          title={
            <p className="text-3xl text-black/50 w-full text-left pt-3">
              What can we help you?
            </p>
          }
        />
        <p className="text-sm text-black/60 text-left">
          Immigration policies can change over time, so it’s essential to stay
          updated with us for the latest information from the respective
          provincial or territorial immigration authorities.
        </p>
        <p className="text-sm text-black/60 text-left">
          Consult GreenTech Resources Worldwide Canada experts to understand
          specific requirements and eligibility for these pathways based on your
          circumstances
        </p>
      </Container>
      <CTADefault
        title="Take the first step towards your family&aposs Canadian dream
"
        subtitle={`Book a consultation today to explore immigration options
              and secure your family&aposs future in Canada.`}
        image={"/service.jpg"}
      />
    </>
  );
}

const pgFaq = [
  {
    id: 1,
    question: "How long is a post-graduation work permit valid?",
    description: () => (
      <p>
        Starting February 15, 2024, students who graduate from master’s degree
        programs of less than 2 years (8 months minimum) may be eligible for a 3
        year PGWP. The length of your PGWP depends on the level and duration of
        your study program, as well as the expiry date of your passport,
        whichever comes first.
      </p>
    ),
  },
  {
    id: 2,
    question: "Letter of Support",
    description: () => (
      <p>
        Make sure your passport is valid for the entire length of time you
        should be eligible. If your passport expires earlier, either: your PGWP
        will be issued and valid till your passport expired date, or IRCC can
        extend it
      </p>
    ),
  },
];
