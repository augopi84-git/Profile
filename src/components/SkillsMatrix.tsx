import React, { useState } from 'react';

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories = [
    {
      name: 'OpenText Documentum & ECM',
      badge: 'Core Specialization',
      description: 'Comprehensive mastery of the OpenText Documentum 5.x, 6.x, and 7.x product suites across development, integration, and server administration.',
      skills: [
        { name: 'Documentum Content Server', level: 'Mastery', desc: 'Solaris, Linux & Windows deployment, repository tuning, high availability' },
        { name: 'Documentum Foundation Classes (DFC)', level: 'Expert', desc: 'Core Java-based repository access, session management, and custom workflows' },
        { name: 'Documentum Foundation Services (DFS)', level: 'Expert', desc: 'Service-oriented architecture, web service consumers, SOAP & REST endpoints' },
        { name: 'Web Development Kit (WDK)', level: 'Expert', desc: 'Customization of enterprise web components, UI actions, and JSP tag libraries' },
        { name: 'Documentum Webtop', level: 'Expert', desc: 'Standard client customization, user role configuration, and lifecycle management' },
        { name: 'Business Object Framework (BOF)', level: 'Mastery', desc: 'Type-based business objects (TBOs), Service-based business objects (SBOs)' },
        { name: 'Documentum D2', level: 'Advanced', desc: 'Configuration-driven ECM client deployment and rule-based governance' },
        { name: 'Captiva 5.3 & 6.5', level: 'Expert', desc: 'Intelligent document capture, OCR extraction, barcode parsing, batch routing' },
        { name: 'BPM & Forms Builder', level: 'Advanced', desc: 'Automated business workflow modeling, electronic form builders, task routing' },
        { name: 'Documentum Administrator', level: 'Mastery', desc: 'User privileges, security ACLs, docbase jobs, content storage areas, audit trails' },
      ],
    },
    {
      name: 'Gen AI & Emerging Systems',
      badge: 'Modern Frontiers',
      description: 'Engineering intelligent document automation, LLM evaluation pipelines, and high-performance Rust backtesting systems.',
      skills: [
        { name: 'Gen AI & Autonomous Pipelines', level: 'Advanced', desc: 'Autonomous reasoning workflows, evaluation benchmarking (Mathippu-AI)' },
        { name: 'High-Performance Rust', level: 'Proficient', desc: 'Memory-safe systems programming, algorithmic trading engines, sub-millisecond backtesting' },
        { name: 'LLM Knowledge Compiling', level: 'Advanced', desc: 'Unstructured source synthesis into living wiki graphs (llm-wiki-compiler)' },
        { name: 'Remotion Video Engineering', level: 'Advanced', desc: 'Programmatic video generation in React, dynamic video reels, automated rendering' },
        { name: 'WebAssembly (Wasm)', level: 'Proficient', desc: 'Compiling high-speed logic to execute with native speeds inside web applications' },
        { name: 'TypeScript & React', level: 'Advanced', desc: 'Modern reactive web applications, component architecture, responsive layouts' },
      ],
    },
    {
      name: 'Release & Delivery Governance',
      badge: 'Enterprise SDLC',
      description: 'Governing multi-tier deployment cycles, agile change management, and continuous integration across distributed global teams.',
      skills: [
        { name: 'Azure DevOps', level: 'Mastery', desc: 'End-to-end CI/CD release pipelines, sprint tracking, and artifact publishing' },
        { name: 'Release Management', level: 'Mastery', desc: 'Governing multi-environment deployments, staging gates, cutover coordination' },
        { name: 'Change Management', level: 'Expert', desc: 'ITIL-aligned change advisory, stakeholder sign-offs, production rollback plans' },
        { name: 'Jira & TFS', level: 'Mastery', desc: 'Backlog grooming, issue tracking, metrics dashboards, enterprise reporting' },
        { name: 'Requirement Analysis & SDLC', level: 'Mastery', desc: 'Bridging business stakeholders and technical engineering units seamlessly' },
      ],
    },
    {
      name: 'Platforms & Systems Administration',
      badge: 'Infrastructure',
      description: 'Deep OS-level administration, database optimization, and high-concurrency enterprise infrastructure.',
      skills: [
        { name: 'Multi-OS Administration', level: 'Mastery', desc: 'Oracle Solaris, Red Hat Enterprise Linux, Windows Server environments' },
        { name: 'Sun Java / J2EE (SCJP 1.5)', level: 'Certified Expert', desc: 'JVM internals, threading models, memory footprint optimization, garbage collection' },
        { name: 'AWS Cloud Services', level: 'Certified', desc: 'Cloud Practitioner certified; foundational scalable cloud architecture' },
        { name: 'Database & SQL Systems', level: 'Advanced', desc: 'Oracle Database, MS SQL Server, indexing, stored procedures, schema design' },
        { name: 'Enterprise Integration', level: 'Expert', desc: 'Documentum Web Services, SOAP, REST, enterprise archive services for reports' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16191f] border border-white/[0.08] text-zinc-400 text-xs font-mono uppercase tracking-wider mb-3">
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise Toolkit & Specializations
          </h2>
          <p className="text-zinc-400 text-sm mt-2 font-light">
            Technologies mastered across two decades of mission-critical engineering.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 ${
                activeCategory === idx
                  ? 'bg-[#20242c] text-white border border-white/[0.2] font-semibold'
                  : 'bg-[#101216] text-zinc-400 hover:text-zinc-200 border border-white/[0.04]'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[10px] text-zinc-500 uppercase">[{cat.badge}]</span>
            </button>
          ))}
        </div>

        {/* Selected Category Skill Cards */}
        <div className="surface-card p-6 sm:p-8 rounded-xl">
          <p className="text-xs font-mono text-zinc-400 mb-6 max-w-3xl leading-relaxed">
            // {categories[activeCategory].description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {categories[activeCategory].skills.map((skill, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-[#0d0f12] border border-white/[0.04] hover:border-white/[0.1] transition-colors flex items-start justify-between gap-3"
              >
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{skill.name}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">{skill.desc}</p>
                </div>
                <span className="shrink-0 px-2 py-0.5 rounded bg-[#16191f] text-zinc-300 text-[10px] font-mono border border-white/[0.08]">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
