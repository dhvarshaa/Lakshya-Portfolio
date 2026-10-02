import type { Metadata } from "next";
import { ClassCards } from "@/components/ClassCards";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { schedule } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute:
      "Yoga Classes Online & In Person in Loni, Ghaziabad · Lakshya Dhama",
  },
  description:
    "Online yoga, in-person group classes in Loni, Ghaziabad, and hybrid personal training. Book a free trial with Lakshya Dhama.",
  alternates: { canonical: "/classes" },
};

export default function ClassesPage() {
  const hasUnconfirmed = schedule.some((slot) => !slot.confirmed);

  return (
    <section className="py-24 border-b border-[#212B24]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-terracotta uppercase">
              Classes
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest mt-2">
              Online or in person
            </h1>
          </div>
          <p className="text-forest/70 text-sm md:text-base max-w-md font-light">
            Every new student starts with a free trial class and a short chat
            about goals, injuries, and schedule.
          </p>
        </div>

        <ClassCards />

        <div className="mt-16 rounded-3xl bg-sand-50 border border-forest/10 p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h2 className="font-serif text-2xl text-forest">Weekly schedule</h2>
            {hasUnconfirmed ? (
              <PlaceholderNote>Times to confirm with Lakshya</PlaceholderNote>
            ) : null}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            {schedule.map((slot) => (
              <div
                key={`${slot.when}-${slot.time}`}
                className="p-5 rounded-2xl bg-sand-100 border border-forest/10"
              >
                <p className="text-xs uppercase tracking-wider text-sage-muted font-semibold">
                  {slot.when}
                </p>
                <p className="font-serif text-xl text-forest mt-1">{slot.time}</p>
                <p className="text-forest/70 mt-1">{slot.what}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-forest/60 mt-6">
            Personal training slots are fixed one to one. Message on WhatsApp to
            find a time.
          </p>
        </div>
      </div>
    </section>
  );
}
