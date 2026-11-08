import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Summary & Biography */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16191f] border border-white/[0.08] text-zinc-400 text-xs font-mono uppercase tracking-wider">
              Profile Summary
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Two Decades Orchestrating Enterprise Architecture & Digital Transformation
            </h2>
            <div className="space-y-4 text-zinc-300 text-base leading-relaxed font-light">
              <p>
                Gopinath has <strong className="text-white font-medium">20+ years of distinguished experience</strong> in
                Information Technology. He is a premier authority in{' '}
                <strong className="text-white font-medium">OpenText Documentum</strong>, spanning Requirement gathering
                and analysis, solution design, custom application development, and mission-critical production administration.
              </p>
              <p>
                His client leadership across{' '}
                <span className="text-zinc-100 font-medium">Healthcare, Insurance (Property and Casualty), Government, and Banking & Financial Services</span>{' '}
                provides him with cross-domain capability on the Documentum enterprise content management platform.
              </p>
              <p>
                Expanding from foundational enterprise architectures to modern horizons, Gopinath actively builds in{' '}
                <span className="text-zinc-100 font-medium">Generative AI systems</span>, intelligent document pipelines,{' '}
                <span className="text-copper-400 font-medium">high-performance Rust engineering</span>, and programmatic
                motion graphics using Remotion.
              </p>
            </div>

            {/* Quick Contact & Details */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2 bg-[#101216] px-3 py-2 rounded border border-white/[0.06]">
                <span className="text-zinc-500">Email:</span>
                <span className="text-zinc-200">augopi84@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-[#101216] px-3 py-2 rounded border border-white/[0.06]">
                <span className="text-zinc-500">Phone:</span>
                <span className="text-zinc-200">+1 (202) 677-8086</span>
              </div>
              <div className="flex items-center gap-2 bg-[#101216] px-3 py-2 rounded border border-white/[0.06]">
                <span className="text-zinc-500">Location:</span>
                <span className="text-zinc-200">Washington, DC, USA</span>
              </div>
            </div>
          </div>

          {/* Right: Architectural Highlights Grid */}
          <div className="w-full lg:w-96 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            <div className="surface-card p-5 rounded-xl">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                Tenure & Leadership
              </div>
              <h3 className="text-base font-bold text-white mb-2">Cognizant Senior Manager</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Continuous career progression across 9 roles in the US, Canada, UAE, and India.
              </p>
            </div>

            <div className="surface-card p-5 rounded-xl">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                Core Discipline
              </div>
              <h3 className="text-base font-bold text-white mb-2">OpenText Documentum Expert</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Deep specialization across WDK, DFC, DFS, Webtop, BOF, D2, Captiva, BPM, and Solaris/Linux server administration.
              </p>
            </div>

            <div className="surface-card p-5 rounded-xl">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                Academic Rigor
              </div>
              <h3 className="text-base font-bold text-white mb-2">College of Engineering Guindy</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Bachelor of Engineering (BE) in Mechanical Engineering from Anna University’s premier institution (2002–2006).
              </p>
            </div>

            <div className="surface-card p-5 rounded-xl">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                Credentials
              </div>
              <h3 className="text-base font-bold text-white mb-2">Dual Industry Certifications</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Sun Certified Java Programmer (SCJP 1.5) & Documentum Content Management Foundation (EMC E20-120).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
