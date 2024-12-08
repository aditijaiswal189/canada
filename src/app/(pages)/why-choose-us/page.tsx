"use client";
import Container from "@/components/ui/container";
import React from "react";
import { Feature } from "@/components/ui/cards-set";
import Title from "@/components/ui/Title";
import { appointment } from "@/components/ui/appointmentMap";
import ContentBox from "@/app/revamp/revamp-components/content-box";
import CallToAction from "@/app/revamp/revamp-components/cta";
import { StatsSection } from "@/app/revamp/revamp-components/stats-section";

export default function WhyChooseUs() {
  return (
    <>
      <ContentBox
        title="WHY CHOOSE US?"
        subtitle="We Are The Leading Immigration Center For You"
        description={[
          ` GreenTech Resource Worldwide Canada is ranked as the 3rd top
                recruitment agency and immigration consultant in Saskatchewan.
                We are confident in our ability to provide solutions to shorten
                the journey to the peaceful and beautiful country of Canada for
                your entire family`,
          `
          
              Providing immigration solutions tailored to each client&aposs
              profile
           `,
          `Connecting clients with employers in Canada`,
          `Promoting business investment projects`,
          `Ensure safe and smooth settlement services`,
          `Established in 2016, GreenTech Resource Worldwide Canada has its
          headquarters based in Regina, Saskatchewan, Canada.`,
        ]}
      />
      <Container>
        <Title
          subtitle="Head Office:"
          description={[
            `2124 Broad St, Regina, Saskatchewan, Canada, S4P 1Y5`,
            `(we have no branch in Vietnam)`,
            ` The GreenTech Resources Worldwide Canada team serves clients
                from diverse backgrounds worldwide and can provide support in
                languages such as Vietnamese, Tagalog, Arabic, Chinese, French,
                and Spanish.`,
          ]}
        />
      </Container>
      <StatsSection />

      <Container>
        <Title
          subtitle="Express Entry"
          title={"What can we help you?"}
          description={[
            `GreenTech Resources Worldwide Canada can assist you in
                increasing your Comprehensive Ranking System (CRS) score for
                Express Entry in several ways:`,
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 w-full ">
          {appointment.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </Container>
      <CallToAction />
    </>
  );
}
