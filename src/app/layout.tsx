import type { Metadata } from "next";
import {Public_Sans} from "next/font/google";
import "./globals.css";

const sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "700", "900"],
});


export const metadata: Metadata = {
  title: {
    default: "Cyla's Drug Network - Safe Pharmaceutical Redistribution",
    template: "%s | Cyla's Drug Network"
  },
  description: "Safe & efficient redistribution of short-dated pharmaceutical products. Join our network to reduce waste and improve access to essential medications.",
  keywords: ["pharmaceutical redistribution", "drug network", "medication access", "pharma waste reduction", "short-dated drugs", "healthcare efficiency"],
  authors: [{ name: "Cyla's Drug Network" }],
  creator: "Cyla's Drug Network",
  publisher: "Cyla's Drug Network",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cyladrugnetwork.com',
    title: "Cyla's Drug Network - Safe Pharmaceutical Redistribution",
    description: "Safe & efficient redistribution of short-dated pharmaceutical products. Join our network to reduce waste and improve access to essential medications.",
    siteName: "Cyla's Drug Network",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: "Cyla's Drug Network Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cyla's Drug Network - Safe Pharmaceutical Redistribution",
    description: "Safe & efficient redistribution of short-dated pharmaceutical products. Join our network to reduce waste and improve access to essential medications.",
    images: ['/logo.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="canonical" href="https://cyladrugnetwork.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cyla's Drug Network",
              "description": "Safe & efficient redistribution of short-dated pharmaceutical products",
              "url": "https://cyladrugnetwork.com",
              "logo": "https://cyladrugnetwork.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              // "sameAs": [
              //   "https://twitter.com/cyladrugnetwork",
              //   "https://linkedin.com/company/cyladrugnetwork"
              // ]
            })
          }}
        />
      </head>
      <body className="bg-slate-50 min-h-screen flex flex-col">
       {children}
      </body>
    </html>
  );
}
