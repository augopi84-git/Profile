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
      skills: ['ECM Architecture', 'Gen AI Strategy', 'Program Governance', 'Client Consulting'],
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
    <section id="experience" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16191f] border border-white/[0.08] text-zinc-400 text-xs font-mono uppercase tracking-wider mb-3">
              Career Trajectory • 20+ Years
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Two Decades of Continuous Leadership at Cognizant
            </h2>
            <p className="text-zinc-400 text-sm mt-2 font-light">
              Progression from Programmer Analyst in 2006 to Senior Manager in Washington DC.
            </p>
          </div>

          {/* Region Filters */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            {countries.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCountry(c)}
                className={`px-3 py-1.5 rounded transition-colors ${
                  selectedCountry === c
                    ? 'bg-[#20242c] text-white font-semibold border border-white/[0.15]'
                    : 'bg-[#101216] text-zinc-500 hover:text-zinc-300 border border-white/[0.04]'
                }`}
              >
                {c === 'All' ? 'All Regions' : c}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-white/[0.08] ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {filtered.map((item) => (
            <div key={item.id} className="relative">
              {/* Minimalist dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-3 h-3 rounded-full bg-[#16191f] border border-white/[0.2]" />

              <div className="surface-card p-6 rounded-xl">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <div>
                    <span className="mr-2 text-base">{item.flag}</span>
                    <h3 className="text-lg font-bold text-white inline-block">{item.role}</h3>
                    <span className="text-zinc-500 font-mono text-xs ml-2">/ {item.company}</span>
                  </div>
                  <div className="text-right font-mono text-xs text-zinc-400">
                    <span>{item.period}</span>
                    <span className="text-zinc-600 ml-2">({item.duration})</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-500 mb-3">
                  📍 {item.location}
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed font-light mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-[#16191f] border border-white/[0.06] text-zinc-400"
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
