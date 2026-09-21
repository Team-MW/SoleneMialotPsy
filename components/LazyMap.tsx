"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";

export function LazyMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-10 overflow-hidden rounded-[2rem] border border-sand bg-ivory shadow-[0_12px_40px_rgba(58,55,47,0.06)]"
    >
      {show ? (
        <iframe
          title="Carte du cabinet, 22 boulevard des Pensées à Saint-Jean"
          src={SITE.address.embed}
          className="h-[28rem] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <a
          href={SITE.address.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[28rem] w-full flex-col items-center justify-center gap-3 bg-sand/40 text-center transition hover:bg-sand/60"
        >
          <span className="font-display text-2xl text-ink">Voir sur Google Maps</span>
          <span className="max-w-sm px-6 text-sm text-muted">
            {SITE.address.street}, {SITE.address.city}
          </span>
        </a>
      )}
    </div>
  );
}
