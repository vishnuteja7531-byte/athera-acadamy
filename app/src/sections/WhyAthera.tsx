import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check } from 'lucide-react';

const points = [
  'Real developers as instructors',
  'Structured not scattered',
  'Certificate on completion',
  'Built for BTech CSE students specifically',
];

export function WhyAthera() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="why-athera"
      ref={sectionRef}
      className={`w-full bg-white py-[clamp(4rem,10vw,8rem)] transition-all duration-700 ${
        sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Text */}
          <div>
            <p className="font-mono text-[clamp(0.65rem,1.5vw,0.75rem)] tracking-[0.15em] uppercase text-athera-muted mb-4">
              WHY ATHERA
            </p>
            <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold text-athera-black leading-tight mb-8">
              Because university degree isn't enough anymore.
            </h2>
            <p className="font-body text-[clamp(0.875rem,2vw,1.125rem)] text-athera-gray leading-[1.8] max-w-xl">
              We've seen it firsthand. The gap between what's taught in college
              and what's needed at Athera Labs is massive. We build the bridge.
            </p>
          </div>

          {/* Right Column - Points */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 py-4 border-l-2 border-athera-black pl-6"
                >
                  <Check
                    size={18}
                    className="text-athera-black flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="font-body text-[clamp(0.875rem,2vw,1.125rem)] text-athera-black">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
