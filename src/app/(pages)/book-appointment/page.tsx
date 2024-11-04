"use client";
import { appointment } from "@/components/ui/appointmentMap";
import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import CountUp, { useCountUp } from "react-countup";

export default function BookAppointment() {
  return (
    <>
      <Container className="flex flex-col py-20 gap-20">
        <Title
          title={
            "Why Choosing Saskatchewan Immigration and a Consultant in Saskatchewan is vital?"
          }
          subtitle={"Saskatchewan stands out as a province in Canada."}
          description={
            <div className="flex flex-col gap-4">
              <p className="text-left">
                Saskatchewan stands out as a province in Canada with open
                immigration schemes that are suitable for many individuals
                seeking to establish themselves in the country.
              </p>
              <p className="text-left">
                With its diverse economy, welcoming communities, and ample
                opportunities for skilled workers, entrepreneurs, and investors,
                Saskatchewan has become an attractive destination for
                immigrants. However, navigating the immigration process in
                Saskatchewan requires careful planning and expertise. This is
                where the role of a Saskatchewan immigration consultant becomes
                crucial. These consultants specialize in understanding the
                unique immigration pathways offered by the province, such as the
                Saskatchewan Immigrant Nominee Program (SINP), and can provide
                tailored guidance to individuals looking to make Saskatchewan
                their new home.
              </p>
              <p className="text-left">
                Given the multitude of options available and the intricacies of
                the application process, choosing the right immigration
                consultant in Saskatchewan is paramount to ensuring a smooth and
                successful immigration journey. With their knowledge of
                Saskatchewan&aposs immigration policies, labor market demands,
                and community dynamics, these consultants play a pivotal role in
                helping individuals realize their aspirations of settling and
                thriving in Saskatchewan.
              </p>
            </div>
          }
        />
      </Container>
      <Container>
        <Glass
          className="flex-col  gap-8 py-20 justify-center items-center bg-cover bg-center relative"
          style={{
            backgroundImage: `url(/immigration.png)`,
          }}
        >
          <div className="bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 rounded-2xl border-gray-100  h-full absolute top-0 left-0 w-full"></div>

          <div className="md:flex-row flex-col flex z-10 gap-20 justify-start items-start">
            <div className="flex w-full md:flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"mdi:checkbox-marked-outline"}
                className="text-5xl cursor-pointer  rounded-full py-2 px-2"
              />
              <div className="flex gap-2 justify-center items-center">
                <CountUp
                  enableScrollSpy={true}
                  end={100}
                  className="text-6xl"
                />
                <span className="text-4xl">+</span>
              </div>
              <span className="uppercase text-lg font-primary tracking-widest">
                successful visas in 2023
              </span>
            </div>
            <div className="flex w-full md:flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"icon-park-outline:message-success"}
                className="text-5xl cursor-pointer  rounded-full py-2 px-2"
              />

              <div className="flex gap-2 justify-center items-center">
                <CountUp enableScrollSpy={true} end={14} className="text-6xl" />
              </div>
              <span className="uppercase text-lg font-primary tracking-widest">
                Success Start Up Visa
              </span>
            </div>
            <div className="flex w-full md:flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"cil:happy"}
                className="text-5xl cursor-pointer  rounded-full py-2 px-2"
              />
              <div className="flex gap-2 justify-center items-center">
                <CountUp enableScrollSpy={true} end={95} className="text-6xl" />
                <span className="text-4xl"> %</span>
              </div>

              <span className="uppercase text-lg font-primary tracking-widest">
                happy clients
              </span>
            </div>
            <div className="flex w-full md:flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"game-icons:trophy-cup"}
                className="text-5xl cursor-pointer rounded-full py-2 px-2"
              />
              <div className="flex gap-2 flex-col  justify-center items-center">
                <CountUp enableScrollSpy={true} end={3} className="text-6xl" />
              </div>
              <span className="uppercase text-lg font-primary tracking-widest">
                Consultants
              </span>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Title
          title={"How to check if my consultant is RCIC?"}
          description={
            <div className="flex flex-col gap-4">
              <p className="text-left">
                Verifying if your consultant is a Registered Canadian
                Immigration Consultant (RCIC) is crucial to ensuring that
                you&aposre receiving guidance from a qualified and authorized
                professional. Here&aposs how you can check if your consultant is
                an RCIC. By following these steps and verifying your
                consultant&aposs registration status with ICCRC, you can ensure
                that you&aposre working with a legitimate and authorized RCIC
                who is qualified to provide immigration advice and
                representation.
              </p>
              <div className="text-left">
                <p className="text-left font-primary tracking-widest text-2xl text-red-900">
                  Visit the ICCRC Website:
                </p>
                <p>
                  The College of Immigration and Citizenship Consultants is the
                  regulatory body that oversees RCICs.
                  <a
                    className="text-sky-400 hover:underline"
                    href="https://www.college-ic.ca"
                  >
                    Visit their official website
                  </a>
                </p>
              </div>
              <div className="text-left">
                <p className="text-left font-primary tracking-widest text-2xl text-red-900">
                  Search the Online Registry:
                </p>
                <p>
                  On the website, navigate to the “Find an Immigration
                  Professional” section. Here, you can search for your
                  consultant by name or registration number.
                </p>
              </div>
              <div className="text-left">
                <p className="text-left font-primary tracking-widest text-2xl text-red-900">
                  Verify Registration Status:
                </p>
                <p>
                  Enter your consultant’s name or registration number into the
                  search bar and click on the search button. The search results
                  will display the consultant’s registration status, including
                  whether they are an RCIC in good standing or if any
                  disciplinary actions have been taken against them.
                </p>
              </div>
              <div className="text-left">
                <p className="text-left font-primary tracking-widest text-2xl text-red-900">
                  Review Details:
                </p>
                <p>
                  Once you’ve found your consultant in the search results,
                  review the details provided to ensure they match the
                  information you have. Pay attention to their registration
                  status, registration number, and any additional information
                  provided.
                </p>
              </div>
              <div className="text-left">
                <p className="text-left font-primary tracking-widest text-2xl text-red-900">
                  Contact The College of Immigration and Citizenship
                  Consultants:
                </p>
                <p>
                  If you have any doubts or concerns about the authenticity of
                  your consultant’s registration, you can contact ICCRC directly
                  for further verification or clarification.
                </p>
              </div>
            </div>
          }
        />
      </Container>
      <Container>
        <Glass className="flex flex-col gap-4 px-10">
          <Title title={"Why GTR Immigration?"} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 max-w-7xl mx-auto">
            {appointment.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Glass>
      </Container>
      <Container>
        <Glass className="px-10">
          <Title
            title={"What Can an Immigration Consultant Do?"}
            description={
              <div className="flex flex-col gap-6">
                <p className="text-left">
                  Immigration consultants offer a range of services to assist
                  clients throughout the immigration process. Some of the key
                  roles they play include:
                </p>
                <ul className="flex flex-col gap-6">
                  <li>
                    <p className="text-left font-primary tracking-widest text-2xl text-red-900">
                      Assessment and Eligibility
                    </p>
                    <p className="text-left">
                      Consultants assess clients&apos eligibility for various
                      immigration programs and provide personalized advice based
                      on individual circumstances.
                    </p>
                  </li>
                  <li>
                    <p className="text-left font-primary tracking-widest text-2xl text-red-900">
                      Application Preparation
                    </p>
                    <p className="text-left">
                      Consultants assist in completing and submitting
                      immigration applications, ensuring all required documents
                      are accurate and submitted within deadlines.
                    </p>
                  </li>
                  <li>
                    <p className="text-left font-primary tracking-widest text-2xl text-red-900">
                      Representation and Advocacy
                    </p>
                    <p className="text-left">
                      Consultants represent clients in communications with
                      immigration authorities, advocating on their behalf and
                      addressing any concerns or inquiries.
                    </p>
                  </li>
                  <li>
                    <p className="text-left font-primary tracking-widest text-2xl text-red-900">
                      Post-Immigration Support
                    </p>
                    <p className="text-left">
                      Consultants offer support and guidance even after
                      immigration approval, assisting with settlement, obtaining
                      essential documents, and navigating life in Canada.
                    </p>
                  </li>
                </ul>
              </div>
            }
          />
        </Glass>
      </Container>
    </>
  );
}
