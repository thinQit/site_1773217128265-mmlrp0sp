import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center gap-6 bg-background text-foreground px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">404</h1>
      <p className="text-muted-foreground">Page not found. Let’s get you back to training.</p>
      <Button asChild className="transition-all duration-200 hover:scale-105">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  )
}
