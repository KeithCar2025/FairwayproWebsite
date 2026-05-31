import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does the shot tracer work?",
    a: "Simply record your golf swing on your phone, then use FairwayPro's fast manual ball flight tracking to draw the tracer path. The app overlays a clean, broadcast-style tracer line onto your video — no complicated editing required.",
  },
  {
    q: "Do I need any extra hardware or sensors?",
    a: "No. FairwayPro works entirely with your smartphone camera. No launch monitors, no sensors, no tripods required — just your phone and your swing.",
  },
  {
    q: "What platforms can I share my videos on?",
    a: "Your tracer videos are automatically formatted for TikTok, Instagram Reels, and YouTube Shorts. You can also save them to your camera roll and share anywhere.",
  },
  {
    q: "Is FairwayPro free to use?",
    a: "FairwayPro is free to download and use. There are optional in-app purchases available for Pro features like additional overlay styles and advanced editing options.",
  },
  {
    q: "How long does it take to create a tracer video?",
    a: "Under 60 seconds. Record your shot, track the ball flight with a few taps, and export your broadcast-quality replay video instantly.",
  },
  {
    q: "Is it available on iOS?",
    a: "FairwayPro is currently available on Android via the Google Play Store. Stay tuned for iOS availability updates.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/50 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">
            Intelligence Brief
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 tracking-tight">
            Questions <span className="text-primary">Answered</span>
          </h2>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}