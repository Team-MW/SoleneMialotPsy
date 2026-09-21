import Image from "next/image";
import { SITE } from "@/lib/site";

type Variant = "hero" | "header" | "section";

const sizes = {
  hero: {
    wrap: "inline-flex flex-col items-center gap-3",
    logo: "h-[3.4rem] w-auto rounded-2xl shadow-[0_10px_28px_rgba(0,84,165,0.22)] transition hover:scale-[1.03] sm:h-16",
    label: "text-sm font-medium text-sage-deep",
  },
  header: {
    wrap: "inline-flex items-center gap-2.5 rounded-full bg-white/80 py-1 pl-1 pr-3 shadow-sm ring-1 ring-sand transition hover:bg-white",
    logo: "h-9 w-auto rounded-xl",
    label: "hidden text-sm font-medium text-ink sm:inline",
  },
  section: {
    wrap: "inline-flex items-center gap-3 rounded-[1.4rem] bg-white p-2 pr-5 shadow-[0_10px_28px_rgba(58,55,47,0.08)] ring-1 ring-sand transition hover:-translate-y-0.5",
    logo: "h-12 w-auto rounded-2xl sm:h-14",
    label: "text-sm font-medium text-ink sm:text-base",
  },
};

export function DoctolibButton({ variant = "section" }: { variant?: Variant }) {
  const size = sizes[variant];

  return (
    <a
      href={SITE.doctolib}
      target="_blank"
      rel="noopener noreferrer"
      className={size.wrap}
      aria-label="Prendre rendez-vous sur Doctolib"
    >
      <Image
        src="/doctolib.png"
        alt="Doctolib"
        width={220}
        height={80}
        className={size.logo}
      />
      <span className={size.label}>Prendre rendez-vous</span>
    </a>
  );
}
