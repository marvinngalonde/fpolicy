import { MainLayout } from "@/components/layout/main-layout"
import { PaymentFilters } from "@/components/payments/payment-filters"
import { PaymentTable } from "@/components/payments/payment-table"
import { RecordPaymentButton } from "@/components/payments/record-payment-button"

export default function PaymentsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Payment Tracking</h1>
            <p className="text-muted-foreground">Monitor and manage all premium payments and transactions</p>
          </div>
          <RecordPaymentButton />
        </div>

        <PaymentFilters />
        <PaymentTable />
      </div>
    </MainLayout>
  )
}
