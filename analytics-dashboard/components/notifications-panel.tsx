"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Bug, UserPlus, Upload, Edit, Trash2 } from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "bug",
    title: "You have a bug that needs...",
    time: "Just now",
    icon: Bug,
    color: "text-red-500",
  },
  {
    id: 2,
    type: "user",
    title: "New user registered",
    time: "59 minutes ago",
    icon: UserPlus,
    color: "text-blue-500",
  },
  {
    id: 3,
    type: "bug",
    title: "You have a bug that needs...",
    time: "12 hours ago",
    icon: Bug,
    color: "text-red-500",
  },
  {
    id: 4,
    type: "subscription",
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
    icon: Bell,
    color: "text-green-500",
  },
]

const activities = [
  {
    id: 1,
    title: "You have a bug that needs...",
    time: "Just now",
    icon: Bug,
  },
  {
    id: 2,
    title: "Released a new version",
    time: "59 minutes ago",
    icon: Upload,
  },
  {
    id: 3,
    title: "Submitted a bug",
    time: "12 hours ago",
    icon: Bug,
  },
  {
    id: 4,
    title: "Modified A data in Page X",
    time: "Today, 11:59 AM",
    icon: Edit,
  },
  {
    id: 5,
    title: "Deleted a page in Project X",
    time: "Feb 2, 2023",
    icon: Trash2,
  },
]

const contacts = [
  { name: "Natali Craig", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Drew Cano", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Orlando Diggs", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Andi Lane", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Kate Morrison", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Koray Okumus", avatar: "/placeholder.svg?height=32&width=32" },
]

export function NotificationsPanel() {
  return (
    <div className="w-80 bg-background border-l border-border p-4 space-y-6 overflow-y-auto">
      {/* Notifications */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Notifications</h3>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className={`p-1.5 rounded-full bg-muted ${notification.color}`}>
                <notification.icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{notification.title}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Activities</h3>
        <div className="space-y-2">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="p-1.5 rounded-full bg-muted text-muted-foreground">
                <activity.icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Contacts</h3>
        <div className="space-y-3">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <Avatar className="w-8 h-8">
                <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                <AvatarFallback className="text-xs">
                  {contact.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <p className="text-sm font-medium text-foreground">{contact.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
