import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

const Agreement = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-2xl text-center">
      <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mx-auto mb-6">
        <FileText className="text-primary" size={28} />
      </div>
      <h1 className="font-display text-4xl md:text-5xl mb-4">Client Agreement</h1>
      <p className="font-body text-muted-foreground text-lg mb-2">
        For the safety of all our furry guests and clarity between us, we require every client to complete our agreement before their first service.
      </p>
      <p className="font-body text-sm text-muted-foreground mb-8">
        This is required before your first visit.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://forms.gle/TDD1hpbSTAfpmKaz5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 font-subhead px-8 py-4 rounded-full bg-primary text-primary-foreground shadow-warm hover:scale-105 transition-transform"
        >
          Complete Client Agreement <ArrowRight size={18} />
        </a>
        <Link
          href="/polices"
          className="inline-flex items-center justify-center gap-2 font-subhead px-8 py-4 rounded-full border border-primary text-primary hover:bg-primary/5 transition-colors"
        >
          View Policies
        </Link>
      </div>
    </div>
  </section>
);

export default Agreement;
