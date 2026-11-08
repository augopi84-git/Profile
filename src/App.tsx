import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { RustEngineLab } from './components/RustEngineLab';
import { EducationCertifications } from './components/EducationCertifications';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <SkillsMatrix />
        <ProjectsShowcase />
        <RustEngineLab />
        <EducationCertifications />
      </main>
      <Footer />
    </div>
  );
};

export default App;
