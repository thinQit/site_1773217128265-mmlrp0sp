export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import ClassSchedule from "@/components/ClassSchedule"
import TrainerCards from "@/components/TrainerCards"
import MembershipTiers from "@/components/MembershipTiers"
import TransformationGallery from "@/components/TransformationGallery"
import StatsCounter from "@/components/StatsCounter"
import CTASparkles from "@/components/CTASparkles"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import AngleDivider from "@/components/AngleDivider"

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Iron Peak Fitness • Austin, TX"
          title="Austin’s high-energy gym for real results"
          subtitle="Personal training, HIIT, yoga, spinning, and boxing—built around your schedule. Start with a free trial session at Iron Peak Fitness."
          primaryCta={{ label: "Claim Free Trial", href: "/contact?intent=free-trial" }}
          secondaryCta={{ label: "View Class Schedule", href: "/classes#schedule" }}
        />
      </div>
      <AngleDivider />
      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <ClassSchedule />
      </div>
      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <TrainerCards />
      </div>
      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <MembershipTiers />
      </div>
      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <TransformationGallery />
      </div>
      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <StatsCounter />
      </div>
      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <CTASparkles />
      </div>
      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <TestimonialsAnimated
          title="Austin’s most motivating hour of the day"
          subtitle="Members stay because they feel supported, challenged, and seen."
          testimonials={[
            {
              quote:
                "I’ve tried big-box gyms and never stuck with it. Iron Peak feels like a team—coaches correct form, push you safely, and the vibe is unreal.",
              name: "Danielle P.",
              designation: "Unlimited Member",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg",
            },
            {
              quote:
                "Boxing class is the best stress relief in Austin. I’m down two belt notches and my conditioning is the best it’s been in years.",
              name: "Luis G.",
              designation: "Boxing + HIIT",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg",
            },
            {
              quote:
                "The personal training sessions keep me accountable. I’m stronger, my posture is better, and I finally understand how to lift without pain.",
              name: "Hannah W.",
              designation: "Peak + PT",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg",
            },
          ]}
          autoplay
        />
      </div>
    </main>
  )
}
