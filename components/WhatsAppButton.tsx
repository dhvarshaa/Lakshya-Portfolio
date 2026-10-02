import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

type WhatsAppButtonProps = {
  message?: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
};

export function WhatsAppButton({
  message,
  children,
  className = "",
  showIcon = true,
}: WhatsAppButtonProps) {
  return (
    <a
      className={className}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {showIcon ? <WhatsAppIcon /> : null}
      {children}
    </a>
  );
}
