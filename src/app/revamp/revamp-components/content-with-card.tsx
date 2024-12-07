import { Card } from "@/components/ui/card";
import OverlappingFrames from "./overlapping-frame";

export default function ContentWithCard() {
  return (
    <div className="container mx-auto px-4 my-8 py-20 w-full bg-black">
      <div
        className="absolute inset-0 opacity-20 w-full"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Header */}
      <div className="flex">
        <div className="flex-1 relative">
          <div className="inline-block bg-green-600 rounded-lg px-4 py-2 text-white mb-6">
            Why Choose GreenTech Resource Worldwide Canada
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white max-w-3xl mb-6">
            We are always ready for every challenge. Please trust us
          </h1>
          <div className="space-y-4 text-white max-w-3xl">
            <p>
              At GreenTech Resource Worldwide Canada, we understand that
              immigration is a transformative journey, often filled with
              uncertainties and challenges. Our goal and mission revolve around
              being your trusted partner on this journey.
            </p>
            <p>
              With our unwavering support, we aim to help you turn your dreams
              into reality, bridging horizons and embracing new opportunities
              that await you in a foreign land.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <OverlappingFrames />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 -mt-28 lg:grid-cols-4">
        {/* Government Licensed Card */}
        <Card className="p-6 bg-sky-400 text-white border-none">
          <h3 className="text-2xl font-semibold mb-4">
            Government of Canada Licensed
          </h3>
          <p className="text-white">
            We are authorized to legally represent our clients&apos; files,
            working directly with the Immigration Department of Canada and the
            Government of Canada. Our RCIC experts ensure that our clients&apos;
            files are processed accurately, legally, and securely.
          </p>
        </Card>

        {/* Success Rate Card */}
        <Card className="p-6 bg-green-600 text-white border-none">
          <h3 className="text-2xl font-semibold mb-4">High Success Rate</h3>
          <p className="text-white">
            This is achieved through a personalized strategy for each of our
            clients. Each file is analyzed specifically, identifying strengths
            and weaknesses that need to be addressed. Our wealth of experience
            helps us anticipate and provide proactive solutions to shorten
            processing times and ensure success.
          </p>
        </Card>

        {/* Experience Card */}
        <Card className="p-6 bg-amber-300 border-none">
          <h3 className="text-2xl font-semibold mb-4">Years Of Experience</h3>
          <p className="text-amber-900">
            GreenTech Resource Worldwide Canada is a Canada-based company led by
            Immigration Expert Mr. Manoj Goswami, the founder and CEO of the
            company. With an educational background and over 20 years of working
            experience in Canada, he and his team have a deep understanding of
            the labor market.
          </p>
        </Card>

        {/* Cost Card */}
        <Card className="p-6 bg-emerald-400 text-white border-none">
          <h3 className="text-2xl font-semibold mb-4">
            Reasonable cost guaranteed quality
          </h3>
          <p className="text-emerald-50">
            At GreenTech Resource Worldwide Canada, we offer high-quality
            immigration services at affordable rates, ensuring your journey
            towards a new beginning is both accessible and excellent. We have
            transparent refund policy.
          </p>
        </Card>
      </div>
    </div>
  );
}
