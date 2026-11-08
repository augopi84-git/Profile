import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from 'remotion';

export const HeroReel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#090a0c',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: '#f4f4f5',
        overflow: 'hidden',
      }}
    >
      {/* Subtle architectural dot grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.8,
        }}
      />

      {/* Clean Architectural Frame & Header */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          left: 48,
          right: 48,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: '0.08em',
          color: '#71717a',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: 16,
          textTransform: 'uppercase',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#10b981',
            }}
          />
          <span style={{ color: '#d4d4d8' }}>Gopinath Chinnakaruppan</span>
          <span style={{ color: '#52525b' }}>/</span>
          <span>Cognizant Senior Manager</span>
        </div>
        <div style={{ display: 'flex', gap: 16, color: '#a1a1aa' }}>
          <span>ECM Leader</span>
          <span style={{ color: '#3f3f46' }}>•</span>
          <span style={{ color: '#3b82f6' }}>Intelligent Automation</span>
          <span style={{ color: '#3f3f46' }}>•</span>
          <span>Gen AI</span>
        </div>
      </div>

      {/* ================= SCENE 1: Executive Identity (0 - 110) ================= */}
      <Sequence from={0} durationInFrames={115}>
        <SceneIdentity frame={frame} fps={fps} />
      </Sequence>

      {/* ================= SCENE 2: OpenText Documentum & Architecture (110 - 225) ================= */}
      <Sequence from={110} durationInFrames={120}>
        <SceneECM frame={frame - 110} fps={fps} />
      </Sequence>

      {/* ================= SCENE 3: Global Scale & AI Repositories (225 - 345) ================= */}
      <Sequence from={225} durationInFrames={125}>
        <SceneProjects frame={frame - 225} fps={fps} />
      </Sequence>

      {/* ================= SCENE 4: Synthesis & Connect (345 - 450) ================= */}
      <Sequence from={345} durationInFrames={105}>
        <SceneOutro frame={frame - 345} fps={fps} />
      </Sequence>

      {/* Minimal hairline progress tracker */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 3,
          width: `${(frame / 450) * 100}%`,
          backgroundColor: '#ea580c',
        }}
      />
    </AbsoluteFill>
  );
};

