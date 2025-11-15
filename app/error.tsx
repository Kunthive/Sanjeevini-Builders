'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 mb-6">
            <Icons.AlertCircle className="w-10 h-10 text-destructive" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Oops! Something went wrong</h1>
          <p className="text-lg text-foreground/70 mb-2">
            We encountered an unexpected error while processing your request.
          </p>
          {error.message && (
            <p className="text-sm text-foreground/60 bg-muted p-4 rounded-lg mt-4 font-mono">
              {error.message}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            variant="default"
            className="min-h-[44px]"
          >
            <Icons.RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button
            asChild
            variant="outline"
            className="min-h-[44px]"
          >
            <Link href="/">
              <Icons.Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-foreground/60">
            If this problem persists, please{' '}
            <Link href="/contact" className="text-accent hover:text-accent/80 underline">
              contact our support team
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
