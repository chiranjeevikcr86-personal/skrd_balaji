import type { Metadata, Viewport } from "next";
import { Inter, Cinzel_Decorative, EB_Garamond, Noto_Serif_Telugu } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
});

const notoSerifTelugu = Noto_Serif_Telugu({
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-telugu",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#E8690A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kanugondatemple.com"),
  title: {
    default: "Sri Kanukondaraya Swamy Devasthanam | Ancient Hindu Temple in Chittoor, Andhra Pradesh",
    template: "%s | Sri Kanukondaraya Swamy Devasthanam",
  },
  description:
    "Visit Sri Kanukondaraya Swamy Devasthanam - an ancient Hindu temple in Pedakanti Palli, Gangadhara Nellore Mandal, Chittoor District, Andhra Pradesh. View darshan timings, festival schedule, gallery, and contact information.",
  keywords: [
    "Kanukondaraya Swamy",
    "Kanukondaraya Swamy Devasthanam",
    "Kanukondaraya temple",
    "Hindu temple Chittoor",
    "Hindu temple Andhra Pradesh",
    "darshan timings",
    "temple gallery",
    "festivals",
    "sevas",
    "Telugu temple",
    "Pedakanti Palli temple",
    "Gangadhara Nellore Mandal",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "KRS Temple",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kanugondatemple.com",
    siteName: "Sri Kanukondaraya Swamy Devasthanam",
    title: "Sri Kanukondaraya Swamy Devasthanam",
    description:
      "Ancient Hindu temple dedicated to Sri Kanukondaraya Swamy in Pedakanti Palli, Chittoor District, Andhra Pradesh. Discover darshan timings, festivals, and plan your visit.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Kanukondaraya Swamy Devasthanam",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HinduTemple", "TouristAttraction", "Place"],
      "@id": "https://kanugondatemple.com/#temple",
      "name": "Sri Kanukondaraya Swamy Devasthanam",
      "alternateName": ["Kanukondaraya Swamy Temple", "KRS Devasthanam"],
      "description":
        "Ancient Hindu temple dedicated to Sri Kanukondaraya Swamy located in Pedakanti Palli, Gangadhara Nellore Mandal, Chittoor District, Andhra Pradesh - 517125.",
      "url": "https://kanugondatemple.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kanugondatemple.com/icons/icon.svg",
      },
      "image": "https://kanugondatemple.com/images/og-image.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pedakanti Palli (Village), Gangadhara Nellore Mandal",
        "addressLocality": "Gangadhara Nellore",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "517125",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "13.2833",
        "longitude": "79.1167",
      },
      "email": "hello@cjkdigitalsolutions.com",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
          ],
          "opens": "05:30",
          "closes": "12:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
          ],
          "opens": "16:00",
          "closes": "20:30",
        },
      ],
      "hasMap": "https://maps.google.com/?q=Kanukondaraya+Swamy+Temple+Pedakanti+Palli+Chittoor",
      "publicAccess": true,
      "isAccessibleForFree": true,
    },
    {
      "@type": "WebSite",
      "@id": "https://kanugondatemple.com/#website",
      "url": "https://kanugondatemple.com",
      "name": "Sri Kanukondaraya Swamy Devasthanam",
      "description": "Official website for Sri Kanukondaraya Swamy Devasthanam",
      "inLanguage": ["en", "te"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://kanugondatemple.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://kanugondatemple.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kanugondatemple.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About & History",
          "item": "https://kanugondatemple.com/about/",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "The Walking God",
          "item": "https://kanugondatemple.com/devara-eddu/",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "The Three Steps",
          "item": "https://kanugondatemple.com/three-steps/",
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Darshan Timings",
          "item": "https://kanugondatemple.com/timings/",
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Sevas",
          "item": "https://kanugondatemple.com/sevas/",
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Gallery",
          "item": "https://kanugondatemple.com/gallery/",
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Contact",
          "item": "https://kanugondatemple.com/contact/",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${ebGaramond.variable} ${notoSerifTelugu.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="KRS Temple" />
        <meta name="application-name" content="KRS Temple" />
        <meta name="msapplication-TileColor" content="#ff8811" />
        <meta name="msapplication-tap-highlight" content="no" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
