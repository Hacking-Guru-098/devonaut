import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, Users, Zap } from "lucide-react"
import BackgroundGradientAnimation from "@/components/background-gradient-animation"
import { notFound } from "next/navigation"

// Mock data for services
const services = [
  {
    slug: "web-development",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    fullDescription:
      "Our web development services deliver cutting-edge digital experiences that drive business growth. We specialize in creating responsive, high-performance websites and web applications that engage users and convert visitors into customers.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    icon: "Globe",
    benefits: [
      "Responsive design that works on all devices",
      "SEO-optimized code structure",
      "Fast loading speeds and performance",
      "Intuitive user interfaces and experiences",
      "Secure and scalable architecture",
    ],
    process: [
      "Discovery and requirements gathering",
      "UX/UI design and prototyping",
      "Frontend and backend development",
      "Testing and quality assurance",
      "Deployment and ongoing support",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "PostgreSQL"],
    timeframe: "4-12 weeks",
    teamSize: "2-5 specialists",
    caseStudies: [
      {
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with payment processing and inventory management.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        slug: "e-commerce-platform",
      },
      {
        title: "Healthcare Patient Portal",
        description:
          "Secure patient portal for a healthcare provider with appointment scheduling and medical records access.",
        image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        slug: "healthcare-patient-portal",
      },
    ],
  },
  {
    slug: "app-development",
    title: "App Development",
    description: "Native and cross-platform mobile applications for Android and iOS devices.",
    fullDescription:
      "We build powerful, feature-rich mobile applications that provide exceptional user experiences across all platforms. Our app development team specializes in creating native and cross-platform solutions that help businesses connect with their customers on mobile devices.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    icon: "Smartphone",
    benefits: [
      "Native performance on iOS and Android",
      "Intuitive user interfaces",
      "Offline functionality",
      "Push notifications and engagement features",
      "Seamless integration with existing systems",
    ],
    process: [
      "Requirements analysis and planning",
      "UI/UX design and prototyping",
      "Development and coding",
      "Testing across multiple devices",
      "App store submission and launch",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux", "GraphQL"],
    timeframe: "8-16 weeks",
    teamSize: "3-6 specialists",
    caseStudies: [
      {
        title: "Fitness Tracking App",
        description: "Cross-platform mobile app for tracking workouts, nutrition, and progress.",
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        slug: "fitness-tracking-app",
      },
      {
        title: "Retail Inventory App",
        description:
          "Mobile inventory management system for retail stores with barcode scanning and real-time updates.",
        image: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        slug: "retail-inventory-app",
      },
    ],
  },
  {
    slug: "security",
    title: "Web & App Security",
    description: "Comprehensive security audits, penetration testing, and vulnerability assessments.",
    fullDescription:
      "Our security services help businesses identify and address vulnerabilities in their web and mobile applications. We provide comprehensive security audits, penetration testing, and ongoing monitoring to protect your digital assets from threats.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    icon: "Shield",
    benefits: [
      "Identification of security vulnerabilities",
      "Protection against common attack vectors",
      "Compliance with industry standards",
      "Secure coding practices",
      "Regular security updates and patches",
    ],
    process: [
      "Initial security assessment",
      "Vulnerability scanning and analysis",
      "Penetration testing",
      "Security report and recommendations",
      "Implementation of security measures",
    ],
    technologies: ["OWASP", "Burp Suite", "Metasploit", "Nmap", "Wireshark", "Kali Linux"],
    timeframe: "2-6 weeks",
    teamSize: "1-3 specialists",
    caseStudies: [
      {
        title: "Financial Institution Security Audit",
        description: "Comprehensive security assessment and penetration testing for a financial services provider.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        slug: "financial-institution-security-audit",
      },
    ],
  },
  {
    slug: "social-media",
    title: "Social Media Management",
    description: "Strategic content creation, scheduling, and community engagement across platforms.",
    fullDescription:
      "Our social media management services help businesses build and maintain a strong presence on social platforms. We create engaging content, manage posting schedules, and interact with your audience to build brand awareness and drive engagement.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    icon: "MessageSquare",
    benefits: [
      "Consistent brand messaging across platforms",
      "Increased audience engagement",
      "Growth in followers and reach",
      "Timely responses to comments and messages",
      "Strategic content planning",
    ],
    process: [
      "Social media audit and strategy development",
      "Content creation and curation",
      "Posting schedule management",
      "Community engagement and monitoring",
      "Performance analysis and reporting",
    ],
    technologies: ["Facebook", "Instagram", "Twitter", "LinkedIn", "TikTok", "Hootsuite", "Buffer"],
    timeframe: "Ongoing monthly service",
    teamSize: "1-2 specialists",
    caseStudies: [
      {
        title: "Social Media Campaign",
        description:
          "Integrated social media campaign that increased engagement by 200% and drove significant conversion.",
        image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        slug: "social-media-campaign",
      },
    ],
  },
  {
    slug: "consulting",
    title: "Technical Consulting",
    description: "Expert advice on technology stack, architecture, and digital transformation.",
    fullDescription:
      "Our technical consulting services provide expert guidance on technology decisions, architecture planning, and digital transformation initiatives. We help businesses make informed choices about their technology stack and implementation strategies.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    icon: "Code",
    benefits: [
      "Expert guidance on technology decisions",
      "Optimized technology stack selection",
      "Scalable architecture planning",
      "Cost-effective implementation strategies",
      "Digital transformation roadmapping",
    ],
    process: [
      "Current state assessment",
      "Requirements gathering and analysis",
      "Technology stack evaluation",
      "Architecture and implementation planning",
      "Ongoing advisory and support",
    ],
    technologies: ["Cloud Architecture", "DevOps", "Microservices", "API Design", "Database Optimization"],
    timeframe: "2-8 weeks initial engagement, ongoing as needed",
    teamSize: "1-2 specialists",
    caseStudies: [],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Data-driven campaigns to increase brand awareness and drive conversions.",
    fullDescription:
      "Our social media marketing services focus on creating targeted, data-driven campaigns that increase brand awareness, engagement, and conversions. We leverage analytics and platform-specific strategies to optimize your social media ROI.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    icon: "BarChart",
    benefits: [
      "Increased brand visibility and awareness",
      "Higher engagement rates and follower growth",
      "Improved conversion rates",
      "Targeted audience segmentation",
      "Measurable ROI on marketing spend",
    ],
    process: [
      "Audience analysis and targeting",
      "Campaign strategy development",
      "Ad creation and optimization",
      "A/B testing and performance monitoring",
      "Analytics and reporting",
    ],
    technologies: ["Facebook Ads", "Google Analytics", "Instagram Ads", "LinkedIn Ads", "Twitter Ads", "TikTok Ads"],
    timeframe: "4-12 weeks per campaign",
    teamSize: "2-3 specialists",
    caseStudies: [
      {
        title: "E-commerce Revenue Growth",
        description: "Social media marketing campaign that increased online sales by 150% for an e-commerce business.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        slug: "ecommerce-revenue-growth",
      },
      {
        title: "Brand Awareness Campaign",
        description: "Multi-platform campaign that increased brand recognition by 200% for a startup.",
        image: "https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        slug: "brand-awareness-campaign",
      },
    ],
  },
  {
    slug: "database-management",
    title: "Database Management",
    description: "Design, implementation, and optimization of database systems.",
    fullDescription:
      "Our database management services help businesses design, implement, and optimize database systems for efficient data storage, retrieval, and security. We ensure your databases are properly structured, performant, and scalable to meet your business needs.",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    icon: "Database",
    benefits: [
      "Improved data access and retrieval speed",
      "Enhanced data security and integrity",
      "Optimized storage efficiency",
      "Scalable database architecture",
      "Consistent backup and recovery processes",
    ],
    process: [
      "Database requirements analysis",
      "Schema design and modeling",
      "Implementation and migration",
      "Performance optimization",
      "Monitoring and maintenance",
    ],
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Oracle", "Redis", "Elasticsearch"],
    timeframe: "4-10 weeks for initial setup, ongoing for maintenance",
    teamSize: "1-3 specialists",
    caseStudies: [
      {
        title: "E-commerce Database Overhaul",
        description: "Database restructuring that improved query performance by 300% for a high-traffic e-commerce site.",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        slug: "ecommerce-database-overhaul",
      },
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Migration, deployment, and management of cloud infrastructure.",
    fullDescription:
      "Our cloud solutions services help businesses migrate to, deploy, and manage infrastructure in the cloud. We focus on improving scalability, reliability, and cost-efficiency of your digital operations through strategic cloud adoption.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    icon: "Cloud",
    benefits: [
      "Improved scalability and flexibility",
      "Reduced infrastructure costs",
      "Enhanced disaster recovery capabilities",
      "Higher system availability",
      "On-demand resource allocation",
    ],
    process: [
      "Cloud readiness assessment",
      "Migration planning and strategy",
      "Infrastructure setup and configuration",
      "Application deployment and testing",
      "Ongoing monitoring and optimization",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CloudFormation"],
    timeframe: "8-16 weeks for migration, ongoing for management",
    teamSize: "2-4 specialists",
    caseStudies: [
      {
        title: "Enterprise Cloud Migration",
        description: "Successful migration of legacy systems to cloud infrastructure, reducing costs by 40%.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        slug: "enterprise-cloud-migration",
      },
      {
        title: "Scalable E-learning Platform",
        description: "Cloud-based e-learning platform capable of handling 100,000+ concurrent users.",
        image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        slug: "scalable-elearning-platform",
      },
    ],
  },
  {
    slug: "devops-services",
    title: "DevOps Services",
    description: "Implementation of CI/CD pipelines, infrastructure as code, and automated testing.",
    fullDescription:
      "Our DevOps services focus on implementing continuous integration/continuous deployment pipelines, infrastructure as code, and automated testing to streamline your development process and improve product quality.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    icon: "Cpu",
    benefits: [
      "Faster deployment cycles",
      "Improved code quality and reliability",
      "Reduced time to market",
      "Automated testing and deployment",
      "Consistent development environments",
    ],
    process: [
      "DevOps assessment and strategy",
      "CI/CD pipeline implementation",
      "Infrastructure as code setup",
      "Automated testing integration",
      "Monitoring and feedback loop establishment",
    ],
    technologies: ["Jenkins", "GitHub Actions", "CircleCI", "Ansible", "Terraform", "Docker", "Kubernetes"],
    timeframe: "6-12 weeks for initial setup, ongoing refinement",
    teamSize: "2-3 specialists",
    caseStudies: [
      {
        title: "Software Release Optimization",
        description: "CI/CD implementation that reduced deployment time from days to minutes for a software company.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        slug: "software-release-optimization",
      },
    ],
  },
]

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

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
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Link>
          </Button>

          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Service
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {service.title}
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{service.description}</p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start mb-16">
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
            <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground mb-6">{service.fullDescription}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex flex-col items-center p-4 bg-black/20 backdrop-blur-sm rounded-lg">
                <Clock className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium text-sm mb-1">Timeframe</h3>
                <p className="text-sm text-center">{service.timeframe}</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-black/20 backdrop-blur-sm rounded-lg">
                <Users className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium text-sm mb-1">Team Size</h3>
                <p className="text-sm text-center">{service.teamSize}</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-black/20 backdrop-blur-sm rounded-lg">
                <Zap className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium text-sm mb-1">Technologies</h3>
                <p className="text-sm text-center">{service.technologies.length}+ technologies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Benefits</h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Our Process</h2>
            <ol className="space-y-4">
              {service.process.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Technologies We Use</h2>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {service.caseStudies.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Related Case Studies
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.caseStudies.map((caseStudy, index) => (
                <Link key={index} href={`/projects/${caseStudy.slug}`} className="group block">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-muted-foreground">{caseStudy.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 bg-black/30 backdrop-blur-sm rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="max-w-[600px] mx-auto mb-6 text-muted-foreground">
            Contact us today to discuss how our {service.title.toLowerCase()} services can help your business grow.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

