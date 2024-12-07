import { Subtitle, Title } from "@/app/revamp/revamp-components/heading";
import HighlightCards from "@/app/revamp/revamp-components/highlighting-card";
import { StatsSection } from "@/app/revamp/revamp-components/stats-section";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import { ServicesCard } from "@/components/ui/services-card";
export default function OurService() {
  return (
    <>
      <div className="px-10">
        <div className="pt-10">
          <Subtitle className="text-left" position="left">
            We provide what
          </Subtitle>
          <Title className="text-left w-full">
            Recruitment, Immigration and Settlement Services
          </Title>
        </div>

        {/* <Title /> */}
        {/* <Title
        //         subtitle="Our goal is to provide customers with the best service, for us to help customers
        // overcome their barriers and obtain Permanent Residensy in Canada"
        subtitle="We provide what"
        title={
          <p className="text-4xl text-black/50 w-full text-left">
            Recruitment, Immigration and Settlement Services
          </p>
        }
        to=""
      /> */}

        <HighlightCards
          config={dummyservices}
          className="lg:grid-cols-3"
          mainClassName="px-0 py-0"
        />
      </div>
      <StatsSection />

      <CTADefault
        title="We Provide The Best Service"
        subtitle={
          <p className="text-4xl text-center text-white/90">
            Book a session today and <br />
            start changing your life!
          </p>
        }
        image={"/service.jpg"}
      />
    </>
  );
}

const dummyservices = [
  {
    id: 1,
    title: "Work in Canada",
    description:
      "Canada offers diverse work opportunities, fostering career growth and global experiences in a vibrant, welcoming country for skilled professionals and temporary workers.",
  },
  {
    id: 2,
    title: "Study in Canada",
    description:
      "Canada provides world-class education with diverse programs and cultural experiences, making it an ideal destination for international students.",
  },
  {
    id: 3,
    title: "Immigrate to Canada",
    description:
      "Canada&aposs immigration policies welcome skilled workers, families, and refugees, offering a pathway to citizenship and a new life in a thriving nation.",
  },
  {
    id: 4,
    title: "Visit Canada",
    description:
      "Canada&aposs stunning landscapes, vibrant cities, and friendly people make it a top destination for travelers seeking adventure, culture, and natural beauty.",
  },
  {
    id: 5,
    title: "Invest in Canada",
    description:
      "Canada&aposs stable economy, skilled workforce, and innovation-friendly environment provide lucrative opportunities for investors and entrepreneurs.",
  },
  {
    id: 6,
    title: "Live in Canada",
    description:
      "Canada offers a high quality of life, excellent healthcare, and a safe, welcoming environment for families and individuals looking to settle.",
  },
];
