import React from 'react';
import { RemotionPlayerContainer } from './RemotionPlayerContainer';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-rust-500/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-300 mb-6 backdrop-blur shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Senior Manager @ Cognizant</span>
            <span className="text-slate-500">•</span>
            <span className="text-blue-400">Washington, DC Area</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Gopinath <span className="text-gradient-cyan">Chinnakaruppan</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light mb-8">
            <strong className="text-white font-semibold">Enterprise Content Management (ECM) Leader</strong> •{' '}
            <span className="text-indigo-400 font-medium">Gen AI Enthusiast</span> •{' '}
            <span>Intelligent Automation & Digital Transformation</span>
          </p>

          {/* Quick Stats Pills */}
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-medium">
            <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-2">
              <span className="text-rust-500 font-bold font-mono">20+</span>
              <span>Years IT Mastery</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-2">
              <span className="text-blue-400 font-bold font-mono">4</span>
              <span>Global Nations (US, CA, UAE, IN)</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-2">
              <span className="text-purple-400">🎖️</span>
              <span>Documentum CMF & SCJP Certified</span>
            </div>
          </div>
        </div>

        {/* Embedded Remotion Video Player */}
        <div className="max-w-5xl mx-auto">
          <RemotionPlayerContainer />
        </div>
      </div>
    </section>
  );
};

