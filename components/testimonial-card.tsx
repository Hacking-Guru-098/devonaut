"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  name: string
  company: string
  image: string
  service: string
}

export default function TestimonialCard({ quote, name, company, image, service }: TestimonialCardProps) {
  return (
    <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }} className="h-full">
      <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <Quote className="h-8 w-8 text-primary/60" />
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-base mb-6">"{quote}"</CardDescription>
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-muted-foreground">{company}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Badge variant="outline">{service}</Badge>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

