/**
 * SEO helpers — meta tags and JSON-LD structured data generators.
 */

import { BUSINESS } from "./business";

export interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
}

/** Generate the LocalBusiness + AccountingService JSON-LD (sitewide) */
export function getBusinessJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["AccountingService", "LocalBusiness"],
    name: BUSINESS.legalName,
    image: `${BUSINESS.urls.site}/og/og-default.png`,
    url: BUSINESS.urls.site,
    telephone: `+${BUSINESS.phone.whatsapp}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: BUSINESS.hours.structured.dayOfWeek,
        opens: BUSINESS.hours.structured.opens,
        closes: BUSINESS.hours.structured.closes,
      },
    ],
    areaServed: BUSINESS.address.city,
    priceRange: "₹₹",
  });
}

/** Generate a Service JSON-LD block */
export function getServiceJsonLd(service: {
  name: string;
  description: string;
  url: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "AccountingService",
      name: BUSINESS.legalName,
      url: BUSINESS.urls.site,
    },
  });
}

/** Generate a FAQPage JSON-LD block */
export function getFAQJsonLd(
  faqs: Array<{ question: string; answer: string }>
): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  });
}

/** Generate a BreadcrumbList JSON-LD block */
export function getBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });
}
