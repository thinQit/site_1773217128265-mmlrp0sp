export const dynamic = 'force-dynamic';

import HeroWaves from "@/components/HeroWaves"
import TransformationGallery from "@/components/TransformationGallery"
import AngleDivider from "@/components/AngleDivider"

export default function GalleryPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroWaves />
      </div>
      <AngleDivider />
      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <TransformationGallery />
      </div>
    </main>
  )
}
