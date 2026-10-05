import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/motion/ScrollReveal";

export const metadata = {
  title: "Contact — Olympia Fitness",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
      <ScrollReveal>
        <h1 className="font-display text-5xl uppercase tracking-wide mb-4">
          Contact
        </h1>
        <p className="text-white/60 mb-12 max-w-xl">
          Have a question before you enquire about equipment? Reach us
          directly, or send a message below.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ScrollReveal delay={0.05} rotate={8}>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone size={20} className="text-olympia-red mt-1 shrink-0" />
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:9058858077" className="text-white/60 hover:text-white">
                  9058858077
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={20} className="text-olympia-red mt-1 shrink-0" />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:info@olympiafitness.example"
                  className="text-white/60 hover:text-white"
                >
                  info@olympiafitness.example
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-olympia-red mt-1 shrink-0" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-white/60">
                  123 Industrial Road, City, State, PIN
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} rotate={8}>
          <ContactForm />
        </ScrollReveal>
      </div>
    </div>
  );
}
