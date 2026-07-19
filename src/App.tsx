import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BlockingPointSection } from './components/BlockingPointSection';
import { PositioningSection } from './components/PositioningSection';
import { ContributionSection } from './components/ContributionSection';
import { MetricsSection } from './components/MetricsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ApproachCardsSection } from './components/ApproachCardsSection';
import { MoonFitSection } from './components/MoonFitSection';
import { TeachingSection } from './components/TeachingSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { ToolkitSection } from './components/ToolkitSection';

function App() {
  return (
    <div className="min-h-screen bg-off-white text-ink">
      <Navbar />
      <main>
        <HeroSection />
        <BlockingPointSection />
        <PositioningSection />
        <ApproachCardsSection />
        <ContributionSection />
        <MetricsSection />
        <ToolkitSection />
        <ExperienceSection />
        <MoonFitSection />
        <TeachingSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
