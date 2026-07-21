import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BlockingPointSection } from './components/BlockingPointSection';
import { MetricsSection } from './components/MetricsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ApproachCardsSection } from './components/ApproachCardsSection';
import { MoonFitSection } from './components/MoonFitSection';
import { TeachingSection } from './components/TeachingSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { LangProvider } from './lib/i18n/context';

function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-off-white text-ink">
        <Navbar />
        <main>
          <HeroSection />
          <BlockingPointSection />
          <ApproachCardsSection />
          <ExperienceSection />
          <MetricsSection />
          <MoonFitSection />
          <TeachingSection />
          <EducationSection />
          <ContactSection />
        </main>
      </div>
    </LangProvider>
  );
}

export default App;
