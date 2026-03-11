"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryMasonryProps {
  headline: string;
  subheadline?: string;
  images: GalleryImage[];
}

export default function GalleryMasonry({
  headline = "Transformation Highlights",
  subheadline = "Real members. Real work. Real progress.",
  images = [],
}: Partial<GalleryMasonryProps>) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const fallbackImages: GalleryImage[] = [
    { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578062/site-images/fitness/13621287.jpg", alt: "Athlete lifting weights", caption: "Strength phase progress" },
    { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578086/site-images/fitness/13106584.jpg", alt: "Group training session", caption: "Team energy on the floor" },
    { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578059/site-images/fitness/14037024.jpg", alt: "Cardio interval training", caption: "HIIT conditioning block" },
    { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578078/site-images/fitness/10475451.jpg", alt: "Functional workout", caption: "Functional movement flow" },
    { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578047/site-images/fitness/13965335.jpg", alt: "Member training with coach", caption: "Coach-led accountability" },
    { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578088/site-images/fitness/11219264.jpg", alt: "Athletic transformation", caption: "Before-and-after momentum" },
  ];

  const data = images.length ? images : fallbackImages;

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map(function (img, i) {
            return (
              <div key={i} className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl card-hover" onClick={function () { setSelectedImage(img); }}>
                <Image src={img.url} alt={img.alt} width={800} height={800} unoptimized className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0 bg-foreground/0 transition-all group-hover:bg-foreground/30" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                    <p className="text-sm text-primary-foreground">{img.caption}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4" onClick={function () { setSelectedImage(null); }}>
            <Image src={selectedImage.url} alt={selectedImage.alt} width={1400} height={900} unoptimized className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain" />
          </div>
        )}
      </div>
    </section>
  );
}
