import Link from "next/link";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#212B24]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 md:h-24 flex items-center justify-between">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-forest/80"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              className="hover:text-forest transition-colors"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <WhatsAppButton
          showIcon={false}
          className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-forest text-sand-50 hover:bg-forest-700 text-xs font-semibold tracking-widest uppercase transition-colors"
        >
          Book free trial
        </WhatsAppButton>
      </div>
    </header>
  );
}
