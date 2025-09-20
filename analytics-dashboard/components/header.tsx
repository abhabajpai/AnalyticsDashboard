"use client"

import { Bell, Search, Sun, Moon, User, Menu, Star, RotateCcw, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface HeaderProps {
  darkMode: boolean
  toggleDarkMode: () => void
  onMenuClick: () => void
}

export function Header({ darkMode, toggleDarkMode, onMenuClick }: HeaderProps) {
  return (
    <header className="bg-card border-b border-border px-4 lg:px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden text-muted-foreground hover:text-foreground"
          >
            <Menu className="w-5 h-5" />
          </Button>

          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Dashboards</span>
            <span className="text-sm text-muted-foreground">/</span>
            <span className="text-sm font-medium text-foreground">Default</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search" className="pl-10 w-48 lg:w-64 bg-background border-border text-sm h-9" />
          </div>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Settings className="w-4 h-4" />
          </Button>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <RotateCcw className="w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-muted-foreground hover:text-foreground"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full"></span>
          </Button>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
