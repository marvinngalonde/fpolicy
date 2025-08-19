"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Edit, Trash2, Phone, Mail } from "lucide-react"
import { EditCustomerDialog } from "./edit-customer-dialog"

const customers = [
  {
    id: "CUST001",
    name: "John Doe",
    nationalId: "8001015009087",
    policy: "Basic Cover",
    status: "active",
    phone: "+27 82 123 4567",
    email: "john.doe@email.com",
    address: "123 Main St, Cape Town",
    joinDate: "2023-01-15",
    lastPayment: "2024-01-15",
  },
  {
    id: "CUST002",
    name: "Sarah Smith",
    nationalId: "8505123456789",
    policy: "Premium Cover",
    status: "active",
    phone: "+27 83 987 6543",
    email: "sarah.smith@email.com",
    address: "456 Oak Ave, Johannesburg",
    joinDate: "2023-03-20",
    lastPayment: "2024-01-14",
  },
  {
    id: "CUST003",
    name: "Robert Taylor",
    nationalId: "7809087654321",
    policy: "Basic Cover",
    status: "arrears",
    phone: "+27 84 555 1234",
    email: "robert.taylor@email.com",
    address: "789 Pine Rd, Durban",
    joinDate: "2022-11-10",
    lastPayment: "2023-10-15",
  },
  {
    id: "CUST004",
    name: "Emma Davis",
    nationalId: "9203156789012",
    policy: "Family Cover",
    status: "active",
    phone: "+27 85 777 8888",
    email: "emma.davis@email.com",
    address: "321 Elm St, Pretoria",
    joinDate: "2023-06-05",
    lastPayment: "2024-01-13",
  },
  {
    id: "CUST005",
    name: "Mike Johnson",
    nationalId: "8712094567890",
    policy: "Senior Cover",
    status: "suspended",
    phone: "+27 86 999 0000",
    email: "mike.johnson@email.com",
    address: "654 Maple Dr, Port Elizabeth",
    joinDate: "2023-02-28",
    lastPayment: "2023-12-15",
  },
]

export function CustomerTable() {
  const [selectedCustomer, setSelectedCustomer] = useState<(typeof customers)[0] | null>(null)
  const [editDialogOpen, setEditDialogOpen] = useState(false)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-success text-success-foreground">Active</Badge>
      case "arrears":
        return <Badge variant="destructive">In Arrears</Badge>
      case "suspended":
        return <Badge variant="secondary">Suspended</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const handleEdit = (customer: (typeof customers)[0]) => {
    setSelectedCustomer(customer)
    setEditDialogOpen(true)
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Customer Database</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>National ID</TableHead>
                <TableHead>Policy</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Last Payment</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-muted-foreground">{customer.id}</div>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{customer.nationalId}</TableCell>
                  <TableCell>{customer.policy}</TableCell>
                  <TableCell>{getStatusBadge(customer.status)}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Phone className="h-3 w-3" />
                        {customer.phone}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        {customer.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{customer.lastPayment}</TableCell>
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
                        <DropdownMenuItem onClick={() => handleEdit(customer)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Customer
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete Customer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <EditCustomerDialog customer={selectedCustomer} open={editDialogOpen} onOpenChange={setEditDialogOpen} />
    </>
  )
}
