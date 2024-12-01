import { AccordionSection } from "../../components/accordion-section";
import { CardGrid } from "../../components/card-grid";
import { CollapsibleSection } from "../../components/collapsible-section";
import { TabbedContent } from "../../components/tabbed-content";

const faqItems = [
  {
    title: "What is Express Entry?",
    content:
      "Express Entry is an online system used to manage applications for permanent residence from skilled workers. It's designed to select immigrants who are likely to succeed economically in Canada.",
  },
  {
    title: "How does the CRS score work?",
    content:
      "The Comprehensive Ranking System (CRS) is a points-based system used to assess and score your profile and rank it in the Express Entry pool. The highest-ranking candidates are invited to apply for permanent residence.",
  },
  // Add more FAQ items as needed
];

const crsFactors = [
  {
    title: "Age",
    content:
      "You can score a maximum of 110 points for your age. The ideal age range is between 20 and 29 years old.",
  },
  {
    title: "Education",
    content:
      "You can score up to 150 points for your education level, with a maximum for a Ph.D. or equivalent.",
  },
  {
    title: "Language Skills",
    content:
      "You can score up to 160 points for your proficiency in English and/or French, based on standardized language tests.",
  },
  // Add more CRS factors as needed
];

export default function ExpressEntryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Express Entry and CRS Score Calculation
        </h1>

        <TabbedContent
          tabs={[
            {
              label: "Overview",
              content: (
                <div className="prose max-w-none">
                  <p>
                    Express Entry is Canada's flagship immigration system for
                    skilled workers. It manages applications for three federal
                    economic immigration programs:
                  </p>
                  <ul>
                    <li>Federal Skilled Worker Program</li>
                    <li>Federal Skilled Trades Program</li>
                    <li>Canadian Experience Class</li>
                  </ul>
                  <p>
                    The Comprehensive Ranking System (CRS) is used to assess and
                    score candidates in the Express Entry pool. Those with the
                    highest scores are invited to apply for permanent residence.
                  </p>
                </div>
              ),
            },
            {
              label: "CRS Factors",
              content: <CardGrid items={crsFactors} />,
            },
            {
              label: "Application Process",
              content: (
                <div className="space-y-4">
                  <CollapsibleSection title="Step 1: Check Your Eligibility">
                    <p>
                      Before you apply, make sure you meet the minimum
                      requirements for one of the Express Entry programs. This
                      includes factors like work experience, language ability,
                      and education.
                    </p>
                  </CollapsibleSection>
                  <CollapsibleSection title="Step 2: Create an Express Entry Profile">
                    <p>
                      If you're eligible, you can create an online Express Entry
                      profile. This is where you'll provide information about
                      your skills, work experience, language ability, education,
                      and other details.
                    </p>
                  </CollapsibleSection>
                  <CollapsibleSection title="Step 3: Receive an Invitation to Apply (ITA)">
                    <p>
                      If you're selected from the pool, you'll receive an
                      Invitation to Apply (ITA) for permanent residence. This is
                      based on your CRS score and the minimum score set for that
                      particular draw.
                    </p>
                  </CollapsibleSection>
                  <CollapsibleSection title="Step 4: Submit Your Application">
                    <p>
                      After receiving an ITA, you have 60 days to submit a
                      complete application for permanent residence. Make sure to
                      include all required documents and information.
                    </p>
                  </CollapsibleSection>
                </div>
              ),
            },
          ]}
        />

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <AccordionSection items={faqItems} />
        </div>
      </div>
    </div>
  );
}
