import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TimelineItem {
  title: string
  timestamp: string
  location?: string
  isCompleted?: boolean
  isLast?: boolean
}

interface TimelineProps {
  items: TimelineItem[]
  title?: string
  metadata?: {
    label: string
    value: string
  }[]
}

export function Timeline({ items, title, metadata }: TimelineProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      {(title || metadata) && (
        <CardHeader className="space-y-4">
          {title && <CardTitle>{title}</CardTitle>}
          {metadata && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
              {metadata.map((item, index) => (
                <div key={index}>
                  <div className="text-muted-foreground">{item.label}</div>
                  <div className="font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          )}
        </CardHeader>
      )}
      <CardContent className="pt-6">
        <div className="relative">
          {items.map((item, index) => (
            <div key={index} className="flex gap-4 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-3 h-3 rounded-full border-2",
                    item.isCompleted
                      ? "bg-green-600 border-green-600"
                      : "bg-white border-gray-300"
                  )}
                />
                {!item.isLast && (
                  <div
                    className={cn(
                      "w-0.5 h-full",
                      item.isCompleted ? "bg-green-600" : "bg-gray-200"
                    )}
                  />
                )}
              </div>
              <div className="flex-1 pt-[-4px]">
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-muted-foreground">
                  {item.location && (
                    <span className="mr-2">{item.location}</span>
                  )}
                  <span>{item.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

