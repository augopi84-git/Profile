import React from 'react';

export const EducationCertifications: React.FC = () => {
  const certifications = [
    {
      name: 'Documentum Content Management Foundation (CMF)',
      code: 'EMC E20-120',
      issuer: 'EMC / OpenText',
      badge: 'Certified ECM Specialist',
      desc: 'Validation of Documentum architecture, repository structure, security models, and lifecycle administration.',
    },
    {
      name: 'Sun Certified Java Programmer (SCJP 1.5)',
      code: 'Sun Microsystems',
      issuer: 'Oracle / Sun',
      badge: 'Core Java Mastery',
      desc: 'Rigorous validation of Java memory architecture, multithreading, collections framework, and JVM semantics.',
    },
    {
      name: 'AWS Cloud Practitioner',
      code: 'AWS Online',
      issuer: 'Amazon Web Services',
      badge: 'Cloud Infrastructure',
      desc: 'Foundational cloud architectural principles, security compliance, serverless computing, and managed storage.',
    },
  ];

  return (
    <section id="education" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16191f] border border-white/[0.08] text-zinc-400 text-xs font-mono uppercase tracking-wider">
              Academic Background
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Engineering Pedigree
            </h2>

            <div className="surface-card p-6 rounded-xl space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    College of Engineering Guindy (CEG)
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 mt-0.5">
                    Anna University, Chennai, India
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#16191f] text-zinc-400 font-mono text-xs border border-white/[0.06]">
                  2002 - 2006
                </span>
              </div>

              <div className="text-sm text-zinc-200 font-medium">
                Bachelor of Engineering (BE) • Mechanical Engineering
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                Established in 1794, CEG is one of Asia’s oldest and most prestigious engineering institutions. 
                Gopinath developed strong analytical rigor in engineering mathematics, computational mechanics, 
                and systems problem-solving that directly grounded his two decades of distributed software systems architecture.
              </p>

              {/* Languages */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-6 text-xs text-zinc-400 font-mono">
                <span className="text-zinc-600 uppercase">Languages:</span>
                <span className="text-zinc-300">English (Professional)</span>
                <span className="text-zinc-300">Tamil (Native)</span>
              </div>
            </div>
          </div>

          {/* Industry Certifications */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16191f] border border-white/[0.08] text-zinc-400 text-xs font-mono uppercase tracking-wider">
              Credentials
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Industry Accreditations
            </h2>

            <div className="space-y-3.5">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="surface-card p-4 rounded-xl"
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div>
                      <h3 className="text-sm font-bold text-white">{cert.name}</h3>
                      <div className="text-xs font-mono text-zinc-500">
                        {cert.issuer} • {cert.code}
                      </div>
                    </div>
                    <span className="shrink-0 px-2 py-0.5 rounded bg-[#16191f] text-zinc-300 font-mono text-[10px] border border-white/[0.06]">
                      {cert.badge}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
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
