import { MainLayout } from "@/components/layout/main-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { MonthlyCollectionsChart } from "@/components/dashboard/monthly-collections-chart"
import { PolicyDistributionChart } from "@/components/dashboard/policy-distribution-chart"
import { RecentPaymentsTable } from "@/components/dashboard/recent-payments-table"
import { ArrearsTable } from "@/components/dashboard/arrears-table"
import { Users, FileText, CreditCard, AlertTriangle } from "lucide-react"

export default function HomePage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your funeral policy management system</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Customers"
            value="2,847"
            change="+12% from last month"
            changeType="positive"
            icon={Users}
            description="Active customer base"
          />
          <StatCard
            title="Active Policies"
            value="2,654"
            change="+8% from last month"
            changeType="positive"
            icon={FileText}
            description="Currently active policies"
          />
          <StatCard
            title="Payments Collected"
            value="R1,245,680"
            change="+15% from last month"
            changeType="positive"
            icon={CreditCard}
            description="This month's collections"
          />
          <StatCard
            title="Customers in Arrears"
            value="127"
            change="-5% from last month"
            changeType="positive"
            icon={AlertTriangle}
            description="Requiring follow-up"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MonthlyCollectionsChart />
          <PolicyDistributionChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentPaymentsTable />
          <ArrearsTable />
        </div>
      </div>
    </MainLayout>
  )
}
