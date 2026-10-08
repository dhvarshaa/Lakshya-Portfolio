import type { Metadata } from "next";
import { CallButton } from "@/components/CallButton";
import { EnquiryForm } from "@/components/EnquiryForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Book a Free Trial Class in Delhi | NCR · Lakshya Studios",
  },
  description:
    "Book a free trial yoga or strength class at Lakshya Studios with Lakshya Dhama in Delhi | NCR. WhatsApp, call, or send an enquiry.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="bg-sand-50 rounded-3xl border border-forest/15 p-8 sm:p-12 lg:p-16 shadow-soft-elevation">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold tracking-widest text-terracotta uppercase">
              Contact
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-forest leading-tight">
              Book your free trial class.
            </h1>
            <p className="text-forest/75 text-sm sm:text-base font-light leading-relaxed">
              WhatsApp is the fastest way to reach Lakshya. Send a message with
              your goal and preferred time, and he will reply with a slot.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-2">
              <WhatsAppButton className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-whatsapp text-white hover:bg-whatsapp-dark text-sm font-semibold tracking-wide transition-colors">
                Chat on WhatsApp
              </WhatsAppButton>
              <CallButton className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border border-forest/25 text-forest hover:bg-sand-200/60 text-sm font-semibold tracking-wide transition-colors" />
            </div>

            <div className="pt-6 space-y-4 text-xs font-medium text-forest/80">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sand-200 flex items-center justify-center text-forest">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </span>
                <span>{site.addressLine}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sand-200 flex items-center justify-center text-forest">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </span>
                <a className="hover:text-forest" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm text-forest/70 mb-6">
              Prefer a form? Leave your details and Lakshya will call or WhatsApp
              you back.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
