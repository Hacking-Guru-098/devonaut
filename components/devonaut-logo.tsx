import Link from "next/link"
import { Rocket } from "lucide-react"
import { cn } from "@/lib/utils"

interface DevonautLogoProps {
  className?: string
}

export default function DevonautLogo({ className }: DevonautLogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      <div className="relative">
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-75 blur-sm group-hover:opacity-100 transition duration-300"></div>
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-black dark:bg-gray-900 border border-gray-800">
          <Rocket className="h-7 w-7 text-white group-hover:text-blue-400 transition-colors" />
        </div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        Devonaut
      </span>
    </Link>
  )
}

