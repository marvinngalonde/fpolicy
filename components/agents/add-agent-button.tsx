"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { AddAgentDialog } from "./add-agent-dialog"

export function AddAgentButton() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setDialogOpen(true)} className="flex items-center gap-2">
        <Plus className="h-4 w-4" />
        Add Agent
      </Button>
      <AddAgentDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}
