"use client";

import React from "react";
import { Zap, Flame, Dumbbell, HeartPulse, Timer, ShieldCheck, User, Database } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { User, Database, 
  Zap,
  Flame,
  Dumbbell,
  HeartPulse,
  Timer,
  ShieldCheck,
};

export default function FeaturesGrid({
  badge = "WHY TRAIN WITH US",
  headline = "Built for Strength, Speed, and Results",
  subheadline = "Every class is designed to push limits, improve conditioning, and keep you progressing week after week.",
  features = [],
}: Partial<FeaturesGridProps>) {
  const fallbackFeatures: Feature[] = [
    { icon: "Zap", title: "HIIT Conditioning", description: "Explosive interval sessions that boost stamina and burn calories fast." },
    { icon: "Dumbbell", title: "Strength Blocks", description: "Progressive strength programming to build muscle and raw power." },
    { icon: "Flame", title: "Fat-Burn Circuits", description: "Metabolic training designed to maximize afterburn and energy output." },
  ];

  const data = features.length ? features : fallbackFeatures;

  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <Card key={index} className="card-hover rounded-xl border border-border bg-card/80 backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground uppercase">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
