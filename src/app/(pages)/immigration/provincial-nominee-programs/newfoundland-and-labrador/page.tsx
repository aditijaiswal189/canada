import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import Title from "@/components/ui/Title";
import { featuresPage } from "@/components/ui/appointmentMap";
import { Description } from "@/app/revamp/revamp-components/heading";

export default function NewFoundlandLabrador() {
  return (
    <>
      <Container>
        <div className="flex-1 flex flex-col gap-2">
          <Title
            subtitle="Canada Nomination Immigration Program"
            title="New Brunswick Provincial Nominee Program (NBPNP)​"
            description={[
              "The Newfoundland Provincial Nominee Program (NL PNP) offers five immigration pathways for individuals wishing to settle in the beautiful province of Newfoundland and Labrador. Whether you're a skilled worker, recent graduate, or entrepreneur, NL PNP provides several opportunities to fast-track your Canadian permanent residency. Here’s an overview of the five available Category.",
            ]}
          />

          <p className="text-sm text-black/60 text-left">
            If you wish to immigrate to Newfoundland then you have 5 options to
            choose from:
            <Title subtitle="Programs" className="pt-7" />
            <ul className="list-disc">
              <div className="flex flex-col">
                <li className="font-bold text-lg flex flex-col gap-2">
                  Newfoundland and Labrador Express Entry Skilled Worker
                  <Description>
                    This stream is for highly skilled workers with a valid job
                    offer from a Newfoundland employer and who are eligible
                    under the federal Express Entry system. It’s one of the
                    fastest ways to immigrate to the province.
                  </Description>
                </li>
              </div>
              <div className="flex flex-col">
                <li className="font-bold text-lg flex flex-col gap-2">
                  Skilled Worker Category
                  <Description>
                    The Skilled Worker Category targets individuals with
                    specialized skills who have a full-time job offer from a
                    Newfoundland and Labrador employer. Applicants must have
                    relevant experience and meet the labor market needs of the
                    province.
                  </Description>
                </li>
              </div>
              <div className="flex flex-col">
                <li className="font-bold text-lg flex flex-col gap-2">
                  International Graduate Entrepreneur Category
                  <Description>
                    Graduates of post-secondary institutions in Newfoundland and
                    Labrador who have already started or purchased a business in
                    the province can apply under this stream. It’s designed for
                    those who have shown a commitment to the local economy and
                    want to continue growing their business.
                  </Description>
                </li>
              </div>
              <div className="flex flex-col">
                <li className="font-bold text-lg flex flex-col gap-2">
                  International Entrepreneur Category
                  <Description>
                    This stream is for experienced business owners or senior
                    managers who wish to establish or purchase a business in
                    Newfoundland and actively manage it. Applicants must meet
                    minimum investment and business ownership requirements.
                  </Description>
                </li>
              </div>
              <div className="flex flex-col">
                <li className="font-bold text-lg flex flex-col gap-2">
                  International Graduate Category
                  <Description>
                    Recent graduates from recognized post-secondary institutions
                    in Canada may qualify under this category if they have a
                    valid job offer related to their field of study from a
                    Newfoundland employer.
                  </Description>
                </li>
              </div>
            </ul>
          </p>
        </div>
      </Container>
      <Container>
        <Title
          subtitle="Benefits"
          title={"Benefits for your family"}
          description={[
            "Obtaining a Newfoundland Provincial Nominee Program not only benefits you but also extends to your entire family. When you receive a nomination, your spouse and children (under 22 years of age at the time of application) are also eligible to apply for Canadian Permanent Residency. This opens the door to a range of opportunities and advantages, including:",
          ]}
        />
        <p className="text-sm text-black/60 text-left">
          Access to Healthcare: Your family will have access to Canada’s
          world-class healthcare system.
        </p>
        <p className="text-sm text-black/60 text-left ">
          Free Education: Your children can benefit from free public education,
          just like Canadian citizens
        </p>
        <p className="text-sm text-black/60 text-left ">
          Job Opportunities: Your spouse can work in Canada, expanding your
          household’s employment options.
        </p>
        <p className="text-sm text-black/60 text-left ">
          Social Services: You and your family can enjoy most social benefits,
          such as unemployment insurance and family benefits.
        </p>
        <p className="text-sm text-black/60 text-left ">
          Path to Citizenship: After a few years as permanent residents, your
          family can apply for Canadian citizenship.
        </p>
      </Container>
      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            subtitle="
British Columbia provincial nominee program"
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                What can we help you?
              </p>
            }
          />

          <div className="flex flex-col justify-start gap-6">
            <p className="text-sm text-black/60 text-left">
              GreenTech Resources Worldwide Canada can assist you in increasing
              your Comprehensive Ranking System (CRS) score for Express Entry in
              several ways:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 w-full mx-auto">
          {featuresPage.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </Container>
    </>
  );
}
