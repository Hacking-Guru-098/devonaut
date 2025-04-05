"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FocusCardsProps {
  items: {
    id: number
    title?: string
    name?: string
    position?: string
    description?: string
    bio?: string
    image: string
  }[]
  className?: string
}

export default function FocusCards({ items, className }: FocusCardsProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          className={cn(
            "relative h-[300px] cursor-pointer rounded-xl bg-white shadow-md transition-all duration-300",
            focusedIndex === idx ? "z-10 md:scale-110" : "scale-100",
            focusedIndex !== null && focusedIndex !== idx ? "opacity-50" : "opacity-100",
          )}
          onClick={() => setFocusedIndex(idx === focusedIndex ? null : idx)}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          layout
        >
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title || item.name || "Card image"}
              fill
              className="object-cover transition-transform duration-500 ease-out"
              style={{
                transform: hoveredIndex === idx ? "scale(1.1)" : "scale(1)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="absolute bottom-0 p-6 text-white">
            <h3 className="mb-2 text-xl font-bold">{item.title || item.name}</h3>
            {item.position && <p className="text-sm font-medium text-white/90 mb-1">{item.position}</p>}
            <p className="text-sm text-white/80">{item.description || item.bio}</p>
          </div>
          {focusedIndex === idx && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute right-4 top-4 rounded-full bg-white/20 p-2 backdrop-blur-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

