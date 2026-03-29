import Link from "next/link";
import { ArrowRight, Users, Home, Clock, TreePine, Moon } from "lucide-react";

const points = [
  {
    icon: <Users size={24} />,
    title: "Small groups",
    desc: "We keep our groups small so every cousin gets closer supervision, more personal attention, and a calmer experience.",
  },
  {
    icon: <Home size={24} />,
    title: "Cage-free home environment",
    desc: "Our regular model is cage-free, so dogs stay in a warm home setting instead of spending their day in kennels or crates.",
  },
  {
    icon: <Clock size={24} />,
    title: "Structured play, rest, and social time",
    desc: "We don't believe in chaos or nonstop stimulation. We believe in balance.",
  },
  {
    icon: <TreePine size={24} />,
    title: "Space to sniff, explore, and move naturally",
    desc: "The Cousin Yard gives dogs room to run, sniff, explore, and enjoy the day in a more natural way.",
  },
  {
    icon: <Moon size={24} />,
    title: "Close overnight companionship",
    desc: "At night, dogs stay inside the home in a family-style setting that helps many of them settle more comfortably.",
  },
];

const WhyDogsFeelAtHome = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Why dogs feel at home here
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            At Cousin Haven by Nia Matos, care goes beyond supervision. Our cousins enjoy a real home environment with small groups, structured play, rest, social time, and space to sniff, explore, and settle comfortably.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mt-3">
            We believe dogs need more than a place to stay. They need a calm, home-like experience that supports movement, emotional comfort, and everyday routines that feel natural.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {points.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-background border shadow-warm hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center text-primary mb-4">
                {p.icon}
              </div>
              <h3 className="font-subhead text-lg mb-2">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="font-body text-muted-foreground italic mb-6">
            Because real dog care should support body, mind, and emotions — not just fill the day.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 font-subhead px-8 py-4 rounded-full bg-primary text-primary-foreground shadow-warm hover:scale-105 transition-transform"
          >
            Book a Meet & Greet <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyDogsFeelAtHome;
