"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export default function BackgroundGradientAnimation({
  children,
  className = "",
  containerClassName = "",
  colors = ["#ef4444", "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b"],
  blur = 100,
  speed = "slow",
  interactive = true,
  reducedMotion = false,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  blur?: number
  speed?: "slow" | "medium" | "fast"
  interactive?: boolean
  reducedMotion?: boolean
}) {
  const interactiveRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const [mounted, setMounted] = useState(false)
  const gradientCircles = useRef<
    Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
    }>
  >([])
  const animationFrameId = useRef<number | null>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const speedFactor = speed === "slow" ? 0.3 : speed === "medium" ? 0.5 : 1
  const lastFrameTime = useRef(0)
  const targetFPS = 30 // Limit to 30 FPS for better performance

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (!mounted || reducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas size
    const handleResize = () => {
      if (canvas) {
        const dpr = window.devicePixelRatio || 1
        const rect = canvas.getBoundingClientRect()
        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr

        const ctx = canvas.getContext("2d")
        if (ctx) {
          ctx.scale(dpr, dpr)
          contextRef.current = ctx
        }

        initGradientCircles()
      }
    }

    // Initialize context
    contextRef.current = canvas.getContext("2d", { alpha: true })
    handleResize()

    // Create gradient circles
    function initGradientCircles() {
      gradientCircles.current = []
      const rect = canvas.getBoundingClientRect()
      const maxDimension = Math.max(rect.width, rect.height)

      // Use fewer circles for better performance
      const circleCount = Math.min(colors.length, 3)

      for (let i = 0; i < circleCount; i++) {
        const radius = maxDimension * 0.4
        gradientCircles.current.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * speedFactor,
          vy: (Math.random() - 0.5) * speedFactor,
          radius,
          color: colors[i % colors.length],
        })
      }
    }

    // Animation loop with frame rate limiting
    const animate = (timestamp: number) => {
      if (!contextRef.current) return

      // Frame rate limiting
      const elapsed = timestamp - lastFrameTime.current
      if (elapsed < 1000 / targetFPS) {
        animationFrameId.current = requestAnimationFrame(animate)
        return
      }

      lastFrameTime.current = timestamp

      const ctx = contextRef.current
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Draw and update gradient circles
      gradientCircles.current.forEach((circle) => {
        // Update position
        circle.x += circle.vx
        circle.y += circle.vy

        // Bounce off edges
        if (circle.x < 0 || circle.x > rect.width) circle.vx *= -1
        if (circle.y < 0 || circle.y > rect.height) circle.vy *= -1

        // Interactive movement (less frequent checks)
        if (interactive && mousePosition.current.x && mousePosition.current.y) {
          const dx = mousePosition.current.x - circle.x
          const dy = mousePosition.current.y - circle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 300) {
            circle.x -= (dx / distance) * 1.5
            circle.y -= (dy / distance) * 1.5
          }
        }

        // Draw gradient circle
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius)
        gradient.addColorStop(0, `${circle.color}80`) // Semi-transparent
        gradient.addColorStop(1, `${circle.color}00`) // Transparent

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    // Throttled mouse movement handler
    let lastMoveTime = 0
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastMoveTime < 50) return // Only update every 50ms
      lastMoveTime = now

      if (interactive) {
        const rect = canvas.getBoundingClientRect()
        mousePosition.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        }
      }
    }

    // Add event listeners
    window.addEventListener("resize", handleResize)
    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true })
    }

    // Start animation
    animationFrameId.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove)
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [colors, interactive, speedFactor, mounted, reducedMotion])

  // For reduced motion or before mount, use a static gradient
  if (reducedMotion || !mounted) {
    return (
      <div className={`relative overflow-hidden ${containerClassName}`}>
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(45deg, ${colors.join(", ")})`,
            filter: `blur(${blur}px)`,
          }}
        />
        <div className={`relative z-10 ${className}`}>{children}</div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`} ref={interactiveRef}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{
          filter: `blur(${blur}px)`,
          width: "100%",
          height: "100%",
        }}
      />
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  )
}

