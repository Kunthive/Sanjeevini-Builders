"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    // Complete loading after animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          {/* Building Block Lifting Animation */}
          <div className="relative flex flex-col items-center gap-12">
            {/* Building Block */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ 
                y: 0,
                opacity: 1
              }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut",
                delay: 0.2
              }}
              className="relative"
            >
              {/* Simple Building Icon */}
              <motion.div
                animate={{ 
                  y: [0, -8, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-20 h-24 bg-primary relative"
              >
                {/* Windows */}
                <div className="absolute inset-0 grid grid-cols-2 gap-2 p-2">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="bg-accent/80"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Sanjeevini Builders
              </h1>
            </motion.div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full bg-primary"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
