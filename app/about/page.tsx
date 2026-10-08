import type { Metadata } from "next";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { credentials } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute: "About Lakshya Dhama · Lakshya Studios · Delhi | NCR",
  },
  description:
    "Meet Lakshya Dhama — yoga instructor and personal trainer at Lakshya Studios in Delhi | NCR, with 7+ years of gym and wellness experience.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="py-12 bg-sand-100 border-b border-[#212B24]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden border-4 border-sand-50 shadow-soft-elevation bg-sand-300 aspect-[4/5]">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-8">
              <PlaceholderNote>Second real photo</PlaceholderNote>
              <span className="text-sm text-forest/60">
                Teaching a student, or a strong asana
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-semibold tracking-widest text-terracotta uppercase">
            About Lakshya
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest leading-tight">
            Seven years in the gym. A yoga practice every day.
          </h1>
          <p className="text-forest/80 text-base md:text-lg font-light leading-relaxed">
            Lakshya has trained clients in Delhi | NCR since 2019, first as a gym
            instructor and personal trainer, then bringing yoga into his
            classes in 2022.
          </p>
          <p className="text-forest/80 text-base font-light leading-relaxed">
            His classes are disciplined and practical. He corrects posture
            closely, keeps injury prevention front of mind, and tracks your
            progress every week. Classes are taught in Hindi or English.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {credentials.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-2xl bg-sand-50 border border-forest/10"
              >
                <p className="text-xs uppercase tracking-wider text-sage-muted font-semibold">
                  {item.label}
                </p>
                <p className="font-serif text-lg text-forest mt-1">{item.title}</p>
                <p className="text-sm text-forest/70">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <WhatsAppButton className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-whatsapp text-white hover:bg-whatsapp-dark text-sm font-semibold tracking-wider uppercase transition-colors">
              Book a free trial class
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
