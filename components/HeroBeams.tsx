'use client'

import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { Button } from '@/components/ui/button'

export default function HeroBeams() {
  return (
    <AuroraBackground className="bg-black">
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF2E00]">Meet the Coaches</p>
          <h1 className="mt-4 text-4xl font-black uppercase text-white md:text-6xl">Trainers Who Push You Further</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">Certified experts in strength, conditioning, mobility, and nutrition guidance.</p>
          <Button asChild className="mt-8 bg-[#FF2E00] text-white hover:bg-[#e22a00]">
            <a href="#trainers">Explore Trainer Team</a>
          </Button>
        </div>
      </section>
    </AuroraBackground>
  )
}
