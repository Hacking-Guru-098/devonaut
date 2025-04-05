"use client"

import { useEffect, useRef } from "react"

interface ColorfulTextProps {
  text: string
  className?: string
  colors?: string[]
}

export default function ColorfulText({
  text,
  className = "",
  colors = ["#ff1493", "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b"],
}: ColorfulTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const letters = container.querySelectorAll("span")

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      letters.forEach((letter, index) => {
        const letterRect = letter.getBoundingClientRect()
        const letterX = letterRect.left - left + letterRect.width / 2
        const letterY = letterRect.top - top + letterRect.height / 2

        // Calculate distance from mouse to letter
        const distX = x - letterX
        const distY = y - letterY
        const dist = Math.sqrt(distX * distX + distY * distY)

        // Max distance for effect
        const maxDist = Math.max(width, height) / 4

        if (dist < maxDist) {
          // Calculate color index based on distance
          const colorIndex = Math.floor((dist / maxDist) * colors.length)
          const color = colors[Math.min(colorIndex, colors.length - 1)]
          letter.style.color = color

          // Scale effect
          const scale = 1 + (1 - dist / maxDist) * 0.2
          letter.style.transform = `scale(${scale})`
          letter.style.zIndex = "10"
        } else {
          letter.style.color = ""
          letter.style.transform = ""
          letter.style.zIndex = "1"
        }
      })
    }

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [colors])

  return (
    <div ref={containerRef} className={`inline-block relative ${className}`}>
      {text.split("").map((char, index) => (
        <span key={index} className="inline-block transition-all duration-200 ease-out">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}

