import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { PageBanner } from "@/components/PageBanner";
import { Practices } from "@/components/Practices";
import { DoctolibButton } from "@/components/DoctolibButton";
import { FAQ } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accompagnement",
  description:
    "Thérapie EMDR Europe et hypnose ericksonienne. Un cadre bienveillant pour avancer à votre rythme.",
};

export default function AccompagnementPage() {
  return (
    <main>
      <PageBanner
        kicker="Accompagnement"
        title="EMDR et hypnose ericksonienne"
        text="Deux approches, un même cadre bienveillant, pour aborder vos difficultés et retrouver plus de liberté intérieure."
      />
      <Practices hideIntro />
      <section className="bg-cream py-16 text-center">
        <p className="font-display text-3xl text-ink">Prendre rendez-vous</p>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Réservez une séance au cabinet ou en visio, directement sur Doctolib.
        </p>
        <div className="mt-8 flex justify-center">
          <DoctolibButton variant="hero" />
        </div>
      </section>
      <Faq items={FAQ.accompagnement} />
    </main>
  );
}