// Scene 1: Executive Identity
const SceneIdentity: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const scale = spring({ frame, fps, config: { damping: 16, mass: 0.7 } });
  const opacity = interpolate(frame, [10, 30], [0, 1], { extrapolateRight: 'clamp' });
  const tagY = interpolate(frame, [15, 35], [20, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 80px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${tagY}px)`,
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#a1a1aa',
          padding: '6px 14px',
          borderRadius: 6,
          backgroundColor: '#16191f',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: 24,
        }}
      >
        [ 01 // Executive Profile ]
      </div>

      <h1
        style={{
          fontSize: 64,
          fontWeight: 800,
          letterSpacing: '-0.03em',
          margin: '0 0 16px 0',
          transform: `scale(${scale})`,
          color: '#ffffff',
        }}
      >
        Gopinath Chinnakaruppan
      </h1>

      <p
        style={{
          fontSize: 24,
          color: '#a1a1aa',
          maxWidth: 820,
          lineHeight: 1.4,
          margin: '0 0 32px 0',
          opacity,
          fontWeight: 400,
        }}
      >
        Enterprise Content Management (ECM) Leader • Intelligent Automation & Systems Architecture
      </p>

      <div
        style={{
          display: 'flex',
          gap: 16,
          opacity,
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 13,
        }}
      >
        <div style={{ backgroundColor: '#101216', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '10px 18px', borderRadius: 8, color: '#d4d4d8' }}>
          📍 Washington, DC, USA
        </div>
        <div style={{ backgroundColor: '#101216', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '10px 18px', borderRadius: 8, color: '#ea580c', fontWeight: 600 }}>
          20+ Years SDLC Mastery
        </div>
        <div style={{ backgroundColor: '#101216', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '10px 18px', borderRadius: 8, color: '#a1a1aa' }}>
          CEG Guindy Alumnus
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 2: Enterprise Content Management & Architecture
const SceneECM: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const anim = spring({ frame, fps, config: { damping: 16 } });

  const capabilities = [
    { title: 'OpenText Documentum', desc: '5.x, 6.x & 7.x Suites • Webtop, DFC, DFS, WDK, BOF, D2' },
    { title: 'Intelligent Capture & BPM', desc: 'Captiva 5.3 & 6.5 • Business Process Manager • Forms Builder' },
    { title: 'Gen AI & Automation', desc: 'Intelligent Document Processing (IDP) • LLM Workflows • Cloud AI' },
    { title: 'Multi-OS & Release Governance', desc: 'Solaris, Linux & Windows Administration • Azure DevOps & Jira' },
  ];

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 80px',
      }}
    >
      <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#71717a', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
        [ 02 // Core Enterprise Pillars ]
      </div>
      <h2 style={{ fontSize: 42, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 36px 0', textAlign: 'center', color: '#f4f4f5' }}>
        Two Decades Architecting Enterprise Scale
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
          width: '100%',
          maxWidth: 960,
          transform: `scale(${anim})`,
        }}
      >
        {capabilities.map((c, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#101216',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 12,
              padding: 22,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: i === 2 ? '#ea580c' : '#3b82f6' }} />
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: '#f4f4f5' }}>{c.title}</h3>
            </div>
            <p style={{ margin: 0, color: '#a1a1aa', fontSize: 14, lineHeight: 1.5 }}>{c.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 24, marginTop: 32, fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#71717a' }}>
        <span>Certified: Documentum CMF (E20-120)</span>
        <span>•</span>
        <span>Sun Java SCJP 1.5</span>
        <span>•</span>
        <span>AWS Cloud Practitioner</span>
      </div>
    </AbsoluteFill>
  );
};

// Scene 3: Global Scale & AI Repositories
const SceneProjects: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const anim = spring({ frame, fps, config: { damping: 16 } });

  const projects = [
    { name: 'Mathippu-AI', desc: 'Multimodal AI model evaluation & comparative benchmark suite', tag: 'Gen AI' },
    { name: 'claude-trading-desk', desc: 'Algorithmic trading engine with paper trading & sub-ms backtesting', tag: 'FinTech / Rust' },
    { name: 'llm-wiki-compiler', desc: 'Raw document synthesis into interlinked live knowledge graphs', tag: 'Agentic Graph' },
  ];

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 80px',
      }}
    >
      <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#ea580c', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
        [ 03 // Global Footprint & Codebases ]
      </div>
      <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 28px 0', textAlign: 'center', color: '#f4f4f5' }}>
        Global Leadership • Open Source Engineering
      </h2>

      {/* Global locations */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 32, fontFamily: 'JetBrains Mono, monospace', fontSize: 12 }}>
        {['🇺🇸 United States', '🇨🇦 Canada', '🇦🇪 UAE', '🇮🇳 India'].map((loc, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#101216',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 6,
              padding: '6px 14px',
              color: '#d4d4d8',
            }}
          >
            {loc}
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          width: '100%',
          maxWidth: 980,
          transform: `scale(${anim})`,
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#101216',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 12,
              padding: 20,
            }}
          >
            <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#a1a1aa', fontSize: 11, textTransform: 'uppercase', marginBottom: 6 }}>
              {p.tag}
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{p.name}</div>
            <div style={{ fontSize: 13, color: '#71717a', lineHeight: 1.4 }}>{p.desc}</div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// Scene 4: Synthesis & Outro
const SceneOutro: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const anim = spring({ frame, fps, config: { damping: 16 } });

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 80px',
        textAlign: 'center',
      }}
    >
      <div style={{ transform: `scale(${anim})`, maxWidth: 740 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#a1a1aa', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
          [ 04 // Contact & Verification ]
        </div>
        <h2 style={{ fontSize: 46, fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px 0', color: '#ffffff' }}>
          Engineering Deterministic, Scalable Systems
        </h2>
        <p style={{ fontSize: 18, color: '#a1a1aa', margin: '0 0 32px 0', lineHeight: 1.5, fontWeight: 400 }}>
          Enterprise Architecture • Intelligent Document Automation • Generative AI & Systems
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, fontFamily: 'JetBrains Mono, monospace', fontSize: 14 }}>
          <div style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '12px 24px', borderRadius: 8, fontWeight: 600 }}>
            linkedin.com/in/gopinathchinnakaruppan
          </div>
          <div style={{ backgroundColor: '#101216', border: '1px solid rgba(255, 255, 255, 0.12)', color: '#d4d4d8', padding: '12px 24px', borderRadius: 8 }}>
            github.com/augopi84-git
          </div>
        </div>

        <div style={{ marginTop: 28, fontSize: 13, color: '#52525b', fontFamily: 'JetBrains Mono, monospace' }}>
          Washington, DC • augopi84@gmail.com
        </div>
      </div>
    </AbsoluteFill>
  );
};
