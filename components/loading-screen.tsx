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
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          {/* Blueprint Grid Background */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, currentColor 1px, transparent 1px),
                  linear-gradient(to bottom, currentColor 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Crane Animation */}
            <div className="relative w-64 h-48">
              {/* Crane Base */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-primary rounded-sm"
              />

              {/* Crane Tower */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 120 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3 bg-primary origin-bottom"
              />

              {/* Crane Arm */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                className="absolute top-[32px] left-1/2 w-40 h-2 bg-primary origin-left -translate-x-1/2"
              />

              {/* Crane Counter Weight */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                className="absolute top-[32px] right-[calc(50%+2px)] w-16 h-2 bg-primary origin-right"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute top-[36px] right-[calc(50%+2px)] w-8 h-6 bg-primary/80"
              />

              {/* Hook Cable */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: progress < 80 ? 40 - (progress / 2) : 40 }}
                transition={{ duration: 0.3 }}
                className="absolute top-[36px] left-[calc(50%+120px)] w-[2px] bg-accent origin-top"
              />

              {/* Hook and Load */}
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ 
                  opacity: 1, 
                  y: progress < 80 ? 40 - (progress / 2) : 40 
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-[36px] left-[calc(50%+110px)]"
              >
                {/* Hook */}
                <div className="w-6 h-2 bg-accent rounded-sm mb-1" />
                
                {/* Building Block */}
                <motion.div
                  animate={{ 
                    rotate: progress < 80 ? [0, 2, -2, 0] : 0 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: progress < 80 ? Infinity : 0,
                    ease: "easeInOut" 
                  }}
                  className="w-8 h-8 bg-secondary border-2 border-secondary-foreground/20 relative"
                >
                  {/* Block details */}
                  <div className="absolute inset-1 border border-secondary-foreground/10" />
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-secondary-foreground/10" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-secondary-foreground/10" />
                </motion.div>
              </motion.div>
            </div>

            {/* Company Name with Blueprint Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-primary mb-2 tracking-tight">
                Sanjeevini Builders
              </h1>
              <p className="text-sm text-muted-foreground tracking-wider uppercase">
                Building Excellence
              </p>
            </motion.div>

            {/* Foundation Progress Bars */}
            <div className="flex flex-col gap-3 w-80">
              {/* Progress Bar Container */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="relative"
              >
                {/* Foundation Layers */}
                <div className="flex items-end gap-2 h-12 mb-4">
                  {[0, 1, 2, 3, 4].map((index) => {
                    const barProgress = Math.max(0, Math.min(100, (progress - index * 15) * 1.5))
                    return (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.min(100, barProgress)}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex-1 bg-primary/20 rounded-t-sm relative overflow-hidden"
                      >
                        <motion.div
                          animate={{ height: `${Math.min(100, barProgress)}%` }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary to-primary/60"
                        />
                        {/* Brick pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="w-full h-full" style={{
                            backgroundImage: `
                              repeating-linear-gradient(
                                0deg,
                                transparent,
                                transparent 4px,
                                currentColor 4px,
                                currentColor 5px
                              )
                            `
                          }} />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Progress Text and Percentage */}
                <div className="flex justify-between items-center">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-sm text-muted-foreground font-medium"
                  >
                    {progress < 30 ? "Laying Foundation..." : 
                     progress < 60 ? "Building Structure..." : 
                     progress < 90 ? "Finishing Touches..." : 
                     "Almost Ready..."}
                  </motion.span>
                  <motion.span
                    key={progress}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-bold text-primary tabular-nums"
                  >
                    {Math.round(progress)}%
                  </motion.span>
                </div>

                {/* Ground Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="h-1 bg-border rounded-full origin-left"
                />
              </motion.div>
            </div>

            {/* Subtle Dots Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-2"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 bg-primary rounded-full"
                />
              ))}
            </motion.div>
          </div>

          {/* Corner Accent - Blueprint Style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5 }}
            className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5 }}
            className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
