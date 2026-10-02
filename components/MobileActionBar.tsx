import { CallButton } from "./CallButton";
import { WhatsAppButton } from "./WhatsAppButton";

export function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 gap-2 p-3 bg-[#FBF9F5]/95 backdrop-blur-md border-t border-forest/10">
      <WhatsAppButton
        showIcon={false}
        className="flex items-center justify-center gap-2 py-3 rounded-full bg-whatsapp text-white text-sm font-semibold"
      >
        WhatsApp
      </WhatsAppButton>
      <CallButton
        showIcon={false}
        className="flex items-center justify-center gap-2 py-3 rounded-full border border-forest/25 text-forest text-sm font-semibold"
      >
        Call
      </CallButton>
    </div>
  );
}
