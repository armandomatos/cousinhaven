import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Why do you keep your groups small?",
    a: "We keep our groups small so every cousin gets close supervision, more personalized care, and a calmer home-like experience. Smaller groups also help us avoid overstimulation and keep social time safer and more comfortable for everyone.",
  },
  {
    q: "Are you really cage-free?",
    a: "Yes. Our regular model is cage-free. Dogs move through the safe areas of the home and yard under supervision instead of spending their stay in crates. If a dog ever needs a clearly separated rest space for a very specific reason, that would be handled case by case, but it is not part of our normal routine.",
  },
  {
    q: "How do dogs sleep at night?",
    a: "Dogs sleep inside the home as part of a small, family-style environment. Because they stay in a more personal setting and close to the caregiver, many dogs settle in more comfortably and feel more secure during their stay.",
  },
  {
    q: "What if my dog has a lot of energy?",
    a: "That's exactly why environment matters. Dogs have space to move, sniff, explore, and enjoy supervised play in the Cousin Yard, along with calm periods built into the routine. We don't aim for chaos or nonstop stimulation — we aim for a balanced day.",
  },
  {
    q: "Do you accept every dog?",
    a: "Not every dog is the right fit for every environment. We use a Meet & Greet and temperament evaluation process to make sure each dog is comfortable with a small-group, cage-free setting and can safely share space with others.",
  },
  {
    q: "What makes Cousin Haven different from a traditional dog daycare or kennel?",
    a: "Cousin Haven is built around a real home experience. We focus on small groups, close supervision, a cage-free routine, and a more personal approach so dogs can feel safe, comfortable, and part of the family.",
  },
  {
    q: "Will my dog get time to rest too?",
    a: "Yes. Rest is part of the routine. We believe dogs need a balance of activity, calm, and recovery, not constant stimulation all day.",
  },
  {
    q: "What is the Cousin Yard?",
    a: "The Cousin Yard is our outdoor space where dogs can run, sniff, explore, and enjoy supervised time outside in a secure, fenced environment.",
  },
];

const HomeFAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="font-subhead text-left text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;