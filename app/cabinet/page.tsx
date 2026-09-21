import type { Metadata } from "next";
import { Cabinet } from "@/components/Cabinet";
import { Faq } from "@/components/Faq";
import { PageBanner } from "@/components/PageBanner";
import { FAQ } from "@/lib/site";

export const metadata: Metadata = {
  title: "Qui suis-je",
  description:
    "Solène Mialot, psychologue clinicienne à Saint-Jean. Approche intégrative : EMDR, thérapie des schémas et hypnose ericksonienne.",
};

export default function CabinetPage() {
  return (
    <main>
      <PageBanner
        kicker="Qui suis-je"
        title="Une psychologue à l’écoute de votre histoire"
        text="Je suis Solène Mialot, psychologue clinicienne à Saint-Jean. Je reçois les adultes au cabinet et en téléconsultation."
      />
      <Cabinet hideIntro />
      <Faq items={FAQ.cabinet} />
    </main>
  );
}
