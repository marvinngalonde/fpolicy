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

interface AddPolicyDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddPolicyDialog({ open, onOpenChange }: AddPolicyDialogProps) {
  const [features, setFeatures] = useState<string[]>([""])

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
    console.log("Adding policy...")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Policy</DialogTitle>
          <DialogDescription>Create a new funeral policy type with coverage details and features.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="policyName">Policy Name</Label>
                <Input id="policyName" placeholder="e.g., Premium Cover" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Brief description of the policy" rows={3} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="monthlyPremium">Monthly Premium (ZAR)</Label>
                  <Input id="monthlyPremium" type="number" placeholder="750" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="coverageAmount">Coverage Amount (ZAR)</Label>
                  <Input id="coverageAmount" type="number" placeholder="50000" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Coverage Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Coverage Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ageRange">Age Range</Label>
                  <Input id="ageRange" placeholder="e.g., 18-65 years" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="waitingPeriod">Waiting Period</Label>
                  <Input id="waitingPeriod" placeholder="e.g., 6 months" required />
                </div>
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
            <Button type="submit">Create Policy</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
