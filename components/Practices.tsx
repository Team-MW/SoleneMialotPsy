import { EyeIcon, LotusIcon } from "@/components/Icons";

const practices = [
  {
    title: "Thérapie EMDR",
    icon: EyeIcon,
    tone: "sage" as const,
    text: "Praticienne EMDR Europe, j’accompagne le traitement des souvenirs traumatiques, du stress post-traumatique et des blocages émotionnels. Les mouvements oculaires aident le psychisme à retraiter ce qui reste figé, pour retrouver plus de liberté intérieure.",
  },
  {
    title: "Hypnose ericksonienne",
    icon: LotusIcon,
    tone: "gold" as const,
    text: "L’hypnose ericksonienne s’appuie sur vos ressources inconscientes. Dans un cadre respectueux et collaboratif, elle permet d’apaiser, de transformer des schémas limitants et d’avancer à votre rythme.",
  },
];

export function Practices({ hideIntro = false }: { hideIntro?: boolean }) {
  return (
    <section className="relative bg-ivory py-24">
      <div className="mx-auto max-w-5xl px-6">
        {hideIntro ? null : (
          <>
            <p className="text-center text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
              Accompagnement
            </p>
            <h2 className="font-display mt-3 text-center text-4xl text-ink md:text-5xl">
              Deux approches, un même cadre bienveillant
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-muted">
              Je vous reçois pour un espace de parole et de soin, afin d’aborder vos
              difficultés, mieux comprendre votre fonctionnement psychique et
              réfléchir à l’évolution que vous souhaitez donner à votre vie.
            </p>
          </>
        )}

        <div className={hideIntro ? "mt-0 grid gap-6 md:grid-cols-2" : "mt-14 grid gap-6 md:grid-cols-2"}>
          {practices.map((practice) => {
            const Icon = practice.icon;
            const isSage = practice.tone === "sage";
            return (
              <article
                key={practice.title}
                className="rounded-[2rem] border border-sand bg-cream/70 p-8 shadow-[0_12px_40px_rgba(58,55,47,0.04)]"
              >
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-full border ${
                    isSage
                      ? "border-sage/25 bg-white text-sage-deep"
                      : "border-gold/30 bg-white text-gold-deep"
                  }`}
                >
                  <Icon />
                </span>
                <h3 className="font-display mt-6 text-3xl text-ink">
                  {practice.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{practice.text}</p>
              </article>
            );
          })}
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "Psychologie clinique",
            "Psychotraumatologie",
            "Troubles anxieux",
            "Addictologie",
            "Entretien motivationnel",
          ].map((item) => (
            <li
              key={item}
              className="rounded-full border border-sand bg-white px-4 py-2 text-sm text-sage-deep"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
