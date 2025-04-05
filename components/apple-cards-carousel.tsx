"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface AppleCardsCarouselProps {
  items: {
    id: number
    title: string
    description: string
    image: string
  }[]
  className?: string
}

export default function AppleCardsCarousel({ items, className }: AppleCardsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 5000)
  }

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [items.length])

  const handleNext = () => {
    if (isAnimating) return
    stopAutoPlay()
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % items.length)
    startAutoPlay()
  }

  const handlePrevious = () => {
    if (isAnimating) return
    stopAutoPlay()
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
    startAutoPlay()
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
      },
    }),
  }

  return (
    <div className={cn("relative overflow-hidden py-10", className)}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative h-[500px]">
          <AnimatePresence initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
              onAnimationStart={() => setIsAnimating(true)}
            >
              <div className="h-full overflow-hidden rounded-2xl bg-white shadow-xl">
                <div className="relative h-[60%] w-full overflow-hidden">
                  <Image
                    src={items[activeIndex].image || "/placeholder.svg"}
                    alt={items[activeIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-8">
                  <h2 className="mb-4 text-2xl font-bold">{items[activeIndex].title}</h2>
                  <p className="text-gray-600">{items[activeIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={handlePrevious}
            className="rounded-full bg-white p-3 shadow-md transition-all hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex items-center space-x-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  stopAutoPlay()
                  setDirection(idx > activeIndex ? 1 : -1)
                  setActiveIndex(idx)
                  startAutoPlay()
                }}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  activeIndex === idx ? "w-6 bg-primary" : "bg-gray-300",
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="rounded-full bg-white p-3 shadow-md transition-all hover:bg-gray-100"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

