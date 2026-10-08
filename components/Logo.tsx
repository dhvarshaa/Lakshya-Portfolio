import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Logo() {
  return (
    <Link
      aria-label={`${site.name} ${site.byline}, home`}
      className="inline-flex shrink-0"
      href="/"
    >
      <Image
        src="/images/lakshya-emblem.png"
        alt=""
        width={512}
        height={512}
        priority
        className="h-11 w-11 md:h-12 md:w-12"
      />
    </Link>
  );
}
