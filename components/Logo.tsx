import Link from "next/link";

type LogoProps = {
  variant?: "header" | "footer";
};

export function Logo({ variant = "header" }: LogoProps) {
  if (variant === "footer") {
    return (
      <div className="flex items-center gap-3">
        <svg
          fill="none"
          height="36"
          viewBox="0 0 60 60"
          width="36"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M12 40C12 28.5 21 19 32 19C43 19 52 28.5 52 40"
            stroke="#E8C3B3"
            strokeLinecap="round"
            strokeWidth="2.5"
          />
          <circle cx="32" cy="14" fill="#C27D60" r="4.5" />
          <path
            d="M32 40V26"
            stroke="#E8C3B3"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
        <span className="font-serif text-xl tracking-wider text-sand-50 font-semibold">
          LAKSHYA DHAMA
        </span>
      </div>
    );
  }

  return (
    <Link
      aria-label="Lakshya Dhama Yoga home"
      className="flex items-center gap-3"
      href="/"
    >
      <svg
        className="w-[220px] sm:w-[250px] h-auto"
        fill="none"
        viewBox="0 0 300 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 38C28 27.5 36.5 19 47 19C57.5 19 66 27.5 66 38"
          stroke="#4A5D4E"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <circle cx="47" cy="14" fill="#C27D60" r="4" />
        <path
          d="M47 38V25"
          stroke="#4A5D4E"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M38 34C42 30 47 30 47 30"
          stroke="#4A5D4E"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
        <path
          d="M56 34C52 30 47 30 47 30"
          stroke="#4A5D4E"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
        <text
          fill="#212B24"
          fontFamily="var(--font-playfair), Georgia, serif"
          fontSize="20"
          fontWeight="600"
          letterSpacing="0.12em"
          x="78"
          y="32"
        >
          LAKSHYA DHAMA
        </text>
        <text
          fill="#78867B"
          fontFamily="var(--font-plus-jakarta), system-ui, sans-serif"
          fontSize="8.5"
          fontWeight="500"
          letterSpacing="0.25em"
          x="79"
          y="44"
        >
          YOGA &amp; STRENGTH
        </text>
      </svg>
    </Link>
  );
}
