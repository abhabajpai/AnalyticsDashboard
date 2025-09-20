"use client"

import {
  Home,
  FolderOpen,
  BarChart3,
  BookOpen,
  User,
  Building2,
  Briefcase,
  MessageSquare,
  Users,
  ChevronDown,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const menuSections = [
  {
    title: "Favorites",
    items: [
      { icon: Home, label: "Overview", hasSubmenu: false },
      { icon: FolderOpen, label: "Projects", hasSubmenu: false },
    ],
  },
  {
    title: "Recently",
    items: [
      { icon: Home, label: "Overview", hasSubmenu: false },
      { icon: FolderOpen, label: "Projects", hasSubmenu: false },
    ],
  },
  {
    title: "Dashboards",
    items: [
      { icon: Home, label: "Default", hasSubmenu: false },
      { icon: BarChart3, label: "eCommerce", hasSubmenu: false },
      { icon: FolderOpen, label: "Projects", hasSubmenu: false },
      { icon: BookOpen, label: "Online Courses", hasSubmenu: false },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        icon: User,
        label: "User Profile",
        hasSubmenu: true,
        submenu: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
      },
      { icon: Building2, label: "Account", hasSubmenu: false },
      { icon: Briefcase, label: "Corporate", hasSubmenu: false },
      { icon: MessageSquare, label: "Blog", hasSubmenu: false },
      { icon: Users, label: "Social", hasSubmenu: false },
    ],
  },
]

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Default")
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])

  const toggleSubmenu = (label: string) => {
    setExpandedMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    )
  }

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm" />
          </div>
          <span className="text-lg font-semibold text-sidebar-foreground">
            ByeWind
          </span>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 overflow-y-auto">
        {menuSections.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.label}>
                  <div>
                    <button
                      onClick={() => {
                        setActiveItem(item.label)
                        if (item.hasSubmenu) {
                          toggleSubmenu(item.label)
                        }
                      }}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-sidebar-accent",
                        activeItem === item.label
                          ? "bg-sidebar-primary text-sidebar-primary-foreground"
                          : "text-sidebar-foreground hover:text-sidebar-accent-foreground",
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                      {item.hasSubmenu && (
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            expandedMenus.includes(item.label) ? "rotate-180" : "",
                          )}
                        />
                      )}
                    </button>

                    {/* Submenu */}
                    {item.hasSubmenu && expandedMenus.includes(item.label) && (
                      <ul className="ml-7 mt-1 space-y-1 transition-all duration-300 ease-in-out">
                        {item.submenu?.map((subItem) => (
                          <li key={subItem}>
                            <button
                              onClick={() => setActiveItem(subItem)}
                              className={cn(
                                "w-full text-left px-3 py-1.5 rounded-md text-sm transition-all duration-200 hover:bg-sidebar-accent",
                                activeItem === subItem
                                  ? "text-sidebar-primary font-medium"
                                  : "text-muted-foreground hover:text-sidebar-foreground",
                              )}
                            >
                              {subItem}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}
