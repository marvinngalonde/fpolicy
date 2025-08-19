"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"

interface AddCustomerDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface Beneficiary {
  id: string
  name: string
  relationship: string
  percentage: string
}

export function AddCustomerDialog({ open, onOpenChange }: AddCustomerDialogProps) {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([
    { id: "1", name: "", relationship: "", percentage: "" },
  ])

  const addBeneficiary = () => {
    setBeneficiaries([...beneficiaries, { id: Date.now().toString(), name: "", relationship: "", percentage: "" }])
  }

  const removeBeneficiary = (id: string) => {
    setBeneficiaries(beneficiaries.filter((b) => b.id !== id))
  }

  const updateBeneficiary = (id: string, field: keyof Beneficiary, value: string) => {
    setBeneficiaries(beneficiaries.map((b) => (b.id === id ? { ...b, [field]: value } : b)))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Adding customer...")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Customer</DialogTitle>
          <DialogDescription>
            Enter the customer details and policy information to create a new account.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter last name" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="nationalId">National ID Number</Label>
                <Input id="nationalId" placeholder="Enter ID number" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+27 82 123 4567" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="customer@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Physical Address</Label>
                <Textarea id="address" placeholder="Enter full address" rows={3} />
              </div>
            </CardContent>
          </Card>

          {/* Policy Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Policy Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="policy">Policy Type</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select policy type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Cover - R450/month</SelectItem>
                    <SelectItem value="premium">Premium Cover - R750/month</SelectItem>
                    <SelectItem value="family">Family Cover - R650/month</SelectItem>
                    <SelectItem value="senior">Senior Cover - R350/month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Beneficiaries */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Beneficiaries</CardTitle>
              <Button type="button" variant="outline" size="sm" onClick={addBeneficiary}>
                <Plus className="h-4 w-4 mr-2" />
                Add Beneficiary
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {beneficiaries.map((beneficiary, index) => (
                <div key={beneficiary.id} className="grid grid-cols-12 gap-4 items-end">
                  <div className="col-span-4 space-y-2">
                    <Label>Full Name</Label>
                    <Input
                      placeholder="Beneficiary name"
                      value={beneficiary.name}
                      onChange={(e) => updateBeneficiary(beneficiary.id, "name", e.target.value)}
                    />
                  </div>
                  <div className="col-span-3 space-y-2">
                    <Label>Relationship</Label>
                    <Select
                      value={beneficiary.relationship}
                      onValueChange={(value) => updateBeneficiary(beneficiary.id, "relationship", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-3 space-y-2">
                    <Label>Percentage</Label>
                    <Input
                      placeholder="50%"
                      value={beneficiary.percentage}
                      onChange={(e) => updateBeneficiary(beneficiary.id, "percentage", e.target.value)}
                    />
                  </div>
                  <div className="col-span-2">
                    {beneficiaries.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeBeneficiary(beneficiary.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Customer</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
