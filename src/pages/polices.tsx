import { Download, ArrowRight } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

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
            {/* Example: Add your AccordionItems here for each policy section */}
            <AccordionItem value="drop-off" className="rounded-2xl bg-card border px-6">
              <AccordionTrigger className="font-subhead text-lg">Drop-Off & Pick-Up Procedure</AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground space-y-4">
                <p>At Cousin Haven, every pup is family — and keeping all our cousins safe, happy, and stress-free is our top priority.</p>
                <h4 className="font-subhead text-[color:var(--foreground)] text-base">Drop-Offs</h4>
                <p>On the day of your pup's drop-off, we'll notify you whether it will take place inside or outside. This helps us avoid situations where arriving pups cross paths with pups already inside.</p>
                <p className="font-semibold text-[color:var(--foreground)]">If outside:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Send us a quick message once you're parked safely.</li>
                  <li>We'll meet you outside with a cart and a box for your pup's belongings (food, toys, bed, etc.).</li>
                  <li>We'll guide you on where to leave the cart, then carefully bring everything inside.</li>
                  <li>We'll walk your pup in ourselves and update you right after on how their first interactions with the cousins went.</li>
                </ul>
                <h4 className="font-subhead text-[color:var(--foreground)] text-base">Pick-Ups</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>If pups are inside at pick-up time, please notify us once you're safely parked in the driveway.</li>
                  <li>We'll walk your pup outside directly to you, ensuring a safe transition.</li>
                  <li>After your pup is happily reunited with you, we'll bring out their belongings from the cart.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            {/* Add more AccordionItems for other policies as needed */}
          </Accordion>
        </div>
      </section>
    </>
  );
}
