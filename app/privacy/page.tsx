export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import FeaturesGrid from "@/components/FeaturesGrid"
import AngleDivider from "@/components/AngleDivider"

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroSpotlight />
      </div>
      <AngleDivider />
      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <FeaturesGrid
          badge="Effective: January 1, 2026"
          headline="How we handle your information"
          subheadline="We collect only what we need to respond to inquiries and improve the site experience."
          features={[
            {
              icon: "User",
              title: "Information you provide",
              description:
                "Contact details from forms (name, email, phone if provided), message content, class preferences, and training availability.",
            },
            {
              icon: "Shield",
              title: "How we use it",
              description:
                "To respond to your inquiry, schedule a trial/tour/class, and improve Iron Peak Fitness services and website content.",
            },
            {
              icon: "Database",
              title: "Data retention",
              description:
                "Inquiry data is retained as long as needed for follow-up, service quality, and basic recordkeeping.",
            },
          ]}
        />
      </div>
    </main>
  )
}
