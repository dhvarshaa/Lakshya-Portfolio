export const site = {
  name: "Lakshya Studios",
  founder: "Lakshya Dhama",
  byline: "by Lakshya Dhama",
  tagline: "Move · Breathe · Grow",
  title:
    "Lakshya Studios by Lakshya Dhama — Yoga & Strength Classes in Delhi | NCR",
  description:
    "Lakshya Studios by Lakshya Dhama, a yoga instructor and personal trainer in Delhi | NCR. In-person and online yoga and strength classes for weight loss, muscle gain, and flexibility. Book a free trial class.",
  area: "Delhi | NCR",
  addressLine: "Delhi | NCR",
  locality: "Delhi",
  region: "Delhi",
  country: "IN",
  phoneDisplay: "+91 99710 79088",
  phoneE164: "+919971079088",
  phoneWhatsApp: "919971079088",
  email: "lakshaydh2017@gmail.com",
  instagramUrl: "https://www.instagram.com/yogawith_lakshaydhama/",
  trialMessage: "Hi Lakshya, I'd like to book a free trial class.",
} as const;

/** Canonical site origin. Set NEXT_PUBLIC_SITE_URL in production (e.g. https://lakshyadhama.in). */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export function whatsappUrl(message: string = site.trialMessage): string {
  return `https://wa.me/${site.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
}

export function telUrl(): string {
  return `tel:${site.phoneE164}`;
}

export const nav = [
  { href: "/#who", label: "Who it's for" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
] as const;
