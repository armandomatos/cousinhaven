import Link from "next/link";
import { Heart, Home, Shield, Star, ArrowRight } from "lucide-react";
import WhyDogsFeelAtHome from "@/components/WhyDogsFeelAtHome";
import HomeFAQ from "@/components/HomeFAQ";
import BalancedDay from "@/components/BalancedDay";

const services = [
  {
    title: "Boarding",
    subtitle: "Slumber Paw-ty",
    desc: "Overnight stays in a cozy, supervised home environment. Your pup sleeps safe and loved.",
    icon: "🌙",
  },
  {
    title: "Daycare",
    subtitle: "Daytail Club",
    desc: "Full-day care from 6am–6pm with structured play, rest, and socialization.",
    icon: "☀️",
  },
  {
    title: "Half Day",
    subtitle: "Sniff & Go",
    desc: "Perfect for quick errands or short workdays. A few hours of supervised fun.",
    icon: "🐾",
  },
  {
    title: "Transport",
    subtitle: "Pup Express",
    desc: "Safe pick-up and drop-off within the Port St. Lucie area.",
    icon: "🚗",
  },
];
const serviceImages: Record<string, string> = {
  Boarding: "/images/boarding.png",
  Daycare: "/images/daycare.png",
  "Half Day": "/images/halfday.png",
  Transport: "/images/transport.png",
};
const steps = [
  { num: "1", text: "Book a Meet & Greet" },
  { num: "2", text: "Sign Agreement & review Policies" },
  { num: "3", text: "Send vaccine records" },
  { num: "4", text: "Confirm your booking" },
];
const testimonials = [
  {
    name: "Wendi B.",
    text: "My puppy had the best time!  Cousin Haven gave him love, developed his make dog friend skills, and gave him great outdoor exercise time!  Anubis had zero separation anxiety because he was so happy to see Armando and all his new friends/ cousins!  If you are looking for a positive and loving daycare for your dog, definitely take him to Cousin Haven! dog has never been happier! The home environment makes all the difference. Nia truly cares.",
  },
  {
    name: "Mary S.",
    text: "We love Cousin Haven. Armando has taken care of our Lola twice now. There are always daily updates. The dogs are well loved and treated like his own. No kennels or crates. Just lots of love and play time. I cannot say enough good things about Cousin Haven. We have found our forever boarder.",
  },
  {
    name: "Anniecia C.",
    text: "The Best Dog sitter in Port Saint Lucie!! Great Customer Service, Provides safe clean and fun environment for my dog Coco since she was 11 weeks old , she’s now almost 10. Months. Armando and his family treat your pup like family so thats the care and attention they will receive . Check him out for your sitting or boarding needs you wont regret it !!",
  },
];

