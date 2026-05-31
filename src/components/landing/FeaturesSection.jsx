import { Video, BarChart3, Share2, Crosshair, Zap, Smartphone } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Crosshair,
    title: "Real-Time Ball Tracking",
    description: "Manual ball flight tracking that creates clean, broadcast-style tracer overlays on your golf videos. Precision that matches what you see on TV.",
    stat: "99.9%",
    statLabel: "Accuracy",
  },
  {
    icon: Video,
    title: "Instant Replay Videos",
    description: "Turn any swing recording into a professional shot tracer replay in under 60 seconds. No complicated editing tools or learning curve.",
    stat: "<60s",
    statLabel: "Processing",
  },
  {
    icon: Share2,
    title: "Social-Ready Content",
    description: "Export directly to TikTok, Instagram Reels, and YouTube Shorts. Your tracer videos are formatted and optimized for every major platform.",
    stat: "3+",
    statLabel: "Platforms",
  },
  {
    icon: BarChart3,
    title: "Shot Analytics",
    description: "Understand your ball flight patterns with detailed distance and trajectory data. Track your improvement over time with visual history.",
    stat: "\u221E",
    statLabel: "Shots Tracked",
  },
  {
    icon: Zap,
    title: "No Extra Hardware",
    description: "All you need is your smartphone. No launch monitors, no sensors, no complicated setups. Just record and trace.",
    stat: "0",
    statLabel: "Extra Gear",
  },
  {
    icon: Smartphone,
    title: "Built for Mobile",
    description: "Designed from the ground up for the course. Quick, intuitive interface that works while you play \u2014 not just at home.",
    stat: "100%",
    statLabel: "Mobile",
  },
];

export default function FeaturesSection({ ballImage, phoneImage }) {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">
            The Telemetry Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
            Every Feature, <span className="text-primary">Engineered</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            Professional-grade shot tracing technology, accessible to every golfer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden aspect-video group">
            <img
              src={ballImage}
              alt="Golf ball on tee with cinematic lighting"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-mono text-xs text-primary uppercase tracking-widest">Precision</p>
              <p className="text-xl font-bold text-foreground mt-1">Track Every Shot</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video group">
            <img
              src={phoneImage}
              alt="Golfer analyzing shot data on phone"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-mono text-xs text-primary uppercase tracking-widest">Instant</p>
              <p className="text-xl font-bold text-foreground mt-1">{"Analyze & Share"}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}