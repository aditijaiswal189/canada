import { PackageTracking } from "../../revamp-components/package-tracking";

export default function TrackingPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Track Your Package</h1>
        <PackageTracking />
      </div>
    </div>
  );
}
