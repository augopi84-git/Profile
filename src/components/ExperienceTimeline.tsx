import React, { useState } from 'react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  country: 'USA' | 'Canada' | 'UAE' | 'India';
  flag: string;
  description: string;
  skills: string[];
}

export const ExperienceTimeline: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('All');

  const experiences: ExperienceItem[] = [
    {
      id: 'sm-us',
      role: 'Senior Manager',
      company: 'Cognizant',
      period: 'August 2025 - Present',
      duration: '1 yr 4 mos',
      location: 'Washington, District of Columbia, United States',
      country: 'USA',
      flag: '🇺🇸',
      description:
        'Leading executive enterprise content management transformations, intelligent automation, and Gen AI adoption for critical government, healthcare, and financial services accounts in the US capital region.',
      skills: ['ECM Architecture', 'Gen AI Strategy', 'Program Governance', 'Executive Client Consulting'],
    },
    {
      id: 'sm-ca',
      role: 'Senior Manager',
      company: 'Cognizant',
      period: 'December 2021 - August 2025',
      duration: '3 yrs 9 mos',
      location: 'Mississauga, Ontario, Canada',
      country: 'Canada',
      flag: '🇨🇦',
      description:
        'Spearheaded multi-million dollar ECM platform modernization, cross-functional delivery teams, and Documentum enterprise upgrades for premier Canadian banking and insurance institutions.',
      skills: ['Enterprise Content Management', 'Azure DevOps', 'Release Management', 'Team Mentorship'],
    },
    {
      id: 'mgr-ca',
      role: 'Manager',
      company: 'Cognizant',
      period: 'June 2021 - December 2021',
      duration: '7 mos',
      location: 'Mississauga, Ontario, Canada',
      country: 'Canada',
      flag: '🇨🇦',
      description:
        'Managed core business process automation, Documentum D2 integrations, and agile release cycles for enterprise clients.',
      skills: ['Documentum D2', 'Process Optimization', 'Release Governance'],
    },
    {
      id: 'mgr-us',
      role: 'Manager',
      company: 'Cognizant',
      period: 'September 2015 - June 2021',
      duration: '5 yrs 10 mos',
      location: 'Washington DC - Baltimore Area, USA',
      country: 'USA',
      flag: '🇺🇸',
      description:
        'Directed high-stakes content migration, server consolidation, and multi-tier Documentum architectures across government and property & casualty insurance clients.',
      skills: ['OpenText Documentum Suite', 'Solaris & Linux Administration', 'Jira / TFS', 'SDLC Delivery'],
    },
    {
      id: 'mgr-in',
      role: 'Manager',
      company: 'Cognizant',
      period: 'July 2015 - September 2015',
      duration: '3 mos',
      location: 'Greater Chennai Area, India',
      country: 'India',
      flag: '🇮🇳',
      description:
        'Led offshore delivery units, transition planning, and global client alignment for ECM accounts.',
      skills: ['Delivery Management', 'Offshore Orchestration', 'Requirement Gathering'],
    },
    {
      id: 'ts-in',
      role: 'Technology Specialist',
      company: 'Cognizant',
      period: 'January 2012 - July 2015',
      duration: '3 yrs 7 mos',
      location: 'Greater Chennai Area, India',
      country: 'India',
      flag: '🇮🇳',
      description:
        'Designed, customized, and tuned complex Documentum solutions using WDK, DFC, DFS, Webtop, and Business Object Framework (BOF). Automated high-volume content ingestion pipelines with Captiva.',
      skills: ['DFC / DFS / WDK', 'BOF Framework', 'Captiva 5.3 & 6.5', 'Documentum Administrator'],
    },
    {
      id: 'ts-uae',
      role: 'Technology Specialist',
      company: 'Cognizant',
      period: 'November 2011 - December 2011',
      duration: '2 mos',
      location: 'United Arab Emirates',
      country: 'UAE',
      flag: '🇦🇪',
      description:
        'On-site technical consultation for Middle East enterprise content infrastructure and high-availability Documentum server clustering.',
      skills: ['High-Availability Clustering', 'Server Administration', 'Client Advisory'],
    },
    {
      id: 'assoc-in',
      role: 'Associate',
      company: 'Cognizant',
      period: 'October 2009 - November 2011',
      duration: '2 yrs 2 mos',
      location: 'Chennai, India',
      country: 'India',
      flag: '🇮🇳',
      description:
        'Core development and administration on Solaris and Linux. Implemented custom business logic using Java/J2EE and Documentum Foundation Classes.',
      skills: ['Sun Java', 'Linux / Solaris', 'BOF Modules', 'Content Server'],
    },
    {
      id: 'pa-in',
      role: 'Programmer Analyst',
      company: 'Cognizant',
      period: 'July 2006 - October 2009',
      duration: '3 yrs 4 mos',
      location: 'Chennai, India',
      country: 'India',
      flag: '🇮🇳',
      description:
        'Foundational SDLC delivery, unit testing, bug fixing, and Documentum application development for large-scale enterprise deployments.',
      skills: ['Java Development', 'Documentum 5.x', 'Web Development Kit', 'SQL'],
    },
  ];

  const filtered =
    selectedCountry === 'All'
      ? experiences
      : experiences.filter((e) => e.country === selectedCountry);

  const countries = ['All', 'USA', 'Canada', 'UAE', 'India'];

  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rust-950/60 border border-rust-500/30 text-rust-500 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              Career Trajectory • 20+ Years
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Two Decades of Continuous Leadership at Cognizant
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              From Programmer Analyst in 2006 to Senior Manager in Washington DC, managing planetary-scale ECM solutions.
            </p>
          </div>

          {/* Geography Filters */}
          <div className="flex flex-wrap gap-2">
            {countries.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCountry(c)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCountry === c
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {c === 'All' ? '🌍 All Regions' : `${c}`}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Line & Cards */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {filtered.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:scale-125 transition-all shadow-md shadow-blue-500/20" />

              <div className="glass-panel p-6 rounded-2xl border border-slate-800/90 hover:border-blue-500/40 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xl mr-2">{item.flag}</span>
                    <h3 className="text-xl font-bold text-white inline-block">{item.role}</h3>
                    <div className="text-sm font-semibold text-blue-400 mt-0.5">
                      {item.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-mono text-xs font-semibold">
                      {item.period}
                    </span>
                    <div className="text-[11px] text-slate-500 font-mono mt-1">
                      {item.duration}
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-1.5">
                  <span>📍 {item.location}</span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-light mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

