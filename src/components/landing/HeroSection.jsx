import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.fairwaypro.shottracer";

export default function HeroSection() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const animate = () => {
      path.style.transition = "stroke-dashoffset 2.5s cubic-bezier(0.25, 0.1, 0.25, 1)";
      path.style.strokeDashoffset = "0";
    };
    const timer = setTimeout(animate, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="hero-backdrop absolute inset-0">
        <div className="absolute inset-0 fairway-horizon" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 fairway-perspective" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/86 to-background/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-background/20" />
      </div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="tracerGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(77, 100%, 50%)" stopOpacity="0.1" />
            <stop offset="40%" stopColor="hsl(77, 100%, 50%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(77, 100%, 50%)" stopOpacity="1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          ref={pathRef}
          d="M 0,850 Q 200,800 400,600 T 800,200 Q 1000,50 1200,100 T 1440,300"
          fill="none"
          stroke="url(#tracerGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow)"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-primary uppercase tracking-widest">
              Shot Tracer Technology
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-foreground mb-6">
            VISUALIZE
            <br />
            YOUR{" "}
            <span className="text-primary">ASCENT</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10">
            Create broadcast-quality shot tracer videos in under 60 seconds.
            Track ball flight, share on social media, and elevate your golf game.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold text-base px-8 py-4 rounded-full hover:shadow-[0_0_40px_hsl(77,100%,50%,0.3)] transition-all duration-300 hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
              </svg>
              Install on Google Play
            </a>

            <div className="flex items-center gap-6 mt-2 sm:mt-0 sm:ml-2">
              <div className="text-center">
                <p className="font-mono text-xl font-bold text-foreground">1K+</p>
                <p className="font-mono text-xs text-muted-foreground uppercase">Downloads</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <p className="font-mono text-xl font-bold text-foreground">&lt;60s</p>
                <p className="font-mono text-xs text-muted-foreground uppercase">Per Video</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <p className="font-mono text-xl font-bold text-foreground">Free</p>
                <p className="font-mono text-xs text-muted-foreground uppercase">To Start</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
