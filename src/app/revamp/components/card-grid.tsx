import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CardItem {
  title: string
  content: React.ReactNode
}

interface CardGridProps {
  items: CardItem[]
}

export function CardGrid({ items }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-green-600">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {item.content}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

