import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TestimonialCard from "@/components/testimonial-card"
import BackgroundGradientAnimation from "@/components/background-gradient-animation"

export default function TestimonialsPage() {
  // Define all testimonials data
  const testimonials = [
    {
      quote: "The web application they built has transformed our business operations. Their technical expertise and attention to detail were impressive.",
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      service: "Web Development"
    },
    {
      quote: "Our mobile app launch was a huge success thanks to their development team. They delivered on time and exceeded our expectations.",
      name: "Michael Chen",
      company: "Innovate Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      service: "App Development"
    },
    {
      quote: "The security audit they conducted identified critical vulnerabilities that we were able to address before they could be exploited.",
      name: "Jessica Williams",
      company: "SecureFinance",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      service: "Web & App Security"
    },
    {
      quote: "Their social media management has increased our engagement by 150% in just three months. The content strategy they developed perfectly aligns with our brand.",
      name: "David Rodriguez",
      company: "Retail Innovations",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      service: "Social Media Management"
    },
    {
      quote: "We've seen a 200% ROI from the social media marketing campaigns they've run for us. Their data-driven approach delivers real results.",
      name: "Emily Thompson",
      company: "Growth Brands",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      service: "Social Media Marketing"
    },
    {
      quote: "Their technical consulting helped us make critical decisions about our technology stack that saved us time and money in the long run.",
      name: "Robert Kim",
      company: "Startup Ventures",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      service: "Technical Consulting"
    },
    {
      quote: "The e-commerce platform they developed for us has increased our online sales by 300%. Their understanding of user experience is exceptional.",
      name: "Amanda Lee",
      company: "FashionRetail Co.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      service: "Web Development"
    },
    {
      quote: "Our healthcare patient portal has received overwhelmingly positive feedback from both staff and patients since it was implemented.",
      name: "Dr. James Wilson",
      company: "MedCare Health",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      service: "Web Development"
    },
    {
      quote: "The fitness tracking app they built has become an essential part of our members' workout routine. User retention is up by 45%.",
      name: "Lisa Chen",
      company: "FitLife Gyms",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      service: "App Development"
    },
    {
      quote: "Our inventory management app has streamlined operations and reduced errors by 75%. The barcode scanning feature is a game-changer.",
      name: "Marcus Johnson",
      company: "Retail Solutions",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      service: "App Development"
    },
    {
      quote: "After implementing their security recommendations, we passed our compliance audit with flying colors. Their expertise is unmatched.",
      name: "Katherine Singh",
      company: "Data Secure Inc.",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      service: "Web & App Security"
    },
    {
      quote: "Their influencer marketing strategy increased our product visibility and sales beyond what we thought possible.",
      name: "Tyler Adams",
      company: "Modern Brands",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      service: "Social Media Marketing"
    }
  ];

  // Filter testimonials by service
  const webDevelopmentTestimonials = testimonials.filter(t => t.service === "Web Development");
  const appDevelopmentTestimonials = testimonials.filter(t => t.service === "App Development");
  const securityTestimonials = testimonials.filter(t => t.service === "Web & App Security");
  const socialMediaTestimonials = testimonials.filter(t => 
    t.service === "Social Media Management" || t.service === "Social Media Marketing"
  );

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
              Testimonials
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Hear what our clients have to say about working with us
            </p>
          </div>
        </div>

        <Tabs defaultValue="all">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2 w-full">
            <TabsList className="flex-nowrap">
              <TabsTrigger value="all">All Testimonials</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="app">App Development</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  company={testimonial.company}
                  image={testimonial.image}
                  service={testimonial.service}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {webDevelopmentTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  company={testimonial.company}
                  image={testimonial.image}
                  service={testimonial.service}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="app">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {appDevelopmentTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  company={testimonial.company}
                  image={testimonial.image}
                  service={testimonial.service}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="security">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {securityTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  company={testimonial.company}
                  image={testimonial.image}
                  service={testimonial.service}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="social">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {socialMediaTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  company={testimonial.company}
                  image={testimonial.image}
                  service={testimonial.service}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

