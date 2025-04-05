"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { Home, Code, Mail, Users, Star, Layers } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useMobile } from "@/hooks/use-mobile"

interface FloatingDockProps {
  className?: string
}

export default function FloatingDock({ className }: FloatingDockProps) {
  const [isDockVisible, setIsDockVisible] = useState(false)
  const dockRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isMobile = useMobile()
  const router = useRouter()
  const mouseX = useMotionValue(Infinity)

  const icons = [
    { icon: <Home className="h-6 w-6" />, label: "Home", href: "/" },
    { icon: <Layers className="h-6 w-6" />, label: "Services", href: "/services" },
    { icon: <Code className="h-6 w-6" />, label: "Projects", href: "/projects" },
    { icon: <Star className="h-6 w-6" />, label: "Testimonials", href: "/testimonials" },
    { icon: <Users className="h-6 w-6" />, label: "About", href: "/about" },
    { icon: <Mail className="h-6 w-6" />, label: "Contact", href: "/contact" },
  ]

  // Prefetch all routes for instant navigation
  useEffect(() => {
    icons.forEach(icon => {
      router.prefetch(icon.href)
    })
  }, [router])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDockVisible(true)
    }, 500) // Reduced initial delay

    return () => clearTimeout(timer)
  }, [])

  // Don't render on mobile
  if (isMobile) return null

  return (
    <AnimatePresence>
      {isDockVisible && (
        <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50">
          <motion.div
            ref={dockRef}
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
              "flex items-end gap-2 rounded-full bg-black/20 px-4 py-2 backdrop-blur-md dark:bg-white/10",
              className,
            )}
          >
            {icons.map((item, index) => (
              <DockIcon 
                key={index}
                mouseX={mouseX}
                icon={item.icon}
                label={item.label}
                href={item.href}
                isActive={pathname === item.href}
              />
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

function DockIcon({
  mouseX,
  icon,
  label,
  href,
  isActive
}: {
  mouseX: any;
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Calculate distance from mouse to this icon
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  // Transform size based on mouse distance
  const widthTransform = useTransform(distance, [-150, 0, 150], [48, 64, 48])
  const heightTransform = useTransform(distance, [-150, 0, 150], [48, 64, 48])
  
  // Transform icon size based on mouse distance
  const iconSizeTransform = useTransform(distance, [-150, 0, 150], [24, 30, 24])

  // Add spring physics for smooth transitions
  const width = useSpring(widthTransform, { 
    mass: 0.1, 
    stiffness: 250, 
    damping: 20 
  })
  
  const height = useSpring(heightTransform, { 
    mass: 0.1, 
    stiffness: 250, 
    damping: 20 
  })
  
  const iconSize = useSpring(iconSizeTransform, { 
    mass: 0.1, 
    stiffness: 250, 
    damping: 20 
  })

  const handleNavClick = (e: React.MouseEvent) => {
    if (pathname === href) {
      e.preventDefault() // Prevent navigation if already on the page
    }
  }

  return (
    <Link 
      href={href} 
      onClick={handleNavClick}
      prefetch={true}
    >
      <motion.div
        ref={ref}
        className="relative flex flex-col items-center justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ width, height }}
      >
        <motion.div
          className={cn(
            "flex cursor-pointer items-center justify-center rounded-full backdrop-blur-md transition-colors",
            isActive
              ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white"
              : "bg-white/10 text-white hover:bg-white/20 dark:bg-black/10 dark:text-white hover:dark:bg-black/20",
          )}
          style={{ 
            width, 
            height,
          }}
        >
          <motion.div style={{ 
            width: iconSize, 
            height: iconSize,
            display: "flex",
            alignItems: "center",
            justifyContent: "center" 
          }}>
            {icon}
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  )
}

