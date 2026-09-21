import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { Infos } from "@/components/Infos";
import { MapSection } from "@/components/MapSection";
import { PageBanner } from "@/components/PageBanner";
import { FAQ } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tarifs et modalités",
  description:
    "Consultation à 60 € — 1 heure. Cabinet à Saint-Jean et téléconsultation. Prise de rendez-vous sur Doctolib.",
};

export default function InfosPage() {
  return (
    <main>
      <PageBanner
        kicker="Tarifs et modalités"
        title="Vous souhaitez commencer une thérapie ?"
        text="Faire le premier pas n’est pas toujours évident. Vous n’avez pas besoin de savoir exactement ce qui ne va pas pour prendre rendez-vous."
      />
      <Infos hideIntro />
      <MapSection />
      <Faq items={FAQ.infos} />
    </main>
  );
}
