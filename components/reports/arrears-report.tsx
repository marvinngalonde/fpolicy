"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Pie, PieChart, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

const arrearsData = [
  { month: "Jan", customers: 145, amount: 234500 },
  { month: "Feb", customers: 132, amount: 198600 },
  { month: "Mar", customers: 156, amount: 267800 },
  { month: "Apr", customers: 143, amount: 245300 },
  { month: "May", customers: 138, amount: 223400 },
  { month: "Jun", customers: 129, amount: 198700 },
  { month: "Jul", customers: 134, amount: 212800 },
  { month: "Aug", customers: 127, amount: 189500 },
  { month: "Sep", customers: 142, amount: 234600 },
  { month: "Oct", customers: 135, amount: 218900 },
  { month: "Nov", customers: 131, amount: 203400 },
  { month: "Dec", customers: 127, amount: 195600 },
]

const arrearsBreakdown = [
  { period: "1 Month", count: 45, percentage: 35.4, color: "hsl(var(--chart-1))" },
  { period: "2 Months", count: 38, percentage: 29.9, color: "hsl(var(--chart-2))" },
  { period: "3 Months", count: 28, percentage: 22.0, color: "hsl(var(--chart-3))" },
  { period: "4+ Months", count: 16, percentage: 12.6, color: "hsl(var(--chart-4))" },
]

const criticalArrears = [
  {
    customer: "Robert Taylor",
    id: "CUST001",
    policy: "Basic Cover",
    monthsOverdue: 4,
    amountDue: 1800,
    lastContact: "2024-01-10",
    phone: "+27 82 123 4567",
  },
  {
    customer: "Emma Davis",
    id: "CUST002",
    policy: "Premium Cover",
    monthsOverdue: 5,
    amountDue: 3750,
    lastContact: "2024-01-08",
    phone: "+27 83 987 6543",
  },
  {
    customer: "James Miller",
    id: "CUST003",
    policy: "Family Cover",
    monthsOverdue: 4,
    amountDue: 2600,
    lastContact: "2024-01-12",
    phone: "+27 84 555 1234",
  },
  {
    customer: "Sophie Anderson",
    id: "CUST004",
    policy: "Basic Cover",
    monthsOverdue: 6,
    amountDue: 2700,
    lastContact: "2024-01-05",
    phone: "+27 85 777 8888",
  },
]

export function ArrearsReport() {
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
            <CardTitle className="text-sm font-medium">Customers in Arrears</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">127</div>
            <p className="text-xs text-success">-5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Amount Due</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">R195,600</div>
            <p className="text-xs text-muted-foreground">Outstanding premiums</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Overdue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R1,540</div>
            <p className="text-xs text-muted-foreground">per customer</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Recovery Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.5%</div>
            <p className="text-xs text-success">+3.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Arrears Trend</CardTitle>
            <CardDescription>Monthly customers in arrears and outstanding amounts</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                customers: { label: "Customers", color: "hsl(var(--destructive))" },
                amount: { label: "Amount", color: "hsl(var(--chart-2))" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={arrearsData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="customers" fill="var(--color-customers)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Arrears by Period</CardTitle>
            <CardDescription>Distribution of customers by overdue period</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                count: { label: "Customers", color: "hsl(var(--chart-1))" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={arrearsBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="count"
                  >
                    {arrearsBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {arrearsBreakdown.map((item) => (
                <div key={item.period} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-muted-foreground">
                    {item.period}: {item.count} ({item.percentage}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Critical Arrears Table */}
      <Card>
        <CardHeader>
          <CardTitle>Critical Arrears (4+ Months)</CardTitle>
          <CardDescription>Customers requiring immediate attention</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Policy</TableHead>
                <TableHead>Months Overdue</TableHead>
                <TableHead>Amount Due</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {criticalArrears.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{customer.customer}</div>
                      <div className="text-sm text-muted-foreground">{customer.id}</div>
                    </div>
                  </TableCell>
                  <TableCell>{customer.policy}</TableCell>
                  <TableCell>
                    <Badge variant="destructive">{customer.monthsOverdue} months</Badge>
                  </TableCell>
                  <TableCell className="text-destructive font-medium">{formatCurrency(customer.amountDue)}</TableCell>
                  <TableCell>{customer.lastContact}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Phone className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mail className="h-3 w-3" />
                      </Button>
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
