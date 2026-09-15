import Image from "next/image";
import { LaptopIcon, PinIcon } from "@/components/Icons";
import { SITE } from "@/lib/site";

export function Cabinet({ hideIntro = false }: { hideIntro?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-cream py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_24px_60px_rgba(58,55,47,0.12)]">
          <Image
            src="/room.jpg"
            alt="Espace d'accueil du cabinet, fauteuil et lumière douce"
            fill
            className="object-cover object-[80%_center]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>

        <div>
          {hideIntro ? null : (
            <>
              <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
                Le cabinet
              </p>
              <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
                Un nouveau lieu à Saint-Jean
              </h2>
            </>
          )}
          <p className={`${hideIntro ? "mt-0" : "mt-5"} leading-relaxed text-muted`}>
            Le cabinet quitte Balma pour s’installer au 22 boulevard des
            Pensées, à Saint-Jean. Vous y trouverez un espace chaleureux, au
            rez-de-chaussée, avec parking gratuit.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 rounded-3xl bg-ivory p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage text-white">
                <PinIcon />
              </span>
              <div>
                <p className="font-medium text-ink">Consultations au cabinet</p>
                <p className="text-muted">
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}
                </p>
                <p className="mt-1 text-sm text-sage-dark">{SITE.access}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl bg-ivory p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                <LaptopIcon className="h-7 w-7" />
              </span>
              <div>
                <p className="font-medium text-ink">Consultations en visio</p>
                <p className="text-muted">
                  Première séance et suivis sont également possibles à
                  distance, selon vos besoins et votre rythme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
