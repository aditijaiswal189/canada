import { FileCheck, Globe2, Shield, Users } from 'lucide-react'

const stats = [
  {
    icon: FileCheck,
    value: "5k+",
    label: "Visa Approval"
  },
  {
    icon: Globe2,
    value: "38k+",
    label: "Visa Consultation"
  },
  {
    icon: Shield,
    value: "25+",
    label: "Visa Categories"
  },
  {
    icon: Users,
    value: "80+",
    label: "Consultants"
  }
]

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
  )
}

