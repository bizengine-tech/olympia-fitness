import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

// Persistent, site-wide WhatsApp entry point. Per the site's category
// convention (see the wireframe notes), this is the ONE always-visible
// direct-contact affordance — product pages don't duplicate it with a
// second button, they rely on this floating one plus the "Add to Enquiry"
// flow that ends on the /cart page.
export default function WhatsAppButton() {
  const href = buildWhatsAppLink(
    "Hi Olympia Fitness, I'd like to know more about your gym equipment."
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle size={28} color="white" fill="white" />
    </a>
  );
}
