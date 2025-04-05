import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, Clock, Users } from "lucide-react"
import BackgroundGradientAnimation from "@/components/background-gradient-animation"
import { notFound } from "next/navigation"

// Mock data for projects
const projects = [
  {
    slug: "e-commerce-platform",
    title: "E-commerce Platform",
    category: "Web Development",
    client: "RetailTech Inc.",
    duration: "12 weeks",
    year: "2023",
    teamSize: "4 specialists",
    description: "A full-featured e-commerce platform with payment processing and inventory management.",
    fullDescription:
      "We developed a comprehensive e-commerce solution for RetailTech Inc., a growing retail business looking to expand their online presence. The platform includes advanced product management, secure payment processing, inventory tracking, and a responsive design that works seamlessly across all devices.",
    challenge:
      "RetailTech needed a scalable e-commerce solution that could handle their growing product catalog and increasing customer base. Their existing platform was outdated, slow, and lacked modern features like mobile responsiveness and secure payment processing.",
    solution:
      "We built a custom e-commerce platform using Next.js for the frontend and Node.js for the backend, with MongoDB as the database. The solution includes real-time inventory management, secure payment processing with Stripe, customer account management, and a responsive design that works on all devices.",
    results: [
      "200% increase in online sales within the first 3 months",
      "50% reduction in cart abandonment rate",
      "30% increase in average order value",
      "Improved inventory accuracy and reduced stockouts",
      "Enhanced customer satisfaction with streamlined checkout process",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux", "Tailwind CSS"],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    ],
    testimonial: {
      quote:
        "The e-commerce platform developed by the team has transformed our online business. Sales have increased significantly, and our customers love the new shopping experience.",
      author: "Sarah Johnson",
      position: "CEO, RetailTech Inc.",
    },
    relatedProjects: ["healthcare-patient-portal", "retail-inventory-app"],
  },
  {
    slug: "fitness-tracking-app",
    title: "Fitness Tracking App",
    category: "App Development",
    client: "FitLife Solutions",
    duration: "16 weeks",
    year: "2023",
    teamSize: "5 specialists",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and progress.",
    fullDescription:
      "We created a comprehensive fitness tracking application for FitLife Solutions that allows users to track their workouts, nutrition, and overall fitness progress. The app includes features like custom workout plans, meal tracking, progress photos, and social sharing capabilities.",
    challenge:
      "FitLife Solutions wanted to create a mobile app that would help fitness enthusiasts track their workouts, nutrition, and progress in one place. They needed a solution that would work on both iOS and Android platforms, with offline functionality and seamless data synchronization.",
    solution:
      "We developed a cross-platform mobile app using React Native with a Firebase backend. The app includes features like workout tracking, nutrition logging, progress photos, custom workout plans, and social sharing. We implemented offline functionality and real-time data synchronization to ensure a seamless user experience.",
    results: [
      "100,000+ downloads within the first 6 months",
      "4.8-star average rating on app stores",
      "85% user retention rate after 30 days",
      "Featured in the App Store's 'New Apps We Love' section",
      "Significant increase in FitLife Solutions' brand recognition",
    ],
    technologies: ["React Native", "Firebase", "Redux", "GraphQL", "Expo", "Jest"],
    images: [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      "https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    ],
    testimonial: {
      quote:
        "The fitness app has exceeded our expectations in every way. The team delivered a polished, feature-rich application that our users love. The attention to detail and focus on user experience has set our app apart from competitors.",
      author: "Michael Chen",
      position: "Founder, FitLife Solutions",
    },
    relatedProjects: ["retail-inventory-app", "e-commerce-platform"],
  },
  {
    slug: "financial-institution-security-audit",
    title: "Financial Institution Security Audit",
    category: "Web & App Security",
    client: "SecureBank Financial",
    duration: "6 weeks",
    year: "2023",
    teamSize: "3 specialists",
    description: "Comprehensive security assessment and penetration testing for a financial services provider.",
    fullDescription:
      "We conducted a thorough security audit for SecureBank Financial, a mid-sized financial institution with online banking services. Our assessment included vulnerability scanning, penetration testing, code review, and security policy evaluation to identify and address potential security risks.",
    challenge:
      "SecureBank Financial needed to ensure their online banking platform and internal systems were secure against potential cyber threats. They required a comprehensive security audit to identify vulnerabilities, assess their current security posture, and ensure compliance with financial industry regulations.",
    solution:
      "We performed a multi-phase security assessment that included vulnerability scanning, penetration testing, code review, and security policy evaluation. Our team identified several critical vulnerabilities and provided detailed recommendations for remediation, along with a prioritized action plan.",
    results: [
      "Identified and remediated 12 critical security vulnerabilities",
      "Improved compliance with financial industry security regulations",
      "Strengthened authentication and encryption protocols",
      "Enhanced security awareness among development and IT staff",
      "Implemented continuous security monitoring and testing processes",
    ],
    technologies: ["OWASP", "Burp Suite", "Metasploit", "Nmap", "Wireshark", "Kali Linux"],
    images: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    ],
    testimonial: {
      quote:
        "The security audit was thorough and professional. The team identified several vulnerabilities that our internal team had missed, and their recommendations were clear and actionable. We now have a much stronger security posture.",
      author: "Jessica Williams",
      position: "CISO, SecureBank Financial",
    },
    relatedProjects: ["healthcare-patient-portal"],
  },
  {
    slug: "healthcare-patient-portal",
    title: "Healthcare Patient Portal",
    category: "Web Development",
    client: "MediCare Health Systems",
    duration: "14 weeks",
    year: "2022",
    teamSize: "4 specialists",
    description:
      "Secure patient portal for a healthcare provider with appointment scheduling and medical records access.",
    fullDescription:
      "We developed a secure, HIPAA-compliant patient portal for MediCare Health Systems that allows patients to schedule appointments, access their medical records, communicate with healthcare providers, and manage their billing information.",
    challenge:
      "MediCare Health Systems needed a secure, user-friendly patient portal that would allow patients to access their medical information, schedule appointments, and communicate with healthcare providers. The solution needed to be HIPAA-compliant and integrate with their existing electronic health record (EHR) system.",
    solution:
      "We built a comprehensive patient portal using React for the frontend and Express.js for the backend, with PostgreSQL as the database. The portal includes secure authentication, appointment scheduling, medical records access, secure messaging with healthcare providers, and billing management. We implemented end-to-end encryption and strict access controls to ensure HIPAA compliance.",
    results: [
      "40% reduction in administrative phone calls",
      "60% of patients actively using the portal within 3 months",
      "95% patient satisfaction rate with the portal",
      "Streamlined appointment scheduling process",
      "Improved patient-provider communication",
    ],
    technologies: ["React", "Express", "PostgreSQL", "JWT", "Socket.io", "HIPAA Compliance Tools"],
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      "https://images.unsplash.com/photo-1581056771107-24247a734e15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    ],
    testimonial: {
      quote:
        "The patient portal has transformed how we interact with our patients. It's intuitive, secure, and has significantly reduced our administrative workload. Our patients appreciate the convenience of accessing their health information and scheduling appointments online.",
      author: "Dr. Robert Kim",
      position: "Medical Director, MediCare Health Systems",
    },
    relatedProjects: ["e-commerce-platform", "financial-institution-security-audit"],
  },
  {
    slug: "retail-inventory-app",
    title: "Retail Inventory App",
    category: "App Development",
    client: "Global Retail Solutions",
    duration: "10 weeks",
    year: "2022",
    teamSize: "3 specialists",
    description: "Mobile inventory management system for retail stores with barcode scanning and real-time updates.",
    fullDescription:
      "We developed a mobile inventory management application for Global Retail Solutions that allows retail store employees to track inventory levels, scan barcodes for quick product lookup, receive real-time updates on stock levels, and manage purchase orders from their mobile devices.",
    challenge:
      "Global Retail Solutions needed a mobile inventory management system that would allow their retail clients to efficiently track and manage inventory across multiple store locations. They required barcode scanning functionality, real-time inventory updates, and integration with their existing backend systems.",
    solution:
      "We built a Flutter-based mobile application that works on both iOS and Android devices, with Firebase for real-time data synchronization and GraphQL for efficient API communication. The app includes barcode scanning, inventory tracking, purchase order management, and real-time notifications for low stock items.",
    results: [
      "70% reduction in inventory management time",
      "98% inventory accuracy (up from 85%)",
      "30% reduction in stockouts",
      "Improved staff productivity and satisfaction",
      "Seamless integration with existing POS systems",
    ],
    technologies: ["Flutter", "Firebase", "GraphQL", "Barcode Scanning API", "Push Notifications"],
    images: [
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      "https://images.unsplash.com/photo-1581922819941-6ab31ab79afc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    ],
    testimonial: {
      quote:
        "The inventory management app has revolutionized how our retail clients manage their stock. It's intuitive, fast, and has significantly reduced errors in inventory tracking. The barcode scanning feature is a game-changer for efficiency.",
      author: "Emily Thompson",
      position: "Operations Director, Global Retail Solutions",
    },
    relatedProjects: ["e-commerce-platform", "fitness-tracking-app"],
  },
  {
    slug: "social-media-campaign",
    title: "Social Media Campaign",
    category: "Social Media Marketing",
    client: "Eco Lifestyle Brands",
    duration: "3 months",
    year: "2023",
    teamSize: "2 specialists",
    description: "Integrated social media campaign that increased engagement by 200% and drove significant conversion.",
    fullDescription:
      "We designed and executed a comprehensive social media campaign for Eco Lifestyle Brands, a sustainable products company looking to increase brand awareness and drive sales. The campaign included content creation, influencer partnerships, paid advertising, and community engagement strategies across multiple platforms.",
    challenge:
      "Eco Lifestyle Brands was struggling to build brand awareness and generate sales for their sustainable product line. They needed a cohesive social media strategy that would engage their target audience, communicate their brand values, and drive conversions.",
    solution:
      "We developed a multi-platform social media campaign that included organic content creation, influencer partnerships, targeted paid advertising, and community engagement initiatives. We created a content calendar focused on sustainability education, product showcases, and user-generated content to build an authentic brand presence.",
    results: [
      "200% increase in social media engagement",
      "150% growth in follower count across platforms",
      "35% increase in website traffic from social channels",
      "25% conversion rate from social media traffic",
      "Successful partnerships with 15 sustainability influencers",
    ],
    technologies: ["Facebook Ads", "Instagram", "TikTok", "Influencer Marketing", "Analytics Tools"],
    images: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      "https://images.unsplash.com/photo-1611162618479-ee4a37f6d4ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    ],
    testimonial: {
      quote:
        "The social media campaign exceeded all our expectations. Not only did we see a significant increase in engagement and followers, but it also translated to real sales growth. The team's understanding of our brand values and target audience was impressive.",
      author: "David Rodriguez",
      position: "Marketing Director, Eco Lifestyle Brands",
    },
    relatedProjects: [],
  },
]

// Function to get related projects
const getRelatedProjects = (slug: string) => {
  const project = projects.find((p) => p.slug === slug)
  if (!project) return []

  return project.relatedProjects.map((relatedSlug) => projects.find((p) => p.slug === relatedSlug)).filter(Boolean)
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(params.slug)

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
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>

          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <Badge variant="outline" className="px-3 py-1 text-sm">
              {project.category}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{project.description}</p>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden mb-12">
          <Image src={project.images[0] || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground mb-8">{project.fullDescription}</p>

            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground mb-8">{project.challenge}</p>

            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-muted-foreground mb-8">{project.solution}</p>

            <h2 className="text-2xl font-bold mb-4">Results</h2>
            <ul className="space-y-3 mb-8">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Client</p>
                    <p className="font-medium">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="font-medium">{project.teamSize}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {project.images.length > 1 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Project Gallery
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="relative h-[250px] rounded-xl overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {project.testimonial && (
          <div className="mb-16 bg-black/30 backdrop-blur-sm rounded-xl p-8">
            <div className="flex flex-col items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary/40 mb-4"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
              <p className="text-xl mb-6 italic">"{project.testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{project.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{project.testimonial.position}</p>
              </div>
            </div>
          </div>
        )}

        {relatedProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Related Projects
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <Link key={index} href={`/projects/${relatedProject.slug}`} className="group block">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={relatedProject.images[0] || "/placeholder.svg"}
                      alt={relatedProject.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="secondary" size="sm">
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {relatedProject.title}
                  </h3>
                  <p className="text-muted-foreground">{relatedProject.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

