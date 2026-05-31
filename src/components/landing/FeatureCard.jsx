export default function FeatureCard({ icon: Icon, title, description, stat, statLabel }) {
  return (
    <div className="group relative p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_60px_hsl(77,100%,50%,0.06)]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{description}</p>

        {stat && (
          <div className="pt-4 border-t border-border/50">
            <span className="font-mono text-2xl font-bold text-primary">{stat}</span>
            <span className="font-mono text-xs text-muted-foreground uppercase ml-2">{statLabel}</span>
          </div>
        )}
      </div>
    </div>
  );
}