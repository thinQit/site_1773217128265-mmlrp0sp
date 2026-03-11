export const dynamic = 'force-dynamic';

import HeroGradientBlob from "@/components/HeroGradientBlob"
import MembershipTiers from "@/components/MembershipTiers"
import CTABand from "@/components/CTABand"
import AngleDivider from "@/components/AngleDivider"

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroGradientBlob />
      </div>
      <AngleDivider />
      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <MembershipTiers />
      </div>
      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <CTABand />
      </div>
    </main>
  )
}
