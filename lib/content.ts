export type AudienceCard = {
  number: string;
  numberTone: "terracotta" | "sage" | "forest";
  title: string;
  body: string;
  footer: string;
};

export type Credential = {
  label: string;
  title: string;
  detail: string;
};

export type ClassOffering = {
  id: string;
  badge: string;
  meta: string;
  title: string;
  description: string;
  pricing: string;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
  featured?: boolean;
  featuredBadge?: string;
};

export type ScheduleSlot = {
  when: string;
  time: string;
  what: string;
  confirmed: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  meta: string;
  placeholder: boolean;
};

export type Course = {
  slug: string;
  title: string;
  summary: string;
  pricePaise: number;
  published: boolean;
  lessons: { title: string; videoId?: string }[];
};

export const trustStats = [
  { value: "7+ Years", label: "Training clients" },
  { value: "Certified", label: "Yoga instructor" },
  { value: "Yoga + Gym", label: "One plan" },
] as const;

export const audience: AudienceCard[] = [
  {
    number: "01",
    numberTone: "terracotta",
    title: "Lose weight, and keep it off",
    body: "Steady, sustainable fat loss through dynamic yoga flows, functional workouts, and simple food guidance. Progress is tracked every week and the plan is adjusted.",
    footer: "Flows · Functional training · Weekly check-ins",
  },
  {
    number: "02",
    numberTone: "sage",
    title: "Build strength and muscle",
    body: "Resistance training with correct form, paired with yoga for recovery so you get stronger without getting stiff or injured.",
    footer: "Strength · Form correction · Recovery yoga",
  },
  {
    number: "03",
    numberTone: "forest",
    title: "Flexibility, posture, calm",
    body: "Classical asanas, pranayama, and meditation. Ease stiffness, correct posture, and breathe better.",
    footer: "Asana · Pranayama · Meditation",
  },
];

export const credentials: Credential[] = [
  {
    label: "Certification",
    title: "Yoga Foundation Course",
    detail: "Completed · 2022",
  },
  {
    label: "Experience",
    title: "Personal trainer & gym instructor",
    detail: "Delhi | NCR · 2019 to present",
  },
  {
    label: "Background",
    title: "Regional-level athlete",
    detail: "Competitive sports · 2015 to 2018",
  },
  {
    label: "Education",
    title: "B.A. Programme",
    detail: "Delhi University · 2022",
  },
];

export const classes: ClassOffering[] = [
  {
    id: "online",
    badge: "Online",
    meta: "Live on video call",
    title: "Online yoga",
    description:
      "Live group or 1:1 sessions from home. Join from anywhere in India with just a mat.",
    pricing: "Contact for pricing",
    features: [
      "Live posture corrections on camera",
      "Asana, pranayama, and meditation",
      "Morning and evening batches",
    ],
    ctaLabel: "Ask about online",
    whatsappMessage: "Hi Lakshya, I'm interested in online yoga classes.",
  },
  {
    id: "personal",
    badge: "Personal training",
    meta: "1:1",
    title: "Hybrid personal plan",
    description:
      "A custom plan blending resistance training with yoga recovery, built for weight loss, muscle gain, or both.",
    pricing: "Contact for pricing",
    features: [
      "Weekly progress tracking",
      "Basic nutrition guidance",
      "Online and In-Person",
    ],
    ctaLabel: "Ask about a personal plan",
    whatsappMessage: "Hi Lakshya, I'm interested in a personal training plan.",
    featured: true,
    featuredBadge: "Yoga + strength",
  },
  {
    id: "in-person",
    badge: "In person",
    meta: "Delhi | NCR",
    title: "Group yoga classes",
    description:
      "Small group classes in Delhi | NCR. Home visits nearby can be arranged.",
    pricing: "Contact for pricing",
    features: [
      "Hands-on posture correction",
      "Beginner-friendly pace",
      "Hindi or English",
    ],
    ctaLabel: "Ask about in-person",
    whatsappMessage:
      "Hi Lakshya, I'm interested in in-person yoga classes in Delhi | NCR.",
  },
];

export const schedule: ScheduleSlot[] = [
  {
    when: "Mon – Sat · Morning",
    time: "6:00 – 7:00 AM",
    what: "Group yoga · In person",
    confirmed: false,
  },
  {
    when: "Mon – Sat · Morning",
    time: "7:30 – 8:30 AM",
    what: "Online yoga · Live",
    confirmed: false,
  },
  {
    when: "Mon – Sat · Evening",
    time: "6:30 – 7:30 PM",
    what: "Online yoga · Live",
    confirmed: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "A short quote about weight loss, consistency, or how the plan was adjusted week by week.",
    name: "Student name",
    meta: "Area · Class type",
    placeholder: true,
  },
  {
    quote:
      "A short quote about strength gains, form correction, or avoiding injury.",
    name: "Student name",
    meta: "Area · Class type",
    placeholder: true,
  },
  {
    quote:
      "A short quote about flexibility, back pain, stress, or sleep after regular yoga.",
    name: "Student name",
    meta: "Area · Class type",
    placeholder: true,
  },
];

/** Phase 2: swap this for Sanity. Empty until a course is published. */
export function getCourses(): Course[] {
  return [];
}

export function getCourseBySlug(slug: string): Course | undefined {
  return getCourses().find((c) => c.slug === slug && c.published);
}
