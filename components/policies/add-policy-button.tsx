"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { AddPolicyDialog } from "./add-policy-dialog"

export function AddPolicyButton() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setDialogOpen(true)} className="flex items-center gap-2">
        <Plus className="h-4 w-4" />
        Add Policy
      </Button>
      <AddPolicyDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}
