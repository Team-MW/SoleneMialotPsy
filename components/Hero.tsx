import Image from "next/image";
import { OliveBranch, OliveSprig, SageBlob } from "@/components/Botanical";
import { DoctolibButton } from "@/components/DoctolibButton";
import {
  ArrowCurve,
  EyeIcon,
  HeartIcon,
  LaptopIcon,
  LotusIcon,
  PinIcon,
} from "@/components/Icons";
import { SITE } from "@/lib/site";

function CabinetPhoto({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <Image
        src="/room.jpg"
        alt="Espace d'accueil du cabinet, fauteuil et lumière douce"
        fill
        priority
        className="object-cover object-[72%_42%]"
        sizes="(min-width: 1024px) 48vw, 100vw"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden bg-cream pt-[4.6rem]"
    >
      <div className="pointer-events-none absolute -left-6 top-20 z-20 w-36 sway md:w-48 lg:w-56">
        <OliveBranch />
      </div>
      <div className="pointer-events-none absolute -bottom-24 -left-16 z-0 w-[24rem] opacity-90">
        <SageBlob />
      </div>
      <div className="pointer-events-none absolute bottom-6 left-4 z-20 w-32 sway md:left-10 md:w-40">
        <OliveBranch className="rotate-12" />
      </div>

      <div className="relative h-56 sm:h-72 lg:hidden">
        <CabinetPhoto className="absolute inset-0 rounded-b-[2.5rem]" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cream to-transparent" />
      </div>

      <div className="mx-auto grid max-w-[90rem] items-stretch lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.72fr)]">
        <div className="relative z-10 flex flex-col items-center px-5 pb-12 pt-6 text-center sm:px-10 lg:px-12 lg:pb-12 lg:pt-16">
          <p className="font-hand mb-1 text-2xl text-gold-deep sm:absolute sm:right-8 sm:top-14 sm:rotate-[-8deg] lg:right-4">
            Bienvenue
            <HeartIcon className="ml-1 inline h-4 w-4 align-[-2px] text-gold" />
          </p>

          <h1 className="font-script mt-4 text-[3.6rem] leading-[0.88] text-ink sm:mt-8 sm:text-7xl xl:text-[5.6rem]">
            {SITE.name}
          </h1>
          <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.42em] text-ink sm:text-[11px]">
            {SITE.role}
          </p>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">
            {SITE.tagline}
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/80">
            Un espace pour déposer ce qui pèse, comprendre ce qui se joue et
            avancer à votre rythme.
          </p>
          <OliveSprig className="mt-3 h-8 w-16" />

          <p className="mt-8 text-lg text-ink">Cabinet à Saint-Jean</p>

          <a
            href={SITE.address.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="brush-pill mt-3 inline-flex max-w-full items-center gap-3 bg-sage px-6 py-3.5 text-left text-white shadow-[0_8px_24px_rgba(90,102,76,0.18)] transition hover:bg-sage-dark sm:px-8"
          >
            <PinIcon className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
            <span>
              <span className="block font-display text-lg leading-tight sm:text-2xl">
                {SITE.address.street}
              </span>
              <span className="block font-display text-lg leading-tight sm:text-2xl">
                {SITE.address.city}
              </span>
            </span>
          </a>

          <p className="mt-3 flex items-center gap-2 text-sm italic text-muted">
            <ArrowCurve className="h-8 w-10 text-sage-dark" />
            ({SITE.address.note})
          </p>

          <div className="mt-8 flex w-full max-w-md items-start justify-center gap-6 sm:gap-10">
            <div className="flex flex-1 flex-col items-center">
              <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-sage/30 bg-white/70 text-sage-deep">
                <EyeIcon />
              </span>
              <p className="mt-2 font-display text-base leading-tight text-ink sm:text-lg">
                Thérapie
                <br />
                EMDR
              </p>
            </div>
            <span className="mt-3 h-14 w-px bg-gold/80" />
            <div className="flex flex-1 flex-col items-center">
              <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-gold/35 bg-white/70 text-gold-deep">
                <LotusIcon />
              </span>
              <p className="mt-2 font-display text-base leading-tight text-ink sm:text-lg">
                Hypnose
                <br />
                ericksonienne
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-ink">
            <p className="font-hand text-[1.65rem] leading-tight sm:text-3xl">
              Consultations au cabinet
              <br />
              et en téléconsultation
            </p>
            <LaptopIcon className="h-11 w-11 text-sage-deep sm:h-12 sm:w-12" />
          </div>

          <div className="relative mt-8">
            <span className="absolute -left-8 top-2 text-lg text-gold">✦</span>
            <span className="absolute -right-8 bottom-8 text-lg text-gold">✦</span>
            <DoctolibButton variant="hero" />
          </div>

          <p className="font-hand mt-8 flex items-center gap-2 text-2xl text-ink">
            Merci pour votre confiance
            <HeartIcon className="h-4 w-4 text-gold" />
          </p>
        </div>

        <div className="relative hidden min-h-full lg:block">
          <CabinetPhoto className="absolute inset-y-0 right-0 left-0 rounded-l-[46%]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent" />
        </div>
      </div>
    </section>
  );
}
