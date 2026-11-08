import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { EducationCertifications } from './components/EducationCertifications';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090a0c] text-zinc-100 selection:bg-zinc-700 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <SkillsMatrix />
        <ProjectsShowcase />
        <EducationCertifications />
      </main>
      <Footer />
    </div>
  );
};

export default App;
