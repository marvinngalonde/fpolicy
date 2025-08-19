"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Cell } from "recharts"

const monthlyData = [
  { month: "Jan", collections: 45000 },
  { month: "Feb", collections: 52000 },
  { month: "Mar", collections: 48000 },
  { month: "Apr", collections: 61000 },
  { month: "May", collections: 55000 },
  { month: "Jun", collections: 67000 },
  { month: "Jul", collections: 59000 },
  { month: "Aug", collections: 72000 },
  { month: "Sep", collections: 68000 },
  { month: "Oct", collections: 75000 },
  { month: "Nov", collections: 71000 },
  { month: "Dec", collections: 78000 },
]

// Hex palette fallback for environments without OKLCH support
const BAR_COLORS = [
  "#3b82f6", // blue-500
  "#22c55e", // green-500
  "#06b6d4", // cyan-500
  "#a855f7", // purple-500
  "#f59e0b", // amber-500
]

export function MonthlyCollectionsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Premium Collections</CardTitle>
        <CardDescription>Premium collections over the past 12 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            collections: {
              label: "Collections (R)",
              color: "#22c55e",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent nameKey="collections" />} />
              <Bar dataKey="collections" radius={[4, 4, 0, 0]}>
                {monthlyData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={BAR_COLORS[index % BAR_COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
