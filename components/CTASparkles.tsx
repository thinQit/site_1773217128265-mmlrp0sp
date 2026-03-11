'use client'

import { Button } from '@/components/ui/button'

export default function CTASparkles() {
  return (
    <section id="trial" className="bg-gradient-to-r from-[#FF2E00] to-red-600 py-14">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h3 className="text-3xl font-black uppercase text-white md:text-4xl">Start Your Free 7-Day Trial</h3>
        <p className="mt-3 text-white/90">Unlimited classes • Intro coaching session • No commitment required</p>
        <p className="mt-2 text-xs uppercase tracking-widest text-white/80">Valid for local Austin residents. One trial per person.</p>
        <Button className="mt-6 bg-black text-white hover:bg-black/90">Claim My Trial</Button>
      </div>
    </section>
  )
}
