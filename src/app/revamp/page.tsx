"use client";
import { AnimatedBackground } from "./revamp-components/animated-background";
import BackgroundWithImage from "./revamp-components/background-sections";
import { Footer } from "./revamp-components/footer";
import { Header } from "./revamp-components/header";
import { Subtitle, Title } from "./revamp-components/heading";
import { HeroSection } from "./revamp-components/hero-section";
import ImageFrameSection from "./revamp-components/image-frame-section";
import NewsShowcase from "./revamp-components/news-showcase";
import PnpProgramSlider from "./revamp-components/pnp-programme-slider";
import { StatsSection } from "./revamp-components/stats-section";
import { TestimonialsSection } from "./revamp-components/testimonials-section";
import { VisaServices } from "./revamp-components/visa-services";

export default function Page() {
  return (
    <>
      <Header />
      <div className="relative min-h-screen overflow-hidden">
        {/* <AnimatedBackground /> */}
        <main className="min-h-screen flex flex-col bg-gray-50">
          <HeroSection />
          <ImageFrameSection
            subtitle="ABOUT COMPANY"
            title="We Always Ready To Make Your Canada Dream Come True."
            description="Our team of experienced professionals is dedicated to your success,
          offering personalized guidance, up-to-date expertise, and unwavering
          support throughout your immigration process. With our proven track
          record, we ensure a smooth, stress-free, and successful transition to
          your new life in Canana"
            point1="Professional consulting team"
            point2="Personalized solutions"
            point3="Affordable cost"
            point4="10+ years experience"
          />

          {/* <FULLCTA {...ctaData} /> */}

          {/* <FeaturesSection /> */}
          <VisaServices />
          <StatsSection />
          <BackgroundWithImage className="flex flex-col gap-4">
            <Subtitle className="text-center" position="center">
              Selecting the Right PNP is the key to achieving your canadian PR
              dream
            </Subtitle>
            <Title className="text-white text-center">
              Provincial Nomination Programs
            </Title>
            <PnpProgramSlider />
          </BackgroundWithImage>
          <div className="container mx-auto px-4 py-16">
            {/* <ContactForm /> */}
            <TestimonialsSection />
            <section className="py-16">
              <div className="text-center mb-12">
                <Subtitle position="center">NEWS & BLOG</Subtitle>
                <Title>Read Our Latest News & Blog</Title>
              </div>
              <NewsShowcase />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
