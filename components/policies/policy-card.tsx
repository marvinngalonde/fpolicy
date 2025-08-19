"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Trash2, Users, Clock, Shield } from "lucide-react"
import type { Policy } from "./policy-grid"

interface PolicyCardProps {
  policy: Policy
  onEdit: (policy: Policy) => void
  onDelete: (policyId: string) => void
}

export function PolicyCard({ policy, onEdit, onDelete }: PolicyCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{policy.name}</CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant={policy.status === "active" ? "default" : "secondary"} className="capitalize">
                {policy.status}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="h-3 w-3" />
                {policy.customersCount} customers
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit(policy)}>
                <Edit className="mr-2 h-4 w-4" />
                Edit Policy
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDelete(policy.id)} className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Policy
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <div className="text-center py-4 bg-muted/50 rounded-lg">
          <div className="text-3xl font-bold text-success">{formatCurrency(policy.monthlyPremium)}</div>
          <div className="text-sm text-muted-foreground">per month</div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm">
              <strong>Coverage:</strong> {formatCurrency(policy.coverageAmount)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm">
              <strong>Waiting Period:</strong> {policy.waitingPeriod}
            </span>
          </div>
          <div className="text-sm">
            <strong>Age Range:</strong> {policy.ageRange}
          </div>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-2">{policy.description}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {policy.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {feature}
              </li>
            ))}
            {policy.features.length > 3 && (
              <li className="text-xs text-muted-foreground">+{policy.features.length - 3} more features</li>
            )}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Button variant="outline" className="w-full bg-transparent" onClick={() => onEdit(policy)}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}
