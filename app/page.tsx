import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { HomeSections } from "@/components/HomeSections";
import { PhotoGallery } from "@/components/PhotoGallery";
import { FAQ } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <Hero />
      <PhotoGallery />
      <HomeSections />
      <Faq items={FAQ.home} />
    </main>
  );
}
