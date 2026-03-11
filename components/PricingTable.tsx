"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

interface PricingTableProps {
  headline: string;
  subheadline?: string;
  tiers: PricingTier[];
}

export default function PricingTable({
  headline = "Memberships That Match Your Grind",
  subheadline = "Choose your training level and unlock unlimited momentum.",
  tiers = [],
}: Partial<PricingTableProps>) {
  const fallbackTiers: PricingTier[] = [
    {
      name: "Starter",
      price: "$49",
      period: "mo",
      description: "Perfect for beginners building consistency.",
      features: ["3 classes per week", "Basic fitness assessment", "Mobile workout tracking"],
      ctaLabel: "Join Starter",
      ctaHref: "#",
      highlighted: false,
    },
    {
      name: "Unlimited",
      price: "$89",
      period: "mo",
      description: "Our most popular plan for serious progress.",
      features: ["Unlimited classes", "Monthly body composition scan", "Priority class booking"],
      ctaLabel: "Start Unlimited",
      ctaHref: "#",
      highlighted: true,
    },
    {
      name: "Elite Coaching",
      price: "$149",
      period: "mo",
      description: "High-touch coaching for maximum transformation.",
      features: ["Unlimited classes", "1:1 coach check-ins", "Custom nutrition guidance"],
      ctaLabel: "Go Elite",
      ctaHref: "#",
      highlighted: false,
    },
  ];

  const data = tiers.length ? tiers : fallbackTiers;

  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {data.map(function (tier, i) {
            return (
              <Card key={i} className={"card-hover relative flex flex-col rounded-xl border border-border bg-card/80 backdrop-blur " + (tier.highlighted ? "ring-2 ring-ring" : "")}>
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge>Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl uppercase">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">/{tier.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map(function (feature, j) {
                      return (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 text-primary">&#10003;</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full transition-all duration-200 hover:scale-105" variant={tier.highlighted ? "default" : "outline"} asChild>
                    <a href={tier.ctaHref}>{tier.ctaLabel}</a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
