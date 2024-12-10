import React from "react";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import ContentBox from "@/app/revamp/revamp-components/content-box";
import CallToAction from "@/app/revamp/revamp-components/cta";

export default function InternationalMobilityProgram() {
  return (
    <>
      <ContentBox
        title="International Mobility Program (IMP)"
        subtitle="Canada Immigration Program"
        description={[
          `The IMP or International Mobility Program of Canada provides
                employers with the chance to hire employees from outside on a
                momentary work permit to work as laborers without an LMIA or
                Labour Market Impact Assessment. This opportunity is
                advantageous to employers as the process of hiring is quick and
                straightforward.`,
          ` By the International Mobility Program of Canada, various
                cultural and economic interests of the country are served. Some
                of the popular forms to which IMP caters are:`,
          `County-specific agreements`,
          `Reciprocal youth exchange agreements`,
          `Allowing international students who studied in Canada an
                    opportunity to work`,
          `Circumstances that are culturally or socially advantageous
                    to Canada`,
        ]}
      />
      <CallToAction />
    </>
  );
}
