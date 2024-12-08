import ContentBox from "@/app/revamp/revamp-components/content-box";
import CallToAction from "@/app/revamp/revamp-components/cta";
import HighlightCards from "@/app/revamp/revamp-components/highlighting-card";
import { challengesList, InfoCard } from "@/components/ui/challengesMap";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/moving-border";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";

export default function ImmigrationChallenges() {
  return (
    <div className="flex flex-col gap-8">
      <ContentBox
        subtitle="Immigration Challenges"
        title="Challenges"
        description={[
          `Inadmissibility to Canada can be based on various grounds,
                including criminality, security concerns, health reasons,
                financial issues, and misrepresentation, among others. You need
                to address the underlying issues before reapplying for entry
                into Canada. Working with a qualified immigration consultant of
                GreenTech Resources Worldwide Canada can be invaluable in
                navigating the complex rules and regulations related to
                admissibility. We can help you assess your situation, determine
                the best course of action, and guide you through the application
                process.`,
        ]}
      />
      <Container className="py-0 pt-6">
        <Title subtitle="Challenges" title={"Common challenges"} />
        <HighlightCards config={challengesList} mainClassName="px-0 py-0" />
      </Container>
      <CallToAction />
    </div>
  );
}
