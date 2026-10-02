import type { Metadata } from "next";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute: "Student Testimonials · Lakshya Dhama · Loni, Ghaziabad",
  },
  description:
    "What students say about yoga and strength training with Lakshya Dhama in Loni, Ghaziabad.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  const hasPlaceholders = testimonials.some((t) => t.placeholder);

  return (
    <section className="py-20 bg-sand-100/70 border-b border-[#212B24]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-terracotta uppercase">
            Students
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-forest mt-2">
            In their words
          </h1>
          {hasPlaceholders ? (
            <p className="mt-4">
              <PlaceholderNote>
                Replace with 3–5 real quotes, with permission
              </PlaceholderNote>
            </p>
          ) : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <figure
              key={`${item.name}-${index}`}
              className="p-8 rounded-2xl bg-sand-50 border border-forest/10 flex flex-col justify-between shadow-card-gentle"
            >
              <blockquote className="font-serif text-base sm:text-lg text-forest italic leading-relaxed mb-6">
                “{item.quote}”
              </blockquote>
              <figcaption>
                <p className="text-sm font-semibold text-forest">{item.name}</p>
                <p className="text-xs text-sage-muted tracking-wide">{item.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="text-center mt-16">
          <WhatsAppButton className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-whatsapp text-white hover:bg-whatsapp-dark text-sm font-semibold tracking-wider uppercase transition-colors">
            Book a free trial class
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
