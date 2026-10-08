# Lakshya Studios — by Lakshya Dhama

Marketing site for Lakshya Studios by Lakshya Dhama, a yoga instructor and personal trainer in Delhi | NCR.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Content in `lib/content.ts` and site details in `lib/site.ts`
- WhatsApp-first trial booking
- Contact form → `/api/enquiry` → Resend email

## Develop

```bash
npm install
cp .env.example .env.local
# Add RESEND_API_KEY from https://resend.com/api-keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Resend setup

1. Create a free account at [resend.com](https://resend.com).
2. Copy an API key into `.env.local` as `RESEND_API_KEY`.
3. For first tests, keep `ENQUIRY_FROM_EMAIL=Lakshya Yoga <onboarding@resend.dev>`. With that sender, Resend only delivers to the email you signed up with — set `ENQUIRY_TO_EMAIL` to that address temporarily if needed.
4. Before launch, verify a domain in Resend and switch `ENQUIRY_FROM_EMAIL` to something like `Lakshya Yoga <hello@yourdomain.in>`, and set `ENQUIRY_TO_EMAIL` to Lakshya’s inbox.
5. On Vercel, add the same env vars in Project Settings → Environment Variables.

### Site URL

Set `NEXT_PUBLIC_SITE_URL` to the production domain (no trailing slash) so sitemap, robots, and Open Graph links are correct.

## Pages

| Route | Purpose |
|---|---|
| `/` | Hero, who it's for, classes teaser + LocalBusiness JSON-LD |
| `/about` | Story and credentials |
| `/classes` | Online / personal / in-person + schedule |
| `/testimonials` | Student quotes |
| `/contact` | WhatsApp, call, enquiry form |
| `/courses` | Stub for Phase 2 (noindex, not in nav) |
| `/sitemap.xml` | Sitemap |
| `/robots.txt` | Crawl rules |

## Design reference

Static mock: `design/reference.html`
