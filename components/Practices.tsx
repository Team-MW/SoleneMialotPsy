import { EyeIcon, LotusIcon } from "@/components/Icons";

const practices = [
  {
    title: "Psychothérapie",
    icon: LotusIcon,
    tone: "gold" as const,
    text: "Un espace d’écoute et de réflexion pour mieux comprendre vos difficultés, vos émotions, vos relations et certains fonctionnements qui peuvent se répéter.",
  },
  {
    title: "EMDR",
    icon: EyeIcon,
    tone: "sage" as const,
    text: "L’EMDR (Eye Movement Desensitization and Reprocessing) est une approche thérapeutique permettant de travailler sur les conséquences psychologiques d’expériences difficiles ou traumatiques. Certains événements peuvent continuer à provoquer des émotions, des sensations ou des réactions importantes longtemps après leur survenue. L’EMDR vise à favoriser le retraitement de ces expériences afin qu’elles puissent progressivement être intégrées d’une manière plus apaisée. Cette approche peut notamment être proposée lorsqu’un événement passé continue à avoir un impact sur votre vie actuelle.",
  },
  {
    title: "Hypnose ericksonienne",
    icon: LotusIcon,
    tone: "gold" as const,
    text: "L’hypnose ericksonienne est une approche thérapeutique qui s’appuie sur les ressources et les capacités naturelles de changement de chaque personne. Contrairement à l’image parfois véhiculée par l’hypnose de spectacle, l’hypnose thérapeutique ne consiste pas à perdre le contrôle. Vous restez acteur ou actrice de la séance et conscient(e) de ce qui se passe. L’hypnose peut notamment être intégrée à un accompagnement psychologique autour de l’anxiété, du stress, des émotions, de la confiance en soi ou de certains changements que vous souhaitez mettre en place.",
  },
  {
    title: "Thérapie des schémas",
    icon: EyeIcon,
    tone: "sage" as const,
    text: "La thérapie des schémas permet de mieux comprendre certains fonctionnements qui se répètent dans notre vie, notamment dans nos relations, notre rapport à nous-même ou notre manière de réagir face aux situations difficiles. Elle permet notamment d’identifier des schémas construits au cours de notre histoire et de travailler progressivement sur les besoins qui se trouvent derrière ces fonctionnements.",
  },
];

export function Practices({ hideIntro = false }: { hideIntro?: boolean }) {
  return (
    <section className="relative bg-ivory py-24">
      <div className="mx-auto max-w-5xl px-6">
        {hideIntro ? null : (
          <>
            <p className="text-center text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
              Mon accompagnement
            </p>
            <h2 className="font-display mt-3 text-center text-4xl text-ink md:text-5xl">
              Un accompagnement psychologique personnalisé
            </h2>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center leading-relaxed text-muted">
              <p>
                Chaque personne arrive avec son histoire, ses expériences et ses
                propres ressources.
              </p>
              <p>
                Je ne considère pas qu’une méthode unique puisse convenir à tout
                le monde. L’accompagnement est donc construit progressivement en
                fonction de votre demande et de vos besoins.
              </p>
              <p>
                Les premières consultations permettent de faire connaissance, de
                comprendre ce qui vous amène et de définir ensemble les
                objectifs du travail thérapeutique.
              </p>
              <p>
                Selon votre situation, différentes approches peuvent être
                proposées ou associées.
              </p>
            </div>
          </>
        )}

        <div
          className={
            hideIntro
              ? "mt-0 grid gap-6 md:grid-cols-2"
              : "mt-14 grid gap-6 md:grid-cols-2"
          }
        >
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
      </div>
    </section>
  );
}
