"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const photos = [
  {
    src: "/gallery-1.jpg",
    alt: "Cabinet de psychologie — espace d'accueil lumineux",
    desktop: { left: "2%", top: "8%", rotate: -7, width: "44%" },
    mobile: { rotate: -3, offsetX: "-6%" },
    delay: 0,
  },
  {
    src: "/gallery-2.jpg",
    alt: "Ambiance chaleureuse du cabinet",
    desktop: { left: "50%", top: "2%", rotate: 5, width: "46%" },
    mobile: { rotate: 2.5, offsetX: "5%" },
    delay: 0.15,
  },
  {
    src: "/gallery-3.jpg",
    alt: "Détail de la décoration intérieure",
    desktop: { left: "6%", top: "48%", rotate: -3.5, width: "42%" },
    mobile: { rotate: -2, offsetX: "-3%" },
    delay: 0.3,
  },
  {
    src: "/gallery-4.jpg",
    alt: "Vue sur l'espace de consultation",
    desktop: { left: "46%", top: "44%", rotate: 6, width: "48%" },
    mobile: { rotate: 3.5, offsetX: "6%" },
    delay: 0.45,
  },
];

export function PhotoGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!stackRef.current) return;
      const rect = stackRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMouse({ x, y });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setMouse({ x: 0, y: 0 });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="gallery-section relative overflow-hidden bg-cream py-24 md:py-36"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, var(--sage) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        {/* Floating sparkles */}
        <div
          className="absolute top-[15%] left-[8%] text-2xl"
          style={{
            color: "var(--gold)",
            opacity: isVisible ? 0.4 : 0,
            transform: isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.5)",
            transition: "all 1.2s ease 0.8s",
          }}
        >
          ✦
        </div>
        <div
          className="absolute top-[20%] right-[12%] text-lg"
          style={{
            color: "var(--sage)",
            opacity: isVisible ? 0.3 : 0,
            transform: isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.5)",
            transition: "all 1.2s ease 1s",
          }}
        >
          ✦
        </div>
        <div
          className="absolute bottom-[25%] right-[6%] text-xl"
          style={{
            color: "var(--gold)",
            opacity: isVisible ? 0.35 : 0,
            transform: isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.5)",
            transition: "all 1.2s ease 1.2s",
          }}
        >
          ✦
        </div>
        <div
          className="absolute bottom-[18%] left-[14%] text-sm"
          style={{
            color: "var(--sage-dark)",
            opacity: isVisible ? 0.25 : 0,
            transform: isVisible ? "translateY(0) rotate(45deg)" : "translateY(15px) rotate(0deg)",
            transition: "all 1.2s ease 1.4s",
          }}
        >
          ✦
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center md:mb-24">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.38em]"
            style={{
              color: "var(--sage-dark)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: "all 0.7s ease 0.1s",
            }}
          >
            Galerie
          </p>
          <h2
            className="font-display mt-3 text-4xl md:text-5xl lg:text-[3.5rem]"
            style={{
              color: "var(--ink)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(18px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            Un cadre pensé pour vous
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl leading-relaxed"
            style={{
              color: "var(--muted)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(14px)",
              transition: "all 0.8s ease 0.35s",
            }}
          >
            Un espace chaleureux et apaisant, pensé pour favoriser le
            lâcher-prise et le travail sur soi.
          </p>
        </div>

        {/* ─── DESKTOP: Overlapping scattered layout ─── */}
        <div
          ref={stackRef}
          className="relative mx-auto hidden aspect-[16/10] max-w-4xl md:block"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {photos.map((photo, i) => {
            const isActive = activeIndex === i;
            const parallaxFactor = (i + 1) * 3;
            const px = mouse.x * parallaxFactor;
            const py = mouse.y * parallaxFactor;

            return (
              <div
                key={photo.src}
                className="absolute cursor-pointer"
                style={{
                  left: photo.desktop.left,
                  top: photo.desktop.top,
                  width: photo.desktop.width,
                  zIndex: isActive ? 20 : photos.length - i,
                  transform: isVisible
                    ? `rotate(${isActive ? 0 : photo.desktop.rotate}deg) scale(${isActive ? 1.06 : 1}) translate(${px}px, ${py}px)`
                    : `rotate(0deg) scale(0.6) translateY(80px)`,
                  opacity: isVisible ? 1 : 0,
                  transition: isActive
                    ? "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease, z-index 0s"
                    : `transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${photo.delay}s, opacity 0.7s ease ${photo.delay}s`,
                  filter: activeIndex !== null && !isActive
                    ? "brightness(0.92) saturate(0.85)"
                    : "brightness(1) saturate(1)",
                }}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Polaroid-style card */}
                <div
                  className="relative overflow-hidden rounded-[1.2rem] p-[6px]"
                  style={{
                    background: "linear-gradient(145deg, #ffffff 0%, #f8f4ee 50%, #f0ebe0 100%)",
                    boxShadow: isActive
                      ? "0 25px 60px rgba(58, 55, 47, 0.22), 0 8px 20px rgba(58, 55, 47, 0.1), inset 0 1px 0 rgba(255,255,255,0.6)"
                      : "0 10px 40px rgba(58, 55, 47, 0.12), 0 4px 12px rgba(58, 55, 47, 0.06), inset 0 1px 0 rgba(255,255,255,0.4)",
                    transition: "box-shadow 0.5s ease",
                  }}
                >
                  {/* Decorative tape strip */}
                  <div
                    className="absolute -top-[1px] left-1/2 z-10 h-7 w-16 -translate-x-1/2"
                    style={{
                      background: "linear-gradient(180deg, rgba(239,231,216,0.7) 0%, rgba(239,231,216,0.4) 100%)",
                      borderRadius: "0 0 8px 8px",
                      backdropFilter: "blur(4px)",
                    }}
                  />

                  {/* Image container */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[0.9rem]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 40vw, 90vw"
                      style={{
                        transform: isActive ? "scale(1.12)" : "scale(1)",
                        transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      }}
                    />

                    {/* Warm gradient overlay on hover */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, rgba(58,55,47,0.15) 0%, transparent 40%, transparent 60%, rgba(246,241,232,0.08) 100%)",
                        opacity: isActive ? 1 : 0,
                        transition: "opacity 0.5s ease",
                      }}
                    />

                    {/* Shine sweep on hover */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 45%, rgba(255,255,255,0.06) 50%, transparent 55%)",
                        transform: isActive ? "translateX(100%)" : "translateX(-100%)",
                        transition: "transform 0.9s ease",
                      }}
                    />
                  </div>

                  {/* Paper texture */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[1.2rem] paper-grain mix-blend-multiply"
                    style={{ opacity: 0.025 }}
                  />
                </div>

                {/* Subtle card shadow reflection */}
                <div
                  className="absolute -bottom-3 left-[10%] right-[10%] h-6 rounded-[50%]"
                  style={{
                    background: "radial-gradient(ellipse, rgba(58,55,47,0.06) 0%, transparent 70%)",
                    filter: "blur(4px)",
                    opacity: isActive ? 0.8 : 0.4,
                    transition: "opacity 0.5s ease",
                  }}
                />
              </div>
            );
          })}

          {/* Decorative dashed line */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            style={{
              opacity: isVisible ? 0.08 : 0,
              transition: "opacity 1.5s ease 0.8s",
            }}
          >
            <path
              d="M 120 140 C 280 80, 420 200, 580 120 S 720 280, 680 340"
              fill="none"
              stroke="var(--sage)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />
          </svg>
        </div>

        {/* ─── MOBILE: Stacked overlapping ─── */}
        <div className="relative mx-auto max-w-sm md:hidden">
          <div className="relative" style={{ paddingBottom: "20px" }}>
            {photos.map((photo, i) => (
              <div
                key={photo.src}
                className="relative"
                style={{
                  zIndex: photos.length - i,
                  marginTop: i === 0 ? 0 : "-2rem",
                  transform: isVisible
                    ? `rotate(${photo.mobile.rotate}deg) translateX(${photo.mobile.offsetX})`
                    : "rotate(0deg) scale(0.85) translateY(40px)",
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${photo.delay}s`,
                }}
              >
                <div
                  className="overflow-hidden rounded-2xl p-[5px]"
                  style={{
                    background: "linear-gradient(145deg, #ffffff 0%, #f8f4ee 50%, #f0ebe0 100%)",
                    boxShadow: "0 8px 30px rgba(58, 55, 47, 0.1), 0 3px 10px rgba(58, 55, 47, 0.05)",
                  }}
                >
                  <div
                    className="absolute -top-[1px] left-1/2 z-10 h-5 w-12 -translate-x-1/2"
                    style={{
                      background: "linear-gradient(180deg, rgba(239,231,216,0.65) 0%, rgba(239,231,216,0.35) 100%)",
                      borderRadius: "0 0 6px 6px",
                      backdropFilter: "blur(3px)",
                    }}
                  />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="90vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
