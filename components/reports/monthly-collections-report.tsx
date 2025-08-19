"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const collectionsData = [
  { month: "Jan", collections: 1245680, target: 1200000, growth: 3.8 },
  { month: "Feb", collections: 1298450, target: 1250000, growth: 4.2 },
  { month: "Mar", collections: 1187320, target: 1200000, growth: -8.6 },
  { month: "Apr", collections: 1356780, target: 1300000, growth: 14.3 },
  { month: "May", collections: 1423650, target: 1350000, growth: 4.9 },
  { month: "Jun", collections: 1567890, target: 1400000, growth: 10.1 },
  { month: "Jul", collections: 1489320, target: 1450000, growth: -5.0 },
  { month: "Aug", collections: 1634570, target: 1500000, growth: 9.7 },
  { month: "Sep", collections: 1578940, target: 1550000, growth: -3.4 },
  { month: "Oct", collections: 1723450, target: 1600000, growth: 9.2 },
  { month: "Nov", collections: 1689320, target: 1650000, growth: -2.0 },
  { month: "Dec", collections: 1756890, target: 1700000, growth: 4.0 },
]

const agentCollections = [
  { agent: "Sarah Jones", collections: 245680, customers: 156, avgPerCustomer: 1575 },
  { agent: "John Smith", collections: 198450, customers: 134, avgPerCustomer: 1481 },
  { agent: "Mike Brown", collections: 187320, customers: 98, avgPerCustomer: 1912 },
  { agent: "Lisa Davis", collections: 156780, customers: 89, avgPerCustomer: 1762 },
  { agent: "System (Auto)", collections: 968860, customers: 2370, avgPerCustomer: 409 },
]

export function MonthlyCollectionsReport() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Collections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">R1,756,890</div>
            <p className="text-xs text-success">+4.0% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Target</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R1,700,000</div>
            <p className="text-xs text-success">103.3% achieved</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average per Customer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R617</div>
            <p className="text-xs text-muted-foreground">December 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.8%</div>
            <p className="text-xs text-success">+1.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Collections vs Target</CardTitle>
            <CardDescription>Actual collections compared to monthly targets</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                collections: { label: "Collections", color: "hsl(var(--success))" },
                target: { label: "Target", color: "hsl(var(--chart-2))" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={collectionsData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="collections" fill="var(--color-collections)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="target" fill="var(--color-target)" radius={[4, 4, 0, 0]} opacity={0.6} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Growth Trend</CardTitle>
            <CardDescription>Month-over-month growth percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                growth: { label: "Growth %", color: "hsl(var(--chart-1))" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={collectionsData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="growth" stroke="var(--color-growth)" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Agent Performance Table */}
      <Card>
        <CardHeader>
          <CardTitle>Agent Collection Performance</CardTitle>
          <CardDescription>Collections by agent for the current month</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Agent</TableHead>
                <TableHead>Total Collections</TableHead>
                <TableHead>Customers Served</TableHead>
                <TableHead>Average per Customer</TableHead>
                <TableHead>Performance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agentCollections.map((agent) => (
                <TableRow key={agent.agent}>
                  <TableCell className="font-medium">{agent.agent}</TableCell>
                  <TableCell className="text-success font-medium">{formatCurrency(agent.collections)}</TableCell>
                  <TableCell>{agent.customers}</TableCell>
                  <TableCell>{formatCurrency(agent.avgPerCustomer)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-muted rounded-full h-2">
                        <div
                          className="bg-success h-2 rounded-full"
                          style={{
                            width: `${Math.min((agent.collections / 250000) * 100, 100)}%`,
                          }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {Math.round((agent.collections / 250000) * 100)}%
                      </span>
                    </div>
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
