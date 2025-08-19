"use client"

import type React from "react"

import { useState, useEffect } from "react"
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
import type { Policy } from "./policy-grid"

interface EditPolicyDialogProps {
  policy: Policy | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EditPolicyDialog({ policy, open, onOpenChange }: EditPolicyDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    monthlyPremium: 0,
    coverageAmount: 0,
    ageRange: "",
    waitingPeriod: "",
    status: "active" as "active" | "inactive",
  })
  const [features, setFeatures] = useState<string[]>([])

  useEffect(() => {
    if (policy) {
      setFormData({
        name: policy.name,
        description: policy.description,
        monthlyPremium: policy.monthlyPremium,
        coverageAmount: policy.coverageAmount,
        ageRange: policy.ageRange,
        waitingPeriod: policy.waitingPeriod,
        status: policy.status,
      })
      setFeatures([...policy.features])
    }
  }, [policy])

  const addFeature = () => {
    setFeatures([...features, ""])
  }

  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index))
  }

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...features]
    newFeatures[index] = value
    setFeatures(newFeatures)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Updating policy...", formData, features)
    onOpenChange(false)
  }

  if (!policy) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Policy</DialogTitle>
          <DialogDescription>Update policy information and coverage details.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="editPolicyName">Policy Name</Label>
                <Input
                  id="editPolicyName"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="editDescription">Description</Label>
                <Textarea
                  id="editDescription"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="editMonthlyPremium">Monthly Premium (ZAR)</Label>
                  <Input
                    id="editMonthlyPremium"
                    type="number"
                    value={formData.monthlyPremium}
                    onChange={(e) => setFormData({ ...formData, monthlyPremium: Number(e.target.value) })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="editCoverageAmount">Coverage Amount (ZAR)</Label>
                  <Input
                    id="editCoverageAmount"
                    type="number"
                    value={formData.coverageAmount}
                    onChange={(e) => setFormData({ ...formData, coverageAmount: Number(e.target.value) })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="editAgeRange">Age Range</Label>
                  <Input
                    id="editAgeRange"
                    value={formData.ageRange}
                    onChange={(e) => setFormData({ ...formData, ageRange: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="editWaitingPeriod">Waiting Period</Label>
                  <Input
                    id="editWaitingPeriod"
                    value={formData.waitingPeriod}
                    onChange={(e) => setFormData({ ...formData, waitingPeriod: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="editStatus">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value: "active" | "inactive") => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Policy Features</CardTitle>
              <Button type="button" variant="outline" size="sm" onClick={addFeature}>
                <Plus className="h-4 w-4 mr-2" />
                Add Feature
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <Input
                    placeholder="Enter policy feature"
                    value={feature}
                    onChange={(e) => updateFeature(index, e.target.value)}
                    className="flex-1"
                  />
                  {features.length > 1 && (
                    <Button type="button" variant="outline" size="sm" onClick={() => removeFeature(index)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Update Policy</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
