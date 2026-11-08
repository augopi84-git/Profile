import React from 'react';

export const ProjectsShowcase: React.FC = () => {
  const projects = [
    {
      id: 'mathippu-ai',
      title: 'Mathippu-AI',
      badge: 'Gen AI Platform',
      tagline: 'Automated AI Model Evaluation & Benchmarking Suite',
      description:
        'An automated evaluation framework built to score, benchmark, and evaluate multimodal model outputs with high precision, automated feedback loops, and comparative analytics.',
      github: 'https://github.com/augopi84-git/Mathippu-AI',
      tags: ['Generative AI', 'Model Evaluation', 'JavaScript / TypeScript', 'Automation'],
      metrics: 'Multi-Model Comparative Scoring',
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
      metrics: '100k+ ticks/sec backtesting',
    },
    {
      id: 'llm-wiki-compiler',
      title: 'llm-wiki-compiler',
      badge: 'Agentic Pipeline',
      tagline: 'Raw Sources In, Interlinked Living Knowledge Out',
      description:
        'Inspired by Andrej Karpathy’s LLM Wiki pattern. A knowledge compiler that digests disparate unstructured source documents, synthesizes domain entities, and outputs an interlinked, living wiki graph.',
      github: 'https://github.com/augopi84-git/llm-wiki-compiler',
      tags: ['Knowledge Compiler', 'Graph Architecture', 'Agentic Workflows', 'LLM Pipeline'],
      metrics: 'Recursive Entity Interlinking',
    },
    {
      id: 'wiki-kit-template',
      title: 'wiki-kit-template',
      badge: 'Engineering Scaffold',
      tagline: 'Production-Grade Architecture Playbook Scaffold',
      description:
        'Clean, modular documentation and engineering playbook scaffold for enterprise teams to maintain clear architecture decision records (ADRs) and API contracts.',
      github: 'https://github.com/augopi84-git/wiki-kit-template',
      tags: ['Documentation', 'Developer Experience', 'Templates'],
      metrics: 'Deterministic Static Scaffolding',
    },
  ];

  return (
    <section id="projects" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16191f] border border-white/[0.08] text-zinc-400 text-xs font-mono uppercase tracking-wider mb-3">
              Open Source Repositories
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems & AI Codebases
            </h2>
            <p className="text-zinc-400 text-sm mt-2 font-light">
              Published codebases under{' '}
              <a
                href="https://github.com/augopi84-git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-white underline font-mono"
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
            className="px-3.5 py-2 rounded bg-[#16191f] border border-white/[0.1] text-zinc-200 text-xs font-mono hover:bg-[#20242c] hover:border-white/[0.2] transition-all flex items-center gap-2 w-fit"
          >
            <span>GitHub Profile</span>
            <span className="text-zinc-500">→</span>
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="surface-card p-6 rounded-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#16191f] text-zinc-300 border border-white/[0.06]">
                    {proj.badge}
                  </span>
                  <span className="text-zinc-500 text-[11px]">
                    {proj.metrics}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {proj.title}
                </h3>
                <div className="text-xs text-zinc-400 font-mono mb-3">
                  {proj.tagline}
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-[11px]">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#16191f] border border-white/[0.04] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-zinc-200 bg-[#16191f] hover:bg-[#20242c] px-3.5 py-2 rounded border border-white/[0.08] hover:border-white/[0.2] transition-all"
                >
                  <span>View Repository</span>
                  <span className="text-zinc-500">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
