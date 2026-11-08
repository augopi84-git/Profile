import React, { useRef, useState, useEffect } from 'react';
import { Player, PlayerRef } from '@remotion/player';
import { HeroReel } from '../remotion/HeroReel';

export const RemotionPlayerContainer: React.FC = () => {
  const playerRef = useRef<PlayerRef>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

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

  const totalFrames = 450;
  const fps = 30;
  const currentTimeSec = (currentFrame / fps).toFixed(1);
  const totalDurationSec = (totalFrames / fps).toFixed(0);

  const chapters = [
    { title: '01. Executive Identity', frame: 0 },
    { title: '02. ECM Architecture', frame: 110 },
    { title: '03. Global Repositories', frame: 225 },
    { title: '04. Synthesis & Connect', frame: 345 },
  ];

  return (
    <div className="w-full rounded-xl overflow-hidden bg-[#101216] border border-white/[0.08] p-3 sm:p-4 shadow-xl">
      {/* Main Video Viewport */}
      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-3 border border-white/[0.06]">
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
              className={`px-3 py-2 rounded text-xs font-mono transition-all text-left flex items-center justify-between ${
                isActive
                  ? 'bg-[#1e222b] border border-white/[0.18] text-white font-semibold'
                  : 'bg-[#121418] hover:bg-[#181a20] text-zinc-400 border border-white/[0.04]'
              }`}
            >
              <span>{ch.title}</span>
              <span className="text-[10px] text-zinc-600">
                {Math.floor(ch.frame / fps)}s
              </span>
            </button>
          );
        })}
      </div>

      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2 bg-[#121418] rounded-md border border-white/[0.06]">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded bg-[#1e222b] hover:bg-[#282d38] border border-white/[0.1] text-zinc-200 flex items-center justify-center font-bold transition-all active:scale-95"
            aria-label={isPlaying ? 'Pause Reel' : 'Play Reel'}
          >
            {isPlaying ? (
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          <div className="font-mono text-xs text-zinc-300">
            <span className="text-zinc-100 font-bold">{currentTimeSec}s</span>
            <span className="text-zinc-600"> / {totalDurationSec}s</span>
            <span className="hidden sm:inline text-zinc-600 ml-2">
              (Frame {currentFrame}/{totalFrames})
            </span>
          </div>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-1 text-xs font-mono">
          <span className="text-zinc-600 mr-1">Rate:</span>
          {[1, 1.5, 2].map((s) => (
            <button
              key={s}
              onClick={() => setPlaybackRate(s)}
              className={`px-2 py-0.5 rounded text-xs transition-colors ${
                playbackRate === s
                  ? 'bg-[#282d38] text-white font-bold border border-white/[0.1]'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
