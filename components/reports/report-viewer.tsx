"use client"

import { useState } from "react"
import { ActiveCustomersReport } from "./active-customers-report"
import { MonthlyCollectionsReport } from "./monthly-collections-report"
import { ArrearsReport } from "./arrears-report"

export function ReportViewer() {
  const [reportType] = useState("active-customers") // This would be controlled by the selector

  const renderReport = () => {
    switch (reportType) {
      case "active-customers":
        return <ActiveCustomersReport />
      case "monthly-collections":
        return <MonthlyCollectionsReport />
      case "arrears":
        return <ArrearsReport />
      default:
        return <ActiveCustomersReport />
    }
  }

  return <div className="space-y-6">{renderReport()}</div>
}
