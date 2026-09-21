import { SITE } from "@/lib/site";
import { LazyMap } from "@/components/LazyMap";

export function MapSection() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
          Accès
        </p>
        <h2 className="font-display mt-3 text-center text-4xl text-ink md:text-5xl">
          Cabinet à Saint-Jean
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center leading-relaxed text-muted">
          {SITE.address.street}, {SITE.address.city}, près de Toulouse
          <br />
          {SITE.access}
        </p>
        <LazyMap />
      </div>
    </section>
  );
}
