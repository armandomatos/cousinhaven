import { Phone, Mail, MapPin, Clock, ArrowRight, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl mb-4">Get in Touch</h1>
          <p className="font-body text-muted-foreground text-lg">
            Questions? Ready to book? We'd love to hear from you.
          </p>
        </div>
        <div className="space-y-6 mb-12">
          <div className="rounded-2xl bg-card border p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
              <Phone className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-subhead text-lg mb-1">Call or Text</h3>
              <a href="tel:+18186973791" className="font-body text-primary hover:underline">(818) 697-3791</a>
            </div>
          </div>
          <div className="rounded-2xl bg-card border p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
              <Mail className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-subhead text-lg mb-1">Email</h3>
              <a href="mailto:booking@niamatos.com" className="font-body text-primary hover:underline">booking@niamatos.com</a>
            </div>
          </div>
          <div className="rounded-2xl bg-card border p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
              <MapPin className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-subhead text-lg mb-1">Service Area</h3>
              <p className="font-body text-sm text-muted-foreground">Port St. Lucie, FL & nearby areas</p>
            </div>
          </div>
          <div className="rounded-2xl bg-card border p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
              <Clock className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-subhead text-lg mb-1">Hours</h3>
              <p className="font-body text-sm text-muted-foreground">Daily 6am – 6pm (late pickup available by approval)</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 mb-12">
          <a href="https://www.instagram.com/nia.matos?igsh=MXgxdGdtN2RlbDZrdA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center text-primary hover:bg-secondary/50 transition-colors">
            <Instagram size={22} />
          </a>
          <a href="https://www.facebook.com/share/17YVzkfKcY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center text-primary hover:bg-secondary/50 transition-colors">
            <Facebook size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
