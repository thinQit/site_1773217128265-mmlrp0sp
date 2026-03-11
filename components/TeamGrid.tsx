"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  title: string;
  imageUrl?: string;
  bio?: string;
}

interface TeamGridProps {
  headline: string;
  subheadline?: string;
  members: TeamMember[];
}

export default function TeamGrid({
  headline = "Meet Our Elite Coaches",
  subheadline = "Certified trainers focused on performance, accountability, and real transformation.",
  members = [],
}: Partial<TeamGridProps>) {
  const fallbackMembers: TeamMember[] = [
    {
      name: "Marcus Reed",
      title: "Head Strength Coach",
      imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg",
      bio: "Specialist in powerlifting form and progressive overload.",
    },
    {
      name: "Alina Brooks",
      title: "HIIT Performance Coach",
      imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg",
      bio: "Drives high-energy conditioning and endurance gains.",
    },
    {
      name: "Derek Cole",
      title: "Mobility & Recovery Coach",
      imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg",
      bio: "Improves movement quality and injury prevention.",
    },
    {
      name: "Sofia Lane",
      title: "Body Recomp Specialist",
      imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577321/site-images/team-people/1181622.jpg",
      bio: "Guides members through fat loss and muscle-building phases.",
    },
  ];

  const data = members.length ? members : fallbackMembers;

  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map(function (member, i) {
            return (
              <Card key={i} className="card-hover overflow-hidden rounded-xl border border-border bg-card/80 backdrop-blur text-center">
                {member.imageUrl && (
                  <div className="aspect-square overflow-hidden">
                    <Image src={member.imageUrl} alt={member.name} width={600} height={600} unoptimized className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                )}
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground uppercase">{member.name}</h3>
                  <p className="text-sm text-primary">{member.title}</p>
                  {member.bio && <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
