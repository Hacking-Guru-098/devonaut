"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LampEffectProps {
  children: React.ReactNode
  className?: string
}

export default function LampEffect({ children, className }: LampEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute -inset-0 z-10 opacity-40"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(255, 20, 147, 0.5), transparent 60%)",
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  )
}

