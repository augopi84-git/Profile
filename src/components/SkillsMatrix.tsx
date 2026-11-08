import React, { useState } from 'react';

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories = [
    {
      name: 'OpenText Documentum & ECM',
      badge: 'Core Specialty',
      color: 'blue',
      description: 'Comprehensive mastery of the OpenText Documentum 5.x, 6.x, and 7.x product suites across development, integration, and server administration.',
      skills: [
        { name: 'Documentum Content Server', level: 'Mastery', desc: 'Solaris, Linux & Windows deployment, repository tuning, high availability' },
        { name: 'Documentum Foundation Classes (DFC)', level: 'Expert', desc: 'Core Java-based repository access, session management, and custom workflows' },
        { name: 'Documentum Foundation Services (DFS)', level: 'Expert', desc: 'Service-oriented architecture, web service consumers, SOAP & REST endpoints' },
        { name: 'Web Development Kit (WDK)', level: 'Expert', desc: 'Customization of enterprise web components, UI actions, and JSP tag libraries' },
        { name: 'Documentum Webtop', level: 'Expert', desc: 'Standard client customization, user role configuration, and lifecycle management' },
        { name: 'Business Object Framework (BOF)', level: 'Mastery', desc: 'Type-based business objects (TBOs), Service-based business objects (SBOs)' },
        { name: 'Documentum D2', level: 'Advanced', desc: 'Modern configuration-driven ECM client deployment and rule-based governance' },
        { name: 'Captiva 5.3 & 6.5', level: 'Expert', desc: 'Intelligent document capture, OCR extraction, barcode parsing, batch routing' },
        { name: 'BPM & Forms Builder', level: 'Advanced', desc: 'Automated business workflow modeling, electronic form builders, task routing' },
        { name: 'Documentum Administrator', level: 'Mastery', desc: 'User privileges, security ACLs, docbase jobs, content storage areas, audit trails' },
      ],
    },
    {
      name: 'Gen AI & Modern Engineering',
      badge: 'Emerging Frontiers',
      color: 'purple',
      description: 'Engineering the next wave of intelligent document automation, LLM knowledge compilers, and high-performance Rust systems.',
      skills: [
        { name: 'Gen AI & Agentic Systems', level: 'Advanced', desc: 'Autonomous reasoning workflows, evaluation benchmarking (Mathippu-AI)' },
        { name: 'High-Performance Rust', level: 'Proficient', desc: 'Memory-safe systems programming, algorithmic trading engines, sub-millisecond backtesting' },
        { name: 'LLM Knowledge Compiling', level: 'Advanced', desc: 'Unstructured source synthesis into living wiki graphs (llm-wiki-compiler)' },
        { name: 'Remotion Video Engineering', level: 'Advanced', desc: 'Programmatic video generation in React, dynamic video reels, automated rendering' },
        { name: 'WebAssembly (Wasm)', level: 'Proficient', desc: 'Compiling high-speed logic to execute with native speeds inside web applications' },
        { name: 'TypeScript & React', level: 'Advanced', desc: 'Modern reactive web applications, Tailwind CSS, component architecture' },
      ],
    },
    {
      name: 'Release & Delivery Leadership',
      badge: 'Enterprise SDLC',
      color: 'emerald',
      description: 'Driving enterprise release governance, agile change management, and continuous multi-tier integration across distributed teams.',
      skills: [
        { name: 'Azure DevOps', level: 'Mastery', desc: 'End-to-end CI/CD release pipelines, sprint tracking, and artifact publishing' },
        { name: 'Release Management', level: 'Mastery', desc: 'Governing multi-environment deployments, staging gates, cutover coordination' },
        { name: 'Change Management', level: 'Expert', desc: 'ITIL-aligned change advisory, stakeholder sign-offs, production rollback plans' },
        { name: 'Jira & TFS', level: 'Mastery', desc: 'Backlog grooming, issue tracking, metrics dashboards, enterprise reporting' },
        { name: 'Requirement Analysis & SDLC', level: 'Mastery', desc: 'Bridging business stakeholders and technical engineering units seamlessly' },
      ],
    },
    {
      name: 'Architecture & Systems Administration',
      badge: 'Platforms & Infra',
      color: 'rust',
      description: 'Deep OS-level administration, database optimization, and high-concurrency enterprise infrastructure.',
      skills: [
        { name: 'Multi-OS Administration', level: 'Mastery', desc: 'Oracle Solaris, Red Hat Enterprise Linux, Windows Server environments' },
        { name: 'Sun Java / J2EE (SCJP 1.5)', level: 'Certified Expert', desc: 'Deep knowledge of JVM internals, threading, garbage collection, and enterprise patterns' },
        { name: 'AWS Cloud Services', level: 'Certified', desc: 'Cloud Practitioner certified; foundational scalable cloud architecture' },
        { name: 'Database & SQL Systems', level: 'Advanced', desc: 'Oracle Database, MS SQL Server, indexing, stored procedures, schema design' },
        { name: 'Enterprise Integration', level: 'Expert', desc: 'Documentum Web Services, SOAP, REST, enterprise archive services for reports' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            Core Competencies & Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise Content Management Specialist & AI Technologist
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            A comprehensive matrix of technologies mastered across 20+ years of high-concurrency enterprise engineering.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2.5 ${
                activeCategory === idx
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono uppercase ${
                activeCategory === idx ? 'bg-blue-700/80 text-blue-100' : 'bg-slate-800 text-slate-400'
              }`}>
                {cat.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Category Skill Cards */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
          <p className="text-sm text-slate-300 mb-6 font-light max-w-3xl">
            {categories[activeCategory].description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories[activeCategory].skills.map((skill, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex items-start justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base font-bold text-white">{skill.name}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{skill.desc}</p>
                </div>
                <span className="shrink-0 px-2.5 py-1 rounded bg-slate-800 text-blue-400 text-[11px] font-mono font-semibold border border-slate-700">
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
