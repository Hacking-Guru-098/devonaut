import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import FloatingDock from "@/components/floating-dock"
import ScrollResponsiveLogo from "@/components/scroll-responsive-logo"
import MobileMenu from "@/components/mobile-menu"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Devonaut - Technical Services Portfolio",
  description: "Professional web development, app development, security, and social media services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className={`${inter.className} bg-black text-white`}>
        <div className="flex min-h-screen">
          <ScrollResponsiveLogo />
          <MobileMenu />
          <div className="flex-1 w-full">
            <main className="flex-1 pt-16">{children}</main>
          </div>
          <FloatingDock />
        </div>
      </body>
    </html>
  )
}



import './globals.css'