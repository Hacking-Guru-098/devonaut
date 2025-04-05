"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  gradient: string
}

export default function ServiceCard({ icon, title, description, gradient }: ServiceCardProps) {
  return (
    <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }} className="h-full">
      <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
        <div className={`h-2 w-full bg-gradient-to-r ${gradient}`}></div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">{icon}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 flex-1">{description}</p>
          <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-primary mt-auto self-start">
            <Link href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}>
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

