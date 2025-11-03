"use client"

import Image from "next/image"
import * as React from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

type GalleryImage = { src: string; alt?: string }

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = React.useState(false)
  const [index, setIndex] = React.useState(0)

  const openAt = React.useCallback((i: number) => {
    setIndex(i)
    setOpen(true)
  }, [])

  if (!images?.length) return null

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {images.map((img, i) => (
          <button
            key={i}
            className="group overflow-hidden rounded-lg shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            onClick={() => openAt(i)}
            aria-label={`Open image ${i + 1}`}
          >
            <div className="relative h-64 md:h-80 overflow-hidden">
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt || `Gallery image ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          <div className="relative w-full aspect-[16/10] bg-black">
            <Image
              src={images[index]?.src || "/placeholder.svg"}
              alt={images[index]?.alt || `Gallery image ${index + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex items-center justify-between px-4 py-3 bg-background border-t">
            <span className="text-sm text-foreground/70">{index + 1} / {images.length}</span>
            <div className="flex gap-2">
              <button
                className="px-3 py-2 rounded-md bg-muted hover:bg-muted/80 text-sm"
                onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
              >
                Prev
              </button>
              <button
                className="px-3 py-2 rounded-md bg-muted hover:bg-muted/80 text-sm"
                onClick={() => setIndex((i) => (i + 1) % images.length)}
              >
                Next
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}


