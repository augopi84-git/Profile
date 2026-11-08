import React from 'react';

export const EducationCertifications: React.FC = () => {
  const certifications = [
    {
      name: 'Documentum Content Management Foundation (CMF)',
      code: 'EMC E20-120',
      issuer: 'EMC / OpenText',
      badge: 'Certified ECM Expert',
      desc: 'Deep validation of Documentum architecture, content repository design, security models, and lifecycle administration.',
    },
    {
      name: 'Sun Certified Java Programmer (SCJP 1.5)',
      code: 'Sun Microsystems',
      issuer: 'Oracle / Sun',
      badge: 'Core Java Mastery',
      desc: 'Rigorous certification covering Java memory model, multithreading, collections framework, and JVM execution semantics.',
    },
    {
      name: 'AWS Cloud Practitioner',
      code: 'AWS Online',
      issuer: 'Amazon Web Services',
      badge: 'Cloud Infrastructure',
      desc: 'Foundational cloud architectural principles, security compliance, serverless computing, and managed cloud storage.',
    },
  ];

  return (
    <section id="education" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education & Academic Rigor */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
              Academic Foundation
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Premier Engineering Pedigree
            </h2>

            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    College of Engineering Guindy (CEG)
                  </h3>
                  <div className="text-sm font-semibold text-blue-400 mt-1">
                    Anna University, Chennai, India
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-mono text-xs">
                  2002 - 2006
                </span>
              </div>

              <div className="text-sm text-slate-200 font-medium">
                Bachelor of Engineering (BE) • Mechanical Engineering
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                Established in 1794, CEG is one of Asia’s oldest and most prestigious technical institutions. 
                Gopinath developed strong analytical rigor in engineering mathematics, computational mechanics, 
                and systems problem-solving that directly informed his two decades of distributed software systems architecture.
              </p>

              {/* Languages spoken */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-6 text-xs text-slate-300 font-mono">
                <span className="text-slate-500 uppercase tracking-wider">Languages:</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  English (Professional Working)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Tamil (Native / Bilingual)
                </span>
              </div>
            </div>
          </div>

          {/* Industry Certifications */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
              Professional Credentials
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Industry Certifications & Accreditations
            </h2>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-base font-bold text-white">{cert.name}</h3>
                      <div className="text-xs font-mono text-blue-400 mt-0.5">
                        {cert.issuer} • {cert.code}
                      </div>
                    </div>
                    <span className="shrink-0 px-2.5 py-1 rounded-md bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold border border-slate-700">
                      {cert.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
