"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  FileText,
  CreditCard,
  BarChart3,
  UserCheck,
  Settings,
  Building2,
} from "lucide-react"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: FileText, label: "Policies", href: "/policies" },
  { icon: CreditCard, label: "Payments", href: "/payments" },
  { icon: BarChart3, label: "Reports", href: "/reports" },
  { icon: UserCheck, label: "Agents", href: "/agents" },
  // { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      {/* Header */}
      <div className={cn("flex items-center border-b border-sidebar-border", collapsed ? "p-0 justify-center" : "p-4 justify-start")}>
        <div className={cn("flex items-center gap-2")}> 
          <Building2 className="h-8 w-8 text-primary" />
          {!collapsed && (
            <div>
              <h1 className="font-semibold text-lg text-sidebar-foreground">FPolicy</h1>
              <p className="text-xs text-muted-foreground">Management System</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground",
                    collapsed && "justify-center",
                  )}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
