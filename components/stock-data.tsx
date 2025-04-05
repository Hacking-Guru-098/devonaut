"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface StockData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
}

export default function StockData() {
  const [stocks, setStocks] = useState<StockData[]>([
    { symbol: "AAPL", name: "Apple Inc.", price: 182.63, change: 1.25, changePercent: 0.69 },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 417.88, change: -2.32, changePercent: -0.55 },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 165.92, change: 0.87, changePercent: 0.53 },
  ])

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Simulate stock price changes with optimized interval
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Set a new interval with a longer delay (8 seconds instead of 5)
    intervalRef.current = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => {
          const changeAmount = (Math.random() * 2 - 1) * (stock.price * 0.005) // Reduced volatility
          const newPrice = Number.parseFloat((stock.price + changeAmount).toFixed(2))
          const newChange = Number.parseFloat((stock.change + changeAmount).toFixed(2))
          const newChangePercent = Number.parseFloat(((newChange / (stock.price - stock.change)) * 100).toFixed(2))

          return {
            ...stock,
            price: newPrice,
            change: newChange,
            changePercent: newChangePercent,
          }
        }),
      )
    }, 8000) // Increased interval time for better performance

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div className="grid grid-cols-1 gap-4">
      {stocks.map((stock) => (
        <Card key={stock.symbol} className="overflow-hidden">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              <span>{stock.symbol}</span>
              <span
                className={cn(
                  "text-xs px-2 py-1 rounded-full",
                  stock.change >= 0
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
                )}
              >
                {stock.change >= 0 ? (
                  <ArrowUp className="h-3 w-3 inline mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 inline mr-1" />
                )}
                {Math.abs(stock.changePercent)}%
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-xs text-muted-foreground">{stock.name}</p>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-2xl font-bold">${stock.price.toFixed(2)}</p>
              <p
                className={cn(
                  "text-sm",
                  stock.change >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400",
                )}
              >
                {stock.change >= 0 ? "+" : ""}
                {stock.change.toFixed(2)}
              </p>
            </div>
            <div className="mt-4 h-6 w-full bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
              <div
                className={cn("h-full", stock.change >= 0 ? "bg-green-500" : "bg-red-500")}
                style={{ width: `${Math.min(Math.abs(stock.changePercent) * 5, 100)}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

