import Image from "next/image";
import { unsplash, PHOTOS } from "@/lib/images";
import ParallaxHero from "@/components/motion/ParallaxHero";
import ScrollReveal from "@/components/motion/ScrollReveal";

export const metadata = {
  title: "Company — Olympia Fitness",
};

export default function CompanyPage() {
  return (
    <div>
      <ParallaxHero
        src={unsplash(PHOTOS.darkRed, { w: 1920, h: 1000, q: 80 })}
        alt="Olympia Fitness gym equipment"
        heightClass="h-[50vh] min-h-[360px]"
      >
        <h1 className="font-display text-5xl uppercase tracking-wide">
          Company
        </h1>
      </ParallaxHero>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <ScrollReveal>
          <h2 className="font-display text-3xl uppercase tracking-wide mb-6">
            Built for Gyms That Never Close
          </h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Olympia Fitness supplies commercial cardio, strength and
            multi-station equipment to gyms opening across India. From first
            consultation to final installation, we handle the full setup — not
            just the machines.
          </p>
          <p className="text-white/70 leading-relaxed">
            Every piece of equipment we ship is welded, load-tested, and built
            to run in gyms with heavy daily traffic — not showroom conditions.
            The frame should still hold after ten thousand reps, and that&rsquo;s
            exactly how we test it before it ships.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-olympia-red text-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            ["120+", "Gyms Equipped"],
            ["15+", "Cities Served"],
            ["1yr", "Warranty, Standard"],
            ["ISO", "9001 Certified"],
          ].map(([num, label], i) => (
            <ScrollReveal key={label} delay={i * 0.08} y={16} rotate={10}>
              <div>
                <p className="font-display text-4xl">{num}</p>
                <p className="text-xs uppercase tracking-wide font-semibold">
                  {label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <ScrollReveal>
          <h2 className="font-display text-3xl uppercase tracking-wide mb-8">
            Gyms We&rsquo;ve Equipped
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[PHOTOS.heroFloor, PHOTOS.multiStation].map((photo, i) => (
            <ScrollReveal key={i} delay={i * 0.1} rotate={14}>
              <div className="relative aspect-[16/10] rounded-sm overflow-hidden">
                <Image
                  src={unsplash(photo, { w: 900, h: 560 })}
                  alt="Gym installed by Olympia Fitness"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
