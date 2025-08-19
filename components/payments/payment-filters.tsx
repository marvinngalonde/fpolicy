"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Search, X, CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function PaymentFilters() {
  const [searchTerm, setSearchTerm] = useState("")
  const [agentFilter, setAgentFilter] = useState("all")
  const [policyFilter, setPolicyFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFrom, setDateFrom] = useState<Date>()
  const [dateTo, setDateTo] = useState<Date>()

  const clearFilters = () => {
    setSearchTerm("")
    setAgentFilter("all")
    setPolicyFilter("all")
    setStatusFilter("all")
    setDateFrom(undefined)
    setDateTo(undefined)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Search and Status Row */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by customer name, payment ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Payment Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="refunded">Refunded</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filters Row */}
          <div className="flex flex-col md:flex-row gap-4">
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

            <Select value={agentFilter} onValueChange={setAgentFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Agent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Agents</SelectItem>
                <SelectItem value="john-smith">John Smith</SelectItem>
                <SelectItem value="sarah-jones">Sarah Jones</SelectItem>
                <SelectItem value="mike-brown">Mike Brown</SelectItem>
                <SelectItem value="lisa-davis">Lisa Davis</SelectItem>
                <SelectItem value="system">System (Auto)</SelectItem>
              </SelectContent>
            </Select>

            {/* Date Range */}
            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full md:w-40 justify-start text-left font-normal",
                      !dateFrom && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateFrom ? format(dateFrom, "PPP") : "From date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={dateFrom} onSelect={setDateFrom} initialFocus />
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full md:w-40 justify-start text-left font-normal",
                      !dateTo && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateTo ? format(dateTo, "PPP") : "To date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={dateTo} onSelect={setDateTo} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <Button variant="outline" onClick={clearFilters} className="flex items-center gap-2 bg-transparent">
              <X className="h-4 w-4" />
              Clear
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
