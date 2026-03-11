"use client";

import { Button } from '@/components/ui/button'

export default function CTABand() {
  return (
    <section className="bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center">
        <p className="text-2xl font-black uppercase text-white">Need help picking a membership?</p>
        <Button asChild className="bg-[#FF2E00] text-white hover:bg-[#e22a00]">
          <a href="#contact">Talk to a Coach</a>
        </Button>
      </div>
    </section>
  )
}
