"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto border-none shadow-none">
      <CardHeader className="space-y-2 p-0 mb-8">
        <div className="text-green-600 font-medium">Team Member</div>
        <CardTitle className="text-3xl font-bold">Feel Free to Contact Us</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input 
              placeholder="Your Name" 
              className="bg-gray-50 border-none h-12"
              required
            />
            <Input 
              type="email" 
              placeholder="Enter Email" 
              className="bg-gray-50 border-none h-12"
              required
            />
          </div>
          <Input 
            placeholder="Website" 
            className="bg-gray-50 border-none h-12"
          />
          <Textarea 
            placeholder="Your Comment" 
            className="bg-gray-50 border-none min-h-[150px] resize-none"
            required
          />
          <Button 
            type="submit" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 h-12"
            disabled={isSubmitting}
          >
            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

