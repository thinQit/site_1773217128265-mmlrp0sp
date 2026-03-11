export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface ClassItem {
  time: string;
  name: string;
  duration: string;
  level: string;
  coach: string;
  focus: string;
}

export interface DaySchedule {
  day: string;
  classes: ClassItem[];
}

export interface Trainer {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  certifications: string[];
  favoriteCue: string;
  imageAlt: string;
}

export interface MembershipTier {
  name: string;
  price: string;
  billingPeriod: string;
  badge?: string;
  bestFor: string;
  features: string[];
  cta: CTA;
}

export interface TransformationItem {
  name: string;
  timeframe: string;
  result: string;
  program: string;
  imageAlt: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  rating: number;
}
