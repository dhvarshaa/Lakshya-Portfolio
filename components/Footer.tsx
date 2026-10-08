import Link from "next/link";
import { site } from "@/lib/site";
import { PlaceholderNote } from "./PlaceholderNote";

export function Footer() {
  return (
    <footer className="bg-forest text-sand-100 pt-16 pb-12 border-t border-forest-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-forest-700">
          <div className="md:col-span-5 space-y-4">
            <p className="text-xs text-sand-300 leading-relaxed font-light pr-6">
              {site.name} {site.byline}. Yoga and strength classes in{" "}
              {site.area}, and online across India.
            </p>
          </div>
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-widest font-semibold text-terracotta">
              Classes
            </p>
            <ul className="space-y-2 text-xs text-sand-300 font-light">
              <li>
                <Link className="hover:text-white transition-colors" href="/classes">
                  Online yoga
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/classes">
                  In-person group yoga
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/classes">
                  Hybrid personal training
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-widest font-semibold text-terracotta">
              Reach Lakshya
            </p>
            <p className="text-xs text-sand-300 leading-relaxed font-light">
              {site.addressLine}
              <br />
              <a className="hover:text-white" href={`tel:${site.phoneE164}`}>
                {site.phoneDisplay}
              </a>
              <br />
              <a className="hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-300/70 gap-4 font-light">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sand-300">
            {site.instagramUrl ? (
              <a
                className="hover:text-sand-50 transition-colors"
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            ) : (
              <span className="inline-flex items-center gap-2">
                Instagram <PlaceholderNote>add link</PlaceholderNote>
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
