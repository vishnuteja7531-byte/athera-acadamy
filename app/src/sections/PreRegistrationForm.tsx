import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const studyOptions = [
  'Computer Science Engineering',
  'Computer Science',
  'Data Analytics',
  'Information Technology',
  'Artificial Intelligence & Machine Learning',
  'Cybersecurity',
  'Software Engineering',
  'Electronics & Communication Engineering',
  'Other',
];

const interestOptions = [
  'Web Development',
  'Mobile App Development',
  'AI & Machine Learning',
  'Backend & APIs',
  'UI/UX Design & Frontend',
  'Data Science & Analytics',
  'DevOps & Cloud',
  'I am not sure yet',
];

const levelOptions = [
  'Complete Beginner — never written code',
  'Beginner — tried a few tutorials',
  'Intermediate — built small projects',
  'I know basics but want structured learning',
];

const sourceOptions = [
  'Friend or classmate',
  'Social media',
  'Direct from team',
  'Other',
];

export function PreRegistrationForm() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    studyField: '',
    interest: '',
    level: '',
    source: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="pre-registration"
      className="w-full bg-[#F7F7F7] py-[clamp(4rem,10vw,8rem)]"
    >
      <div
        ref={ref}
        className={`w-full px-[clamp(1.5rem,5vw,3rem)] transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-[680px] mx-auto bg-transparent w-full">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-[clamp(3rem,8vw,4rem)]">
                <p className="font-mono text-[clamp(0.65rem,1.5vw,0.75rem)] tracking-[0.15em] uppercase text-athera-muted mb-4 text-center">
                  EARLY ACCESS APPLICATION
                </p>
                <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold text-athera-black mb-6 text-center leading-tight">
                  Secure your spot before we open.
                </h2>
                <p className="font-body text-[clamp(0.875rem,2vw,1.125rem)] text-athera-gray leading-[1.8] text-center">
                  Fill in your details below. We will personally reach out when
                  Athera Academy launches. Limited spots available.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1 — two columns desktop, single column < 640px */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="sm:col-span-3">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.75rem,2vw,1rem)] bg-white border border-athera-border font-body text-sm text-athera-black placeholder:text-athera-subtle focus:outline-none focus:border-athera-black transition-colors duration-200 rounded-none appearance-none"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <input
                      type="number"
                      name="age"
                      placeholder="Age"
                      min="15"
                      max="22"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      className="w-full px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.75rem,2vw,1rem)] bg-white border border-athera-border font-body text-sm text-athera-black placeholder:text-athera-subtle focus:outline-none focus:border-athera-black transition-colors duration-200 rounded-none appearance-none"
                    />
                  </div>
                </div>

                {/* Row 2 — email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.75rem,2vw,1rem)] bg-white border border-athera-border font-body text-sm text-athera-black placeholder:text-athera-subtle focus:outline-none focus:border-athera-black transition-colors duration-200 rounded-none appearance-none"
                  />
                </div>

                {/* Row 3 — Study */}
                <div className="relative">
                  <select
                    name="studyField"
                    value={formData.studyField}
                    onChange={handleInputChange}
                    required
                    className="w-full px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.75rem,2vw,1rem)] bg-white border border-athera-border font-body text-sm text-athera-black placeholder:text-athera-subtle focus:outline-none focus:border-athera-black transition-colors duration-200 rounded-none appearance-none"
                  >
                    <option value="" disabled>What will you study in university?</option>
                    {studyOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Row 4 — Interest */}
                <div className="relative">
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.75rem,2vw,1rem)] bg-white border border-athera-border font-body text-sm text-athera-black placeholder:text-athera-subtle focus:outline-none focus:border-athera-black transition-colors duration-200 rounded-none appearance-none"
                  >
                    <option value="" disabled>Which area of development interests you most?</option>
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Row 5 — Level */}
                <div className="relative">
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    required
                    className="w-full px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.75rem,2vw,1rem)] bg-white border border-athera-border font-body text-sm text-athera-black placeholder:text-athera-subtle focus:outline-none focus:border-athera-black transition-colors duration-200 rounded-none appearance-none"
                  >
                    <option value="" disabled>How would you describe your current level?</option>
                    {levelOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Row 6 — Source */}
                <div className="relative">
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                    required
                    className="w-full px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.75rem,2vw,1rem)] bg-white border border-athera-border font-body text-sm text-athera-black placeholder:text-athera-subtle focus:outline-none focus:border-athera-black transition-colors duration-200 rounded-none appearance-none"
                  >
                    <option value="" disabled>How did you hear about Athera Academy?</option>
                    {sourceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-[clamp(0.875rem,2vw,1rem)] bg-athera-black text-white font-body text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 rounded-none shadow-sm"
                  >
                    Submit My Application
                  </button>
                  <p className="text-center font-mono text-[clamp(0.65rem,1.5vw,0.75rem)] text-[#AAAAAA] mt-6 tracking-[0.15em]">
                    No fees. No spam. Just your reserved spot.
                  </p>
                </div>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-[clamp(3rem,8vw,5rem)]">
              {/* Checkmark Icon */}
              <div className="inline-flex items-center justify-center mb-10">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M66.6667 20L30 56.6667L13.3333 40"
                    stroke="#0A0A0A"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </div>

              {/* Message */}
              <h3 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold text-athera-black mb-6 leading-tight">
                Application Received.
              </h3>
              <p className="font-body text-[clamp(0.875rem,2vw,1.125rem)] text-athera-gray leading-[1.8] mb-10 max-w-md mx-auto">
                Thank you for applying to Athera Academy. We will reach out
                personally before launch. Keep building.
              </p>
              <p className="font-mono text-[clamp(0.65rem,1.5vw,0.75rem)] text-[#AAAAAA] tracking-[0.15em] uppercase">
                — Athera Labs Team
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

