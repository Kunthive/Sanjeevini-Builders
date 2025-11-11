import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Sanjeevini Services Pvt Ltd | Premium Real Estate Development in Bengaluru",
  description:
    "Building Trust. Shaping Skylines. Creating Spaces That Last. Premium residential apartments, villas, layouts, and warehouse development in Bengaluru since 2025.",
  generator: "v0.app",
  openGraph: {
    title: "Sanjeevini Services Pvt Ltd | Real Estate Development",
    description:
      "Trusted real estate developer in Bengaluru specializing in residential apartments, villa communities, layout formation, and warehouse development.",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <LoadingScreen />
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
