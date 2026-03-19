import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { number: '5', label: 'Developers Teaching' },
  { number: '4', label: 'Core Skills Covered' },
  { number: '100%', label: 'Hands On Learning' },
  { number: '1', label: 'Certificate on Completion' },
];

export function StatsStrip() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`w-full bg-white border-y border-athera-border py-[clamp(2rem,5vw,4rem)] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <span className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold text-athera-black leading-none mb-2">
                {stat.number}
              </span>
              <span className="font-mono text-[clamp(0.65rem,1.5vw,0.75rem)] tracking-[0.15em] uppercase text-athera-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
