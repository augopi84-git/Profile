import React, { useRef, useState, useEffect } from 'react';
import { Player, PlayerRef } from '@remotion/player';
import { HeroReel } from '../remotion/HeroReel';

export const RemotionPlayerContainer: React.FC = () => {
  const playerRef = useRef<PlayerRef>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showRenderModal, setShowRenderModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const frame = playerRef.current.getCurrentFrame();
        setCurrentFrame(frame);
        setIsPlaying(playerRef.current.isPlaying());
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (playerRef.current.isPlaying()) {
      playerRef.current.pause();
      setIsPlaying(false);
    } else {
      playerRef.current.play();
      setIsPlaying(true);
    }
  };

  const jumpToChapter = (frame: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(frame);
      playerRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackRate(speed);
    // Remotion player playback rate
  };

  const totalFrames = 450;
  const fps = 30;
  const currentTimeSec = (currentFrame / fps).toFixed(1);
  const totalDurationSec = (totalFrames / fps).toFixed(0);

  const chapters = [
    { title: '1. Executive Identity', frame: 0 },
    { title: '2. ECM & Documentum', frame: 110 },
    { title: '3. Global Projects & AI', frame: 225 },
    { title: '4. Future Vision', frame: 345 },
  ];

  return (
    <div className="w-full rounded-2xl overflow-hidden glass-panel-glow border border-blue-500/30 p-2 sm:p-4 shadow-2xl relative group">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2 border-b border-slate-800 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rust-500 animate-ping" />
          <span className="font-mono font-bold tracking-wider text-slate-200 uppercase">
            Remotion Programmatic Video Reel (1280x720 @ 30 FPS)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowRenderModal(true)}
            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-blue-400 border border-blue-500/30 font-mono transition-colors flex items-center gap-1.5"
          >
            <span>📹 CLI Render Script</span>
          </button>
        </div>
      </div>

      {/* Main Video Viewport with Remotion Player */}
      <div className="relative w-full aspect-video bg-slate-950 rounded-xl overflow-hidden my-3 border border-slate-800/80 shadow-inner">
        <Player
          ref={playerRef}
          component={HeroReel}
          durationInFrames={totalFrames}
          compositionWidth={1280}
          compositionHeight={720}
          fps={fps}
          style={{
            width: '100%',
            height: '100%',
          }}
          controls={false}
          autoPlay={true}
          loop={true}
          playbackRate={playbackRate}
        />
      </div>

      {/* Chapter Navigation Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        {chapters.map((ch, idx) => {
          const isActive =
            currentFrame >= ch.frame &&
            (idx === chapters.length - 1 || currentFrame < chapters[idx + 1].frame);
          return (
            <button
              key={ch.title}
              onClick={() => jumpToChapter(ch.frame)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all text-left flex items-center justify-between ${
                isActive
                  ? 'bg-blue-600/30 border border-blue-400 text-white font-bold shadow-md shadow-blue-500/10'
                  : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 border border-slate-800'
              }`}
            >
              <span>{ch.title}</span>
              <span className="font-mono text-[10px] text-slate-500">
                {Math.floor(ch.frame / fps)}s
              </span>
            </button>
          );
        })}
      </div>

      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-2 py-1 bg-slate-900/90 rounded-lg border border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="w-9 h-9 rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center font-bold shadow transition-transform active:scale-95"
            aria-label={isPlaying ? 'Pause Reel' : 'Play Reel'}
          >
            {isPlaying ? (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          <div className="font-mono text-xs text-slate-300">
            <span className="text-blue-400 font-bold">{currentTimeSec}s</span>
            <span className="text-slate-500"> / {totalDurationSec}s</span>
            <span className="hidden sm:inline text-slate-500 ml-2">
              (Frame {currentFrame}/{totalFrames})
            </span>
          </div>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-slate-500 text-[11px] mr-1">Speed:</span>
          {[1, 1.5, 2].map((s) => (
            <button
              key={s}
              onClick={() => handleSpeedChange(s)}
              className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
                playbackRate === s
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>

      {/* Render MP4 Modal */}
      {showRenderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="max-w-lg w-full bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl relative">
            <button
              onClick={() => setShowRenderModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🎬</span>
              <h3 className="text-lg font-bold text-white">Render MP4 via Remotion CLI</h3>
            </div>
            <p className="text-sm text-slate-300 mb-4">
              Remotion allows you to compile this video reel into a high-definition MP4 or WebM video file programmatically:
            </p>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto mb-4">
              npm run render:video
            </div>
            <p className="text-xs text-slate-400 mb-4">
              This executes Chrome headless via Puppeteer to capture and encode each frame with exact pixel fidelity.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowRenderModal(false)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
