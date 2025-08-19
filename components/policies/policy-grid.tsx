"use client"

import { useState } from "react"
import { PolicyCard } from "./policy-card"
import { EditPolicyDialog } from "./edit-policy-dialog"

export interface Policy {
  id: string
  name: string
  monthlyPremium: number
  coverageAmount: number
  description: string
  features: string[]
  ageRange: string
  waitingPeriod: string
  status: "active" | "inactive"
  customersCount: number
}

const policies: Policy[] = [
  {
    id: "POL001",
    name: "Basic Cover",
    monthlyPremium: 450,
    coverageAmount: 25000,
    description: "Essential funeral coverage for individuals and families",
    features: [
      "Funeral service arrangements",
      "Coffin and burial essentials",
      "Transportation services",
      "Basic memorial service",
    ],
    ageRange: "18-65 years",
    waitingPeriod: "6 months",
    status: "active",
    customersCount: 1247,
  },
  {
    id: "POL002",
    name: "Premium Cover",
    monthlyPremium: 750,
    coverageAmount: 50000,
    description: "Comprehensive funeral coverage with additional benefits",
    features: [
      "All Basic Cover benefits",
      "Premium coffin options",
      "Extended memorial service",
      "Grief counseling support",
      "Repatriation services",
    ],
    ageRange: "18-70 years",
    waitingPeriod: "3 months",
    status: "active",
    customersCount: 892,
  },
  {
    id: "POL003",
    name: "Family Cover",
    monthlyPremium: 650,
    coverageAmount: 35000,
    description: "Family-focused coverage for multiple beneficiaries",
    features: [
      "Coverage for up to 6 family members",
      "Funeral service arrangements",
      "Transportation for family",
      "Memorial service coordination",
      "Emergency assistance",
    ],
    ageRange: "21-65 years",
    waitingPeriod: "4 months",
    status: "active",
    customersCount: 634,
  },
  {
    id: "POL004",
    name: "Senior Cover",
    monthlyPremium: 350,
    coverageAmount: 20000,
    description: "Specialized coverage designed for senior citizens",
    features: [
      "Age-appropriate coverage",
      "Simplified application process",
      "Basic funeral arrangements",
      "Family support services",
    ],
    ageRange: "60-80 years",
    waitingPeriod: "12 months",
    status: "active",
    customersCount: 423,
  },
  {
    id: "POL005",
    name: "Youth Starter",
    monthlyPremium: 250,
    coverageAmount: 15000,
    description: "Affordable starter policy for young adults",
    features: [
      "Basic funeral coverage",
      "Flexible payment options",
      "Upgrade path to premium policies",
      "Online management portal",
    ],
    ageRange: "18-35 years",
    waitingPeriod: "6 months",
    status: "inactive",
    customersCount: 0,
  },
]

export function PolicyGrid() {
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null)
  const [editDialogOpen, setEditDialogOpen] = useState(false)

  const handleEdit = (policy: Policy) => {
    setSelectedPolicy(policy)
    setEditDialogOpen(true)
  }

  const handleDelete = (policyId: string) => {
    // Handle delete logic here
    console.log("Deleting policy:", policyId)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {policies.map((policy) => (
          <PolicyCard key={policy.id} policy={policy} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </div>

      <EditPolicyDialog policy={selectedPolicy} open={editDialogOpen} onOpenChange={setEditDialogOpen} />
    </>
  )
}
