import {
  FloatingLeaf,
  GrassTuft,
  OliveBranch,
  OliveSprig,
  SageBlob,
} from "@/components/Botanical";
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

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden bg-cream pt-[4.6rem]"
    >
      {/* Branches & herbes — gauche */}
      <div className="pointer-events-none absolute -left-6 top-16 z-20 w-36 sway md:w-48 lg:top-20 lg:w-56">
        <OliveBranch />
      </div>
      <div className="pointer-events-none absolute -left-2 top-[42%] z-10 w-24 opacity-80 sway-delayed sm:w-28 md:left-2">
        <OliveBranch className="rotate-[-8deg]" />
      </div>
      <div className="pointer-events-none absolute bottom-4 left-2 z-20 w-28 sway-soft md:left-8 md:w-36">
        <GrassTuft />
      </div>
      <div className="pointer-events-none absolute -bottom-24 -left-16 z-0 w-[24rem] opacity-90">
        <SageBlob />
      </div>

      {/* Branches & herbes — droite */}
      <div className="pointer-events-none absolute -right-4 top-24 z-10 w-32 sway-delayed opacity-90 sm:w-40 lg:top-28 lg:w-52">
        <OliveBranch className="-scale-x-100" />
      </div>
      <div className="pointer-events-none absolute right-0 top-[48%] z-10 hidden w-28 opacity-75 sway lg:block xl:w-36">
        <OliveBranch className="-scale-x-100 rotate-6" />
      </div>
      <div className="pointer-events-none absolute bottom-6 right-2 z-20 w-28 sway-soft md:right-10 md:w-40">
        <GrassTuft className="-scale-x-100" />
      </div>
      <div className="pointer-events-none absolute -bottom-20 -right-10 z-0 w-[20rem] opacity-70">
        <SageBlob />
      </div>

      {/* Feuilles flottantes */}
      <div className="pointer-events-none absolute left-[18%] top-[28%] z-10 hidden drift md:block">
        <FloatingLeaf className="h-10 w-7 opacity-70" />
      </div>
      <div
        className="pointer-events-none absolute right-[20%] top-[36%] z-10 hidden drift lg:block"
        style={{ animationDelay: "1.4s" }}
      >
        <FloatingLeaf className="h-8 w-6 rotate-12 opacity-60" />
      </div>
      <div
        className="pointer-events-none absolute bottom-[22%] left-[22%] z-10 drift"
        style={{ animationDelay: "2.2s" }}
      >
        <FloatingLeaf className="h-7 w-5 -rotate-12 opacity-50" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl justify-center px-5 py-12 text-center sm:px-10 lg:min-h-[calc(100svh-4.6rem)] lg:items-center lg:py-16">
        <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center">
          <p className="font-hand fade-up mb-1 text-2xl text-gold-deep">
            Bienvenue
            <HeartIcon className="ml-1 inline h-4 w-4 align-[-2px] text-gold" />
          </p>

          <h1 className="font-script fade-up-delay mt-2 w-full text-center text-[3.6rem] leading-[0.88] text-ink sm:text-7xl xl:text-[5.4rem]">
            {SITE.name}
          </h1>
          <p className="fade-up-delay mt-4 w-full text-center text-[10px] font-medium uppercase tracking-[0.42em] text-ink sm:text-[11px]">
            {SITE.role}
          </p>
          <p className="fade-up-delay-2 mt-3 w-full text-center text-[15px] leading-relaxed text-balance text-muted">
            {SITE.tagline}
          </p>
          <p className="fade-up-delay-2 mt-4 w-full max-w-md text-center text-[15px] leading-relaxed text-balance text-ink/80">
            Un espace pour déposer ce qui pèse, comprendre ce qui se joue et
            avancer à votre rythme.
          </p>
          <OliveSprig className="fade-up-delay-3 mt-3 h-8 w-16 shrink-0" />

          <p className="fade-up-delay-3 mt-8 w-full text-center text-lg text-ink">
            Cabinet à Saint-Jean
          </p>

          <a
            href={SITE.address.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="brush-pill fade-up-delay-3 mt-3 inline-flex max-w-full items-center justify-center gap-3 bg-sage px-6 py-3.5 text-center text-white shadow-[0_8px_24px_rgba(90,102,76,0.18)] transition hover:bg-sage-dark sm:px-8"
          >
            <PinIcon className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
            <span className="text-center">
              <span className="block font-display text-lg leading-tight sm:text-2xl">
                {SITE.address.street}
              </span>
              <span className="block font-display text-lg leading-tight sm:text-2xl">
                {SITE.address.city}
              </span>
            </span>
          </a>

          <p className="mt-3 flex w-full items-center justify-center gap-2 text-sm italic text-muted">
            <ArrowCurve className="h-8 w-10 text-sage-dark" />
            ({SITE.address.note})
          </p>

          <div className="mt-8 flex w-full max-w-md items-start justify-center gap-6 sm:gap-10">
            <div className="flex flex-1 flex-col items-center text-center">
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
            <div className="flex flex-1 flex-col items-center text-center">
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

          <div className="mt-8 flex w-full items-center justify-center gap-3 text-ink">
            <p className="font-hand text-center text-[1.65rem] leading-tight sm:text-3xl">
              Consultations au cabinet
              <br />
              et en téléconsultation
            </p>
            <LaptopIcon className="h-11 w-11 shrink-0 text-sage-deep sm:h-12 sm:w-12" />
          </div>

          <div className="relative mt-8">
            <span className="absolute -left-8 top-2 text-lg text-gold">✦</span>
            <span className="absolute -right-8 bottom-8 text-lg text-gold">✦</span>
            <DoctolibButton variant="hero" />
          </div>

          <p className="font-hand mt-8 flex items-center justify-center gap-2 text-2xl text-ink">
            Merci pour votre confiance
            <HeartIcon className="h-4 w-4 text-gold" />
          </p>
        </div>
      </div>
    </section>
  );
}
