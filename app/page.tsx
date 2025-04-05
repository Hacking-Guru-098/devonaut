import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Globe, Smartphone, Shield, MessageSquare, Code } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ClientLogos from "@/components/client-logos"
import ServiceCard from "@/components/service-card"
import TypewriterEffect from "@/components/typewriter-effect"
import BackgroundGradientAnimation from "@/components/background-gradient-animation"
import { Tabs } from "@/components/tabs"
import { EnquiryForm } from "@/components/enquiry-form"
import CompareSlider from "@/components/compare-slider"
import LampEffect from "@/components/lamp-effect"
import StockData from "@/components/stock-data"

export default function Home() {
  // Project showcase content for tabs
  const projectCategories = [
    {
      title: "All",
      value: "all",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {[
            {
              id: 1,
              title: "E-commerce Platform",
              category: "Web Development",
              image:
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
              description: "A full-featured e-commerce platform with payment processing and inventory management.",
              technologies: ["Next.js", "Node.js", "MongoDB"],
            },
            {
              id: 2,
              title: "Fitness Tracking App",
              category: "App Development",
              image:
                "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
              description: "Cross-platform mobile app for tracking workouts, nutrition, and progress.",
              technologies: ["React Native", "Firebase", "Redux"],
            },
            {
              id: 3,
              title: "Financial Institution Security Audit",
              category: "Web & App Security",
              image:
                "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
              description:
                "Comprehensive security assessment and penetration testing for a financial services provider.",
              technologies: ["OWASP", "Burp Suite", "Metasploit"],
            },
          ].map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-white/80 text-black px-2 py-1 text-xs rounded-full">
                  {project.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-black text-white px-2 py-1 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-primary">
                  <Link href={project.id === 1 ? "/projects/e-commerce-platform" : project.id === 2 ? "/projects/fitness-tracking-app" : "/projects/financial-institution-security-audit"}>
                    View case study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ),
    },
    // Other categories remain the same
  ]

  // Testimonial tabs content
  const testimonialCategories = [
    {
      title: "All",
      value: "all",
      content: (
        <div className="grid gap-8 md:grid-cols-3 mt-4">
          <Card className="bg-gray-50 border-0 shadow-sm dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg">
                  "The web application they built has transformed our business operations. Their technical expertise and
                  attention to detail were impressive."
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Sarah Johnson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">TechCorp Inc.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-0 shadow-sm dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg">
                  "Our mobile app launch was a huge success thanks to their development team. They delivered on time and
                  exceeded our expectations."
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Michael Chen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Innovate Solutions</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-0 shadow-sm dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg">
                  "The security audit they conducted identified critical vulnerabilities that we were able to address
                  before they could be exploited."
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Jessica Williams"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Jessica Williams</p>
                    <p className="text-sm text-muted-foreground">SecureFinance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    // Other categories remain the same
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Gradient Background Animation */}
      <div className="relative w-full pt-10 pb-24 md:pb-32 lg:pb-40">
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0"
          colors={["#ff1493", "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b"]}
          blur={70}
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative px-4 md:px-6 z-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-8">
              <LampEffect className="mb-4">
                <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
                  <span className="text-white">New: Check out our latest security services</span>
                </div>
              </LampEffect>
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-white">
                  <TypewriterEffect
                    words={[
                      "Technical solutions to grow your business",
                      "Web development that drives results",
                      "Mobile apps that engage users",
                      "Security that protects your data",
                      "Digital strategies that convert",
                    ]}
                  />
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                    Join the hundreds of companies that use our services to build powerful web applications, secure
                    mobile apps, and drive growth through digital transformation.
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <EnquiryForm
                  trigger={
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full">
                      Get started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  }
                />
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-full">
                  <Link href="/projects">View projects</Link>
                </Button>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Market Trends</div>
                  </div>
                  <div className="space-y-4">
                    <StockData />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 h-24 w-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-xl opacity-70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos Section */}
      <section className="w-full py-12 md:py-16 bg-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-center text-lg text-muted-foreground mb-8">Trusted by innovative companies</h2>
          <ClientLogos />
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24 bg-gray-800 relative">
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0"
          colors={["#ff1493", "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b"]}
          blur={100}
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-[800px]">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Technical expertise for every business need
                </span>
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Comprehensive solutions tailored to help you build, secure, and grow your digital presence
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Globe className="h-10 w-10" />}
              title="Web Development"
              description="Custom websites and web applications built with modern technologies and best practices."
              gradient="from-blue-500 to-cyan-400"
            />
            <ServiceCard
              icon={<Smartphone className="h-10 w-10" />}
              title="App Development"
              description="Native and cross-platform mobile applications for Android and iOS devices."
              gradient="from-purple-500 to-indigo-500"
            />
            <ServiceCard
              icon={<Shield className="h-10 w-10" />}
              title="Web & App Security"
              description="Comprehensive security audits, penetration testing, and vulnerability assessments."
              gradient="from-red-500 to-pink-500"
            />
            <ServiceCard
              icon={<MessageSquare className="h-10 w-10" />}
              title="Social Media Management"
              description="Strategic content creation, scheduling, and community engagement across platforms."
              gradient="from-amber-500 to-orange-400"
            />
            <ServiceCard
              icon={<Code className="h-10 w-10" />}
              title="Social Media Marketing"
              description="Data-driven campaigns to increase brand awareness and drive conversions."
              gradient="from-emerald-500 to-green-400"
            />
            <ServiceCard
              icon={<Code className="h-10 w-10" />}
              title="Technical Consulting"
              description="Expert advice on technology stack, architecture, and digital transformation."
              gradient="from-violet-500 to-purple-400"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/services">
                View all services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section className="w-full py-16 md:py-24 bg-gray-900 relative">
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0"
          colors={["#ff1493", "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b"]}
          blur={100}
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-[800px]">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  See the difference our services make
                </span>
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Compare the before and after of our transformative solutions
              </p>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Web Development Transformation</h3>
              <CompareSlider
                firstImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&h=800&q=80"
                secondImage="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&h=800&q=80"
                firstLabel="Before"
                secondLabel="After"
                aspectRatio="video"
              />
              <p className="text-muted-foreground">
                Our web development services transformed an outdated website into a modern, responsive platform that
                increased conversions by 150%.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">App Development Results</h3>
              <CompareSlider
                firstImage="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&h=800&q=80"
                secondImage="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&h=800&q=80"
                firstLabel="Before"
                secondLabel="After"
                aspectRatio="video"
              />
              <p className="text-muted-foreground">
                Our app development team redesigned a clunky mobile application into an intuitive, high-performance app
                that increased user engagement by 200% and received a 4.8-star rating on app stores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section with Tabs */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0"
          colors={["#ff1493", "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b"]}
          blur={100}
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-[800px]">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Our work speaks for itself
                </span>
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Explore our recent projects and see how we've helped clients achieve their goals
              </p>
            </div>
          </div>
          <Tabs tabs={projectCategories} defaultValue="all" />
          <div className="flex justify-center mt-12">
            <Button asChild className="rounded-full">
              <Link href="/projects">
                View all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Tabs */}
      <section className="w-full py-16 md:py-24 bg-gray-900 relative">
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0"
          colors={["#ff1493", "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b"]}
          blur={100}
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-[800px]">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  What our clients say
                </span>
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
          </div>
          <Tabs tabs={testimonialCategories} defaultValue="all" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 relative">
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0"
          colors={["#ff1493", "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b"]}
          blur={70}
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-[800px]">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                Ready to transform your digital presence?
              </h2>
              <p className="text-white/90 md:text-xl">
                Let's discuss how our technical expertise can help your business grow
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row mt-6">
              <EnquiryForm
                trigger={
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full">
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

