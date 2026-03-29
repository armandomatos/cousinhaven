"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NavLink } from "@/components/navlink";
import { Menu, X } from "lucide-react";
// Image import removed; use string path for public image
import Image from "next/image";
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/book", label: "Book" },
  { to: "/ebook", label: "Ebook" },
  { to: "/contact", label: "Contact" },
];
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
     <div className="container flex items-center justify-between py-3">
        <NavLink href="/" className="flex items-center gap-2">
          <img
            src="/images/nia-matos-brown-transp.png"
            alt="Nia Matos"
            width={40}
            height={40}
            className="h-16 w-auto"
            loading="lazy"
            decoding="async"
            style={{ color: 'transparent' }}
          />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              href={link.to}
              className="font-subhead text-sm tracking-wide transition-colors text-muted-foreground nav-tab"
              activeClassName="nav-pill-active"
            >
              {link.label}
            </NavLink>
          ))}
            <NavLink
              href="/book"
              className="font-subhead text-sm px-5 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-warm"
            >
              Book a Free Meet & Greet
            </NavLink>
        </nav>
        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>



      {/* Mobile nav */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-t animate-fade-in">
          <div className="container flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <div key={link.to} onClick={() => setIsMenuOpen(false)}>
                <NavLink
                  href={link.to}
                  className="font-subhead text-lg text-muted-foreground nav-tab"
                  activeClassName="nav-pill-active"
                >
                  {link.label}
                </NavLink>
              </div>
            ))}
            <div onClick={() => setIsMenuOpen(false)}>
              <NavLink
                href="/book"
                className="font-subhead text-center px-5 py-3 rounded-full bg-primary text-primary-foreground shadow-warm"
              >
                Book a Meet & Greet
              </NavLink>
            </div>
          </div>
        </nav>
      )}
        
    </header>
  );
}