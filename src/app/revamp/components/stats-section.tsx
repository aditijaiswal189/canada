import { FileCheck, Globe2, Shield, Users, Smile } from "lucide-react";

const stats = [
  {
    icon: FileCheck,
    value: "100+",
    label: "Successful visas in 2023",
  },
  {
    icon: Globe2,
    value: "14+",
    label: "Success Start Up Visa",
  },
  {
    icon: Smile,
    value: "95%",
    label: "Happy clients",
  },
  {
    icon: Users,
    value: "3",
    label: "Consultants",
  },
];

export function StatsSection() {
  return (
    <section className="bg-green-600 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
