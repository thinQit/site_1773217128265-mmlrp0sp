"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function HeroLamp() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact Iron Peak</p>
          <h1 className="mt-3 text-4xl font-black uppercase text-white md:text-6xl">Let’s Build Your Game Plan</h1>
          <p className="mt-4 text-white/75">Visit us in Austin, call our team, or book your first session online.</p>
          <ul className="mt-6 space-y-2 text-sm uppercase text-white/90">
            <li>Call: (512) 555-0198</li>
            <li>Email: hello@ironpeakfitness.com</li>
            <li>Address: 2121 E 7th St, Austin, TX 78702</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="mb-3 text-lg font-bold uppercase text-white">Start Your Free Trial</p>
          <div className="space-y-3">
            <Input placeholder="Full Name" />
            <Input placeholder="Email Address" type="email" />
            <Input placeholder="Phone Number" />
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Request Callback</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
