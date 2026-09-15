import type { Metadata } from "next";
import { Cabinet } from "@/components/Cabinet";
import { DoctolibButton } from "@/components/DoctolibButton";
import { Faq } from "@/components/Faq";
import { MapSection } from "@/components/MapSection";
import { PageBanner } from "@/components/PageBanner";
import { FAQ } from "@/lib/site";

export const metadata: Metadata = {
  title: "Le cabinet",
  description:
    "Nouveau cabinet à Saint-Jean, 22 boulevard des Pensées. Consultations au cabinet et en visio.",
};

export default function CabinetPage() {
  return (
    <main>
      <PageBanner
        kicker="Le cabinet"
        title="Un nouveau lieu à Saint-Jean"
        text="Le cabinet quitte Balma pour s’installer au 22 boulevard des Pensées. Un espace chaleureux, au rez-de-chaussée, avec parking gratuit."
      />
      <Cabinet hideIntro />
      <MapSection />
      <section className="bg-ivory py-16 text-center">
        <p className="font-display text-3xl text-ink">Réserver une séance</p>
        <div className="mt-8 flex justify-center">
          <DoctolibButton variant="hero" />
        </div>
      </section>
      <Faq items={FAQ.cabinet} />
    </main>
  );
}
