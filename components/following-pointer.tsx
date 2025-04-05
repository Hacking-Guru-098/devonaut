"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function FollowingPointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      // Make the pointer movement faster by using a direct assignment instead of a transition
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseDown = () => {
      setClicked(true)
      setTimeout(() => setClicked(false), 150)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 mix-blend-difference"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        opacity: isVisible ? 1 : 0,
        scale: clicked ? 0.8 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5, // Lower mass for faster movement
      }}
    >
      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
    </motion.div>
  )
}

