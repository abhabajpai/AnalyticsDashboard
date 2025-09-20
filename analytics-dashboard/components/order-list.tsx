"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Plus, Filter, MoreHorizontal, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

const orderData = [
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "/placeholder.svg?height=32&width=32" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    statusColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "/placeholder.svg?height=32&width=32" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    statusColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/placeholder.svg?height=32&width=32" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/placeholder.svg?height=32&width=32" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/placeholder.svg?height=32&width=32" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    statusColor: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  },
]

export function OrderList() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Order List</h1>
      </div>

      {/* Actions Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button size="sm" className="bg-primary text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input placeholder="Search" className="pl-10 w-64" />
        </div>
      </div>

      {/* Order Table */}
      <Card className="bg-card border-border">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">
                    <input type="checkbox" className="rounded border-border" />
                  </th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Order ID</th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">User</th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Project</th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Address</th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Date</th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Status</th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4"></th>
                </tr>
              </thead>
              <tbody>
                {orderData.map((order, index) => (
                  <tr key={order.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4">
                      <input type="checkbox" className="rounded border-border" />
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-foreground">{order.id}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={order.user.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {order.user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium text-foreground">{order.user.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-foreground">{order.project}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-muted-foreground">{order.address}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{order.date}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={cn("text-xs font-medium", order.statusColor)}>{order.status}</Badge>
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2">
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
        {[1, 2, 3, 4, 5].map((page) => (
          <Button key={page} variant={page === 1 ? "default" : "outline"} size="sm" className="w-8 h-8 p-0">
            {page}
          </Button>
        ))}
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  )
}
