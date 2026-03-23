import Link from "next/link";
import { Calendar, FileText, Shield, Clock, ArrowRight } from "lucide-react";

export default function Book() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <img src="/images/cousin-haven-logo-brown.png" alt="Cousin Haven" className="h-10 mx-auto mb-4 opacity-70" height={40} width={68} loading="lazy" decoding="async" style={{ color: 'transparent' }} />
          <h1 className="font-display text-4xl md:text-5xl mb-4">Book Your Visit</h1>
          <p className="font-body text-muted-foreground text-lg">
            Follow these steps to get started with Cousin Haven.
          </p>
        </div>
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="rounded-2xl bg-card border p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                <Calendar className="text-primary" size={22} />
              </div>
              <div>
                <h2 className="font-subhead text-xl mb-2">Step 1: Book a Meet & Greet</h2>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Schedule a free meet & greet so we can get to know your pup and make sure it's a great fit.
                </p>
                <a
                  href="https://calendly.com/booking-niamatos/free-meet-greet-cousin-haven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-subhead px-6 py-3 rounded-full bg-primary text-primary-foreground shadow-warm hover:scale-105 transition-transform"
                >
                  Book on Calendly <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
          {/* Step 2 */}
          <div className="rounded-2xl bg-card border p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                <FileText className="text-primary" size={22} />
              </div>
              <div>
                <h2 className="font-subhead text-xl mb-2">Step 2: Required Before First Service</h2>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Complete the client agreement and review our policies before your first visit.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/agreement"
                    className="inline-flex items-center gap-2 font-subhead text-sm px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    Sign Client Agreement
                  </Link>
                  <Link
                    href="/policies"
                    className="inline-flex items-center gap-2 font-subhead text-sm px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-primary/5 transition-colors"
                  >
                    View Policies
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Step 3 */}
          <div className="rounded-2xl bg-card border p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                <Shield className="text-primary" size={22} />
              </div>
              <div>
                <h2 className="font-subhead text-xl mb-2">Step 3: Send Vaccine Records</h2>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Email your pup’s up-to-date vaccine records to <a href="mailto:booking@niamatos.com" className="text-primary underline">booking@niamatos.com</a> before your first visit.
                </p>
              </div>
            </div>
          </div>
          {/* Step 4 */}
          <div className="rounded-2xl bg-card border p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                <Clock className="text-primary" size={22} />
              </div>
              <div>
                <h2 className="font-subhead text-xl mb-2">Step 4: Confirm Your Booking</h2>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Once all steps are complete, we’ll confirm your booking and send you all the details for your pup’s stay!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
