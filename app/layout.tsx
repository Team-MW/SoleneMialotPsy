import type { Metadata } from "next";
import { Allura, Caveat, Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: true,
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Solène Mialot — Psychologue clinicienne à Saint-Jean",
    template: "%s — Solène Mialot",
  },
  description:
    "Psychologue clinicienne à Saint-Jean. Consultations au cabinet et en téléconsultation. EMDR, thérapie des schémas et hypnose ericksonienne. Prise de rendez-vous sur Doctolib.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Solène Mialot — Psychologue clinicienne à Saint-Jean",
    description:
      "Cabinet à Saint-Jean et téléconsultation. Approche intégrative : EMDR, thérapie des schémas, hypnose ericksonienne.",
    locale: "fr_FR",
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: "/flyer.jpg",
        width: 1200,
        height: 630,
        alt: "Solène Mialot — Psychologue clinicienne",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: "Solène Mialot",
  image: `${SITE.url}/flyer.jpg`,
  url: SITE.url,
  sameAs: [SITE.doctolib],
  priceRange: SITE.price,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: "Saint-Jean",
    postalCode: "31240",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "City",
    name: "Saint-Jean",
  },
  description:
    "Psychologue clinicienne à Saint-Jean. Consultations au cabinet et en téléconsultation. Approche intégrative : EMDR, thérapie des schémas et hypnose ericksonienne.",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "13:30",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${cormorant.variable} ${allura.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
