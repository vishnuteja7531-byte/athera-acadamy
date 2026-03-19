import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Curriculum', id: 'curriculum' },
    { label: 'Our Team', id: 'meet-the-team' },
    { label: 'Why Athera', id: 'why-athera' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-athera-border">
      <div className="w-full px-6 lg:px-12 xl:px-16 py-[clamp(1rem,3vw,1.5rem)]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer"
          >
            <span className="font-heading text-[clamp(0.75rem,2vw,0.875rem)] font-bold tracking-[0.25em] text-athera-black uppercase">
              Athera Academy
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-body text-xs text-athera-gray hover:text-athera-black transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('pre-registration')}
              className="hidden sm:inline-flex px-6 py-2.5 bg-athera-black text-white font-body text-[10px] tracking-widest uppercase hover:bg-athera-gray transition-colors duration-200"
            >
              Get Access
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-athera-black p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-athera-border transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="font-body text-left text-base text-athera-gray hover:text-athera-black transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('pre-registration')}
            className="w-full mt-2 inline-flex items-center justify-center px-6 py-3 bg-athera-black text-white font-body text-sm font-medium"
          >
            Reserve My Spot
          </button>
        </div>
      </div>
    </nav>
  );
}
