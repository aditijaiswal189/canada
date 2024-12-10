"use client";
import React from "react";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import Jobs from "@/components/ui/jobs";
import ContentBox from "@/app/revamp/revamp-components/content-box";
import CallToAction from "@/app/revamp/revamp-components/cta";

export default function SupportForEmployers() {
  return (
    <>
      <ContentBox
        title="Support for Employees"
        subtitle="Canada Immigration Program"
        description={[``]}
      />
      <Container>
        <Title
          subtitle="Are you looking for LMIA/PNP applicants?"
          description={[
            `Hiring foreign workers adds fresh skills and perspectives,
                enhancing business innovation and diversity.`,
          ]}
        />

        <p className="text-sm text-black/60 text-left">
          <ul className="pl-6 list-disc">
            <li>Assessing your hiring requirements</li>
            <li>Ensure of PNP/LMIA registration for employers</li>
            <li>Planning, searching, and screening suitable candidates</li>
            <li>Streamlining the interview process</li>
            <li>Assisting with employment offers</li>
            <li>Handling PNP/LMIA and work permit procedures for candidates</li>
            <li>Guiding candidates through settlement processes</li>
          </ul>
        </p>
      </Container>
      <Container>
        <Title
          subtitle="EMPLOYERS IN COLLABORATION"
          title={"Proudly Delivering Hundreds of Talented Professionals"}
        />
      </Container>
      <Jobs />
      <Container className="px-4">
        <Title
          subtitle="Support for Employers"
          title={"What can we help you?"}
          description={[
            `Immigration policies can change over time, so it’s essential to stay
          updated with us for the latest information from the respective
          provincial or territorial immigration authorities.`,
            ` Consult GreenTech Resources Worldwide Canada experts to understand
          specific requirements and eligibility for these pathways based on your
          circumstances`,
          ]}
        />
      </Container>
      {/* <CTADefault
        title="Take the first step towards your family&aposs Canadian dream"
        subtitle={`Book a consultation today to explore immigration options
              and secure your family&aposs future in Canada.`}
        image={"/service.jpg"}
      /> */}
      <CallToAction />
    </>
  );
}
