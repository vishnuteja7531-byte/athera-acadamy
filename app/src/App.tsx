import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { StatsStrip } from '@/sections/StatsStrip';
import { Curriculum } from '@/sections/Curriculum';
import { WhyAthera } from '@/sections/WhyAthera';
import { PreRegistrationForm } from '@/sections/PreRegistrationForm';
import { MeetTheTeam } from '@/sections/MeetTheTeam';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <StatsStrip />
        <Curriculum />
        <WhyAthera />
        <PreRegistrationForm />
        <MeetTheTeam />
      </main>
      <Footer />
    </div>
  );
}

export default App;
