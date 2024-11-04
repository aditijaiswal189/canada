import { challengesList, InfoCard } from "@/components/ui/challengesMap";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/moving-border";
import Glass from "@/lib/helpers";

export default function ImmigrationChallenges() {
  return (
    <>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>

              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">Challenges</h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Overcome Immigration Challenges
              </h3>

              <p className="text-sm text-black/60 text-left pb-5">
                Inadmissibility to Canada can be based on various grounds,
                including criminality, security concerns, health reasons,
                financial issues, and misrepresentation, among others. You need
                to address the underlying issues before reapplying for entry
                into Canada. Working with a qualified immigration consultant of
                GreenTech Resources Worldwide Canada can be invaluable in
                navigating the complex rules and regulations related to
                admissibility. We can help you assess your situation, determine
                the best course of action, and guide you through the application
                process.
              </p>
            </div>
            {/* <div className="pt-4">
              <Button
                className="py-2 px-4  text-stone-50"
                icon={
                  <div className="flex gap-2 justify-center items-center text-xs">
                    <Icon icon={"mdi:phone"} />
                    <span>+1855 477 9797</span>
                  </div>
                }
              >
                <span className="text-xs">Free Consultation</span>
              </Button>
            </div> */}
          </div>
        </Glass>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {challengesList.map((item) => (
            <InfoCard
              title={item.title}
              description={item.description}
              key={item.id}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
