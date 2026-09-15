import type { FaqItem } from "@/lib/site";

export function Faq({ items }: { items: readonly FaqItem[] }) {
  return (
    <section className="bg-ivory py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
          Questions fréquentes
        </p>
        <h2 className="font-display mt-3 text-center text-4xl text-ink md:text-5xl">
          FAQ
        </h2>

        <div className="mt-10 divide-y divide-sand overflow-hidden rounded-[2rem] border border-sand bg-cream/70">
          {items.map((item) => (
            <details key={item.question} className="group px-6 py-1">
              <summary className="cursor-pointer list-none py-5 font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sage/30 text-sage-deep transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="pb-5 leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
