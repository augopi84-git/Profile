import React from 'react';

export const ProjectsShowcase: React.FC = () => {
  const projects = [
    {
      id: 'mathippu-ai',
      title: 'Mathippu-AI',
      badge: 'Gen AI Platform',
      tagline: 'Intelligent AI Model Evaluation & Benchmarking Suite',
      description:
        'An automated evaluation framework built to score, benchmark, and evaluate multimodal model outputs with high precision, automated feedback loops, and comparative analytics.',
      github: 'https://github.com/augopi84-git/Mathippu-AI',
      tags: ['Generative AI', 'Model Evaluation', 'JavaScript / TypeScript', 'Automation'],
      color: 'blue',
      metrics: 'Deterministic Multi-Model Scoring',
    },
    {
      id: 'claude-trading-desk',
      title: 'claude-trading-desk',
      badge: 'FinTech & Rust',
      tagline: 'Algorithmic Bot & Backtesting Suite with Claude Code',
      description:
        'Build, honestly backtest, paper trade, and self-host algorithmic trading bots with Claude Code integration. Free stack end-to-end with sub-millisecond execution benchmarking.',
      github: 'https://github.com/augopi84-git/claude-trading-desk',
      tags: ['Trading Bots', 'Backtesting Engine', 'Rust / Python', 'Claude AI'],
      color: 'rust',
      metrics: '100k+ ticks/sec backtesting',
    },
    {
      id: 'llm-wiki-compiler',
      title: 'llm-wiki-compiler',
      badge: 'Agentic Pipeline',
      tagline: 'Raw Sources In, Interlinked Living Knowledge Out',
      description:
        'Inspired by Andrej Karpathy’s LLM Wiki pattern. A knowledge compiler that digests disparate unstructured source documents, synthesizes domain entities, and outputs an interlinked, navigable wiki graph.',
      github: 'https://github.com/augopi84-git/llm-wiki-compiler',
      tags: ['Knowledge Compiler', 'Graph Architecture', 'Agentic Workflows', 'LLM Pipeline'],
      color: 'purple',
      metrics: 'Recursive Entity Interlinking',
    },
    {
      id: 'wiki-kit-template',
      title: 'wiki-kit-template',
      badge: 'Open Source Scaffold',
      tagline: 'Production-Grade Architecture Playbook Scaffold',
      description:
        'Clean, modular documentation and engineering playbook scaffold for enterprise teams to maintain clear architecture decision records (ADRs) and API contracts.',
      github: 'https://github.com/augopi84-git/wiki-kit-template',
      tags: ['Documentation', 'Developer Experience', 'Templates'],
      color: 'emerald',
      metrics: 'Instant Static Scaffolding',
    },
  ];

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              Open Source & AI Innovations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured AI Systems & Software Engineering Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Modern repositories published under{' '}
              <a
                href="https://github.com/augopi84-git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-mono"
              >
                github.com/augopi84-git
              </a>
              .
            </p>
          </div>

          <a
            href="https://github.com/augopi84-git"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-800 hover:text-white transition-all flex items-center gap-2 w-fit"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Explore All Repositories
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-mono text-[11px] font-semibold border border-slate-700">
                    {proj.badge}
                  </span>
                  <span className="font-mono text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {proj.metrics}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {proj.title}
                </h3>
                <div className="text-xs text-blue-400/90 font-mono mb-3">
                  {proj.tagline}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-slate-800 hover:bg-blue-600 px-4 py-2.5 rounded-xl border border-slate-700 hover:border-blue-500 transition-all"
                >
                  <span>View on GitHub</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
