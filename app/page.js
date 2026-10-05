import Image from "next/image";
import Link from "next/link";
import { unsplash, PHOTOS } from "@/lib/images";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import CategoryTile from "@/components/CategoryTile";
import ProductCard from "@/components/ProductCard";
import ParallaxHero from "@/components/motion/ParallaxHero";
import ScrollReveal from "@/components/motion/ScrollReveal";
import TiltCard from "@/components/motion/TiltCard";

const NEW_ARRIVALS = PRODUCTS.filter((p) => p.isNew).slice(0, 4);

const WHY_US = [
  {
    n: "01",
    title: "Consultation & Design",
    body: "Your floor layout planned before a single machine ships.",
  },
  {
    n: "02",
    title: "Equipment Supply",
    body: "Cardio, strength and functional equipment — one order, one vendor.",
  },
  {
    n: "03",
    title: "Installation & Setup",
    body: "Installed and calibrated on-site by our own team.",
  },
  {
    n: "04",
    title: "Ongoing Support",
    body: "Maintenance and spare parts long after doors open.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero — scroll-parallax background */}
      <ParallaxHero
        src={unsplash(PHOTOS.heroFloor, { w: 1920, h: 1200, q: 80 })}
        heightClass="min-h-[680px] md:h-[85vh] md:min-h-[620px]"
      >
        <p className="text-olympia-red font-bold text-sm tracking-[0.2em] uppercase mb-4">
          Commercial Gym Equipment
        </p>
        <h1 className="font-display text-5xl sm:text-7xl uppercase leading-[0.95] mb-6 max-w-2xl text-olympia-black">
          Built at Dawn.
          <br />
          <span className="text-olympia-red">Still Running at Midnight.</span>
        </h1>
        <p className="text-black/65 max-w-md mb-8 text-base sm:text-lg">
          Commercial cardio, strength and multi-station equipment for gyms
          opening across India.
        </p>
        <Link
          href="/products"
          className="inline-block bg-olympia-red hover:bg-olympia-redBright transition-colors text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-wide text-sm"
        >
          Browse Equipment
        </Link>
      </ParallaxHero>

      {/* Category tiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl uppercase tracking-wide">
              Shop by Category
            </h2>
            <p className="text-white/50 mt-2">
              Everything you need to fit out a commercial gym floor
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((c, i) => (
            <ScrollReveal key={c.slug} delay={i * 0.06} rotate={14}>
              <TiltCard>
                <CategoryTile category={c} />
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* New arrivals */}
      <section className="bg-olympia-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl uppercase tracking-wide">
                New Arrivals
              </h2>
              <p className="text-white/50 mt-2">Recently added to the catalog</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {NEW_ARRIVALS.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 0.06} rotate={14}>
                <TiltCard>
                  <ProductCard product={p} />
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl uppercase tracking-wide">
              Why Olympia Fitness
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {WHY_US.map((item, i) => (
            <ScrollReveal key={item.n} delay={i * 0.08} y={24} rotate={8}>
              <div>
                <span className="font-display text-4xl text-olympia-red block mb-3">
                  {item.n}
                </span>
                <h3 className="font-semibold text-sm uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-olympia-red">
        <ScrollReveal y={0} rotate={0} className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-black">
            <p className="font-display text-2xl sm:text-3xl uppercase text-center sm:text-left">
              120+ Gyms Equipped Across India
            </p>
            <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-wide">
              <span>ISO 9001</span>
              <span>Partner Certified</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl uppercase tracking-wide">
              Gyms We&rsquo;ve Equipped
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[PHOTOS.heroFloor, PHOTOS.darkRed, PHOTOS.multiStation].map(
            (photo, i) => (
              <ScrollReveal key={i} delay={i * 0.1} rotate={16}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={unsplash(photo, { w: 700, h: 525 })}
                    alt="Gym installation by Olympia Fitness"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            )
          )}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/company"
            className="text-olympia-red text-sm font-bold uppercase tracking-wide"
          >
            See More Installations &rarr;
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-olympia-charcoal border-t border-white/10 py-24 text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl sm:text-5xl uppercase mb-8">
            Ready to Build Your Gym?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-olympia-red hover:bg-olympia-redBright transition-colors text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-wide text-sm"
          >
            Get in Touch
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
