"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Download, RefreshCw } from "lucide-react"

const payments = [
  {
    id: "PAY001",
    customer: "John Doe",
    customerId: "CUST001",
    policy: "Basic Cover",
    amount: 450,
    date: "2024-01-15",
    time: "14:30",
    agent: "Sarah Jones",
    status: "completed",
    method: "Bank Transfer",
    reference: "BT20240115001",
  },
  {
    id: "PAY002",
    customer: "Sarah Smith",
    customerId: "CUST002",
    policy: "Premium Cover",
    amount: 750,
    date: "2024-01-15",
    time: "11:45",
    agent: "John Smith",
    status: "completed",
    method: "Debit Order",
    reference: "DO20240115002",
  },
  {
    id: "PAY003",
    customer: "Mike Johnson",
    customerId: "CUST003",
    policy: "Family Cover",
    amount: 650,
    date: "2024-01-14",
    time: "16:20",
    agent: "System",
    status: "completed",
    method: "Credit Card",
    reference: "CC20240114003",
  },
  {
    id: "PAY004",
    customer: "Lisa Brown",
    customerId: "CUST004",
    policy: "Basic Cover",
    amount: 450,
    date: "2024-01-14",
    time: "09:15",
    agent: "Mike Brown",
    status: "pending",
    method: "Cash",
    reference: "CASH20240114004",
  },
  {
    id: "PAY005",
    customer: "David Wilson",
    customerId: "CUST005",
    policy: "Senior Cover",
    amount: 350,
    date: "2024-01-13",
    time: "13:00",
    agent: "Lisa Davis",
    status: "completed",
    method: "Bank Transfer",
    reference: "BT20240113005",
  },
  {
    id: "PAY006",
    customer: "Emma Davis",
    customerId: "CUST006",
    policy: "Premium Cover",
    amount: 750,
    date: "2024-01-13",
    time: "10:30",
    agent: "Sarah Jones",
    status: "failed",
    method: "Debit Order",
    reference: "DO20240113006",
  },
  {
    id: "PAY007",
    customer: "Robert Taylor",
    customerId: "CUST007",
    policy: "Basic Cover",
    amount: 450,
    date: "2024-01-12",
    time: "15:45",
    agent: "John Smith",
    status: "refunded",
    method: "Credit Card",
    reference: "CC20240112007",
  },
  {
    id: "PAY008",
    customer: "Sophie Anderson",
    customerId: "CUST008",
    policy: "Family Cover",
    amount: 650,
    date: "2024-01-12",
    time: "12:20",
    agent: "System",
    status: "completed",
    method: "Debit Order",
    reference: "DO20240112008",
  },
]

export function PaymentTable() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 2,
    }).format(amount)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-success text-success-foreground">Completed</Badge>
      case "pending":
        return <Badge variant="secondary">Pending</Badge>
      case "failed":
        return <Badge variant="destructive">Failed</Badge>
      case "refunded":
        return <Badge variant="outline">Refunded</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getMethodBadge = (method: string) => {
    const colors = {
      "Bank Transfer": "bg-blue-100 text-blue-800",
      "Debit Order": "bg-green-100 text-green-800",
      "Credit Card": "bg-purple-100 text-purple-800",
      Cash: "bg-orange-100 text-orange-800",
    }
    return (
      <Badge variant="outline" className={colors[method as keyof typeof colors] || ""}>
        {method}
      </Badge>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Payment ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Policy</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Agent</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-mono text-sm">{payment.id}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{payment.customer}</div>
                    <div className="text-sm text-muted-foreground">{payment.customerId}</div>
                  </div>
                </TableCell>
                <TableCell>{payment.policy}</TableCell>
                <TableCell className="font-medium text-success">{formatCurrency(payment.amount)}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{payment.date}</div>
                    <div className="text-sm text-muted-foreground">{payment.time}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{payment.agent}</div>
                </TableCell>
                <TableCell>{getMethodBadge(payment.method)}</TableCell>
                <TableCell>{getStatusBadge(payment.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download Receipt
                      </DropdownMenuItem>
                      {payment.status === "failed" && (
                        <DropdownMenuItem>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Retry Payment
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
