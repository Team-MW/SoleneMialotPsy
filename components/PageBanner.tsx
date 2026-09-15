import { OliveSprig } from "@/components/Botanical";

export function PageBanner({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <section className="bg-cream px-6 pb-14 pt-28 text-center">
      <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
        {kicker}
      </p>
      <h1 className="font-display mt-3 text-4xl text-ink md:text-6xl">{title}</h1>
      <OliveSprig className="mx-auto mt-4 h-8 w-16" />
      <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">{text}</p>
    </section>
  );
}
