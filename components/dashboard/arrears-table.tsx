import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

const arrearsCustomers = [
  {
    id: "CUST001",
    name: "Robert Taylor",
    policy: "Basic Cover",
    amountDue: "R1,350.00",
    monthsOverdue: 3,
    lastPayment: "2023-10-15",
    phone: "+27 82 123 4567",
  },
  {
    id: "CUST002",
    name: "Emma Davis",
    policy: "Premium Cover",
    amountDue: "R2,250.00",
    monthsOverdue: 3,
    lastPayment: "2023-10-20",
    phone: "+27 83 987 6543",
  },
  {
    id: "CUST003",
    name: "James Miller",
    policy: "Family Cover",
    amountDue: "R1,950.00",
    monthsOverdue: 3,
    lastPayment: "2023-10-12",
    phone: "+27 84 555 1234",
  },
  {
    id: "CUST004",
    name: "Sophie Anderson",
    policy: "Basic Cover",
    amountDue: "R900.00",
    monthsOverdue: 2,
    lastPayment: "2023-11-15",
    phone: "+27 85 777 8888",
  },
]

export function ArrearsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customers in Arrears</CardTitle>
        <CardDescription>Customers with overdue payments requiring attention</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Policy</TableHead>
              <TableHead>Amount Due</TableHead>
              <TableHead>Months Overdue</TableHead>
              <TableHead>Last Payment</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {arrearsCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell>{customer.policy}</TableCell>
                <TableCell className="text-destructive font-medium">{customer.amountDue}</TableCell>
                <TableCell>
                  <Badge variant="destructive">{customer.monthsOverdue} months</Badge>
                </TableCell>
                <TableCell>{customer.lastPayment}</TableCell>
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
  )
}
