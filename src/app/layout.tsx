import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import Providers from "./providers";
import "./globals.css";
import Footer from "@/component/Atom/Footer";
import content from "@/data/content.json";
import { isIndexableDeployment, siteUrl } from "@/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: content.metadata.title,
    template: "%s | Studio / Digital",
  },
  description: content.metadata.description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: isIndexableDeployment,
    follow: isIndexableDeployment,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: content.footer.brand,
    title: content.metadata.title,
    description: content.metadata.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: content.metadata.title,
    description: content.metadata.description,
    images: ["/opengraph-image"],
  },
};

const organizationId = new URL("/#organization", siteUrl).href;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: content.footer.brand,
      url: siteUrl.origin,
      email: content.contact.email,
    },
    {
      "@type": "WebSite",
      "@id": new URL("/#website", siteUrl).href,
      url: siteUrl.origin,
      name: content.footer.brand,
      inLanguage: "en-US",
      publisher: { "@id": organizationId },
    },
    ...content.services.items.map((service) => ({
      "@type": "Service",
      "@id": new URL(`/#service-${service.number}`, siteUrl).href,
      name: service.title,
      serviceType: service.title,
      description: service.description,
      url: new URL("/#services", siteUrl).href,
      provider: { "@id": organizationId },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
    })),
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-US"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
        <Footer></Footer>
      </body>
      
    </html>
  );
}
