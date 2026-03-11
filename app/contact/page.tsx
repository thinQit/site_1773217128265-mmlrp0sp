export const dynamic = 'force-dynamic';

import HeroLamp from "@/components/HeroLamp"
import ContactForm from "@/components/ContactForm"
import LocationMap from "@/components/LocationMap"
import AngleDivider from "@/components/AngleDivider"

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroLamp />
      </div>
      <AngleDivider />
      <div id="contact-form" className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <ContactForm
          headline="Contact form"
          subheadline="We typically respond within 1 business day."
          contactInfo={[
            { icon: "Phone", label: "Phone", value: "(512) 555-0198" },
            { icon: "Mail", label: "Email", value: "hello@ironpeakfitness.com" },
            { icon: "MapPin", label: "Address", value: "2121 E 7th St, Austin, TX 78702" },
          ]}
        />
      </div>
      <div id="location" className="animate-fade-in-up py-20 md:py-28 bg-background">
        <LocationMap />
      </div>
    </main>
  )
}
