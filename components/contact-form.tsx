"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real implementation, this would send an email to hacking.guru.098@gmail.com
    alert("Form submitted. In production, this would be sent to hacking.guru.098@gmail.com")
    
    // Reset form
    setIsSubmitting(false)
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name">First name</Label>
          <Input id="first-name" name="first-name" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input id="last-name" name="last-name" placeholder="Doe" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" placeholder="Project Inquiry" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project and requirements"
          className="min-h-[120px]"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service of Interest</Label>
        <select 
          id="service" 
          name="service"
          className="w-full rounded-md border border-input bg-background px-3 py-2"
          required
        >
          <option value="">Select a service</option>
          <option value="web">Web Development</option>
          <option value="app">App Development</option>
          <option value="security">Web & App Security</option>
          <option value="social-management">Social Media Management</option>
          <option value="social-marketing">Social Media Marketing</option>
          <option value="consulting">Technical Consulting</option>
        </select>
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
} 