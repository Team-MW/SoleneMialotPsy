import type { Metadata } from "next";
import { Allura, Caveat, Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Solène Mialot — Psychologue clinicienne à Saint-Jean",
    template: "%s — Solène Mialot",
  },
  description:
    "Psychologue clinicienne, praticienne EMDR Europe et hypnose ericksonienne. Consultations au cabinet et en visio. 22 boulevard des Pensées, 31240 Saint-Jean. Prise de rendez-vous sur Doctolib.",
  openGraph: {
    title: "Solène Mialot — Psychologue clinicienne à Saint-Jean",
    description:
      "Nouveau cabinet à Saint-Jean. Thérapie EMDR, hypnose ericksonienne, consultations au cabinet et en visio.",
    locale: "fr_FR",
    type: "website",
    images: ["/flyer.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Solène Mialot — Psychologue clinicienne",
  image: "/flyer.jpg",
  url: SITE.doctolib,
  priceRange: SITE.price,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: "Saint-Jean",
    postalCode: "31240",
    addressCountry: "FR",
  },
  areaServed: "Saint-Jean",
  description:
    "Psychologue clinicienne, praticienne EMDR Europe et hypnose ericksonienne. Consultations au cabinet et en visio.",
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
