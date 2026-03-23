
import { Download, ArrowRight } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Link from "next/link";

export default function Policies() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <img src="/images/cousin-haven-logo-brown.png" alt="Cousin Haven" className="h-10 mx-auto mb-4 opacity-70" loading="lazy" decoding="async" style={{ color: 'transparent' }} />
            <h1 className="font-display text-4xl md:text-5xl mb-4">Policies & Requirements</h1>
            <p className="font-body text-muted-foreground">
              Please review our policies before your first visit. Policies may be updated — the latest version will always be posted here.
            </p>
          </div>
          <Accordion type="multiple" className="space-y-4 mb-12">
          {/* DROP-OFF & PICK-UP */}
          <AccordionItem value="drop-off" className="rounded-2xl bg-card border px-6">
            <AccordionTrigger className="font-subhead text-lg">Drop-Off & Pick-Up Procedure</AccordionTrigger>
            <AccordionContent className="font-body text-sm text-muted-foreground space-y-4">
              <p>At Cousin Haven, every pup is family — and keeping all our cousins safe, happy, and stress-free is our top priority.</p>

              <h4 className="font-subhead text-foreground text-base">Drop-Offs</h4>
              <p>On the day of your pup's drop-off, we'll notify you whether it will take place inside or outside. This helps us avoid situations where arriving pups cross paths with pups already inside.</p>
              <p className="font-semibold text-foreground">If outside:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Send us a quick message once you're parked safely.</li>
                <li>We'll meet you outside with a cart and a box for your pup's belongings (food, toys, bed, etc.).</li>
                <li>We'll guide you on where to leave the cart, then carefully bring everything inside.</li>
                <li>We'll walk your pup in ourselves and update you right after on how their first interactions with the cousins went.</li>
              </ul>

              <h4 className="font-subhead text-foreground text-base">Pick-Ups</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>If pups are inside at pick-up time, please notify us once you're safely parked in the driveway.</li>
                <li>We'll walk your pup outside directly to you, ensuring a safe transition.</li>
                <li>After your pup is happily reunited with you, we'll bring out their belongings from the cart.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* HOURS & PICK-UP WINDOWS */}
           <AccordionItem value="hours" className="rounded-2xl bg-card border px-6">
            <AccordionTrigger className="font-subhead text-lg">Hours & Pick-Up Windows</AccordionTrigger>
            <AccordionContent className="font-body text-sm text-muted-foreground space-y-4">
              <p>To protect the routine, playgroups, and family time, we follow set hours.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="text-foreground font-medium">Regular Operating Hours:</span> 6:00 AM – 6:00 PM</li>
                <li><span className="text-foreground font-medium">Late Pick-Up (By Approval Only):</span> Up to 10:00 PM (extended time varies by service — see details below).</li>
              </ul>

              <h4 className="font-subhead text-foreground text-base">Extended Time — Approval Only (Latest Pick-up: 10:00 PM)</h4>
              <p>Extended Time is optional and must be requested and approved in advance. Pick-ups can never be later than 10:00 PM.</p>

              <h4 className="font-subhead text-foreground text-base">Daycare</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Daycare runs until 6:00 PM.</li>
                <li>Pick-up by 6:00 PM: no Extended Time.</li>
                <li>Pick-up after 6:00 PM: Extended Time may be approved up to 10:00 PM.</li>
              </ul>

              <h4 className="font-subhead text-foreground text-base">Boarding (24-Hour Blocks)</h4>
              <p>Boarding is billed in 24-hour blocks from your scheduled check-in time. Your scheduled end time is when your 24-hour block ends.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Pick-up at or before your scheduled end time: no Extended Time.</li>
                <li>Pick-up after your scheduled end time: Extended Time may be approved, as long as:</li>
              </ul>
              <ol className="list-decimal pl-8 space-y-1">
                <li>Your scheduled end time is no later than 6:00 PM, and</li>
                <li>Pick-up is no later than 10:00 PM.</li>
              </ol>

              <h4 className="font-subhead text-foreground text-base">Extended Time Limits (Boarding)</h4>
              <p>Boarding Extended Time may be approved for pick-ups after the scheduled end time, but never later than 10:00 PM. Requests longer than 4 hours are limited and may be approved only when the scheduling allows.</p>

              <h4 className="font-subhead text-foreground text-base">Important Notes</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Extended Time is not automatic. Approval depends on scheduling and capacity.</li>
                <li>Pick-ups after 10:00 PM are not permitted.</li>
              </ul>

              <h4 className="font-subhead text-foreground text-base">No Unapproved Late Pick-Ups</h4>
              <p>For safety and scheduling reasons, any pick-up after 6:00 PM must be requested and approved in advance. Unapproved late pick-ups may result in an additional fee and/or require an Emergency Pick-up Plan.</p>

              <h4 className="font-subhead text-foreground text-base">10:00 PM Cutoff (Strict)</h4>
              <p>Pick-ups after 10:00 PM are not permitted. If an emergency prevents you from picking up by 10:00 PM, notify us immediately so we can confirm the next available solution. Repeated late pick-ups may result in refusal of future service.</p>
            </AccordionContent>
          </AccordionItem>

          {/* HEALTH & SAFETY */}
          <AccordionItem value="health" className="rounded-2xl bg-card border px-6">
            <AccordionTrigger className="font-subhead text-lg">Health & Safety Requirements</AccordionTrigger>
            <AccordionContent className="font-body text-sm text-muted-foreground space-y-4">
              <p>Because cousins spend time together sharing space, toys, water bowls, and lots of happy sniffing, we require an up-to-date digital copy of vaccination records from your veterinarian before your pup's first stay.</p>

              <h4 className="font-subhead text-foreground text-base">Why We Require Records</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="text-foreground font-medium">Disease prevention:</span> Vaccines reduce the risk of contagious illnesses in group settings.</li>
                <li><span className="text-foreground font-medium">Protects vulnerable pups:</span> Puppies, seniors, and immunocompromised dogs depend on community immunity.</li>
                <li><span className="text-foreground font-medium">Faster check-in:</span> Records on file prevent delays at drop-off and help us respond quickly in emergencies.</li>
                <li><span className="text-foreground font-medium">Vet consistency:</span> Records include due dates so we can flag expiring vaccines.</li>
              </ul>

              <h4 className="font-subhead text-foreground text-base">Minimum Required Vaccines</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Rabies – current per your vet and local law</li>
                <li>Distemper/Parvo (DHPP) – current</li>
                <li>Bordetella (Kennel Cough) – current per your vet's schedule</li>
              </ul>

              <h4 className="font-subhead text-foreground text-base">Strongly Recommended</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Canine Influenza (CIV) during seasonal outbreaks or if your vet advises</li>
                <li>Leptospirosis depending on lifestyle/area</li>
                <li>Year-round flea/tick and heartworm prevention</li>
              </ul>

              <h4 className="font-subhead text-foreground text-base">What the Record Should Show</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Dog's name and owner's name</li>
                <li>Vaccine names and dates given (and next due dates if shown)</li>
                <li>Veterinary clinic name and phone/email</li>
              </ul>

              <h4 className="font-subhead text-foreground text-base">How to Send Records (Digital Only)</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Text or WhatsApp: <span className="text-foreground font-medium">(818) 697-3791</span></li>
                <li>Email: <a href="mailto:booking@niamatos.com" className="text-primary underline">booking@niamatos.com</a></li>
              </ul>
              <p>We accept PDFs, photos, or screenshots. You can also ask your vet to email us directly. Please send records 48–24 hours before your first visit.</p>
              <p>If you don't have a copy, with your permission we're happy to request the records from your vet on your behalf.</p>

              <h4 className="font-subhead text-foreground text-base">Nail Care for Safe Play</h4>
              <p>For the safety of your pup, the other cousins, and our team, we kindly recommend that dogs arrive with their nails recently trimmed. Shorter nails help prevent accidental scratches, broken nails, and other avoidable injuries during play.</p>

              <h4 className="font-subhead text-foreground text-base">Privacy</h4>
              <p>We store documents securely and use them only for your pup's care or to share with a veterinarian in an emergency.</p>
            </AccordionContent>
          </AccordionItem>

          {/* PAYMENT & DEPOSITS */}
          <AccordionItem value="payment" className="rounded-2xl bg-card border px-6">
            <AccordionTrigger className="font-subhead text-lg">Payment & Deposits Policy</AccordionTrigger>
            <AccordionContent className="font-body text-sm text-muted-foreground space-y-4">
              <p>For bookings over $200 or during peak/holiday dates, a non-refundable deposit or full prepayment is required to secure your spot.</p>

              <h4 className="font-subhead text-foreground text-base">New Clients</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Stays ≤ $200 → 50% at booking, balance at pick-up.</li>
                <li>Stays &gt; $200 → 100% due before check-in.</li>
              </ul>

              <h4 className="font-subhead text-foreground text-base">Existing Clients</h4>
              <p>Existing clients with good payment history may be allowed to pay part at pick-up for small bookings, at Cousin Haven's discretion.</p>
              <p className="text-foreground font-medium">Bookings are not confirmed until deposit/payment is received.</p>
            </AccordionContent>
          </AccordionItem>

          {/* CANCELLATIONS & NO-SHOWS */}
          <AccordionItem value="cancellations" className="rounded-2xl bg-card border px-6">
            <AccordionTrigger className="font-subhead text-lg">Cancellations & No-Shows</AccordionTrigger>
            <AccordionContent className="font-body text-sm text-muted-foreground space-y-4">
              <p>Because Cousin Haven keeps daily spots limited, last-minute changes affect other families who could have used that spot.</p>

              <h4 className="font-subhead text-foreground text-base">Non-Holiday / Non-Peak Dates</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cancel or reschedule at least <span className="text-foreground font-medium">48 hours (2 days)</span> before check-in to avoid fees.</li>
                <li>Cancellations within 48 hours may result in a cancellation fee of <span className="text-foreground font-medium">$50</span>.</li>
              </ul>

              <h4 className="font-subhead text-foreground text-base">Holiday / Peak Dates</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cancel at least <span className="text-foreground font-medium">72 hours (3 days)</span> before check-in to avoid fees.</li>
                <li>Cancellations within 72 hours may result in a cancellation fee of <span className="text-foreground font-medium">$100</span>.</li>
              </ul>

              <h4 className="font-subhead text-foreground text-base">No-Shows</h4>
              <p>A no-show means the dog does not arrive on the scheduled day and we do not receive a written cancellation notice in time. No-shows are charged the applicable cancellation fee.</p>

              <h4 className="font-subhead text-foreground text-base">Early Pick-Up / Early Return</h4>
              <p>Once a stay begins, early pick-up does not reduce the total. You are responsible for the reserved dates because that spot was held exclusively for your dog.</p>

              <p className="italic text-xs">Note: Cousin Haven may apply or waive fees at its discretion for true emergencies, especially for long-time clients with a strong history.</p>
            </AccordionContent>
          </AccordionItem>

          {/* CAPACITY & PLAYGROUPS */}
          <AccordionItem value="capacity" className="rounded-2xl bg-card border px-6">
            <AccordionTrigger className="font-subhead text-lg">Capacity, Playgroups & Discretion</AccordionTrigger>
            <AccordionContent className="font-body text-sm text-muted-foreground space-y-4">
              <p className="italic text-xs">Effective Jan 2026</p>
              <p>Cousin Haven keeps daily spots limited and capacity may vary based on safe playgroup matching, including temperament, energy level, play style, and overall fit.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>For safety and quality, acceptance is always at Cousin Haven's discretion, even if a date appears available.</li>
                <li>Our focus remains quality over quantity — every cousin must be a good match for the group.</li>
                <li>We often host mixed-size cousins — what matters most is manners and match, not size.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* COMMITMENT */}
        <div className="rounded-2xl bg-secondary/20 border p-6 text-center mb-10">
          <p className="font-body text-sm text-muted-foreground">
            We truly appreciate your understanding and cooperation with these steps. This policy is designed to keep all cousins safe, prevent unnecessary stress, and ensure every pup continues to feel at home at Cousin Haven.
          </p>
          <p className="font-subhead text-base mt-3">Thank you for being part of our family 🐶💛</p>
        </div>

        <div className="text-center space-y-4">
          <a
            href="https://drive.google.com/file/d/1fiyI4340cNAYK8mG0KO5aw3-jWjuK78g/view?usp=sharing"
            download
            className="inline-flex items-center gap-2 font-subhead px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/5 transition-colors"
          >
            <Download size={16} /> Download Policies PDF
          </a>
          <div>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 font-subhead px-8 py-4 rounded-full bg-primary text-primary-foreground shadow-warm hover:scale-105 transition-transform"
            >
              Book a Meet & Greet <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
