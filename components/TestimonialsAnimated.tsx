"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = "What Members Are Saying",
  subheadline = "Stories from athletes who committed, stayed consistent, and transformed.",
  testimonials = [],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  const fallbackTestimonials: TestimonialItem[] = [
    {
      quote: "I dropped 18 pounds, added visible muscle, and feel stronger than I have in years. The coaching keeps me locked in.",
      name: "Jordan M.",
      designation: "Member, 9 Months",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578067/site-images/fitness/10039536.jpg",
    },
    {
      quote: "Every class brings intensity and structure. I finally have a routine that challenges me and fits my schedule.",
      name: "Brianna T.",
      designation: "Member, 6 Months",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578072/site-images/fitness/13345705.jpg",
    },
    {
      quote: "The environment is electric. Coaches actually care about form, progression, and helping you crush your goals.",
      name: "Carlos D.",
      designation: "Member, 1 Year",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578045/site-images/fitness/13106611.jpg",
    },
  ];

  const data = testimonials.length ? testimonials : fallbackTestimonials;

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <AnimatedTestimonials testimonials={data} autoplay={autoplay} />
      </div>
    </section>
  );
}
