import { CalendarIcon } from "@/components/Icons";
import { DoctolibButton } from "@/components/DoctolibButton";
import { SITE } from "@/lib/site";

export function Infos({ hideIntro = false }: { hideIntro?: boolean }) {
  return (
    <section className="bg-ivory py-24">
      <div className="mx-auto max-w-6xl px-6">
        {hideIntro ? null : (
          <>
            <p className="text-center text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
              Infos pratiques
            </p>
            <h2 className="font-display mt-3 text-center text-4xl text-ink md:text-5xl">
              Horaires, tarifs et rendez-vous
            </h2>
          </>
        )}

        <div className={`${hideIntro ? "mt-0" : "mt-14"} grid gap-6 md:grid-cols-2`}>
          <article className="rounded-[2rem] border border-sand bg-cream/80 p-8">
            <h3 className="font-display text-2xl text-ink">Horaires</h3>
            <ul className="mt-5 space-y-3 text-muted">
              {SITE.hours.map((item) => (
                <li
                  key={item.day}
                  className="flex items-baseline justify-between gap-4 border-b border-sand/80 pb-3 last:border-0"
                >
                  <span>{item.day}</span>
                  <span className="text-ink">{item.time}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-sand bg-cream/80 p-8">
            <h3 className="font-display text-2xl text-ink">Tarifs</h3>
            <p className="font-display mt-5 text-5xl text-sage-deep">
              {SITE.price}
            </p>
            <p className="mt-2 text-muted">
              Première consultation et séances de suivi, au cabinet comme en
              visio.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Les consultations ne sont pas prises en charge par l’Assurance
              Maladie. Certaines mutuelles peuvent proposer un remboursement.
            </p>
            <p className="mt-4 text-sm text-sage-dark">
              Paiement : {SITE.payment}
            </p>
          </article>
        </div>

        <article className="relative mt-6 overflow-hidden rounded-[2rem] bg-sage p-8 text-center text-white md:p-12">
          <span className="absolute -right-6 -top-4 text-7xl text-white/10">
            ✦
          </span>
          <h3 className="font-display text-3xl">Réserver une séance</h3>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            Les rendez-vous se prennent en ligne, en quelques clics, pour une
            séance au cabinet ou en visio.
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
