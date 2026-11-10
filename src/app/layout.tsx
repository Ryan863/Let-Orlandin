import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const title =
  "Tricologia e Estética Avançada em Bento Gonçalves | Letícia Orlandin";
const description =
  "Tratamento de queda capilar, alopecias e estética facial avançada em Bento Gonçalves - RS. Avaliação honesta, atendimento pontual e acolhedor na Sala 501, Cidade Alta. Agende pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title,
  description,
  keywords: [
    "tricologia Bento Gonçalves",
    "tratamento queda de cabelo Bento Gonçalves",
    "alopecia",
    "estética avançada Bento Gonçalves",
    "bioestimulador de colágeno",
    "microinfusão capilar",
    "limpeza de pele Bento Gonçalves",
    "Letícia Orlandin",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title,
    description,
    siteName: SITE.name,
    images: [
      {
        url: "/leticia-orlandin.jpg",
        width: 592,
        height: 610,
        alt: "Letícia Orlandin, especialista em tricologia e estética avançada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/leticia-orlandin.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
  name: SITE.name,
  image: `${SITE.siteUrl}/leticia-orlandin.jpg`,
  url: SITE.siteUrl,
  telephone: SITE.phoneIntl,
  taxID: SITE.cnpj,
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${SITE.address.street} - ${SITE.address.room}, ${SITE.address.building}`,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "BR",
  },
  hasMap: SITE.maps,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating.value,
    bestRating: "5",
    reviewCount: SITE.rating.count,
  },
  sameAs: [SITE.instagram, SITE.facebook],
  areaServed: "Bento Gonçalves, RS",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="min-h-screen overflow-x-clip antialiased">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[60] opacity-[0.025]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
