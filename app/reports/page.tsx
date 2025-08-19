import { MainLayout } from "@/components/layout/main-layout"
import { ReportSelector } from "@/components/reports/report-selector"
import { ReportViewer } from "@/components/reports/report-viewer"

export default function ReportsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground">Generate and export comprehensive business reports</p>
        </div>

        <ReportSelector />
        <ReportViewer />
      </div>
    </MainLayout>
  )
}
