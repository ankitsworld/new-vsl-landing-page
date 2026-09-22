import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, ShieldCheck, Sparkles } from 'lucide-react';

interface VSLVideoPlayerProps {
  mediaId?: string;
  primaryColor: string;
  accentColor: string;
}

export const VSLVideoPlayer: React.FC<VSLVideoPlayerProps> = ({
  mediaId,
  primaryColor,
  accentColor,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(18); // Start with some watched progress for realism
  const [hasStarted, setHasStarted] = useState(false);
  const [wistiaLoaded, setWistiaLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if wistia-player custom element is defined or registered
    if (typeof window !== 'undefined' && customElements.get('wistia-player')) {
      setWistiaLoaded(true);
    }
  }, []);

  // Simulated progress timer when playing
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 0.3;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
    setHasStarted(true);
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen?.().catch(() => {});
      } else {
        document.exitFullscreen?.().catch(() => {});
      }
    }
  };

  // Convert progress % to mm:ss of a 12:44 video
  const totalSeconds = 12 * 60 + 44;
  const currentSeconds = Math.floor((progress / 100) * totalSeconds);
  const minutes = Math.floor(currentSeconds / 60);
  const seconds = currentSeconds % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <div className="w-full flex justify-center">
      <div
        ref={containerRef}
        className="w-full max-w-[960px] aspect-video rounded-[20px] border-[3px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden relative bg-[#0B0B14] select-none group"
      >
        {/* If valid wistia media id and script is loaded */}
        {wistiaLoaded && mediaId ? (
          <div className="w-full h-full">
            {/* Standard Wistia Web Component */}
            {React.createElement('wistia-player', {
              'media-id': mediaId,
              videoFoam: 'true',
              style: { width: '100%', height: '100%' },
            })}
          </div>
        ) : (
          /* High-Fidelity Custom Interactive Video Letter Experience */
          <div className="relative w-full h-full flex flex-col justify-between p-4 md:p-6 text-white overflow-hidden">
            {/* Cinematic Slide Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#121324] via-[#0E0F1E] to-[#080811] z-0" />

            {/* Subtle Grid Accent */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none z-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Subtle radial glow */}
            <div
              className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: primaryColor }}
            />

            {/* Top Bar of Video */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold tracking-wide text-white/90">
                  EXCLUSIVE CASE BREAKDOWN
                </span>
                <span className="text-white/40">|</span>
                <span className="text-white/70 font-mono text-[11px]">1080p HD</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[11px] text-white/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Architecture</span>
                </div>
              </div>
            </div>

            {/* Center Presentation Stage */}
            <div
              className="relative z-10 flex flex-col items-center justify-center my-auto cursor-pointer"
              onClick={handlePlayToggle}
            >
              {/* Central Play Badge */}
              <div className="relative group/play flex items-center justify-center mb-4">
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-40 transition-opacity group-hover/play:opacity-80"
                  style={{ backgroundColor: accentColor }}
                />
                <button
                  type="button"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 transform group-hover/play:scale-110 active:scale-95 cursor-pointer"
                  style={{ backgroundColor: accentColor, color: '#1A1A2E' }}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                  ) : (
                    <Play className="w-8 h-8 md:w-10 md:h-10 fill-current translate-x-0.5" />
                  )}
                </button>
              </div>

              {/* Title Card on Video */}
              <div className="text-center px-4 max-w-xl">
                <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-400 mb-1">
                  Private Briefing
                </span>
                <h3 className="text-lg md:text-2xl font-extrabold tracking-tight text-white mb-1 drop-shadow-md">
                  The Predictable $120K/Mo Acquisition Engine
                </h3>
                <p className="text-xs md:text-sm text-white/70">
                  {isPlaying
                    ? 'Session actively streaming · Listen closely'
                    : 'Click to start the presentation (12 minutes)'}
                </p>
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="relative z-10 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10">
              {/* Progress Slider */}
              <div
                className="w-full h-2 bg-white/20 rounded-full mb-3 cursor-pointer relative overflow-hidden"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const newProgress = Math.min(Math.max((clickX / rect.width) * 100, 0), 100);
                  setProgress(newProgress);
                }}
              >
                <div
                  className="h-full rounded-full transition-all duration-150"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: accentColor,
                  }}
                />
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center justify-between text-xs text-white/90">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePlayToggle}
                    className="hover:text-white transition-colors cursor-pointer"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4 fill-current" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className="hover:text-white transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-red-400" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>

                  <span className="font-mono text-[11px] text-white/70">
                    {formattedTime} / 12:44
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-white/60">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Turn sound ON for optimal retention</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleFullscreen}
                    className="hover:text-white transition-colors cursor-pointer"
                    aria-label="Toggle Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
