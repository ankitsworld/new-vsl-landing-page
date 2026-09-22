import React, { useState, useEffect } from 'react';
import { Zap, Clock } from 'lucide-react';

interface StickyFooterProps {
  primaryColor: string;
  accentColor: string;
  ctaText: string;
  timerMinutes?: number;
  timerLabel?: string;
  onCtaClick: () => void;
}

export const StickyFooter: React.FC<StickyFooterProps> = ({
  primaryColor,
  accentColor,
  ctaText,
  timerMinutes = 10,
  timerLabel = 'LIMITED-TIME OFFER',
  onCtaClick,
}) => {
  // Real countdown timer starting from timerMinutes (default 10:00)
  const [secondsRemaining, setSecondsRemaining] = useState<number>(() => {
    // Check session storage to maintain continuity during session
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('vsl_timer_seconds');
      if (saved) {
        const val = parseInt(saved, 10);
        if (!isNaN(val) && val > 0) return val;
      }
    }
    return timerMinutes * 60 - 2; // e.g. 9:58
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        const next = prev > 0 ? prev - 1 : 0;
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('vsl_timer_seconds', next.toString());
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const timeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  const handleButtonClick = () => {
    try {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'AddToCart');
      }
    } catch {
      // Safe fallback
    }
    onCtaClick();
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 h-[80px] px-4 md:px-[40px] flex items-center justify-between border-t-2 border-[#E8E8F0] shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.97)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {/* LEFT — timer:
          - 48px circle, PRIMARY COLOR at 15% opacity lightning bolt icon in PRIMARY COLOR
          - Clock icon + timer "9:58" in PRIMARY COLOR 22px bold monospace
          - Below: "LIMITED-TIME OFFER" 9px uppercase #9090AA */}
      <div className="flex items-center gap-3 md:gap-4 shrink-0">
        <div
          className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${primaryColor}26` }} // 15% opacity
        >
          <Zap
            className="w-5 h-5 md:w-6 md:h-6 fill-current"
            style={{ color: primaryColor }}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <Clock
              className="w-4 h-4 shrink-0"
              style={{ color: primaryColor }}
            />
            <span
              className="font-mono font-bold text-[19px] md:text-[22px] tracking-tight tabular-nums"
              style={{ color: primaryColor }}
            >
              {timeFormatted}
            </span>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-wider text-[#9090AA] mt-1">
            {timerLabel}
          </span>
        </div>
      </div>

      {/* RIGHT — button:
          - Padding 18px 52px (responsive on mobile), font 17px bold
          - ACCENT COLOR background, #1A1A2E text
          - Border radius 999px
          - Box shadow: 0 6px 24px rgba(0,0,0,0.15)
          - Hover scale(1.03) */}
      <div className="shrink-0">
        <button
          type="button"
          onClick={handleButtonClick}
          className="font-bold text-[14px] md:text-[17px] text-[#1A1A2E] rounded-[999px] px-5 py-3 md:px-[52px] md:py-[18px] transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.98] cursor-pointer whitespace-nowrap shadow-[0_6px_24px_rgba(0,0,0,0.15)] flex items-center justify-center"
          style={{
            backgroundColor: accentColor,
          }}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};
