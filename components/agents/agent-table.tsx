"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Trash2, Eye, Key, Phone, Mail } from "lucide-react"
import { EditAgentDialog } from "./edit-agent-dialog"

export interface Agent {
  id: string
  name: string
  email: string
  phone: string
  branch: string
  customersAssigned: number
  totalCollections: number
  monthlyTarget: number
  status: "active" | "inactive"
  joinDate: string
  lastLogin: string
  role: "agent" | "supervisor" | "manager"
}

const agents: Agent[] = [
  {
    id: "AGT001",
    name: "Sarah Jones",
    email: "sarah.jones@fpolicy.com",
    phone: "+27 82 123 4567",
    branch: "Cape Town Central",
    customersAssigned: 156,
    totalCollections: 245680,
    monthlyTarget: 200000,
    status: "active",
    joinDate: "2023-01-15",
    lastLogin: "2024-01-15 14:30",
    role: "agent",
  },
  {
    id: "AGT002",
    name: "John Smith",
    email: "john.smith@fpolicy.com",
    phone: "+27 83 987 6543",
    branch: "Johannesburg North",
    customersAssigned: 134,
    totalCollections: 198450,
    monthlyTarget: 180000,
    status: "active",
    joinDate: "2023-03-20",
    lastLogin: "2024-01-15 11:45",
    role: "supervisor",
  },
  {
    id: "AGT003",
    name: "Mike Brown",
    email: "mike.brown@fpolicy.com",
    phone: "+27 84 555 1234",
    branch: "Durban East",
    customersAssigned: 98,
    totalCollections: 187320,
    monthlyTarget: 150000,
    status: "active",
    joinDate: "2022-11-10",
    lastLogin: "2024-01-14 16:20",
    role: "agent",
  },
  {
    id: "AGT004",
    name: "Lisa Davis",
    email: "lisa.davis@fpolicy.com",
    phone: "+27 85 777 8888",
    branch: "Pretoria West",
    customersAssigned: 89,
    totalCollections: 156780,
    monthlyTarget: 140000,
    status: "active",
    joinDate: "2023-06-05",
    lastLogin: "2024-01-13 13:00",
    role: "agent",
  },
  {
    id: "AGT005",
    name: "David Wilson",
    email: "david.wilson@fpolicy.com",
    phone: "+27 86 999 0000",
    branch: "Port Elizabeth",
    customersAssigned: 67,
    totalCollections: 98450,
    monthlyTarget: 120000,
    status: "inactive",
    joinDate: "2023-02-28",
    lastLogin: "2024-01-10 09:15",
    role: "agent",
  },
]

export function AgentTable() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)
  const [editDialogOpen, setEditDialogOpen] = useState(false)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-success text-success-foreground">Active</Badge>
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "manager":
        return <Badge variant="default">Manager</Badge>
      case "supervisor":
        return <Badge className="bg-blue-100 text-blue-800">Supervisor</Badge>
      case "agent":
        return <Badge variant="outline">Agent</Badge>
      default:
        return <Badge variant="outline">{role}</Badge>
    }
  }

  const getPerformancePercentage = (collections: number, target: number) => {
    return Math.round((collections / target) * 100)
  }

  const handleEdit = (agent: Agent) => {
    setSelectedAgent(agent)
    setEditDialogOpen(true)
  }

  const handleDelete = (agentId: string) => {
    console.log("Deleting agent:", agentId)
  }

  const handleResetPassword = (agentId: string) => {
    console.log("Resetting password for agent:", agentId)
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Agent Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Agent</TableHead>
                <TableHead>Branch</TableHead>
                <TableHead>Customers</TableHead>
                <TableHead>Collections</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agents.map((agent) => (
                <TableRow key={agent.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{agent.name}</div>
                      <div className="text-sm text-muted-foreground">{agent.id}</div>
                      <div className="flex items-center gap-2 mt-1">{getRoleBadge(agent.role)}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{agent.branch}</div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        {agent.phone}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        {agent.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="text-lg font-semibold">{agent.customersAssigned}</div>
                    <div className="text-xs text-muted-foreground">assigned</div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium text-success">{formatCurrency(agent.totalCollections)}</div>
                      <div className="text-sm text-muted-foreground">Target: {formatCurrency(agent.monthlyTarget)}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            getPerformancePercentage(agent.totalCollections, agent.monthlyTarget) >= 100
                              ? "bg-success"
                              : getPerformancePercentage(agent.totalCollections, agent.monthlyTarget) >= 80
                                ? "bg-yellow-500"
                                : "bg-destructive"
                          }`}
                          style={{
                            width: `${Math.min(
                              getPerformancePercentage(agent.totalCollections, agent.monthlyTarget),
                              100,
                            )}%`,
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium">
                        {getPerformancePercentage(agent.totalCollections, agent.monthlyTarget)}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(agent.status)}</TableCell>
                  <TableCell>
                    <div className="text-sm">{agent.lastLogin}</div>
                  </TableCell>
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
                        <DropdownMenuItem onClick={() => handleEdit(agent)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Agent
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleResetPassword(agent.id)}>
                          <Key className="mr-2 h-4 w-4" />
                          Reset Password
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(agent.id)} className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete Agent
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

      <EditAgentDialog agent={selectedAgent} open={editDialogOpen} onOpenChange={setEditDialogOpen} />
    </>
  )
}
