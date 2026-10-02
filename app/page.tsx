import Link from "next/link";
import { ClassCards } from "@/components/ClassCards";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { audience, trustStats } from "@/lib/content";
import { site } from "@/lib/site";

const numberToneClass = {
  terracotta: "text-terracotta/80",
  sage: "text-sage",
  forest: "text-forest/70",
} as const;

export default function HomePage() {
  return (
    <>
      <section className="relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden" id="hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-subtle/80 border border-sage/15 text-sage text-xs tracking-wider uppercase font-semibold">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 7.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{site.area} · In-person &amp; online</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-normal leading-[1.12] tracking-tight">
                Yoga and strength training,{" "}
                <em className="italic text-forest-700">built around your goal.</em>
              </h1>

              <p className="text-forest/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                Classical asanas, pranayama, and meditation, combined with
                practical strength work. For anyone who wants to lose weight,
                build muscle, improve flexibility, or simply feel better in their
                body.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <WhatsAppButton className="px-8 py-4 rounded-full bg-whatsapp text-white hover:bg-whatsapp-dark text-sm font-semibold tracking-wider uppercase transition-colors shadow-soft-elevation flex items-center gap-2.5">
                  <span>Book a free trial class</span>
                </WhatsAppButton>
                <Link
                  className="px-7 py-4 rounded-full border border-forest/20 text-forest hover:bg-sand-200/60 text-sm font-medium tracking-wide transition-colors"
                  href="/classes"
                >
                  See classes
                </Link>
              </div>

              <div className="pt-8 border-t border-[#212B24]/10 grid grid-cols-3 gap-6 max-w-xl">
                {trustStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-2xl font-semibold text-forest">
                      {stat.value}
                    </p>
                    <p className="text-xs text-sage-muted uppercase tracking-wider font-medium mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute -top-6 -left-6 w-full h-full bg-sand-200 rounded-[280px_280px_30px_30px] -z-10 rotate-[-1.5deg]" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-sage-subtle rounded-[280px_280px_30px_30px] -z-10 rotate-[2deg]" />
              <div className="relative w-full max-w-md editorial-arch overflow-hidden shadow-2xl border-4 border-sand-50 bg-sand-300 min-h-[520px]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-8">
                  <PlaceholderNote>Real photo needed</PlaceholderNote>
                  <span className="text-sm text-forest/60">
                    Lakshya in practice, natural light, portrait crop
                  </span>
                </div>
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold tracking-wider text-forest shadow-md border border-white/40">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Taking new students
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg text-forest">
                  <p className="font-serif text-base text-forest">
                    Your first class is free.
                  </p>
                  <p className="mt-1 text-xs text-sage-muted">
                    Online or in person. Message on WhatsApp to pick a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12" id="who">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-terracotta uppercase">
            Who it&apos;s for
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest mt-3 mb-4">
            Pick your goal. The plan follows.
          </h2>
          <p className="text-forest/75 text-base md:text-lg font-light leading-relaxed">
            Beginners, busy professionals, and gym-goers who want more mobility.
            Every plan mixes yoga with strength in the ratio your goal needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audience.map((card) => (
            <div
              key={card.number}
              className="bg-sand-50 rounded-3xl p-8 border border-forest/10 shadow-card-gentle flex flex-col justify-between"
            >
              <div>
                <span
                  className={`font-serif text-4xl ${numberToneClass[card.numberTone]}`}
                >
                  {card.number}
                </span>
                <h3 className="font-serif text-2xl text-forest font-semibold mt-4 mb-3">
                  {card.title}
                </h3>
                <p className="text-forest/80 text-sm leading-relaxed font-light">
                  {card.body}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-forest/10 text-xs font-medium text-sage uppercase tracking-wider">
                {card.footer}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-sand-100 border-t border-[#212B24]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold tracking-widest text-terracotta uppercase">
                Classes
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest mt-2">
                Online or in person
              </h2>
            </div>
            <Link
              className="text-sm font-medium text-forest underline underline-offset-4 hover:text-sage"
              href="/classes"
            >
              Full schedule →
            </Link>
          </div>
          <ClassCards />
        </div>
      </section>

      <section className="py-20 border-t border-[#212B24]/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-forest">
            Ready for a free trial class?
          </h2>
          <p className="text-forest/75 font-light">
            Message Lakshya on WhatsApp with your goal and preferred time.
          </p>
          <WhatsAppButton className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-whatsapp text-white hover:bg-whatsapp-dark text-sm font-semibold tracking-wider uppercase transition-colors">
            Book a free trial class
          </WhatsAppButton>
        </div>
      </section>
    </>
  );
}
