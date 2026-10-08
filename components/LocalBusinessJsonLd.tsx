import { getSiteUrl, site } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const url = getSiteUrl();

  const data = {
    "@context": "https://schema.org",
    "@type": "YogaStudio",
    name: site.name,
    founder: {
      "@type": "Person",
      name: site.founder,
    },
    description: site.description,
    url,
    telephone: site.phoneE164,
    email: site.email,
    image: `${url}/images/lakshya-hero.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "AdministrativeArea", name: "National Capital Region" },
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
