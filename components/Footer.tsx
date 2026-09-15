import Link from "next/link";
import { OliveSprig } from "@/components/Botanical";
import { DoctolibButton } from "@/components/DoctolibButton";
import { HeartIcon } from "@/components/Icons";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cream px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <p className="font-script text-5xl text-ink">{SITE.name}</p>
        <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.38em] text-sage-dark">
          {SITE.role}
        </p>
        <OliveSprig className="mt-4 h-8 w-16" />
        <p className="mt-4 text-muted">
          {SITE.address.street}, {SITE.address.city}
        </p>

        <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <DoctolibButton variant="section" />
        </div>

        <p className="font-hand mt-10 flex items-center gap-2 text-3xl text-ink">
          Merci pour votre confiance
          <HeartIcon className="h-4 w-4 text-gold" />
        </p>
        <p className="mt-6 text-xs text-muted">
          © {new Date().getFullYear()} {SITE.name} — Site vitrine
        </p>
      </div>
    </footer>
  );
}
