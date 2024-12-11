import { CardItem } from "@/app/revamp/revamp-components/card-item";
import ContentBox from "@/app/revamp/revamp-components/content-box";
import Container from "@/components/ui/container";
import { FeatureSection, FeatureSection2 } from "@/components/ui/feature";
import { features } from "@/components/ui/featuresMap";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function QuebecInvestor() {
  return (
    <>
      <ContentBox
        subtitle="QuebecInvestor"
        description={[
          `While the federal Immigrant Investor Program of Canada has been
          terminated, Quebec still offer investor immigration programs. This
          program require participants to invest a significant amount in the
          province in exchange for permanent residency.`,
          `However, the Quebec Immigrant Investor Program QIIP is currently
          closed to new applicants. It was suspended in 2019 and was supposed to
          open in April 2023. However, it was announced last March that the
          program would remain closed until January 2024`,
        ]}
      />
      <Container className="flex flex-col gap-8">
        <FeatureSection
          title={"Eligibility"}
          description={
            "Quebec&aposs dynamic cities, picturesque landscapes, and strong economy make it an appealing choice for immigration."
          }
          subtitle={"Quebec Immigrant Investor Program (QIIP)"}
          childClass="lg:grid-cols-1"
          className="py-8"
        >
          <div className="flex w-full flex-col gap-4 justify-start items-start ">
            {Eligibility.map((item, index) => (
              <div
                key={index}
                className="text-left flex gap-2 items-start justify-center"
              >
                <Icon
                  icon={"material-symbols:library-add-check-rounded"}
                  className="mt-1"
                />
                <p>{item.item}</p>
              </div>
            ))}
          </div>
        </FeatureSection>
        <FeatureSection2
          title={"How can we help you?"}
          description={
            "GTR Worldwide can assist you in increasing your Comprehensive Ranking System (CRS) score for Express Entry in several ways:"
          }
        >
          {features.map((item, index) => (
            <CardItem
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </FeatureSection2>
      </Container>
    </>
  );
}

const Eligibility = [
  {
    id: 1,
    item: "Two years of suitable management or business experience within the five years preceding the application",
  },
  {
    id: 2,
    item: "Investment of $1.2 million into a passive government-guaranteed investment for a period of five years bearing no interest",
  },
  {
    id: 3,
    item: "Intend to settle in the province of Quebec",
  },
  {
    id: 4,
    item: "Enter into an investment agreement with a financial intermediary.",
  },
  {
    id: 5,
    item: " Obtain enough points in the selection grid",
  },
  {
    id: 6,
    item: "Obtain an attestation of learning about democratic values and Québec values",
  },
];
