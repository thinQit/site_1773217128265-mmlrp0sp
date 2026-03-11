"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-black py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-4">
        <div>
          <p className="text-lg font-black uppercase text-white">Iron Peak Fitness</p>
          <p className="mt-2 text-sm text-white/70">2121 E 7th St, Austin, TX 78702</p>
          <p className="text-sm text-white/70">Mon–Fri 5:30am–9:00pm</p>
        </div>
        <div>
          <p className="font-bold uppercase text-white">Contact</p>
          <a className="block text-sm text-white/70" href="tel:+15125550198">(512) 555-0198</a>
          <a className="block text-sm text-white/70" href="mailto:hello@ironpeakfitness.com">hello@ironpeakfitness.com</a>
        </div>
        <div>
          <p className="font-bold uppercase text-white">Social</p>
          <a className="block text-sm text-white/70" href="https://instagram.com/ironpeakfitness">Instagram</a>
          <a className="block text-sm text-white/70" href="https://youtube.com/@ironpeakfitness">YouTube</a>
          <a className="block text-sm text-white/70" href="https://tiktok.com/@ironpeakfitness">TikTok</a>
        </div>
        <div>
          <p className="font-bold uppercase text-white">Newsletter</p>
          <div className="mt-2 flex gap-2">
            <Input placeholder="Email" type="email" />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Join</Button>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs uppercase text-white/40">© {new Date().getFullYear()} Iron Peak Fitness</p>
    </footer>
  )
}
