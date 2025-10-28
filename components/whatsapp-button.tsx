"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918867301822?text=Hello%20Sanjeevini%20Builders!%20I'm%20interested%20in%20discussing%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 shadow-lg animate-fab-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute -z-10 inset-0 rounded-full ring-2 ring-green-400/40" />
    </a>
  )
}
