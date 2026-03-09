
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { StaticImageData } from "next/image";
// Image imports removed; use string paths for public images


const services = [
  {
    title: "Boarding — Slumber Paw-ty",
    subtitle:"Boarding",
    desc: "Overnight stays where your dog sleeps in a safe, climate-controlled home with constant supervision. Includes evening walks, bedtime snuggles, and morning play.",
    includes: ["Overnight care", "Evening & morning walks", "Meals & fresh water", "Photo updates"],
    icon: "🌙",
    bg: "bg-rose/20",
  },
  {
    title: "Daycare — Daytail Club",
    subtitle:"Daycare",
    desc: "Full-day supervised care from 6am to 6pm. Structured play sessions, rest time, and socialization with a small group of vetted dogs.",
    includes: ["6am–6pm hours", "Structured play", "Rest periods", "Socialization"],
    icon: "☀️",
    bg: "bg-gold/20",
  },
  {
    title: "Half Day — Sniff & Go",
    subtitle:"Half Day",
    desc: "Perfect for short workdays or errands. A few hours of supervised fun and enrichment for your pup.",
    includes: ["Flexible hours", "Supervised play", "Great for short needs"],
    icon: "🐾",
    bg: "bg-sage/20",
  },
  {
    title: "Transport — Pup Express",
    subtitle:"Transport",
    desc: "Safe, reliable pick-up and drop-off within the Port St. Lucie area. We come to you so your pup rides in comfort.",
    includes: ["Local area coverage", "Safe vehicle transport", "Flexible scheduling"],
    icon: "🚗",
    bg: "bg-peach/20",
  },
  {
    title: "Add-on — Shine & Fluff",
    subtitle:"BathBrush",
    desc: "Bath & brush add-on available with any service. Your pup goes home looking and smelling fresh!",
    includes: ["Bath & brush", "Available as add-on", "Fresh & clean pickup"],
    icon: "✨",
    bg: "bg-rose/20",
  },
];

const serviceImages: Record<string, string> = {
  Boarding: "/images/boarding-trans.png",
  Daycare: "/images/daycare-trans.png",
  "Half Day": "/images/halfday-trans.png",
  Transport: "/images/transport-trans.png",
  BathBrush: "/images/bathbrush-trans.png",
};

const Services = () => (
  <>
    {/* Hero */}
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-60">
               <video
              src="/videos/cousinyard.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/videos/cousinyard.mp4"
            >
              Sorry, your browser does not support embedded videos.
            </video>
      </div>
      <div className="relative container text-center">
        <img src="/images/cousin-haven-logo-brown.png" alt="Cousin Haven" className="h-12 mx-auto mb-6" width={81} height={40} loading="lazy" decoding="async" style={{ color: 'transparent' }} />
        <h1 className="font-display text-4xl md:text-5xl mb-4">Cousin Haven Services</h1>
        <p className="font-body font-bold text-white max-w-lg mx-auto text-lg">
          Quality over quantity. Limited spots. Maximum love.
        </p>
      </div>
    </section>

    {/* Services List */}
    <section className="py-16">
      <div className="container space-y-8">
        {services.map((s, i) => (
          <div key={i} className={`rounded-2xl p-8 ${s.bg} border`}>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <img src={serviceImages[s.subtitle]} alt={s.subtitle} className="service-img-mobile  mb-4 block md:h-20" loading="lazy" decoding="async" style={{ color: 'transparent' }} />
              <div className="flex-1">
                <h2 className="font-subhead text-2xl mb-2">{s.title}</h2>
                <p className="font-body text-muted-foreground mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.includes.map((item, j) => (
                    <span key={j} className="font-body text-xs px-3 py-1 rounded-full bg-[color:var(--background)] border">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Capacity Note + CTA */}
    <section className="py-16 bg-card">
      <div className="container text-center">
        <p className="font-body text-muted-foreground mb-6 max-w-md mx-auto">
          We intentionally keep our group sizes small to ensure every dog receives the attention and care they deserve.
        </p>
        <Link
          href="/book"
          className="inline-flex items-center gap-2 font-subhead px-8 py-4 rounded-full bg-primary text-primary-foreground shadow-warm hover:scale-105 transition-transform"
        >
          Book a Meet & Greet <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </>
);

export default Services;
