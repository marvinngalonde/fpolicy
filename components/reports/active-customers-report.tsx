"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const customerGrowthData = [
  { month: "Jan", newCustomers: 45, totalActive: 2156 },
  { month: "Feb", newCustomers: 52, totalActive: 2208 },
  { month: "Mar", newCustomers: 48, totalActive: 2256 },
  { month: "Apr", newCustomers: 61, totalActive: 2317 },
  { month: "May", newCustomers: 55, totalActive: 2372 },
  { month: "Jun", newCustomers: 67, totalActive: 2439 },
  { month: "Jul", newCustomers: 59, totalActive: 2498 },
  { month: "Aug", newCustomers: 72, totalActive: 2570 },
  { month: "Sep", newCustomers: 68, totalActive: 2638 },
  { month: "Oct", newCustomers: 75, totalActive: 2713 },
  { month: "Nov", newCustomers: 71, totalActive: 2784 },
  { month: "Dec", newCustomers: 63, totalActive: 2847 },
]

const policyBreakdown = [
  { policy: "Basic Cover", count: 1247, percentage: 43.8 },
  { policy: "Premium Cover", count: 892, percentage: 31.3 },
  { policy: "Family Cover", count: 634, percentage: 22.3 },
  { policy: "Senior Cover", count: 74, percentage: 2.6 },
]

export function ActiveCustomersReport() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Active Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-success">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">63</div>
            <p className="text-xs text-muted-foreground">December 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Age</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">years</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-success">+2.1% from last year</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Customer Growth Trend</CardTitle>
            <CardDescription>Monthly new customer acquisitions and total active customers</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                newCustomers: { label: "New Customers", color: "hsl(var(--chart-1))" },
                totalActive: { label: "Total Active", color: "hsl(var(--chart-2))" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={customerGrowthData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="newCustomers"
                    stroke="var(--color-newCustomers)"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="totalActive"
                    stroke="var(--color-totalActive)"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Policy Distribution</CardTitle>
            <CardDescription>Active customers by policy type</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                count: { label: "Customers", color: "hsl(var(--chart-1))" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={policyBreakdown}>
                  <XAxis dataKey="policy" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="count" fill="var(--color-count)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Policy Breakdown Table */}
      <Card>
        <CardHeader>
          <CardTitle>Policy Type Breakdown</CardTitle>
          <CardDescription>Detailed breakdown of active customers by policy type</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Policy Type</TableHead>
                <TableHead>Active Customers</TableHead>
                <TableHead>Percentage</TableHead>
                <TableHead>Monthly Revenue</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {policyBreakdown.map((item) => (
                <TableRow key={item.policy}>
                  <TableCell className="font-medium">{item.policy}</TableCell>
                  <TableCell>{item.count.toLocaleString()}</TableCell>
                  <TableCell>{item.percentage}%</TableCell>
                  <TableCell className="text-success font-medium">
                    R
                    {(
                      item.count *
                      (item.policy === "Basic Cover"
                        ? 450
                        : item.policy === "Premium Cover"
                          ? 750
                          : item.policy === "Family Cover"
                            ? 650
                            : 350)
                    ).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-success text-success-foreground">Active</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
