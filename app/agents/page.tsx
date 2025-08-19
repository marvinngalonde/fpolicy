import { MainLayout } from "@/components/layout/main-layout"
import { AgentTable } from "@/components/agents/agent-table"
import { AddAgentButton } from "@/components/agents/add-agent-button"
import { AgentStats } from "@/components/agents/agent-stats"

export default function AgentsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Agent Management</h1>
            <p className="text-muted-foreground">Manage sales agents, performance, and access credentials</p>
          </div>
          <AddAgentButton />
        </div>

        <AgentStats />
        <AgentTable />
      </div>
    </MainLayout>
  )
}
