import { MainLayout } from "@/components/layout/main-layout"
import { PolicyGrid } from "@/components/policies/policy-grid"
import { AddPolicyButton } from "@/components/policies/add-policy-button"

export default function PoliciesPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Policy Management</h1>
            <p className="text-muted-foreground">Manage available funeral policy types and coverage options</p>
          </div>
          <AddPolicyButton />
        </div>

        <PolicyGrid />
      </div>
    </MainLayout>
  )
}
