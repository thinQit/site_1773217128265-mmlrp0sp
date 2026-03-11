'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function StatsCounter() {
  const [members, setMembers] = useState(0)
  const [classes, setClasses] = useState(0)
  const [trainers, setTrainers] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setMembers((v) => (v < 1200 ? v + 25 : 1200))
      setClasses((v) => (v < 85 ? v + 2 : 85))
      setTrainers((v) => (v < 14 ? v + 1 : 14))
    }, 30)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="bg-[#111111] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-4 text-center md:grid-cols-3">
          <div><p className="text-5xl font-black text-white">{members}+</p><p className="uppercase text-white/70">Active Members</p></div>
          <div><p className="text-5xl font-black text-white">{classes}/wk</p><p className="uppercase text-white/70">Group Classes</p></div>
          <div><p className="text-5xl font-black text-white">{trainers}</p><p className="uppercase text-white/70">Certified Coaches</p></div>
        </div>
        <div className="mt-8 text-center">
          <Button asChild className="bg-[#FF2E00] text-white hover:bg-[#e22a00]">
            <a href="#trial">Join Iron Peak Today</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
