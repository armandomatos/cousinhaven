import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    desc: "Safe, reliable pick-up and drop-off for clients in the Port St. Lucie area.\nPup Express will return soon — check back or ask at your Meet & Greet for current availability.",
    includes: ["Pick-up and drop-off within 10 miles", "Local Port St. Lucie coverage", "Comfortable, safe transportation"],
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
    {/* Our Rates */}
    <section className="py-16 bg-card">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-3">Our Rates</h2>
        <p className="font-body text-muted-foreground text-center max-w-lg mx-auto mb-10">
          Small groups of up to 6 cousins — availability depends on playgroup fit.
        </p>
        <div className="max-w-3xl mx-auto rounded-2xl border bg-background overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-subhead">Service</TableHead>
                <TableHead className="font-subhead text-center">Adult dog</TableHead>
                <TableHead className="font-subhead text-center">Puppy (&lt;1 yr)</TableHead>
                <TableHead className="font-subhead text-center">2nd dog</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-subhead">Boarding — Slumber Paw-ty</TableCell>
                <TableCell className="text-center font-body">$55 / night</TableCell>
                <TableCell className="text-center font-body">$60 / night</TableCell>
                <TableCell className="text-center font-body">+$45 / night</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-subhead">Doggy Daycare — Daytail Club</TableCell>
                <TableCell className="text-center font-body">$45 / day</TableCell>
                <TableCell className="text-center font-body">$50 / day</TableCell>
                <TableCell className="text-center font-body">+$35 / day</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-subhead">Half Day — Sniff & Go</TableCell>
                <TableCell className="text-center font-body">$30 / day</TableCell>
                <TableCell className="text-center font-body">$35 / day</TableCell>
                <TableCell className="text-center font-body">+$25 / day</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-subhead">Bath & Brush — Shine & Fluff</TableCell>
                <TableCell colSpan={3} className="text-center font-body text-muted-foreground italic">
                  Add-on — ask at booking
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-subhead">Cousin Club Pass</TableCell>
                <TableCell className="text-center font-body">from $245 / mo</TableCell>
                <TableCell className="text-center font-body">from $270 / mo</TableCell>
                <TableCell className="text-center font-body text-muted-foreground italic">2-dog pricing available</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p className="font-body text-xs text-muted-foreground text-center max-w-2xl mx-auto mt-6 leading-relaxed">
          Holiday rates apply on select peak dates (+$10/night boarding, +$5/day daycare). Extended pickup available until 10 PM — approval only, fees apply. Transport (Pup Express) temporarily paused. Full rate details shared after your Meet &amp; Greet.
        </p>
      </div>
    </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container space-y-8">
          {services.map((s, i) => (
            <div key={i} className="relative">
           
            <div key={i} className={`rounded-2xl p-8 ${s.bg} border `}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <img src={serviceImages[s.subtitle]} alt={s.subtitle} className="service-img-mobile  mb-4 block md:h-20" loading="lazy" decoding="async" style={{ color: 'transparent' }} />
                <div className="flex-1">
                  <h2 className="font-subhead text-2xl mb-2">{s.title}</h2>
                  {s.paused && (
                    <p className="mb-2 font-weight: bold;">⏸ Temporarily Paused.</p>
                  )}
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
          </div>
          ))}
        </div>
      </section>

    {/* Cousin Club Pass */}
    <section className="py-16 bg-card">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-4xl mb-4 block">🎟️</span>
          <h2 className="font-display text-3xl md:text-4xl mb-3">Cousin Club Pass — Monthly Daycare for Regulars</h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            For cousins who come consistently, the Club Pass reserves your dog's spot in their regular playgroup and gives you a predictable monthly rate — no daily booking, no availability stress.
          </p>
        </div>
        <div className="max-w-4xl mx-auto rounded-2xl border bg-background overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-subhead">Tier</TableHead>
                <TableHead className="font-subhead">Schedule</TableHead>
                <TableHead className="font-subhead text-center">Days / month</TableHead>
                <TableHead className="font-subhead text-center">Adult dog</TableHead>
                <TableHead className="font-subhead text-center">Puppy (&lt;1 yr)</TableHead>
                <TableHead className="font-subhead text-center">You save vs. per visit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-subhead">Flex</TableCell>
                <TableCell className="font-body text-muted-foreground">Flexible days — 48h advance booking</TableCell>
                <TableCell className="text-center font-body">6 days</TableCell>
                <TableCell className="text-center font-body">$245</TableCell>
                <TableCell className="text-center font-body">$270</TableCell>
                <TableCell className="text-center font-body text-primary">up to $25</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-subhead">Steady</TableCell>
                <TableCell className="font-body text-muted-foreground">Flexible days — 48h advance booking</TableCell>
                <TableCell className="text-center font-body">10 days</TableCell>
                <TableCell className="text-center font-body">$399</TableCell>
                <TableCell className="text-center font-body">$445</TableCell>
                <TableCell className="text-center font-body text-primary">up to $51</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-subhead">MWF</TableCell>
                <TableCell className="font-body text-muted-foreground">Mon, Wed & Fri — fixed schedule</TableCell>
                <TableCell className="text-center font-body">13 days</TableCell>
                <TableCell className="text-center font-body">$495</TableCell>
                <TableCell className="text-center font-body">$550</TableCell>
                <TableCell className="text-center font-body text-primary">up to $90</TableCell>
              </TableRow>
              <TableRow className="bg-primary/10">
                <TableCell className="font-subhead">Everyday</TableCell>
                <TableCell className="font-body text-muted-foreground">Mon–Fri all weekdays — fixed</TableCell>
                <TableCell className="text-center font-body">~22 days</TableCell>
                <TableCell className="text-center font-body">$810</TableCell>
                <TableCell className="text-center font-body">$900</TableCell>
                <TableCell className="text-center font-body text-primary">up to $180</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p className="font-body text-sm text-muted-foreground text-center max-w-2xl mx-auto mt-6 leading-relaxed border rounded-xl px-6 py-4">
          Monthly · auto-renews · 30-day written cancellation notice required · days do not roll over · spot reserved in your cousin's regular playgroup. Multi-dog pricing available — ask after your Meet &amp; Greet.
        </p>
        <div className="text-center mt-10">
        <Link
            href="/book"
            className="inline-flex items-center gap-2 font-subhead px-8 py-4 rounded-full bg-primary text-primary-foreground shadow-warm hover:scale-105 transition-transform"
          >
            Book a Free Meet & Greet to Join the Club <ArrowRight size={18} />
          </Link>
          </div>
      </div>
    </section>

    {/* Positioning Statement */}
    <section className="py-16 ">
      <div className="container text-center max-w-2xl mx-auto">
        <p className="font-body text-lg text-foreground leading-relaxed">
          We keep our groups intentionally small — up to 6 cousins — so every dog gets real attention, structured time, and a day that supports their well-being. If you're looking for the cheapest option, we're probably not your fit. If you want your dog cared for the way you'd care for them yourself, let's talk.
        </p>
      </div>
    </section>S

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
