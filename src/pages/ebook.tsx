import { ArrowRight, CheckCircle, Snowflake, Cookie, Flame } from "lucide-react";

const benefits = [
  "20 simple recipes using everyday ingredients",
  "Frozen, baked & dehydrated treat options",
  "Serving guides by dog size (small, medium, large)",
  "Storage chart so nothing goes to waste",
  "Safety rules & ingredients to always avoid",
];
const recipes = [
  {
    icon: Snowflake,
    title: "Watermelon + Greek Yogurt Pupsicles",
    desc: "Icy & creamy — perfect for hot days. Ready in 10 min + freeze time.",
  },
  {
    icon: Cookie,
    title: "Crunchy Oat + Banana Cookies",
    desc: "Everyday baked treats with just 2–3 ingredients. 10 min prep.",
  },
  {
    icon: Flame,
    title: "Dehydrated Sweet Potato Chews",
    desc: "Satisfying chew time with a single ingredient. Oven-friendly.",
  },
];
const faqs = [
  { q: "What format is the treat pack?", a: "It's a digital PDF you can read on any device — phone, tablet, or laptop." },
  { q: "Are the recipes safe for all dogs?", a: "The recipes use simple, dog-safe ingredients. If your dog has allergies, pancreatitis, or kidney disease, check with your vet first." },
  { q: "How many recipes are included?", a: "3 complete recipes plus a storage chart, serving guides by dog size, and a safety rules page." },
  { q: "Can I get a refund?", a: "Due to the digital nature, all sales are final. But we're confident you'll love it!" },
];

export default function Ebook() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-body text-sm font-semibold uppercase tracking-wider mb-4 block">
                Ebook by Nia Matos
              </span>
              <h1 className="font-display text-4xl md:text-5xl mb-4 leading-tight">
                Treat Lab by Nia Matos
              </h1>
              <p className="font-subhead text-xl mb-6">
                Treats in 10 minutes. Ingredients you can pronounce.
              </p>
              <p className="font-body text-muted-foreground text-lg mb-8">
                20 easy, homemade dog treat recipes — frozen, baked & dehydrated — with serving guides, storage tips, and safety rules all in one beautiful guide.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="shrink-0 mt-0.5" size={18} />
                    <span className="font-body text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://payhip.com/b/bS7fa#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-subhead px-8 py-4 rounded-full bg-primary text-primary-foreground shadow-warm hover:scale-105 transition-transform text-lg"
              >
                Buy on Payhip <ArrowRight size={20} />
              </a>
              <p className="font-body text-sm text-muted-foreground mt-2">
                Want a free sample first?{' '}
                <a
                  href="https://payhip.com/b/Uu4Ns"
                  target="_blank"
                > Get the <strong>FREE Mini Pack →</strong></a>
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/ebook-preview.jpg"
                alt="Ebook preview"
                className="rounded-2xl shadow-warm max-w-sm w-full"
                loading="lazy"
                decoding="async"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* What's Inside */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl text-center mb-4">What's Inside</h2>
          <p className="font-body text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Three recipes your dog will love — each with clear steps, serving sizes, and storage info.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipes.map((r, i) => (
              <div key={i} className="rounded-2xl bg-card border p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <r.icon size={24} />
                </div>
                <h3 className="font-subhead text-lg mb-2">{r.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Safety Highlights */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-3xl mb-6">Safety First</h2>
          <p className="font-body text-muted-foreground mb-8">
            Every recipe is designed with your dog's health in mind. Always check with your vet if your dog has special dietary needs.
          </p>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <h2 className="font-display text-3xl mb-6 text-center">FAQ</h2>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl bg-card border p-6">
                <h3 className="font-subhead text-lg mb-2">{f.q}</h3>
                <p className="font-body text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
