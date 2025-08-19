import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const recentPayments = [
  {
    id: "PAY001",
    customer: "John Doe",
    policy: "Basic Cover",
    amount: "R450.00",
    date: "2024-01-15",
    status: "completed",
  },
  {
    id: "PAY002",
    customer: "Sarah Smith",
    policy: "Premium Cover",
    amount: "R750.00",
    date: "2024-01-15",
    status: "completed",
  },
  {
    id: "PAY003",
    customer: "Mike Johnson",
    policy: "Family Cover",
    amount: "R650.00",
    date: "2024-01-14",
    status: "completed",
  },
  {
    id: "PAY004",
    customer: "Lisa Brown",
    policy: "Basic Cover",
    amount: "R450.00",
    date: "2024-01-14",
    status: "pending",
  },
  {
    id: "PAY005",
    customer: "David Wilson",
    policy: "Senior Cover",
    amount: "R350.00",
    date: "2024-01-13",
    status: "completed",
  },
]

export function RecentPaymentsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Payments</CardTitle>
        <CardDescription>Latest 10 payments received</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Policy</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">{payment.customer}</TableCell>
                <TableCell>{payment.policy}</TableCell>
                <TableCell className="text-success font-medium">{payment.amount}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>
                  <Badge variant={payment.status === "completed" ? "default" : "secondary"}>{payment.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
