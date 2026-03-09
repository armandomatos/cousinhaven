import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
// Image import removed; use string path for public image
import Image from "next/image";

export default function Footer() {
  return (
     <footer className="bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start gap-4">
          <img src="/images/nia-matos-logo-brown.png" alt="Nia Matos" className="h-16 w-auto " width={40} height={40} loading="lazy" decoding="async" style={{ color: 'transparent' }} />
          <p className="text-sm opacity-80 font-body">
            Cousin Haven by Nia Matos
          </p>
          <p className="text-sm opacity-60 font-body">
            Home-style dog boarding & daycare in Port St. Lucie, FL
          </p>
          <div className="flex gap-3 mt-2">
            <a href="https://www.instagram.com/nia.matos?igsh=MXgxdGdtN2RlbDZrdA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/share/17YVzkfKcY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-subhead text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 font-body text-sm opacity-80">
            <Link href="/services" className="hover:opacity-100 transition-opacity">Services</Link>
            <Link href="/book" className="hover:opacity-100 transition-opacity">Book a Meet & Greet</Link>
            <Link href="/agreement" className="hover:opacity-100 transition-opacity">Client Agreement</Link>
            <Link href="/polices" className="hover:opacity-100 transition-opacity">Policies</Link>
          </div>
        </div>

        <div>
          <h4 className="font-subhead text-lg mb-4">More</h4>
          <div className="flex flex-col gap-2 font-body text-sm opacity-80">
            <Link href="/ebook" className="hover:opacity-100 transition-opacity">Ebook</Link>
            <Link href="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center font-body text-xs opacity-50">
        © {new Date().getFullYear()} Nia Matos. All rights reserved.
      </div>
    </div>
  </footer>
  );
}