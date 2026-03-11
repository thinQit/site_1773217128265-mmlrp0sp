"use client";

import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

const iconMap: Record<string, React.ElementType> = {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
};

export default function ContactForm({
  headline = "Talk to a Coach",
  subheadline = "Questions about classes, memberships, or your first free session? We’ve got you.",
  contactInfo = [],
}: Partial<ContactFormProps>) {
  const fallbackInfo: ContactInfo[] = [
    { icon: "Phone", label: "Call", value: "(555) 239-7711" },
    { icon: "Mail", label: "Email", value: "hello@fitforgegym.com" },
    { icon: "MapPin", label: "Location", value: "1480 Iron District Ave, Suite 220" },
  ];

  const infoData = contactInfo.length ? contactInfo : fallbackInfo;

  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card className="rounded-xl border border-border bg-card/80 backdrop-blur">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more..." rows={5} />
                </div>
                <Button type="submit" className="w-full transition-all duration-200 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-center space-y-8">
            {infoData.map(function (info, i) {
              const Icon = iconMap[info.icon] || MessageSquare;
              return (
                <div key={i} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground uppercase">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
