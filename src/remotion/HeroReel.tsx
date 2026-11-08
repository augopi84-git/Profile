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

  // Background animated gradient
  const bgHue = interpolate(frame, [0, 450], [210, 260]);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 30%, hsl(${bgHue}, 40%, 12%) 0%, #060911 100%)`,
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Background Matrix Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.6,
        }}
      />

      {/* Top Bar Branding */}
      <div
        style={{
          position: 'absolute',
          top: 32,
          left: 48,
          right: 48,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 16,
          fontWeight: 600,
          letterSpacing: 1.5,
          color: 'rgba(255, 255, 255, 0.7)',
          textTransform: 'uppercase',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              boxShadow: '0 0 12px #22c55e',
            }}
          />
          <span>Gopinath Chinnakaruppan • Executive Profile Reel</span>
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          <span style={{ color: '#f97316' }}>Rust Engine</span>
          <span>•</span>
          <span style={{ color: '#38bdf8' }}>Remotion Video</span>
          <span>•</span>
          <span style={{ color: '#a855f7' }}>Gen AI</span>
        </div>
      </div>

      {/* ================= SCENE 1: Identity & Executive Leadership (0 - 110) ================= */}
      <Sequence from={0} durationInFrames={115}>
        <SceneIdentity frame={frame} fps={fps} />
      </Sequence>

      {/* ================= SCENE 2: Core Engineering & ECM Dominance (110 - 225) ================= */}
      <Sequence from={110} durationInFrames={120}>
        <SceneSkills frame={frame - 110} fps={fps} />
      </Sequence>

      {/* ================= SCENE 3: Global Footprint & Featured Projects (225 - 345) ================= */}
      <Sequence from={225} durationInFrames={125}>
        <SceneProjects frame={frame - 225} fps={fps} />
      </Sequence>

      {/* ================= SCENE 4: Future Vision & Call to Action (345 - 450) ================= */}
      <Sequence from={345} durationInFrames={105}>
        <SceneOutro frame={frame - 345} fps={fps} />
      </Sequence>

      {/* Bottom Progress Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 6,
          width: `${(frame / 450) * 100}%`,
          background: 'linear-gradient(90deg, #38bdf8, #f97316, #a855f7)',
          boxShadow: '0 0 16px rgba(56, 189, 248, 0.8)',
        }}
      />
    </AbsoluteFill>
  );
};

// Sub-Scene 1: Identity
const SceneIdentity: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const nameScale = spring({ frame, fps, config: { damping: 14, mass: 0.8 } });
  const titleOpacity = interpolate(frame, [15, 35], [0, 1], { extrapolateRight: 'clamp' });
  const badgeTranslateY = interpolate(frame, [25, 45], [40, 0], { extrapolateRight: 'clamp' });

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
          opacity: titleOpacity,
          transform: `translateY(${badgeTranslateY}px)`,
          padding: '6px 18px',
          borderRadius: 24,
          background: 'rgba(56, 189, 248, 0.15)',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          color: '#38bdf8',
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: 'uppercase',
          marginBottom: 20,
        }}
      >
        Senior Manager @ Cognizant
      </div>

      <h1
        style={{
          fontSize: 68,
          fontWeight: 900,
          letterSpacing: '-1.5px',
          margin: '0 0 16px 0',
          transform: `scale(${nameScale})`,
          background: 'linear-gradient(135deg, #ffffff 40%, #94a3b8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
        }}
      >
        Gopinath Chinnakaruppan
      </h1>

      <p
        style={{
          fontSize: 26,
          color: '#cbd5e1',
          maxWidth: 900,
          lineHeight: 1.4,
          margin: '0 0 24px 0',
          opacity: titleOpacity,
        }}
      >
        Enterprise Content Management (ECM) Leader • Gen AI Enthusiast • Intelligent Automation
      </p>

      <div
        style={{
          display: 'flex',
          gap: 24,
          opacity: titleOpacity,
        }}
      >
        <span style={{ background: '#1e293b', padding: '8px 20px', borderRadius: 8, border: '1px solid #334155', fontSize: 16 }}>
          📍 Washington, DC, USA
        </span>
        <span style={{ background: 'rgba(249, 115, 22, 0.15)', border: '1px solid rgba(249, 115, 22, 0.4)', color: '#fb923c', padding: '8px 20px', borderRadius: 8, fontSize: 16, fontWeight: 600 }}>
          ⚡ 20+ Years IT Tenure
        </span>
        <span style={{ background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.4)', color: '#c084fc', padding: '8px 20px', borderRadius: 8, fontSize: 16, fontWeight: 600 }}>
          🎓 College of Engineering Guindy
        </span>
      </div>
    </AbsoluteFill>
  );
};

// Sub-Scene 2: Skills & ECM Mastery
const SceneSkills: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const anim = spring({ frame, fps, config: { damping: 15 } });

  const skills = [
    { title: 'OpenText Documentum', desc: 'Webtop, DFC, DFS, WDK, BOF, D2, Captiva 5.3/6.5', color: '#38bdf8' },
    { title: 'Generative AI & LLMs', desc: 'Autonomous Agents, Intelligent Document Pipelines', color: '#a855f7' },
    { title: 'Rust & Systems Engine', desc: 'High-Throughput Backtesting & Zero-Cost Concurrency', color: '#f97316' },
    { title: 'Release & SDLC Leadership', desc: 'Azure DevOps, TFS, Jira, Solaris, Linux, Windows', color: '#22c55e' },
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
      <div style={{ color: '#94a3b8', fontSize: 16, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
        Deep Enterprise Competency
      </div>
      <h2 style={{ fontSize: 46, fontWeight: 800, margin: '0 0 40px 0', textAlign: 'center' }}>
        Content Management Mastery Meets Next-Gen AI
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
          width: '100%',
          maxWidth: 1000,
          transform: `scale(${anim})`,
        }}
      >
        {skills.map((item, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: `1px solid ${item.color}40`,
              borderRadius: 16,
              padding: 24,
              boxShadow: `0 8px 24px ${item.color}15`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: item.color }} />
              <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: item.color }}>{item.title}</h3>
            </div>
            <p style={{ margin: 0, color: '#cbd5e1', fontSize: 16, lineHeight: 1.4 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 32, marginTop: 36 }}>
        <span style={{ color: '#e2e8f0', fontSize: 15 }}>🎖️ Documentum CMF (E20-120)</span>
        <span style={{ color: '#e2e8f0', fontSize: 15 }}>☕ Sun Java SCJP 1.5</span>
        <span style={{ color: '#e2e8f0', fontSize: 15 }}>☁️ AWS Cloud Practitioner</span>
      </div>
    </AbsoluteFill>
  );
};

// Sub-Scene 3: Global Footprint & Projects
const SceneProjects: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const anim = spring({ frame, fps, config: { damping: 14 } });

  const projects = [
    { name: 'Mathippu-AI', desc: 'Intelligent AI model evaluation & benchmark suite', tag: 'Gen AI Platform' },
    { name: 'claude-trading-desk', desc: 'Algorithmic trading bot with honest backtesting & execution', tag: 'FinTech / Rust' },
    { name: 'llm-wiki-compiler', desc: 'Raw document synthesis into interlinked live knowledge graphs', tag: 'Agentic Workflow' },
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
      <div style={{ color: '#f97316', fontSize: 16, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
        Global Leadership & Innovations
      </div>
      <h2 style={{ fontSize: 44, fontWeight: 800, margin: '0 0 32px 0', textAlign: 'center' }}>
        4 Countries • Enterprise Scale • Open-Source Impact
      </h2>

      {/* Countries bar */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 36 }}>
        {['🇺🇸 United States (Washington DC)', '🇨🇦 Canada (Mississauga)', '🇦🇪 UAE', '🇮🇳 India (Chennai)'].map((c, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(30, 41, 59, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 8,
              padding: '8px 16px',
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {c}
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          width: '100%',
          maxWidth: 1040,
          transform: `scale(${anim})`,
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: 14,
              padding: 22,
            }}
          >
            <div style={{ color: '#38bdf8', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', marginBottom: 8 }}>
              {p.tag}
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{p.name}</div>
            <div style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.4 }}>{p.desc}</div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// Sub-Scene 4: Outro & Contact
const SceneOutro: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const anim = spring({ frame, fps, config: { damping: 14 } });

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
          transform: `scale(${anim})`,
          maxWidth: 800,
        }}
      >
        <div style={{ color: '#22c55e', fontSize: 18, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>
          Architecting The Future
        </div>
        <h2 style={{ fontSize: 52, fontWeight: 900, margin: '0 0 20px 0', letterSpacing: '-1px' }}>
          Let's Build Resilient Systems Together
        </h2>
        <p style={{ fontSize: 22, color: '#94a3b8', margin: '0 0 36px 0', lineHeight: 1.5 }}>
          Enterprise Architecture • Intelligent Document Automation • Generative AI Systems
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, fontSize: 18 }}>
          <div style={{ background: '#0284c7', color: '#ffffff', padding: '12px 28px', borderRadius: 10, fontWeight: 600 }}>
            linkedin.com/in/gopinathchinnakaruppan
          </div>
          <div style={{ background: '#1e293b', border: '1px solid #475569', color: '#ffffff', padding: '12px 28px', borderRadius: 10, fontWeight: 600 }}>
            github.com/augopi84-git
          </div>
        </div>

        <div style={{ marginTop: 28, fontSize: 15, color: '#64748b' }}>
          📧 augopi84@gmail.com • 📍 Washington, DC
        </div>
      </div>
    </AbsoluteFill>
  );
};

