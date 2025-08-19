"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { AddCustomerDialog } from "./add-customer-dialog"

export function AddCustomerButton() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setDialogOpen(true)} className="flex items-center gap-2">
        <Plus className="h-4 w-4" />
        Add Customer
      </Button>
      <AddCustomerDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}
