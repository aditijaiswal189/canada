"use client";
import React from "react";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import Jobs from "@/components/ui/jobs";

export default function SupportForEmployers() {
  return (
    <>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>

              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">
                  Canada Immigration Program
                  {/* {albertaImmigrationAAIP[language].title} */}
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Support for Employees
              </h3>

              <Title subtitle="Are you looking for LMIA/PNP applicants?" />
              <p className="text-sm text-black/60 text-left">
                Hiring foreign workers adds fresh skills and perspectives,
                enhancing business innovation and diversity.
              </p>

              <p className="text-sm text-black/60 text-left">
                <ul className="pl-6 list-disc">
                  <li>Assessing your hiring requirements</li>
                  <li>Ensure of PNP/LMIA registration for employers</li>
                  <li>
                    Planning, searching, and screening suitable candidates
                  </li>
                  <li>Streamlining the interview process</li>
                  <li>Assisting with employment offers</li>
                  <li>
                    Handling PNP/LMIA and work permit procedures for candidates
                  </li>
                  <li>Guiding candidates through settlement processes</li>
                </ul>
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Title
          subtitle="EMPLOYERS IN COLLABORATION"
          title={
            <p className="text-xl text-black/50 w-full text-left pt-3">
              Proudly Delivering Hundreds of Talented Professionals
            </p>
          }
        />
      </Container>
      <Jobs />
      <Container className="px-4">
        <Title
          subtitle="Support for Employers"
          title={
            <p className="text-xl text-black/50 w-full text-left pt-3">
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
        <CTADefault
          title="Take the first step towards your family&aposs Canadian dream
"
          subtitle={
            <p className="text-xl text-white/90">
              Book a consultation today to explore immigration options
              <br />
              and secure your family&aposs future in Canada.
            </p>
          }
          image={"/service.jpg"}
        />
      </Container>
    </>
  );
}