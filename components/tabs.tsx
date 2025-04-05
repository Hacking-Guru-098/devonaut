"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface TabsProps {
  tabs: {
    title: string
    value: string
    content: React.ReactNode
  }[]
  defaultValue?: string
  className?: string
}

export function Tabs({ tabs, defaultValue, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value)

  return (
    <div className={className}>
      <div className="relative flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors",
              activeTab === tab.value ? "text-primary" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {tab.title}
            {activeTab === tab.value && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.value}
            className={cn(
              "transition-opacity duration-300",
              activeTab === tab.value ? "block opacity-100" : "hidden opacity-0",
            )}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}

