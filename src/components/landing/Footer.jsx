const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.fairwaypro.shottracer";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-mono font-bold text-xs">FP</span>
            </div>
            <span className="font-semibold text-foreground text-sm tracking-tight">
              FairwayPro Shot Tracer
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#features" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
              Features
            </a>
            <a href="#gallery" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
              Gallery
            </a>
            <a href="#faq" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
              FAQ
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-primary hover:underline underline-offset-4 uppercase tracking-wider"
            >
              Get App
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} QuickPlayLabs
            </p>
            <a
              href="mailto:quickplaysuperlabs@gmail.com"
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              quickplaysuperlabs@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}