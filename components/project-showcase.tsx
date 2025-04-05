"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    description: "A full-featured e-commerce platform with payment processing and inventory management.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    category: "App Development",
    image: "/placeholder.svg?height=400&width=600",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and progress.",
    technologies: ["React Native", "Firebase", "Redux"],
  },
  {
    id: 3,
    title: "Financial Institution Security Audit",
    category: "Web & App Security",
    image: "/placeholder.svg?height=400&width=600",
    description: "Comprehensive security assessment and penetration testing for a financial services provider.",
    technologies: ["OWASP", "Burp Suite", "Metasploit"],
  },
]

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All")
  const categories = ["All", "Web Development", "App Development", "Web & App Security", "Social Media"]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="w-full">
      <div className="flex justify-center mb-8 overflow-x-auto pb-2">
        <div className="flex space-x-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative h-48">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              <Badge className="absolute top-2 right-2 bg-white/80 text-black hover:bg-white/90">
                {project.category}
              </Badge>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-50">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-primary">
                <Link href={`/projects/${project.id}`}>
                  View case study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

