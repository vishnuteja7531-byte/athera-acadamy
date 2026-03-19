import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Globe, Smartphone, Wrench, Brain } from 'lucide-react';

const skills = [
  {
    tag: '01',
    title: 'Web Development',
    description:
      'HTML, CSS, JavaScript and beyond. Build real things that live on the internet.',
    icon: Globe,
  },
  {
    tag: '02',
    title: 'App Development',
    description:
      'Flutter and Dart. Build mobile applications from scratch.',
    icon: Smartphone,
  },
  {
    tag: '03',
    title: 'Frameworks & Tools',
    description:
      'React, SvelteKit, FastAPI. The tools real developers actually use.',
    icon: Wrench,
  },
  {
    tag: '04',
    title: 'Real World Thinking',
    description:
      'How to think, plan and build like a developer. Not just follow tutorials.',
    icon: Brain,
  },
];

export function Curriculum() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="curriculum" className="w-full bg-athera-light py-[clamp(4rem,10vw,8rem)]">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-xl mb-12 lg:mb-20 transition-all duration-600 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-mono text-[clamp(0.65rem,1.5vw,0.75rem)] tracking-[0.15em] uppercase text-athera-muted mb-4">
            THE CURRICULUM
          </p>
          <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold text-athera-black leading-tight">
            Master the fundamentals. Then build the future.
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-600 delay-200 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white border border-athera-border p-[clamp(1.25rem,3vw,2rem)] flex flex-col hover:border-athera-black hover:shadow-sm transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[clamp(0.65rem,1.5vw,0.75rem)] tracking-[0.15em] uppercase text-athera-muted">
                  {skill.tag}
                </span>
                <skill.icon
                  size={20}
                  className="text-athera-muted group-hover:text-athera-black transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3 className="font-heading text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-athera-black mb-4">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="font-body text-[clamp(0.875rem,2vw,1.125rem)] text-athera-gray leading-[1.8]">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
