import Image from "next/image";
import { DoctolibButton } from "@/components/DoctolibButton";
import { MOTIVES, SITE } from "@/lib/site";

export function HomeSections() {
  return (
    <>
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
            Accueil
          </p>
          <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
            Un espace pour déposer ce qui pèse, comprendre ce qui se joue et
            avancer à votre rythme
          </h2>
          <div className="mt-8 space-y-5 text-left leading-relaxed text-muted md:text-center">
            <p>
              Il y a des moments dans la vie où l’on ne parvient plus à avancer
              comme avant. Une période difficile, une relation qui fait
              souffrir, des émotions devenues trop envahissantes, un événement
              du passé qui continue de peser ou simplement le sentiment de ne
              plus se sentir pleinement soi-même.
            </p>
            <p>
              Consulter un psychologue permet de bénéficier d’un espace
              d’écoute et de réflexion, confidentiel et sans jugement, pour
              prendre du recul sur ce que vous vivez et retrouver
              progressivement davantage d’apaisement.
            </p>
            <p>
              Je vous accompagne dans cette démarche en tenant compte de votre
              histoire, de votre personnalité et de vos besoins.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
            Motifs
          </p>
          <h2 className="font-display mt-3 text-center text-4xl text-ink md:text-5xl">
            Pourquoi consulter&nbsp;?
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            Il n’est pas nécessaire d’attendre que la situation devienne trop
            difficile pour demander de l’aide.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Vous pouvez consulter lorsque vous traversez une période de
            changement, lorsque certaines difficultés se répètent ou lorsque
            vous ressentez simplement le besoin d’être accompagné(e).
          </p>
          <p className="mt-6 font-medium text-ink">
            Les accompagnements peuvent notamment concerner&nbsp;:
          </p>
          <ul className="mt-4 space-y-3">
            {MOTIVES.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                <span>{item}&nbsp;;</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
            Approche
          </p>
          <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
            Une thérapie adaptée à chacun
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            Chaque personne arrive en consultation avec son histoire et ses
            propres besoins. Il me semble donc essentiel de ne pas proposer une
            thérapie «&nbsp;toute faite&nbsp;», mais de construire
            l’accompagnement avec vous.
          </p>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_24px_60px_rgba(58,55,47,0.12)]">
            <Image
              src="/gallery-2.jpg"
              alt="Cabinet de psychologie — espace de consultation chaleureux"
              fill
              quality={75}
              loading="lazy"
              className="object-cover object-center"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
              Le cabinet
            </p>
            <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
              Un espace pour vous
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                Le cabinet est pensé comme un espace chaleureux, calme et
                confidentiel, dans lequel chacun peut prendre le temps de se
                poser et de s’exprimer librement.
              </p>
              <p>
                Les séances se déroulent dans un cadre bienveillant, fondé sur
                l’écoute, le respect et l’absence de jugement.
              </p>
              <p>
                Les consultations sont également proposées en téléconsultation,
                lorsque ce format correspond davantage à votre situation ou à
                votre organisation.
              </p>
              <p>
                Mon approche est intégrative et s’appuie notamment sur l’EMDR,
                la thérapie des schémas et l’hypnose ericksonienne.
              </p>
            </div>
            <p className="mt-6 text-sm text-sage-dark">
              {SITE.address.street}, {SITE.address.city}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sage px-6 py-20 text-center text-white">
        <h2 className="font-display text-4xl md:text-5xl">
          Prendre rendez-vous
        </h2>
        <p className="mx-auto mt-4 max-w-md text-white/90">
          Réservez une séance au cabinet ou en téléconsultation.
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
