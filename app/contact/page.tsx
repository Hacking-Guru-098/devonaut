import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"
import BackgroundGradientAnimation from "@/components/background-gradient-animation"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
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
              Contact
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Have a project in mind? Let's discuss how we can help you achieve your goals
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us directly through any of these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">hacking.guru.098@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+91 8368432917</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Office</h3>
                  <p className="text-muted-foreground">
                    Delhi NCT
                    <br />
                    India
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-medium mb-2">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

