"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts"

const policyData = [
  { name: "basic", label: "Basic Cover", value: 45, color: "hsl(var(--chart-1))" },
  { name: "premium", label: "Premium Cover", value: 30, color: "hsl(var(--chart-2))" },
  { name: "family", label: "Family Cover", value: 20, color: "hsl(var(--chart-3))" },
  { name: "senior", label: "Senior Cover", value: 5, color: "hsl(var(--chart-4))" },
]

// Hex palette fallback for environments without OKLCH support
const PIE_COLORS = [
  "#3b82f6", // blue-500
  "#22c55e", // green-500
  "#06b6d4", // cyan-500
  "#a855f7", // purple-500
  "#f59e0b", // amber-500
]

export function PolicyDistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Policy Type Distribution</CardTitle>
        <CardDescription>Breakdown of active policies by type</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            basic: { label: "Basic Cover", color: "hsl(var(--chart-1))" },
            premium: { label: "Premium Cover", color: "hsl(var(--chart-2))" },
            family: { label: "Family Cover", color: "hsl(var(--chart-3))" },
            senior: { label: "Senior Cover", color: "hsl(var(--chart-4))" },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={policyData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                nameKey="name"
              >
                {policyData.map((entry, index) => (
                  <Cell key={`slice-${entry.name}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {policyData.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-sm text-muted-foreground">
                {item.label}: {item.value}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
