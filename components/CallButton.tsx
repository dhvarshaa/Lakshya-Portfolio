import { site, telUrl } from "@/lib/site";

type CallButtonProps = {
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
};

export function CallButton({
  children,
  className = "",
  showIcon = true,
}: CallButtonProps) {
  return (
    <a className={className} href={telUrl()}>
      {showIcon ? (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.68l1.5 4.49a1 1 0 0 1-.5 1.21l-2.26 1.13a11.04 11.04 0 0 0 5.52 5.52l1.13-2.26a1 1 0 0 1 1.21-.5l4.49 1.5a1 1 0 0 1 .68.95V19a2 2 0 0 1-2 2h-1C9.72 21 3 14.28 3 6V5z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {children ?? `Call ${site.phoneDisplay}`}
    </a>
  );
}
