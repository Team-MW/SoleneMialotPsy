import { CalendarIcon } from "@/components/Icons";
import { DoctolibButton } from "@/components/DoctolibButton";
import { SITE } from "@/lib/site";

const modalities = [
  {
    symbol: "📍",
    title: "Cabinet à Saint-Jean",
    text: `${SITE.address.street}, ${SITE.address.city}, près de Toulouse`,
  },
  {
    symbol: "💻",
    title: "Consultations",
    text: "Au cabinet et en téléconsultation",
  },
  {
    symbol: "👤",
    title: "Public",
    text: SITE.public,
  },
  {
    symbol: "🕐",
    title: "Sur rendez-vous",
    text: "Prise de rendez-vous en ligne via Doctolib",
  },
  {
    symbol: "💶",
    title: "Consultation",
    text: `${SITE.price} – ${SITE.duration}`,
  },
  {
    symbol: "💳",
    title: "Moyens de paiement acceptés",
    text: SITE.payment,
  },
  {
    symbol: "📅",
    title: "Prise de rendez-vous",
    text: "En ligne via Doctolib",
  },
  {
    symbol: "⏱",
    title: "Report ou annulation de séance",
    text: "Veuillez respecter un délai de 24 h. Passé ce délai, la séance est due.",
  },
];

export function Infos({ hideIntro = false }: { hideIntro?: boolean }) {
  return (
    <section className="bg-ivory py-24">
      <div className="mx-auto max-w-6xl px-6">
        {hideIntro ? null : (
          <>
            <p className="text-center text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
              Tarifs et modalités
            </p>
            <h2 className="font-display mt-3 text-center text-4xl text-ink md:text-5xl">
              Vous souhaitez commencer une thérapie&nbsp;?
            </h2>
          </>
        )}

        <div className={`${hideIntro ? "mt-0" : "mt-10"} mx-auto max-w-3xl space-y-4 leading-relaxed text-muted`}>
          <p>
            Faire le premier pas n’est pas toujours évident.
          </p>
          <p>
            Vous pouvez simplement commencer par une première consultation afin
            de présenter ce que vous traversez, poser vos questions et voir
            ensemble si l’accompagnement proposé correspond à vos besoins.
          </p>
          <p>
            Vous n’avez pas besoin de savoir exactement ce qui ne va pas pour
            prendre rendez-vous.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <DoctolibButton variant="section" />
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {modalities.map((item) => (
            <article
              key={item.title}
              className="flex gap-4 rounded-[2rem] border border-sand bg-cream/80 p-6"
            >
              <span className="text-2xl" aria-hidden>
                {item.symbol}
              </span>
              <div>
                <h3 className="font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <article className="mt-6 rounded-[2rem] border border-sand bg-cream/80 p-8">
          <p className="font-display text-5xl text-sage-deep">{SITE.price}</p>
          <p className="mt-2 text-muted">
            Consultation — {SITE.duration}, au cabinet comme en
            téléconsultation.
          </p>
          <p className="mt-5 leading-relaxed text-muted">
            Les consultations psychologiques ne sont pas prises en charge par
            l’Assurance Maladie. Certaines complémentaires santé proposent
            toutefois une participation aux frais de consultation. Il est
            conseillé de vous renseigner directement auprès de votre mutuelle.
          </p>
        </article>

        <article className="relative mt-6 overflow-hidden rounded-[2rem] bg-sage p-8 text-center text-white md:p-12">
          <span className="absolute -right-6 -top-4 text-7xl text-white/10">
            ✦
          </span>
          <h3 className="font-display text-3xl">Prendre rendez-vous</h3>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            Les rendez-vous se prennent en ligne, en quelques clics, pour une
            séance au cabinet ou en téléconsultation.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="rounded-[1.8rem] bg-white px-5 py-4">
              <DoctolibButton variant="hero" />
            </div>
          </div>
          <p className="mt-4 inline-flex items-center justify-center gap-2 text-sm text-white/80">
            <CalendarIcon className="h-5 w-5" />
            Ouverture de la page Doctolib dans un nouvel onglet
          </p>
        </article>
      </div>
    </section>
  );
}
