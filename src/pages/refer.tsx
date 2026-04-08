import { Heart, Home, Shield, Camera, ArrowRight, MapPin, Star } from "lucide-react";
import cousinHavenLogo from "@/assets/cousin-haven-logo-dark.png";

const trustPoints = [
  { icon: <Shield size={22} />, text: "Small-group care for closer supervision" },
  { icon: <Home size={22} />, text: "100% cage-free home environment" },
  { icon: <Heart size={22} />, text: "Personalized attention for every cousin" },
  { icon: <Camera size={22} />, text: "Photos and updates for peace of mind" },
];

const services = [
  { emoji: "🌙", name: "Slumber Paw-ty", desc: "home-style boarding" },
  { emoji: "☀️", name: "Daytail Club", desc: "full-day daycare" },
  { emoji: "🐾", name: "Sniff & Go", desc: "half-day daycare" },
  { emoji: "🛁", name: "Shine & Fluff", desc: "bath & brush add-on" },
];

const serviceImages: Record<string, string> = {
  "Slumber Paw-ty": "/images/boarding.png",
  "Daytail Club": "/images/daycare.png",
  "Sniff & Go": "/images/halfday.png",
  "Shine & Fluff": "/images/bathbrush.png",
};
const whatsappLink =
  "https://wa.me/18186973791?text=Hi%21%20I%20was%20referred%20to%20Cousin%20Haven%20and%20would%20love%20to%20request%20a%20Meet%20%26%20Greet%20for%20my%20dog.%20I%E2%80%99m%20looking%20for%20boarding%2Fdaycare.";

const Refer = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
        {/* Header / Logo */}
      <header className="py-6 bg-card border-b">
        <div className="container flex justify-center">
        <img src="/images/cousin-haven-logo-brown.png" alt="Cousin Haven" className="h-12" />
        </div>
      </header>
      {/* Section 1 — Hero */}
      <section  className="relative overflow-hidden bg-gradient-hero text-primary-foreground" aria-label="Hero">
          <div className="absolute inset-0 opacity-30">
            <img
             src="/images/cousinrefer1.png"
             alt="Happy dogs in a home"
             className="w-full h-full object-cover"
             style={{ objectFit: 'cover', objectPosition: 'top center', width: '100%', height: '100%' }}
             loading="lazy"
             decoding="async"
            />
          </div>
        <div className="relative container py-40 md:py-36max-w-3xl text-center">
          
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-4">
            Referred to Cousin Haven? Welcome.
          </h1>
          <p className="font-subhead text-lg md:text-xl opacity-90 mb-6">
            Small-group, cage-free, home-style dog care in Port St. Lucie.
          </p>
          <p className="font-body text-base md:text-lg opacity-80 leading-relaxed max-w-2xl mx-auto">
            At Cousin Haven by Nia Matos, we keep our group intentionally small so every cousin
            receives close supervision, real home comfort, structured play, rest, and personalized
            care.
          </p>
        </div>
      </section>

      {/* Section 2 — Trust */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-10">
            Why families choose Cousin Haven
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-background border"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-primary shrink-0">
                  {point.icon}
                </div>
                <p className="font-body text-sm md:text-base">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Services */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-10">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border"
              >
                <img src={serviceImages[s.name]} alt={s.name + ' service icon'} className="mb-4 block h-16 service-img-mobile" height={64} width={64} loading="lazy" decoding="async" style={{ color: 'transparent' }} />
                <p className="font-body text-sm md:text-base">
                  <span className="font-subhead">{s.name}</span> — {s.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-muted-foreground text-center italic">
            All new cousins begin with a free Meet & Greet to make sure we are the right fit.
          </p>
        </div>
      </section>

      {/* Section 4 — Location */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container max-w-3xl text-center">
          <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center text-primary mx-auto mb-4">
            <MapPin size={24} />
          </div>
          <h2 className="font-display text-3xl md:text-4xl mb-4">Located in Port St. Lucie</h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Conveniently located near I-95 & Gatlin Blvd for local dog families looking for trusted
            home-style care.
          </p>
        </div>
      </section>

      {/* Section 5 — Social Proof */}
      <section className="py-16 md:py-20">
        <div className="container max-w-2xl text-center">
          <div className="flex justify-center gap-1 mb-6 text-gold">
            {[...Array(5)].map((_, j) => (
              <Star key={j} size={20} fill="currentColor" />
            ))}
          </div>
          <blockquote className="font-body text-lg md:text-xl italic text-muted-foreground mb-4 leading-relaxed">
            "Cousin Haven is truly a paradise for dogs! It was our two pups first time at Cousin Haven and they had the best time of their lives running around, playing, and feeling completely at ease with Armando and his home. He constantly kept us updated with photos and videos, not just of our dogs, but also any new pups coming in so we always knew who was around. That level of care and communication made us feel so comfortable leaving our dogs with him. We definitely recommend Cousin Haven ⭐️11/10!!!⭐️"
          </blockquote>
          <p className="font-subhead text-sm">— Cousin Haven Client</p>
        </div>
      </section>

      {/* Section 6 — Final CTA */}
      <section className="relative py-16 md:py-24 text-primary-foreground overflow-hidden bg-gradient-hero">
        
         <div className="absolute inset-0 opacity-30">
            <img
             src="/images/cousinrefer2.png"
             alt="Happy dogs in a home"
             className="w-full h-full object-cover"
             style={{ objectFit: 'cover', objectPosition: 'top center', width: '100%', height: '100%' }}
             loading="lazy"
             decoding="async"
            />
          </div>
         <div className="container max-w-3xl text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Ready to meet your dog's new home away from home?
          </h2>
          <p className="font-body text-base md:text-lg opacity-90 mb-10 max-w-xl mx-auto">
            We keep spots limited so we can focus on quality, safety, and personalized care. Start
            with a free Meet & Greet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-subhead px-8 py-4 rounded-full bg-secondary text-secondary-foreground shadow-gold hover:scale-105 transition-transform text-lg"
            >
              Request a Meet & Greet on WhatsApp <ArrowRight size={20} />
            </a>
            <a
              href="https://forms.gle/84FHjPf4qeHm3Rzb6"
              className="inline-flex items-center justify-center gap-2 font-subhead px-8 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-colors text-lg"
            >
              Quick Meet & Greet Request Form
            </a>
          </div>
        </div>
      </section>

        {/* Footer */}
      <footer className="py-6 bg-card border-t text-center">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cousin Haven by Nia Matos. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

Refer.noLayout = true;
export default Refer;
