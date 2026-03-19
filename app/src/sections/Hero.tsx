import { useEffect, useState } from 'react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('pre-registration');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCurriculum = () => {
    const curriculumSection = document.getElementById('curriculum');
    if (curriculumSection) {
      curriculumSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[100svh] w-full bg-white relative overflow-x-hidden flex flex-col lg:flex-row items-center">
      {/* Content Column */}
      <div className="w-full lg:w-[55%] px-[clamp(1.5rem,5vw,6rem)] py-[clamp(4rem,10vh,8rem)] lg:py-0 flex flex-col justify-center order-1">
        <div className="max-w-xl mx-auto lg:mx-0">
          {/* Decorative Line */}
          <div
            className={`w-10 h-[1px] bg-athera-black mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          />

          {/* Label */}
          <p
            className={`font-mono text-[clamp(0.65rem,1.5vw,0.75rem)] tracking-[0.15em] uppercase text-athera-muted mb-6 transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Applications Open from March — 2026 Cohort
          </p>

          {/* Heading */}
          <h1
            className={`font-heading text-[clamp(2.5rem,6vw,5rem)] font-bold text-athera-black leading-[1.1] mb-6 transition-all duration-700 delay-[400ms] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Learn Before They Even Start.
          </h1>

          {/* Subheading Group */}
          <div
            className={`transition-all duration-700 delay-[600ms] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="font-body text-[clamp(1rem,2vw,1.25rem)] text-athera-gray leading-[1.8] mb-6 max-w-[420px]">
              Athera Academy is built by real developers for students entering
              BTech CSE. Structured skills, real knowledge, genuine mentorship —
              before your university journey begins.
            </p>

            {/* New Italic Line */}
            <p className="font-mono text-[clamp(0.65rem,1.5vw,0.75rem)] text-athera-muted italic mb-8">
              Structured. Developer-Led. Before Semester One.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700 delay-[800ms] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-[clamp(0.875rem,2vw,1rem)] bg-athera-black text-white font-body text-sm font-medium hover:bg-athera-gray transition-colors duration-200"
            >
              Reserve My Spot
            </button>
            <button
              onClick={scrollToCurriculum}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-[clamp(0.875rem,2vw,1rem)] bg-white text-athera-black font-body text-sm font-medium border border-athera-black hover:bg-athera-light transition-colors duration-200"
            >
              See What You'll Learn
            </button>
          </div>
        </div>
      </div>

      {/* Image Column */}
      <div
        className={`w-full lg:w-[45%], h-auto aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[100svh] order-2 transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src="/images/hero.jpg"
          alt="Athera Academy Hero"
          className="w-full h-full object-cover object-[center_top]"
        />
      </div>
    </section>
  );
}
