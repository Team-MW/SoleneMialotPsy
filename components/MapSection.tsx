import { SITE } from "@/lib/site";

export function MapSection() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
          Accès
        </p>
        <h2 className="font-display mt-3 text-center text-4xl text-ink md:text-5xl">
          Comment venir
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center leading-relaxed text-muted">
          {SITE.address.street}, {SITE.address.city}
          <br />
          {SITE.access}
        </p>
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-sand bg-ivory shadow-[0_12px_40px_rgba(58,55,47,0.06)]">
          <iframe
            title="Carte du cabinet, 22 boulevard des Pensées à Saint-Jean"
            src={SITE.address.embed}
            className="h-[28rem] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
