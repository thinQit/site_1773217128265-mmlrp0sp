"use client";

export default function LocationMap() {
  return (
    <section id="contact" className="bg-[#111111] py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-white/10">
          <iframe
            title="Iron Peak Fitness Austin Map"
            src="https://maps.google.com/maps?q=2121%20E%207th%20St%20Austin%20TX%2078702&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-[340px] w-full"
            loading="lazy"
          />
        </div>
        <div className="space-y-3 text-white/85">
          <h3 className="text-3xl font-black uppercase text-white">Visit Iron Peak Fitness</h3>
          <p>2121 E 7th St, Austin, TX 78702</p>
          <p>Parking: Free lot parking behind the building + street parking on E 7th.</p>
          <p>Landmarks: Near Plaza Saltillo, 10 minutes from Downtown Austin</p>
          <p>Hours: Mon–Fri 5:30am–9:00pm, Sat 7:00am–2:00pm, Sun 8:00am–1:00pm</p>
        </div>
      </div>
    </section>
  )
}
