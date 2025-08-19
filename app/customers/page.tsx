import { MainLayout } from "@/components/layout/main-layout"
import { CustomerTable } from "@/components/customers/customer-table"
import { CustomerFilters } from "@/components/customers/customer-filters"
import { AddCustomerButton } from "@/components/customers/add-customer-button"

export default function CustomersPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Customers</h1>
            <p className="text-muted-foreground">Manage your customer database and policies</p>
          </div>
          <AddCustomerButton />
        </div>

        <CustomerFilters />
        <CustomerTable />
      </div>
    </MainLayout>
  )
}
