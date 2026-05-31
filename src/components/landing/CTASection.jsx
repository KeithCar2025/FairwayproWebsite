const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.fairwaypro.shottracer";

const stats = [
  { value: "99.9%", label: "Accuracy" },
  { value: "0", label: "Extra Hardware" },
  { value: "<60s", label: "Per Video" },
  { value: "Free", label: "To Start" },
];

export default function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="cta-backdrop absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-3/4 fairway-perspective opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
          Your Next Shot
          <br />
          Deserves a <span className="text-primary">Replay</span>
        </h2>
        <p className="text-lg text-muted-foreground mt-6 max-w-lg mx-auto leading-relaxed">
          Join thousands of golfers creating professional shot tracer videos.
          Download FairwayPro now — it's free.
        </p>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold text-lg px-10 py-5 rounded-full mt-10 hover:shadow-[0_0_60px_hsl(77,100%,50%,0.35)] transition-all duration-300 hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
          </svg>
          Install on Google Play
        </a>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-14">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-mono text-3xl font-bold text-primary">{stat.value}</p>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
