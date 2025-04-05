"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export default function BackgroundGradient({
  children,
  className = "",
  containerClassName = "",
  animate = true,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animate || !containerRef.current || !gradientRef.current) return

    const updateGradientPosition = (e: MouseEvent) => {
      if (!containerRef.current || !gradientRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Calculate position as percentage of container
      const xPercent = (x / rect.width) * 100
      const yPercent = (y / rect.height) * 100

      // Update gradient position
      gradientRef.current.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(255, 20, 147, 0.15), rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15), transparent 50%)`
    }

    const handleMouseMove = (e: MouseEvent) => {
      updateGradientPosition(e)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [animate])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", containerClassName)}>
      <div
        ref={gradientRef}
        className="absolute inset-0 opacity-60 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 20, 147, 0.15), rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15), transparent 50%)",
        }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}

