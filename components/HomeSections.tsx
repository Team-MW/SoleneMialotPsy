import Link from "next/link";
import { DoctolibButton } from "@/components/DoctolibButton";
import { EyeIcon, LaptopIcon, PinIcon } from "@/components/Icons";
import { Practices } from "@/components/Practices";
import { SITE } from "@/lib/site";

const steps = [
  {
    n: "01",
    title: "Prendre rendez-vous",
    text: "Réservez en ligne sur Doctolib, pour une première séance ou un suivi, au cabinet ou en visio.",
  },
  {
    n: "02",
    title: "Un premier échange",
    text: "Nous prenons le temps de comprendre votre demande, votre rythme et ce que vous souhaitez transformer.",
  },
  {
    n: "03",
    title: "Un accompagnement",
    text: "Selon vos besoins, le travail peut s’appuyer sur la thérapie EMDR, l’hypnose ericksonienne et un espace de parole.",
  },
];

const motives = [
  "Troubles anxieux",
  "Traumatismes",
  "Blocages émotionnels",
  "Addictions",
  "Deuil",
  "Mieux se connaître",
];

export function HomeSections() {
  return (
    <>
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
            Accueil
          </p>
          <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
            Un espace de parole, en toute bienveillance
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            Psychologue clinicienne, je vous reçois dans un cadre chaleureux
            pour aborder vos difficultés, mieux comprendre votre fonctionnement
            psychique et réfléchir à l’évolution que vous souhaitez donner à
            votre vie. Les consultations ont lieu au cabinet, à Saint-Jean, ou
            en visio.
          </p>
        </div>
      </section>

      <Practices />

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
            Déroulement
          </p>
          <h2 className="font-display mt-3 text-center text-4xl text-ink md:text-5xl">
            Comment se passe une séance
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.n}
                className="rounded-[2rem] border border-sand bg-ivory p-8"
              >
                <p className="font-display text-3xl text-gold">{step.n}</p>
                <h3 className="font-display mt-3 text-2xl text-ink">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
            Motifs
          </p>
          <h2 className="font-display mt-3 text-center text-4xl text-ink md:text-5xl">
            Quand consulter
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-muted">
            Vous pouvez me rencontrer pour un mal-être, un événement difficile
            ou simplement pour mieux vous comprendre. Parmi les motifs
            fréquents&nbsp;:
          </p>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {motives.map((item) => (
              <li
                key={item}
                className="rounded-full border border-sand bg-cream px-5 py-2.5 text-sm text-sage-deep"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-12 flex justify-center">
            <Link
              href="/accompagnement"
              className="rounded-full bg-sage px-6 py-3 text-sm font-medium text-white transition hover:bg-sage-dark"
            >
              Découvrir l’accompagnement
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
              Nouveau lieu
            </p>
            <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
              Le cabinet a déménagé
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Retrouvez-moi désormais au {SITE.address.street}, {SITE.address.city}
              — et non plus à Balma. Accès de plain-pied, parking gratuit, et
              consultations possibles en visio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/cabinet"
                className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-medium text-white transition hover:bg-sage-dark"
              >
                <PinIcon className="h-4 w-4" />
                Voir le cabinet
              </Link>
              <Link
                href="/infos"
                className="inline-flex items-center gap-2 rounded-full border border-sand bg-ivory px-5 py-3 text-sm font-medium text-ink transition hover:bg-white"
              >
                Horaires et tarifs
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-3xl bg-ivory p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage text-white">
                <PinIcon />
              </span>
              <div>
                <p className="font-medium text-ink">Au cabinet</p>
                <p className="text-muted">
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-3xl bg-ivory p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                <LaptopIcon className="h-7 w-7" />
              </span>
              <div>
                <p className="font-medium text-ink">En visio</p>
                <p className="text-muted">
                  Première séance et suivis à distance, selon vos besoins.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-3xl bg-ivory p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-dark text-white">
                <EyeIcon className="h-7 w-7" />
              </span>
              <div>
                <p className="font-medium text-ink">EMDR et hypnose</p>
                <p className="text-muted">
                  Deux approches pour accompagner le trauma, l’anxiété et le
                  changement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sage px-6 py-20 text-center text-white">
        <h2 className="font-display text-4xl md:text-5xl">
          Prendre rendez-vous
        </h2>
        <p className="mx-auto mt-4 max-w-md text-white/90">
          Les séances se réservent en ligne, au cabinet ou en visio.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="rounded-[1.8rem] bg-white px-5 py-4">
            <DoctolibButton variant="hero" />
          </div>
        </div>
      </section>
    </>
  );
}
