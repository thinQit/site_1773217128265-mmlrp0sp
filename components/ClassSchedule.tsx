'use client'

import { useState } from 'react'
import ClassCard from '@/components/ClassCard'
import { Button } from '@/components/ui/button'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function ClassSchedule() {
  const [day, setDay] = useState('Mon')

  return (
    <section id="schedule" className="bg-[#111111] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-black uppercase text-white md:text-5xl">Weekly Class Schedule</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {days.map((d) => (
            <Button key={d} onClick={() => setDay(d)} variant="outline" className={day === d ? 'border-[#FF2E00] bg-[#FF2E00] text-white' : 'border-white/20 text-white'}>
              {d}
            </Button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ClassCard category="HIIT" time="6:00 AM" coach="Coach Dani" duration="45 min" focus={day + ' Power Intervals'} />
          <ClassCard category="YOGA" time="9:00 AM" coach="Coach Elena" duration="50 min" focus={day + ' Mobility Flow'} />
          <ClassCard category="SPINNING" time="5:30 PM" coach="Coach Tre" duration="45 min" focus={day + ' Endurance Ride'} />
          <ClassCard category="BOXING" time="7:00 PM" coach="Coach Malik" duration="60 min" focus={day + ' Technique + Conditioning'} />
        </div>
      </div>
    </section>
  )
}
