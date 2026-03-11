"use client";

import TransformationCard from '@/components/TransformationCard'

export default function TransformationGallery() {
  return (
    <section id="transformations" className="bg-black py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-black uppercase text-white md:text-5xl">Transformation Gallery</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <TransformationCard />
          <TransformationCard
            name="Alyssa R."
            timeframe="12 weeks"
            metrics="-14 lbs, improved posture"
            program="Strength + Yoga"
            imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578086/site-images/fitness/13106584.jpg"
          />
          <TransformationCard
            name="Marcus D."
            timeframe="20 weeks"
            metrics="+9 lbs lean mass"
            program="Boxing + Performance"
            imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578062/site-images/fitness/13621287.jpg"
          />
        </div>
      </div>
    </section>
  )
}
