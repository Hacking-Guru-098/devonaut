import { Badge } from "@/components/ui/badge"
import ServiceCard from "@/components/service-card"
import { Globe, Smartphone, Shield, MessageSquare, Code, BarChart, Database, Cloud, Cpu } from "lucide-react"
import BackgroundGradientAnimation from "@/components/background-gradient-animation"

export default function ServicesPage() {
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
              Services
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive technical solutions tailored to your business needs
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Globe className="h-10 w-10" />}
            title="Web Development"
            description="Custom websites and web applications built with modern technologies and best practices. From simple landing pages to complex web applications, we deliver solutions that drive results."
            gradient="from-blue-500 to-cyan-400"
          />
          <ServiceCard
            icon={<Smartphone className="h-10 w-10" />}
            title="App Development"
            description="Native and cross-platform mobile applications for Android and iOS devices. We create intuitive, high-performance apps that provide exceptional user experiences."
            gradient="from-purple-500 to-indigo-500"
          />
          <ServiceCard
            icon={<Shield className="h-10 w-10" />}
            title="Web & App Security"
            description="Comprehensive security audits, penetration testing, and vulnerability assessments to protect your digital assets from threats and ensure compliance with industry standards."
            gradient="from-red-500 to-pink-500"
          />
          <ServiceCard
            icon={<MessageSquare className="h-10 w-10" />}
            title="Social Media Management"
            description="Strategic content creation, scheduling, and community engagement across platforms to build your brand presence and connect with your audience."
            gradient="from-amber-500 to-orange-400"
          />
          <ServiceCard
            icon={<BarChart className="h-10 w-10" />}
            title="Social Media Marketing"
            description="Data-driven campaigns to increase brand awareness and drive conversions. We leverage analytics to optimize your social media performance and ROI."
            gradient="from-emerald-500 to-green-400"
          />
          <ServiceCard
            icon={<Code className="h-10 w-10" />}
            title="Technical Consulting"
            description="Expert advice on technology stack, architecture, and digital transformation to help your business make informed decisions and stay ahead of the competition."
            gradient="from-violet-500 to-purple-400"
          />
          <ServiceCard
            icon={<Database className="h-10 w-10" />}
            title="Database Management"
            description="Design, implementation, and optimization of database systems to ensure efficient data storage, retrieval, and security for your applications."
            gradient="from-blue-500 to-indigo-500"
          />
          <ServiceCard
            icon={<Cloud className="h-10 w-10" />}
            title="Cloud Solutions"
            description="Migration, deployment, and management of cloud infrastructure to improve scalability, reliability, and cost-efficiency of your digital operations."
            gradient="from-pink-500 to-purple-500"
          />
          <ServiceCard
            icon={<Cpu className="h-10 w-10" />}
            title="DevOps Services"
            description="Implementation of CI/CD pipelines, infrastructure as code, and automated testing to streamline your development process and improve product quality."
            gradient="from-blue-500 to-cyan-500"
          />
        </div>
      </div>
    </div>
  )
}

