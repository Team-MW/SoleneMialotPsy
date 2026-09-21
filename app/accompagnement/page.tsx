import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { PageBanner } from "@/components/PageBanner";
import { Practices } from "@/components/Practices";
import { DoctolibButton } from "@/components/DoctolibButton";
import { FAQ } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mon accompagnement",
  description:
    "Accompagnement psychologique personnalisé : psychothérapie, EMDR, hypnose ericksonienne et thérapie des schémas.",
};

export default function AccompagnementPage() {
  return (
    <main>
      <PageBanner
        kicker="Mon accompagnement"
        title="Un accompagnement psychologique personnalisé"
        text="Chaque personne arrive avec son histoire, ses expériences et ses propres ressources. Je ne considère pas qu’une méthode unique puisse convenir à tout le monde."
      />
      <Practices />
      <section className="bg-cream py-16 text-center">
        <p className="font-display text-3xl text-ink">Prendre rendez-vous</p>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Réservez une séance au cabinet ou en téléconsultation, directement sur
          Doctolib.
        </p>
        <div className="mt-8 flex justify-center">
          <DoctolibButton variant="hero" />
        </div>
      </section>
      <Faq items={FAQ.accompagnement} />
    </main>
  );
}