export default function Index() {
  return (
    <>
      {/* JSON-LD LocalBusiness structured data for SEO */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Cousin Haven by Nia Matos",
          "image": "https://niamatos.com/assets/nia-matos-logo-brown.png",
          "url": "https://niamatos.com/",
          "telephone": "+18186973791",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Port St. Lucie",
            "addressRegion": "FL",
            "addressCountry": "US"
          },
          "description": "Home-style dog boarding, daycare, and transport in Port St. Lucie, FL. Small groups, supervised play, and a real home for your dog.",
          "areaServed": "Port St. Lucie, FL",
          "priceRange": "$$",
          "sameAs": [
            "https://www.instagram.com/nia.matos?igsh=MXgxdGdtN2RlbDZrdA%3D%3D&utm_source=qr",
            "https://www.facebook.com/share/17YVzkfKcY/?mibextid=wwXIfr"
          ]
        })}
      </script>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground" aria-label="Hero">
        <div className="absolute inset-0 opacity-30">
          <video
            src="/videos/herovideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/videos/herovideo.mp4"
          >
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
        <div className="relative container py-24 md:py-36">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6">
              Home-style dog boarding & daycare in Port St. Lucie
            </h1>
            <p className="font-body text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
             Small groups, supervised play, rest, social balance, and enrichment in a real home — not a kennel.
            </p>
            <nav aria-label="Primary call to action" className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 font-subhead px-8 py-4 rounded-full bg-secondary text-secondary-foreground shadow-gold hover:scale-105 transition-transform text-lg"
              >
                Book a Free Meet & Greet <ArrowRight size={20} />
              </Link>
              <Link
                href="/ebook"
                className="inline-flex items-center justify-center gap-2 font-subhead px-8 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-colors text-lg"
              >
                Get the Ebook
              </Link>
            </nav>
          </div>
        </div>
      </section>
      {/* Trust Block */}
      <section className="py-16 md:py-20 bg-card" aria-label="Why Choose Us">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Home size={28} />, title: "A Real Home Environment", desc: "No cold kennels or crowded rooms. Dogs stay in a calm home setting with space to move, settle, explore, and feel safe." },
              { icon: <Shield size={28} />, title: "Fully Supervised, Thoughtfully Guided", desc: "Dogs are never left to “figure it out alone.” Play, rest, and social interaction are monitored to help keep the day balanced and safe." },
              { icon: <Heart size={28} />, title: "Small Groups, Better Experience", desc: "We keep groups small so each dog gets closer supervision, more personalized attention, and a more comfortable social environment." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-background shadow-warm animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="w-14 h-14 rounded-full bg-secondary/30 flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h2 className="font-subhead text-xl mb-2">{item.title}</h2>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Balanced Day */}
      <BalancedDay />
      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-card" aria-label="Our Services">
        <div className="container">
          <div className="text-center mb-12">
            <img src="/images/cousin-haven-logo-brown.png" alt="Cousin Haven by Nia Matos logo" className="h-10 mx-auto mb-4 opacity-70" height={40} width={68} loading="lazy" decoding="async" style={{ color: 'transparent' }} />
            <h2 className="font-display text-3xl md:text-4xl mb-3">Our Services</h2>
            <p className="font-body text-muted-foreground max-w-md mx-auto">
              Thoughtful, home-style services designed to support comfort, routine, play, rest, and well-being — whether your pup stays for a few hours, the full day, or overnight.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-background border hover:shadow-warm transition-all duration-300 hover:-translate-y-1 "
              >
                <img src={serviceImages[s.title]} alt={s.title + ' service icon'} className="mb-4 block h-16 service-img-mobile" height={64} width={64} loading="lazy" decoding="async" style={{ color: 'transparent' }} />
                <h3 className="px-8  inline-flex  rounded-full font-subhead bg-primary  text-lg text-gold mb-1">{s.title}</h3>
                <p className=" font-body font-bold text-xs mb-2">{s.subtitle}</p>
                <p className="font-body text-sm text-muted-foreground mb-4">{s.desc}</p>
                <Link
                  href="/services"
                  className="font-body text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  aria-label={`Learn more about ${s.title}`}
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How it Works */}
      <section className="py-16 md:py-24 " aria-label="How It Works">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">How It Works</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto" aria-label="Steps to book">
            {steps.map((step, i) => (
              <li key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-display text-xl flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <p className="font-body text-sm">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="text-center mt-10">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 font-subhead px-8 py-4 rounded-full bg-primary text-primary-foreground shadow-warm hover:scale-105 transition-transform"
              aria-label="Start Booking"
            >
              Start Booking <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      {/* Why Dogs Feel at Home */}
      <WhyDogsFeelAtHome />

      

      {/* Testimonials */}
      <section className="py-16 md:py-24" aria-label="Testimonials">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">What Paw-rents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <article key={i} className="p-6 rounded-2xl bg-card border" aria-label={`Testimonial from ${t.name}`}>
                <div className="flex gap-1 mb-3 text-gold">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="font-body text-sm text-muted-foreground mb-4 italic">"{t.text}"</blockquote>
                <p className="font-subhead text-sm">— {t.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ */}
      <HomeFAQ />
      {/* Image Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden" aria-label="Join the Family">
        <img src="/images/cousinsinside.png" alt="Happy dogs in a home" className="w-full h-full object-cover" style={{ objectFit: 'cover', width: '100%', height: '100%' }} loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
          <div className="text-center text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Ready to join the family?</h2>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 font-subhead px-8 py-4 rounded-full bg-secondary text-secondary-foreground shadow-gold hover:scale-105 transition-transform"
              aria-label="Book a Meet & Greet"
            >
              Book a Free Meet & Greet <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
