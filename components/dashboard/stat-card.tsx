import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon: LucideIcon
  description?: string
}

export function StatCard({ title, value, change, changeType = "neutral", icon: Icon, description }: StatCardProps) {
  const getChangeColor = () => {
    switch (changeType) {
      case "positive":
        return "text-success"
      case "negative":
        return "text-destructive"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && <p className={`text-xs ${getChangeColor()}`}>{change}</p>}
        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
      </CardContent>
    </Card>
  )
}
