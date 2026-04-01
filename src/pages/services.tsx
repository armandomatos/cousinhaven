import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Boarding — Slumber Paw-ty",
    subtitle: "Boarding",
    desc: "Overnight home-style care for dogs who deserve more than a kennel stay.\nYour pup sleeps in a safe, climate-controlled home environment with supervision, a calm routine, evening wind-down time, and a comfortable start to the next day.",
    includes: ["Overnight home-style care", "Evening routine and morning play & morning walks", "Meals, fresh water, and rest", "Photo updates for peace of mind"],
    icon: "🌙",
    bg: "bg-rose/20",
  },
  {
    title: "Daycare — Daytail Club",
    subtitle: "Daycare",
    desc: "Full-day supervised care from 6am to 6pm in a small-group, home-style setting.\nThe day includes structured play, rest periods, guided social time, and a balanced routine that helps dogs stay engaged without becoming overwhelmed.",
    includes: ["6am–6pm full-day care", "Structured play and rest balance", "Guided social interaction", "Small-group supervised environment"],
    icon: "☀️",
    bg: "bg-gold/20",
  },
  {
    title: "Half Day — Sniff & Go",
    subtitle: "Half Day",
    desc: "A shorter stay for dogs who need care, movement, and support during the day without a full-day visit.\nIdeal for short workdays, errands, or younger dogs who benefit from supervised activity, calm breaks, and a change of environment.",
    includes: ["Flexible shorter stays", "Supervised activity and calm breaks", "Great for errands or lighter coverage","Small-group home-style setting"],
    icon: "🐾",
    bg: "bg-sage/20",
  },
  {
    title: "Transport — Pup Express",
    subtitle: "Transport",
    desc: "Safe, reliable pick-up and drop-off for clients in the Port St. Lucie area.\nPup Express makes getting to and from Cousin Haven easier, with a comfortable ride and a smoother experience for busy dog parents.",
    includes: ["Pick-up and drop-off available", "Local Port St. Lucie coverage", "Safe, comfortable transportation","Helpful for busy schedules"],
    icon: "🚗",
    bg: "bg-peach/20",
    paused: true,
  },
  {
    title: "Add-on — Shine & Fluff",
    subtitle: "BathBrush",
    desc: "A bath and brush add-on available with any stay, so your pup goes home fresh, clean, and photo-ready.\nPerfect for clients who want pick-up to feel easier, cleaner, and more complete.",
    includes: ["Bath and brush add-on", "Available with any service", "Fresh, clean pick-up","Easy finishing touch before going home"],
    icon: "✨",
    bg: "bg-rose/20",
  },
];
const serviceImages: Record<string, string> = {
  Boarding: "/images/boarding.png",
  Daycare: "/images/daycare.png",
  "Half Day": "/images/halfday.png",
  Transport: "/images/transport.png",
  BathBrush: "/images/bathbrush.png",
};

export default function Services() {
  return (
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
          <h1 className="font-display text-4xl md:text-5xl mb-4">Small-group, home-style dog services in Port St. Lucie</h1>
          <p className="font-body font-bold text-white mx-auto text-lg ">
            Carefully designed with supervision, structure, and a real home environment to support comfort, play, rest, and well-being.
          </p>
        </div>
      </section>
      {/* Services List */}
      <section className="py-16">
      <div className="container space-y-8">
        {services.map((s, i) => (
          <div key={i} className="relative">
            {s.paused && (
              <div className="absolute top-4 right-4 z-10 font-subhead text-sm px-4 py-1.5 rounded-full bg-destructive/10 text-destructive border border-destructive/20">
                ⏸ Temporarily paused
              </div>
            )}
            <div className={`rounded-2xl p-8 ${s.bg} border ${s.paused ? 'opacity-40 grayscale' : ''}`}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <span className="text-4xl">{s.icon}</span>
                <div className="flex-1">
                  <h2 className="font-subhead text-2xl mb-2">{s.title}</h2>
                  <p className="font-body text-muted-foreground mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.includes.map((item, j) => (
                      <span key={j} className="font-body text-xs px-3 py-1 rounded-full bg-background border">
                        {item}
                      </span>
                    ))}
                  </div>
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
          <h3 className="font-display text-2xl md:text-3xl mb-4">Why small groups matter</h3>
          <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
            We intentionally keep our groups small so dogs receive closer supervision, more personalized attention, and a more comfortable social experience. That means less chaos, more guidance, and a day that feels safer and more balanced.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 font-subhead px-8 py-4 rounded-full bg-primary text-primary-foreground shadow-warm hover:scale-105 transition-transform"
          >
            Book a Free Meet & Greet <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
