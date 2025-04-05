import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import FocusCards from "@/components/focus-cards"
import AppleCardsCarousel from "@/components/apple-cards-carousel"
import BackgroundGradientAnimation from "@/components/background-gradient-animation"

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "With over 15 years of experience in tech, Sarah founded Devonaut to help businesses leverage technology for growth.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "Michael leads our technical team, bringing expertise in cutting-edge web and app development technologies.",
    },
    {
      id: 3,
      name: "Jessica Williams",
      position: "Security Director",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "Jessica ensures our clients' digital assets are protected with the latest security protocols and best practices.",
    },
    {
      id: 4,
      name: "David Rodriguez",
      position: "Social Media Lead",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "David crafts engaging social media strategies that help our clients connect with their audience and drive conversions.",
    },
    {
      id: 5,
      name: "Emily Thompson",
      position: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "Emily ensures all our projects are delivered on time and exceed client expectations through meticulous planning.",
    },
    {
      id: 6,
      name: "Robert Kim",
      position: "Technical Consultant",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "Robert provides strategic technical guidance to help businesses make informed decisions about their technology stack.",
    },
  ]

  const companyMilestones = [
    {
      id: 1,
      title: "Company Founded",
      description:
        "Devonaut was established with a mission to provide comprehensive technical solutions for businesses.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    },
    {
      id: 2,
      title: "First Major Client",
      description:
        "Secured our first enterprise client and delivered a successful e-commerce platform that increased their sales by 200%.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    },
    {
      id: 3,
      title: "Team Expansion",
      description: "Grew our team to include specialists in security, mobile development, and social media marketing.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    },
    {
      id: 4,
      title: "New Office Opening",
      description:
        "Opened our new headquarters to accommodate our growing team and provide better service to our clients.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    },
    {
      id: 5,
      title: "Industry Recognition",
      description:
        "Received multiple awards for our innovative approach to technical solutions and client satisfaction.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    },
  ]

  return (
    <div className="container pt-10 pb-12 md:pb-24 lg:pb-32">
      <BackgroundGradientAnimation
        containerClassName="absolute inset-0"
        colors={["#ff1493", "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b"]}
        blur={100}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      </BackgroundGradientAnimation>

      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <Badge variant="outline" className="px-3 py-1 text-sm">
              About Us
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Our Story
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Learn about our journey, mission, and the team behind our technical services
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Who We Are</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, we are a team of passionate technologists dedicated to helping businesses succeed in
                the digital landscape. With expertise spanning web and app development, security, and social media, we
                provide comprehensive technical solutions tailored to your unique needs.
              </p>
              <p className="text-muted-foreground mb-6">
                Our mission is to empower businesses with technology that drives growth, enhances security, and creates
                exceptional user experiences. We believe in building long-term partnerships with our clients,
                understanding their goals, and delivering solutions that exceed expectations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>Over 100 successful projects delivered</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>Team of certified developers and security experts</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>Client satisfaction rate of 98%</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80"
                alt="Our team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every project, delivering high-quality solutions that stand the test of
                  time.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace new technologies and approaches to solve complex problems and create innovative solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with honesty, transparency, and ethical practices in all our client relationships.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  We work closely with our clients, fostering partnerships that lead to successful outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Company Milestones
            </span>
          </h2>
          <AppleCardsCarousel items={companyMilestones} />
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <FocusCards items={teamMembers} />
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="max-w-[600px] mx-auto mb-6">
            Let's discuss how our technical expertise can help your business grow and succeed in the digital landscape.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

