export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams"
import TrainerCards from "@/components/TrainerCards"
import CTASparkles from "@/components/CTASparkles"
import AngleDivider from "@/components/AngleDivider"

export default function TrainersPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroBeams />
      </div>
      <AngleDivider />
      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <TrainerCards />
      </div>
      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <CTASparkles />
      </div>
    </main>
  )
}
