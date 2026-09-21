import Image from "next/image";
import { DoctolibButton } from "@/components/DoctolibButton";
import { FORMATIONS } from "@/lib/site";

export function Cabinet({ hideIntro = false }: { hideIntro?: boolean }) {
  return (
    <>
      <section className="relative overflow-hidden bg-cream py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_24px_60px_rgba(58,55,47,0.12)]">
            <Image
              src="/flyer.jpg"
              alt="Solène Mialot, psychologue clinicienne"
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>

          <div>
            {hideIntro ? null : (
              <>
                <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
                  Qui suis-je
                </p>
                <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
                  Une psychologue à l’écoute de votre histoire
                </h2>
              </>
            )}
            <div
              className={`${hideIntro ? "mt-0" : "mt-5"} space-y-4 leading-relaxed text-muted`}
            >
              <p>
                Je suis Solène Mialot, psychologue clinicienne à Saint-Jean. Je
                reçois les adultes au cabinet à Saint-Jean et en
                téléconsultation.
              </p>
              <p>
                Mon parcours m’a progressivement amenée à m’intéresser à la
                manière dont nos expériences, notre histoire personnelle et nos
                relations peuvent influencer notre façon de penser, de ressentir
                et d’agir.
              </p>
              <p>
                Je considère que chaque personne est unique et qu’une difficulté
                ne peut pas être comprise indépendamment de son histoire.
                Derrière une anxiété, une perte de confiance en soi, une
                difficulté relationnelle ou un mal-être peuvent se trouver des
                expériences, des besoins ou des mécanismes parfois anciens, qui
                méritent d’être compris avant de pouvoir évoluer.
              </p>
              <p>
                Mon rôle est de vous accompagner dans cette compréhension, dans
                un cadre bienveillant, confidentiel et sans jugement, afin que
                vous puissiez progressivement prendre du recul, mettre des mots
                sur ce que vous vivez et avancer à votre rythme.
              </p>
              <p>
                Diplômée d’un Master de Psychologie, spécialité Addictologie,
                j’ai choisi de compléter ma formation universitaire par
                plusieurs formations thérapeutiques&nbsp;: EMDR, hypnose
                ericksonienne et thérapie des schémas. Ces différentes approches
                peuvent être utilisées seules ou de manière complémentaire, en
                fonction de votre situation et de ce qui vous sera le plus
                utile.
              </p>
              <p>
                Je considère la formation continue comme une partie essentielle
                de ma pratique et continue régulièrement à approfondir mes
                connaissances afin de faire évoluer mon accompagnement.
              </p>
              <p>
                Ma pratique repose sur une approche humaine, intégrative et
                individualisée, dans laquelle la relation thérapeutique occupe
                une place centrale.
              </p>
              <p>
                Je veille à proposer un espace dans lequel vous pouvez vous
                exprimer librement, à votre rythme, dans un cadre respectueux et
                sans jugement.
              </p>
            </div>

            <div className="mt-10">
              <DoctolibButton variant="section" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
            Parcours
          </p>
          <h2 className="font-display mt-3 text-center text-4xl text-ink md:text-5xl">
            Mes formations
          </h2>
          <ul className="mt-12 space-y-0">
            {FORMATIONS.map((item) => (
              <li
                key={`${item.year}-${item.title}`}
                className="grid gap-2 border-b border-sand py-5 sm:grid-cols-[5rem_1fr] sm:gap-6"
              >
                <span className="font-display text-xl text-sage-deep">
                  {item.year}
                </span>
                <span className="leading-relaxed text-muted">{item.title}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex justify-center">
            <DoctolibButton variant="section" />
          </div>
        </div>
      </section>
    </>
  );
}
