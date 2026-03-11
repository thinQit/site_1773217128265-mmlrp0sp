export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import ClassSchedule from "@/components/ClassSchedule"
import CTABand from "@/components/CTABand"
import AngleDivider from "@/components/AngleDivider"

export default function ClassesPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroSpotlight />
      </div>
      <AngleDivider />
      <div id="schedule" className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <ClassSchedule />
      </div>
      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <CTABand />
      </div>
    </main>
  )
}
