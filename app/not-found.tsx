import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Page Not Found</h1>
          <p className="text-lg text-foreground/70">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            asChild
            variant="default"
            className="min-h-[44px]"
          >
            <Link href="/">
              <Icons.Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="min-h-[44px]"
          >
            <Link href="/projects">
              <Icons.Building className="w-4 h-4 mr-2" />
              View Projects
            </Link>
          </Button>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-foreground/60 mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link href="/about" className="text-accent hover:text-accent/80 underline">
              About Us
            </Link>
            <Link href="/team" className="text-accent hover:text-accent/80 underline">
              Our Team
            </Link>
            <Link href="/contact" className="text-accent hover:text-accent/80 underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
