"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Home,
  Layers,
  Shield,
  Smartphone,
  Globe,
  MessageSquare,
  Code,
  Users,
  Mail,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { EnquiryForm } from "@/components/enquiry-form"
import { motion, AnimatePresence } from "framer-motion"

interface SidebarProps {
  className?: string
}

export default function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const toggleExpand = (name: string) => {
    setExpandedItem(expandedItem === name ? null : name)
  }

  const menuItems = [
    { name: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
    {
      name: "Services",
      href: "/services",
      icon: <Layers className="h-5 w-5" />,
      submenu: [
        { name: "Web Development", href: "/services/web-development", icon: <Globe className="h-4 w-4" /> },
        { name: "App Development", href: "/services/app-development", icon: <Smartphone className="h-4 w-4" /> },
        { name: "Web & App Security", href: "/services/security", icon: <Shield className="h-4 w-4" /> },
        {
          name: "Social Media Management",
          href: "/services/social-media",
          icon: <MessageSquare className="h-4 w-4" />,
        },
        { name: "Technical Consulting", href: "/services/consulting", icon: <Code className="h-4 w-4" /> },
      ],
    },
    { name: "Projects", href: "/projects", icon: <Code className="h-5 w-5" /> },
    { name: "Testimonials", href: "/testimonials", icon: <Users className="h-5 w-5" /> },
    { name: "About", href: "/about", icon: <Users className="h-5 w-5" /> },
    { name: "Contact", href: "/contact", icon: <Mail className="h-5 w-5" /> },
  ]

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button variant="outline" size="icon" className="fixed left-4 top-4 z-50 lg:hidden" onClick={toggleSidebar}>
        <Menu className="h-5 w-5" />
      </Button>

      {/* Sidebar Backdrop */}
      {isOpen && isMobile && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <motion.div
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-background transition-all",
          className,
        )}
        initial={{ x: isMobile ? -320 : 0 }}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        data-state={isOpen ? "open" : "closed"}
      >
        <div className="flex h-16 items-center justify-between border-b px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-violet-500"></div>
            <span className="font-bold text-xl">TechServices</span>
          </Link>

          {/* Close button for desktop */}
          {!isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:flex">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
        </div>

        <div className="flex-1 overflow-auto py-6">
          <nav className="flex flex-col gap-1 px-3">
            {menuItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleExpand(item.name)}
                      className={cn(
                        "flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                        pathname === item.href
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-accent hover:text-accent-foreground",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      {expandedItem === item.name ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>

                    <AnimatePresence>
                      {expandedItem === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-6 mt-1 flex flex-col gap-1">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                className={cn(
                                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                                  pathname === subitem.href
                                    ? "bg-accent text-accent-foreground"
                                    : "hover:bg-accent hover:text-accent-foreground",
                                )}
                                onClick={() => isMobile && setIsOpen(false)}
                              >
                                {subitem.icon}
                                <span>{subitem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                      pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-accent hover:text-accent-foreground",
                    )}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="border-t p-4">
          <EnquiryForm trigger={<Button className="w-full">Get Started</Button>} />
          <div className="mt-4 flex items-center justify-center">
            <ModeToggle />
          </div>
        </div>
      </motion.div>
      {/* Collapsed sidebar indicator */}
      {!isOpen && !isMobile && (
        <div className="fixed left-0 top-4 z-40 p-2">
          <Button variant="outline" size="icon" onClick={toggleSidebar} className="rounded-full shadow-md">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </>
  )
}

