import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/project-card"
import BackgroundGradientAnimation from "@/components/background-gradient-animation"

export default function ProjectsPage() {
  return (
    <div className="container pt-10 pb-12 md:pb-24 lg:pb-32 overflow-x-hidden">
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
              Portfolio
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Our Projects
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore our work and see how we've helped clients achieve their digital goals
            </p>
          </div>
        </div>

        <Tabs defaultValue="all">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2 w-full">
            <TabsList className="flex-nowrap">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="app">App Development</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-commerce Platform"
                category="Web Development"
                image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="A full-featured e-commerce platform with payment processing and inventory management."
                technologies={["Next.js", "Node.js", "MongoDB"]}
              />
              <ProjectCard
                title="Fitness Tracking App"
                category="App Development"
                image="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Cross-platform mobile app for tracking workouts, nutrition, and progress."
                technologies={["React Native", "Firebase", "Redux"]}
              />
              <ProjectCard
                title="Financial Institution Security Audit"
                category="Web & App Security"
                image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Comprehensive security assessment and penetration testing for a financial services provider."
                technologies={["OWASP", "Burp Suite", "Metasploit"]}
              />
              <ProjectCard
                title="Healthcare Patient Portal"
                category="Web Development"
                image="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Secure patient portal for a healthcare provider with appointment scheduling and medical records access."
                technologies={["React", "Express", "PostgreSQL"]}
              />
              <ProjectCard
                title="Retail Inventory App"
                category="App Development"
                image="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Mobile inventory management system for retail stores with barcode scanning and real-time updates."
                technologies={["Flutter", "Firebase", "GraphQL"]}
              />
              <ProjectCard
                title="Social Media Campaign"
                category="Social Media Marketing"
                image="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Integrated social media campaign that increased engagement by 200% and drove significant conversion."
                technologies={["Facebook Ads", "Instagram", "Analytics"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="web">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-commerce Platform"
                category="Web Development"
                image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="A full-featured e-commerce platform with payment processing and inventory management."
                technologies={["Next.js", "Node.js", "MongoDB"]}
              />
              <ProjectCard
                title="Healthcare Patient Portal"
                category="Web Development"
                image="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Secure patient portal for a healthcare provider with appointment scheduling and medical records access."
                technologies={["React", "Express", "PostgreSQL"]}
              />
              <ProjectCard
                title="Corporate Website Redesign"
                category="Web Development"
                image="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Complete redesign of a corporate website with improved user experience and modern design."
                technologies={["React", "Tailwind CSS", "Strapi CMS"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="app">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Fitness Tracking App"
                category="App Development"
                image="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Cross-platform mobile app for tracking workouts, nutrition, and progress."
                technologies={["React Native", "Firebase", "Redux"]}
              />
              <ProjectCard
                title="Retail Inventory App"
                category="App Development"
                image="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Mobile inventory management system for retail stores with barcode scanning and real-time updates."
                technologies={["Flutter", "Firebase", "GraphQL"]}
              />
              <ProjectCard
                title="Food Delivery App"
                category="App Development"
                image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Food delivery mobile application with real-time tracking and payment processing."
                technologies={["React Native", "Node.js", "MongoDB"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="security">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Financial Institution Security Audit"
                category="Web & App Security"
                image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Comprehensive security assessment and penetration testing for a financial services provider."
                technologies={["OWASP", "Burp Suite", "Metasploit"]}
              />
              <ProjectCard
                title="E-commerce Security Hardening"
                category="Web & App Security"
                image="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Security hardening of an e-commerce platform to protect customer data and prevent fraud."
                technologies={["OWASP", "ModSecurity", "Snort"]}
              />
              <ProjectCard
                title="Healthcare Data Protection"
                category="Web & App Security"
                image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Implementation of data protection measures for a healthcare provider to ensure HIPAA compliance."
                technologies={["Encryption", "Access Control", "Audit Trails"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="social">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Social Media Campaign"
                category="Social Media Marketing"
                image="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Integrated social media campaign that increased engagement by 200% and drove significant conversion."
                technologies={["Facebook Ads", "Instagram", "Analytics"]}
              />
              <ProjectCard
                title="Brand Awareness Campaign"
                category="Social Media Marketing"
                image="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Multi-platform campaign that increased brand recognition by 200% for a startup."
                technologies={["Instagram", "Twitter", "TikTok"]}
              />
              <ProjectCard
                title="Influencer Marketing Strategy"
                category="Social Media Marketing"
                image="https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
                description="Influencer marketing strategy that increased product sales by 150% in three months."
                technologies={["Influencer Outreach", "Content Strategy", "Performance Tracking"]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

