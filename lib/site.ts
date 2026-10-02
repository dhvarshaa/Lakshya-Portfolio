export const site = {
  name: "Lakshya Dhama",
  tagline: "Yoga & Strength",
  title: "Lakshya Dhama — Yoga & Strength Classes in Loni, Ghaziabad",
  description:
    "MDNIY-certified yoga instructor and personal trainer in Loni, Ghaziabad. In-person and online yoga and strength classes for weight loss, muscle gain, and flexibility. Book a free trial class.",
  area: "Loni, Ghaziabad",
  addressLine: "Behta Hajipur, Loni, Ghaziabad, Uttar Pradesh",
  phoneDisplay: "+91 99710 79088",
  phoneE164: "+919971079088",
  phoneWhatsApp: "919971079088",
  email: "lakshaydh2017@gmail.com",
  instagramUrl: null as string | null,
  trialMessage: "Hi Lakshya, I'd like to book a free trial class.",
} as const;

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
