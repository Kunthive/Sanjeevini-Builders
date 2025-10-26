import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sanjeevini Builders | Premium Construction & Interior Design in Bangalore",
  description:
    "Building Dreams, Crafting Spaces. Premium construction and interior design services in Bangalore with 10+ years of expertise.",
  generator: "v0.app",
  openGraph: {
    title: "Sanjeevini Builders | Premium Construction & Interior Design",
    description:
      "Transforming visions into reality across Bangalore with precision craftsmanship and innovative design.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
