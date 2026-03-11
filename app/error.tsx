"use client"

import { Button } from "@/components/ui/button"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center gap-6 bg-background text-foreground px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Something went wrong.</h2>
      <p className="text-muted-foreground">Please try again, or contact Iron Peak Fitness if the issue continues.</p>
      <Button onClick={() => reset()} className="transition-all duration-200 hover:scale-105">
        Try again
      </Button>
    </main>
  )
}
