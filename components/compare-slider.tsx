"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface CompareSliderProps {
  firstImage: string
  secondImage: string
  firstLabel?: string
  secondLabel?: string
  className?: string
  aspectRatio?: "portrait" | "square" | "video"
}

export default function CompareSlider({
  firstImage,
  secondImage,
  firstLabel = "Before",
  secondLabel = "After",
  className = "",
  aspectRatio = "square",
}: CompareSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const aspectRatioClass =
    aspectRatio === "portrait" ? "aspect-[3/4]" : aspectRatio === "video" ? "aspect-video" : "aspect-square"

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default browser behavior (text selection)
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && containerRef.current) {
      e.preventDefault(); // Prevent text selection during drag
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && containerRef.current && e.touches[0]) {
      e.preventDefault(); // Prevent default touch behavior
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent default touch behavior
    setIsDragging(true);
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("touchmove", handleTouchMove, { passive: false })
    window.addEventListener("touchend", handleMouseUp)

    // Apply user-select: none to body when dragging to prevent text selection
    if (isDragging) {
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
      document.body.style.msUserSelect = 'none';
      document.body.style.mozUserSelect = 'none';
    } else {
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      document.body.style.msUserSelect = '';
      document.body.style.mozUserSelect = '';
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleMouseUp)
      
      // Reset user-select on cleanup
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      document.body.style.msUserSelect = '';
      document.body.style.mozUserSelect = '';
    }
  }, [isDragging])

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden rounded-lg ${aspectRatioClass} ${className} select-none`}
      style={{ touchAction: 'none' }}
    >
      {/* First Image (Left Side) */}
      <div className="absolute inset-0 h-full w-full">
        <Image 
          src={firstImage || "/placeholder.svg"} 
          alt={firstLabel} 
          fill 
          className="object-cover pointer-events-none"
          draggable="false"
        />
        {firstLabel && (
          <div className="absolute left-4 top-4 rounded-full bg-black/70 px-4 py-1 text-sm text-white select-none">
            {firstLabel}
          </div>
        )}
      </div>

      {/* Second Image (Right Side) - Revealed based on slider position */}
      <div className="absolute inset-0 h-full w-full" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}>
        <Image 
          src={secondImage || "/placeholder.svg"} 
          alt={secondLabel} 
          fill 
          className="object-cover pointer-events-none"
          draggable="false"
        />
        {secondLabel && (
          <div className="absolute right-4 top-4 rounded-full bg-black/70 px-4 py-1 text-sm text-white select-none">
            {secondLabel}
          </div>
        )}
      </div>

      {/* Slider Control */}
      <div
        className="absolute inset-y-0 z-10 cursor-ew-resize"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        aria-label="Comparison slider"
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={sliderPosition}
      >
        <div className="relative h-full w-1 bg-white">
          <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-white/30 backdrop-blur-sm select-none">
            <div className="flex h-full items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white pointer-events-none"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

