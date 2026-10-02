import { getSiteUrl, site } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const url = getSiteUrl();

  const data = {
    "@context": "https://schema.org",
    "@type": "YogaStudio",
    name: site.name,
    description: site.description,
    url,
    telephone: site.phoneE164,
    email: site.email,
    image: `${url}/images/lakshya-hero.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Behta Hajipur",
      addressLocality: site.locality,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    areaServed: [
      { "@type": "City", name: "Loni" },
      { "@type": "City", name: "Ghaziabad" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: site.instagramUrl ? [site.instagramUrl] : undefined,
    priceRange: "₹₹",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
