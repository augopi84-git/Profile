import React from 'react';
import { RemotionPlayerContainer } from './RemotionPlayerContainer';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          {/* Executive Sub-badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-[#16191f] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-zinc-200">Senior Manager, Cognizant</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">Washington, DC</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            Enterprise Content Management Leader & Systems Architect
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light mb-8 max-w-2xl">
            20+ years leading mission-critical digital transformations, OpenText Documentum architectures, 
            and deterministic engineering across Healthcare, Insurance, and Banking & Financial Services.
          </p>

          {/* Metric Badges */}
          <div className="flex flex-wrap gap-2.5 text-xs font-mono">
            <div className="px-3.5 py-1.5 rounded-md bg-[#101216] border border-white/[0.08] text-zinc-300 flex items-center gap-2">
              <span className="text-copper-500 font-bold">20+</span>
              <span className="text-zinc-400">Years Experience</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-md bg-[#101216] border border-white/[0.08] text-zinc-300 flex items-center gap-2">
              <span className="text-zinc-200 font-bold">4</span>
              <span className="text-zinc-400">Countries (US, CA, UAE, IN)</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-md bg-[#101216] border border-white/[0.08] text-zinc-300 flex items-center gap-2">
              <span className="text-zinc-400">Certifications:</span>
              <span className="text-zinc-200">Documentum CMF • SCJP • AWS</span>
            </div>
          </div>
        </div>

        {/* Embedded Remotion Video Player */}
        <div className="max-w-5xl">
          <RemotionPlayerContainer />
        </div>
      </div>
    </section>
  );
};
