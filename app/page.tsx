import dynamic from "next/dynamic";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { HomeSections } from "@/components/HomeSections";
import { FAQ } from "@/lib/site";

const PhotoGallery = dynamic(
  () =>
    import("@/components/PhotoGallery").then((mod) => mod.PhotoGallery),
  {
    loading: () => (
      <div className="h-48 bg-cream md:h-64" aria-hidden />
    ),
  }
);

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
