import { classes } from "@/lib/content";
import { WhatsAppButton } from "./WhatsAppButton";

function CheckIcon({ tone }: { tone: "sage" | "terracotta" }) {
  return (
    <svg
      className={`w-4 h-4 flex-shrink-0 ${tone === "sage" ? "text-sage" : "text-terracotta"}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        d="M5 13l4 4L19 7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function ClassCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {classes.map((item) =>
        item.featured ? (
          <div
            key={item.id}
            className="bg-forest text-sand-50 rounded-3xl p-8 lg:p-10 shadow-2xl relative flex flex-col justify-between lg:-translate-y-2 border border-forest-600"
          >
            {item.featuredBadge ? (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-terracotta text-white text-[11px] font-semibold tracking-widest uppercase shadow whitespace-nowrap">
                {item.featuredBadge}
              </div>
            ) : null}
            <div>
              <div className="flex justify-between items-start mt-2">
                <span className="px-3 py-1 rounded-full bg-forest-700 text-sand-200 text-xs font-semibold tracking-wider uppercase">
                  {item.badge}
                </span>
                <span className="text-xs text-sand-300 font-medium">{item.meta}</span>
              </div>
              <h3 className="font-serif text-2xl text-sand-50 font-semibold mt-5 mb-2">
                {item.title}
              </h3>
              <p className="text-sand-300 text-sm font-light mb-6">{item.description}</p>
              <p className="font-serif text-2xl text-sand-50 font-semibold mb-8">
                {item.pricing}
              </p>
              <ul className="space-y-3.5 text-xs text-sand-200 font-medium pb-8 border-b border-forest-700">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon tone="terracotta" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <WhatsAppButton
              message={item.whatsappMessage}
              showIcon={false}
              className="mt-8 block text-center w-full py-3.5 rounded-full bg-terracotta text-white hover:bg-terracotta-dark text-xs font-semibold uppercase tracking-widest transition-colors shadow"
            >
              {item.ctaLabel}
            </WhatsAppButton>
          </div>
        ) : (
          <div
            key={item.id}
            className="bg-sand-50 rounded-3xl p-8 lg:p-10 border border-forest/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-sand-200 text-forest text-xs font-semibold tracking-wider uppercase">
                  {item.badge}
                </span>
                <span className="text-xs text-sage-muted font-medium">{item.meta}</span>
              </div>
              <h3 className="font-serif text-2xl text-forest font-semibold mt-5 mb-2">
                {item.title}
              </h3>
              <p className="text-forest/75 text-sm font-light mb-6">{item.description}</p>
              <p className="font-serif text-2xl text-forest font-semibold mb-8">
                {item.pricing}
              </p>
              <ul className="space-y-3.5 text-xs text-forest/80 font-medium pb-8 border-b border-forest/10">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon tone="sage" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <WhatsAppButton
              message={item.whatsappMessage}
              showIcon={false}
              className="mt-8 block text-center w-full py-3.5 rounded-full border border-forest/30 text-forest hover:bg-forest hover:text-sand-50 text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              {item.ctaLabel}
            </WhatsAppButton>
          </div>
        ),
      )}
    </div>
  );
}
