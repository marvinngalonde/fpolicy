"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X } from "lucide-react"

export function CustomerFilters() {
  const [searchTerm, setSearchTerm] = useState("")
  const [policyFilter, setPolicyFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const clearFilters = () => {
    setSearchTerm("")
    setPolicyFilter("all")
    setStatusFilter("all")
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, ID, or policy..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={policyFilter} onValueChange={setPolicyFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Policy Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Policies</SelectItem>
              <SelectItem value="basic">Basic Cover</SelectItem>
              <SelectItem value="premium">Premium Cover</SelectItem>
              <SelectItem value="family">Family Cover</SelectItem>
              <SelectItem value="senior">Senior Cover</SelectItem>
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="arrears">In Arrears</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" onClick={clearFilters} className="flex items-center gap-2 bg-transparent">
            <X className="h-4 w-4" />
            Clear
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
