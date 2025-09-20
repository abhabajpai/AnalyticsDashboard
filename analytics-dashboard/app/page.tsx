"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { MetricsCards } from "@/components/metrics-cards"
import { ChartsSection } from "@/components/charts-section"
import { OrderList } from "@/components/order-list"
import { MobileSidebar } from "@/components/mobile-sidebar"
import { NotificationsPanel } from "@/components/notifications-panel"
import { ProjectionsChart } from "@/components/projections-chart"

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentView, setCurrentView] = useState("dashboard")

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">eCommerce</h2>
      </div>
    <div className={`min-h-screen bg-background ${darkMode ? "dark" : ""}`}>
      
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Mobile Sidebar */}
        <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex-1 flex flex-col min-w-0">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} onMenuClick={() => setSidebarOpen(true)} />

          <div className="flex flex-1">
            <main className="flex-2 p-4 lg:p-1">
              {currentView === "dashboard" ? (
                <div className="space-y-2">
                  {/* 👇 Updated Grid: Half and Half Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                    <MetricsCards />
                    <ProjectionsChart />
                  </div>

                  <ChartsSection />
                </div>
              ) : (
                <OrderList />
              )}
            </main>
          </div>
        </div>
        {/* Notifications Panel on XL Screens */}
        <div className="hidden xl:block">
              <NotificationsPanel />
            </div>
      </div>
    </div>
    </>
  )
}
