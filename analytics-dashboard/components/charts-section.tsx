"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const projectionsData = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 25 },
  { name: "Mar", value: 15 },
  { name: "Apr", value: 30 },
  { name: "May", value: 35 },
  { name: "Jun", value: 25 },
]

const salesData = [

  { name: "Affiliate", value: 135.18, color: "#A7D2A9" },
    { name: "Direct", value: 300.56, color: "#000000" },
  { name: "Sponsored", value: 154.02, color: "#A7BFFF" },
  { name: "E-mail", value: 48.96, color: "#B1E3FF" },
]

const revenueData = [
  { name: "Jan", current: 12000000, previous: 8000000 },
  { name: "Feb", current: 9000000, previous: 15000000 },
  { name: "Mar", current: 11000000, previous: 13000000 },
  { name: "Apr", current: 16000000, previous: 12000000 },
  { name: "May", current: 20000000, previous: 17000000 },
  { name: "Jun", current: 19000000, previous: 23000000 },
]



const locationData = [
  { name: "New York", value: 72 },
  { name: "San Francisco", value: 39 },
  { name: "Sydney", value: 25 },
  { name: "Singapore", value: 61 },
];



const productsData = [
  { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
  { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
  { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
  { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
]

const solidLength = Math.floor((revenueData.length * 2) / 3)
const currentSolid = revenueData.slice(0, solidLength)
const currentDotted = revenueData.slice(solidLength - 1)

export function ChartsSection() {
  return (
    <div className="space-y-6">
      {/* First Row - eCommerce Header */}
      {/* <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">eCommerce</h2>
      </div> */}

      {/* Second Row - Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Revenue Card - 2/3 Width */}
        <Card className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm lg:col-span-3">
          <CardHeader className="pb-1">
            <div className="flex items-center space-x-6 space-between">
              <CardTitle className="text-base font-medium text-gray-900">Revenue</CardTitle>
              <div className="flex items-center space-x-6 text-sm">
                <span className="flex items-center text-gray-400 h-6">|</span>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span className="text-gray-500">Current Week</span>
                  <span className="font-semibold text-gray-900">$58,211</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span className="text-gray-500">Previous Week</span>
                  <span className="font-semibold text-gray-900">$68,768</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Height reduced proportionally */}
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={revenueData}>
                <CartesianGrid vertical={false} stroke="hsl(0 0% 90%)" />
                <XAxis
                  dataKey="name"
                  stroke="#9ca3af"
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  stroke="#9ca3af"
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 30000000]}
                  ticks={[0, 10000000, 20000000, 30000000]}
                  tickFormatter={(value) => `${value / 1_000_000}M`}
                />
                <Line
                  type="monotone"
                  dataKey="current"
                  stroke="#000000"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="previous"
                  stroke="#60A5FA"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Revenue by Location Card - 1/3 Width */}
        <Card className="bg-card border-border lg:col-span-1 flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="text-sm font-semibold text-card-foreground p-0">
              Revenue by Location
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col items-center justify-center space-y-8">
            {/* Map */}
            <div className="relative w-36 aspect-[154/84] rounded-lg">
              <Image
                src="/World Map.png"
                alt="World Map"
                fill
                className="object-cover"
              />
            </div>

            {/* Revenue List with Bars */}
            <div className="w-full space-y-3">
              {locationData.map((location, index) => {
                const percentage = Math.min((location.value / 100) * 100, 100);
                return (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{location.name}</span>
                      <span className="font-medium text-card-foreground">
                        {location.value.toLocaleString()}K
                      </span>
                    </div>
                    <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: '#ABC5DA',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>



      {/* Third Row - Revenue Chart and Sales */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <Card className="bg-card border-border lg:col-span-3">
        <CardHeader className="pb-4">
          <CardTitle className="text-base font-medium text-card-foreground">Top Selling Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-sm font-medium text-muted-foreground pb-3">Name</th>
                  <th className="text-left text-sm font-medium text-muted-foreground pb-3">Price</th>
                  <th className="text-left text-sm font-medium text-muted-foreground pb-3">Quantity</th>
                  <th className="text-left text-sm font-medium text-muted-foreground pb-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                {productsData.map((product, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="py-3 text-sm text-card-foreground">{product.name}</td>
                    <td className="py-3 text-sm text-card-foreground">{product.price}</td>
                    <td className="py-3 text-sm text-card-foreground">{product.quantity}</td>
                    <td className="py-3 text-sm font-medium text-card-foreground">{product.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

        {/* Total Sales */}
        <Card className="bg-card border-border lg:col-span-1">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-medium text-card-foreground">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative flex items-center justify-center mb-4">
              <ResponsiveContainer width={150} height={150}>
                <PieChart>
                  <Pie
                    data={salesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    startAngle={81}
                    endAngle={-270}
                    paddingAngle={2}
                    dataKey="value"
                    // Add spacing between cuts  
                    cornerRadius={5}
                  >
                    {salesData.map((entry, index) => (
                      <Cell key={`cell - ${index}`} fill={entry.color} />
            ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Precise Label Position on Direct Slice */}
              <div
                className="absolute font-medium text-xs px-2.5 py-2 rounded-md text-white bg-gray-700"
                style={{
                  top: '100px',   // Adjust Y-position
                  left: '120px',  // Adjust X-position
                }}
              >
                38.6%
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-2">
              {salesData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  <span className="font-medium text-card-foreground">
                    ${item.value.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
