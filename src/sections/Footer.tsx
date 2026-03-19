export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-athera-border py-[clamp(2rem,5vw,4rem)]">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="font-mono text-[clamp(0.65rem,1.5vw,0.75rem)] tracking-[0.15em] uppercase text-athera-muted">
              © 2025 Athera Academy · Athera Labs
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="font-mono text-[clamp(0.65rem,1.5vw,0.75rem)] tracking-[0.15em] uppercase text-athera-muted hover:text-athera-black transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="font-mono text-[clamp(0.65rem,1.5vw,0.75rem)] tracking-[0.15em] uppercase text-athera-muted hover:text-athera-black transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="font-mono text-[clamp(0.65rem,1.5vw,0.75rem)] tracking-[0.15em] uppercase text-athera-muted hover:text-athera-black transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
