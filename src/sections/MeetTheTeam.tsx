import { useScrollReveal } from '@/hooks/useScrollReveal';

const teamMembers = [
  {
    name: 'Vishnu Teja',
    role: 'Founder & CEO',
    description: 'Building Athera Labs from the ground up. Developer, thinker, and the one who started it all.',
    image: '/images/myimage.png',
  },
  {
    name: 'Akhil',
    role: 'Full Stack Developer',
    description: 'Bridging frontend and backend with precision. Builds what others only plan.',
    image: '/images/person2.png',
  },
  {
    name: 'Priya',
    role: 'UI/UX Developer',
    description: 'Designs experiences that feel effortless. Every pixel has a purpose.',
    image: '/images/person3.png',
  },
  {
    name: 'Sanjay',
    role: 'App Developer',
    description: 'Flutter specialist. Turns ideas into mobile applications that actually work.',
    image: '/images/person4.png',
  },
  {
    name: 'Neha',
    role: 'Frontend Developer',
    description: 'Crafts clean, responsive interfaces. Makes the web feel alive.',
    image: '/images/person1.png',
  },
];

function TeamMemberRow({ member, index }: { member: (typeof teamMembers)[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <div
      ref={ref}
      className={`w-full flex flex-col lg:flex-row bg-white border-b border-athera-border transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Left Column - Image (40% desktop) */}
      <div className="w-full lg:w-[40%] border-athera-border lg:border-r">
        <div className="w-full aspect-square">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Right Column - Info (60% desktop) */}
      <div className="w-full lg:w-[60%] flex flex-col justify-center p-[clamp(2rem,5vw,4rem)]">
        <p className="font-mono text-[clamp(0.65rem,1.5vw,0.75rem)] tracking-[0.15em] uppercase text-athera-muted mb-4">
          {member.role}
        </p>
        <h3 className="font-heading text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-athera-black mb-6">
          {member.name}
        </h3>
        <p className="font-body text-[clamp(0.875rem,2vw,1.125rem)] text-athera-gray leading-[1.8] max-w-xl">
          {member.description}
        </p>
      </div>
    </div>
  );
}

export function MeetTheTeam() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="meet-the-team" className="w-full bg-white pt-[clamp(4rem,10vw,8rem)] pb-0">
      {/* Header */}
      <div
        ref={headerRef}
        className={`w-full px-6 lg:px-12 xl:px-16 text-center mb-[clamp(4rem,8vw,6rem)] transition-all duration-700 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="font-mono text-[clamp(0.65rem,1.5vw,0.75rem)] tracking-[0.15em] uppercase text-athera-muted mb-4">
          THE TEAM
        </p>
        <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold text-athera-black uppercase">
          5 developers. 1 mission.
        </h2>
      </div>

      {/* Team Rows */}
      <div className="w-full border-t border-athera-border">
        {teamMembers.map((member, index) => (
          <TeamMemberRow key={index} member={member} index={index} />
        ))}
      </div>
    </section>
  );
}

