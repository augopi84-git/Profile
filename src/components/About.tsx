import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column: Summary & Core Narrative */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
              Executive Profile & Background
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Two Decades Driving Enterprise Modernization & Intelligent Automation
            </h2>
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Gopinath has <strong className="text-white font-medium">20+ years of distinguished experience</strong> in
                Information Technology. He is a premier content management authority in{' '}
                <strong className="text-blue-400 font-medium">OpenText Documentum</strong>, spanning Requirement gathering
                and analysis, architecture, application development, and 24/7 mission-critical maintenance phases of the SDLC.
              </p>
              <p>
                His extensive client exposure across{' '}
                <span className="text-white font-medium">Healthcare, Insurance (Property and Casualty), Government, and Banking & Financial Services (BFSI)</span>{' '}
                provides him with unparalleled cross-domain ability to deliver complex enterprise content management platforms
                at planetary scale.
              </p>
              <p>
                Combining deep enterprise roots with forward-looking technologies, Gopinath actively builds and pioneers in{' '}
                <span className="text-indigo-400 font-medium">Generative AI systems</span>, intelligent document pipelines,{' '}
                <span className="text-rust-500 font-medium">high-performance Rust architectures</span>, and programmatic
                motion graphics using Remotion.
              </p>
            </div>

            {/* Quick Contact Badges */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 bg-slate-900 px-3 py-2 rounded-lg border border-slate-800">
                <span className="text-blue-400">📧</span>
                <span>augopi84@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 px-3 py-2 rounded-lg border border-slate-800">
                <span className="text-emerald-400">📞</span>
                <span>+1 (202) 677-8086</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 px-3 py-2 rounded-lg border border-slate-800">
                <span className="text-purple-400">📍</span>
                <span>Washington, District of Columbia, USA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars / Callout Grid */}
          <div className="w-full lg:w-96 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-lg mb-3">
                🏢
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Cognizant Leadership</h3>
              <p className="text-xs text-slate-400 leading-normal">
                Senior Manager leading high-visibility client transformations across North America, Canada, UAE, and India.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-rust-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-rust-500/20 text-rust-500 flex items-center justify-center font-bold text-lg mb-3">
                ⚙️
              </div>
              <h3 className="text-lg font-bold text-white mb-1">OpenText Documentum Specialist</h3>
              <p className="text-xs text-slate-400 leading-normal">
                Expertise in WDK, DFC, DFS, Webtop, BOF, D2, Captiva, BPM, Forms Builder, and multi-OS server administration.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-purple-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-lg mb-3">
                🎓
              </div>
              <h3 className="text-lg font-bold text-white mb-1">CEG Guindy Alumnus</h3>
              <p className="text-xs text-slate-400 leading-normal">
                Bachelor of Engineering in Mechanical Engineering from College of Engineering Guindy, Chennai (Anna University).
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-lg mb-3">
                📜
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Dual Industry Certifications</h3>
              <p className="text-xs text-slate-400 leading-normal">
                Sun Certified Java Programmer (SCJP 1.5) & Documentum Content Management Foundation (EMC E20-120).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

