import { Eye, Wind, Moon, TreePine, ShieldCheck } from "lucide-react";

const points = [
  { icon: <Eye size={20} />, text: "Supervised social interaction" },
  { icon: <Wind size={20} />, text: "Sniffing and sensory exploration" },
  { icon: <Moon size={20} />, text: "Rest and decompression breaks" },
  { icon: <TreePine size={20} />, text: "Natural movement in a home-and-yard setting" },
  { icon: <ShieldCheck size={20} />, text: "Calm guidance to avoid overstimulation" },
];

const BalancedDay = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-6">
          More than playtime — a balanced day designed for well-being
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          At Cousin Haven, dogs do more than just run around. Their day is built around supervised social time, movement, rest, sniffing, exploration, and calm moments that support emotional balance and healthy behavior.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed mb-10">
          We believe real care is not just about filling the day — it's about creating a safe, structured experience where each dog can feel comfortable, engaged, and well supported.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
          {points.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-xl bg-card border"
            >
              <span className="text-primary shrink-0">{p.icon}</span>
              <span className="font-body text-sm">{p.text}</span>
            </div>
          ))}
        </div>
{           /* Why This Matters */}
        <div className="mt-14 pt-10 border-t border-border">
          <h3 className="font-display text-2xl md:text-3xl mb-4">Why this matters</h3>
          <p className="font-body text-muted-foreground leading-relaxed max-w-xl mx-auto">
            A dog who only burns energy is not always a balanced dog. Dogs also need rest, guidance, space to sniff, and the right kind of social interaction. That balance helps them feel safer, calmer, and more comfortable throughout the day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BalancedDay;

