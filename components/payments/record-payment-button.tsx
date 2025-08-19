"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { RecordPaymentDialog } from "./record-payment-dialog"

export function RecordPaymentButton() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setDialogOpen(true)} className="flex items-center gap-2">
        <Plus className="h-4 w-4" />
        Record Manual Payment
      </Button>
      <RecordPaymentDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}
