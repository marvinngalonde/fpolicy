"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Download, FileText } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function ReportSelector() {
  const [reportType, setReportType] = useState("active-customers")
  const [dateFrom, setDateFrom] = useState<Date>(new Date(2024, 0, 1))
  const [dateTo, setDateTo] = useState<Date>(new Date())

  const handleExportCSV = () => {
    console.log("Exporting to CSV...")
    // Handle CSV export logic
  }

  const handleExportPDF = () => {
    console.log("Exporting to PDF...")
    // Handle PDF export logic
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium">Report Type</label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active-customers">Active Customers Report</SelectItem>
                <SelectItem value="monthly-collections">Monthly Collections Report</SelectItem>
                <SelectItem value="arrears">Customers in Arrears Report</SelectItem>
                <SelectItem value="policy-performance">Policy Performance Report</SelectItem>
                <SelectItem value="agent-performance">Agent Performance Report</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">From Date</label>
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
                  {dateFrom ? format(dateFrom, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={dateFrom} onSelect={setDateFrom} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">To Date</label>
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
                  {dateTo ? format(dateTo, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={dateTo} onSelect={setDateTo} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExportCSV} className="flex items-center gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              CSV
            </Button>
            <Button variant="outline" onClick={handleExportPDF} className="flex items-center gap-2 bg-transparent">
              <FileText className="h-4 w-4" />
              PDF
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
