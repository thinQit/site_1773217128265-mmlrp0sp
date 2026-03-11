"use client";

import { Button } from '@/components/ui/button'
import TrainerCard from '@/components/TrainerCard'

export default function TrainerCards() {
  return (
    <section id="trainers" className="bg-black py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-black uppercase text-white md:text-5xl">Coach Team</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <TrainerCard />
          <TrainerCard
            name="Coach Eli Carter"
            role="Boxing + Conditioning"
            imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg"
            cue="Fast feet, sharp focus."
            specialties={['Boxing', 'Speed', 'Conditioning']}
          />
          <TrainerCard
            name="Coach Sofia Reed"
            role="Yoga + Recovery"
            imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg"
            cue="Control your breath, control your pace."
            specialties={['Yoga', 'Mobility', 'Recovery']}
          />
        </div>
        <Button asChild className="mt-8 bg-[#FF2E00] text-white hover:bg-[#e22a00]">
          <a href="#contact">Book Personal Training</a>
        </Button>
      </div>
    </section>
  )
}
