import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface HeroBadgeProps {
  text: string;
  primaryColor: string;
  className?: string;
}

export const HeroBadge: React.FC<HeroBadgeProps> = ({
  text,
  primaryColor,
  className = '',
}) => {
  // Animated counter effect for numbers in the badge (e.g. 1,420+)
  const [count, setCount] = useState<number>(0);
  const targetCount = 1420;

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = Math.ceil(targetCount / (duration / 25));
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [targetCount]);

  // Replace 1,420 with the animated number if present in text
  const formattedCount = count.toLocaleString();
  const renderedText = text.includes('1,420')
    ? text.replace('1,420', formattedCount)
    : text;

  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-[999px] bg-white border border-[#E8E8F0] px-6 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-[13px] text-[#4A4B65] font-medium transition-all ${className}`}
    >
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${primaryColor}1A` }}
      >
        <Star
          className="w-3.5 h-3.5 fill-current"
          style={{ color: primaryColor }}
        />
      </div>
      <span className="leading-snug">{renderedText}</span>
    </div>
  );
};
