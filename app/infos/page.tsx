import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { Infos } from "@/components/Infos";
import { PageBanner } from "@/components/PageBanner";
import { FAQ } from "@/lib/site";

export const metadata: Metadata = {
  title: "Infos pratiques",
  description:
    "Horaires, tarifs et prise de rendez-vous sur Doctolib. Consultations à 60 €, au cabinet ou en visio.",
};

export default function InfosPage() {
  return (
    <main>
      <PageBanner
        kicker="Infos pratiques"
        title="Horaires, tarifs et rendez-vous"
        text="Retrouvez les informations utiles pour organiser votre venue ou une séance en visio."
      />
      <Infos hideIntro />
      <Faq items={FAQ.infos} />
    </main>
  );
}
