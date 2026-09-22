import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialItem } from '../types/vsl';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  isCenter: boolean;
  primaryColor: string;
  accentColor: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isCenter,
  primaryColor,
  accentColor,
}) => {
  return (
    <div
      className={`relative rounded-[32px] p-[36px_28px] transition-all duration-300 flex flex-col justify-between ${
        isCenter
          ? 'bg-[#1A1A2E] text-white shadow-[0_12px_40px_rgba(0,0,0,0.22)] md:-translate-y-2'
          : 'bg-white border border-[#E8E8F0] text-[#1A1A2E] shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
      }`}
      style={
        isCenter
          ? {
              borderTop: `3px solid ${accentColor}`,
            }
          : undefined
      }
    >
      <div>
        {/* Photo + Identity Header */}
        <div className="flex items-center gap-4 mb-5">
          {/* Photo: 80px rounded square */}
          <div
            className={`w-[80px] h-[80px] rounded-[18px] shrink-0 overflow-hidden flex items-center justify-center font-bold text-xl select-none ${
              isCenter
                ? 'bg-gradient-to-tr from-[#252542] to-[#34345C] text-white border border-white/10'
                : 'bg-gradient-to-tr from-[#F0F0FA] to-[#E2E2F5] text-[#2C2C45] border border-[#E0E0EF]'
            }`}
          >
            {/* Executive SVG Avatar portrait */}
            <svg
              viewBox="0 0 80 80"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="80"
                height="80"
                fill={isCenter ? '#282846' : '#EBF0FF'}
              />
              <circle
                cx="40"
                cy="30"
                r="16"
                fill={isCenter ? accentColor : primaryColor}
                opacity={isCenter ? '0.85' : '0.75'}
              />
              <path
                d="M16 68C16 54.7452 26.7452 44 40 44C53.2548 44 64 54.7452 64 68"
                fill={isCenter ? '#43436A' : '#C7D2FE'}
              />
              <text
                x="40"
                y="34"
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fill="#FFFFFF"
                fontFamily="sans-serif"
              >
                {testimonial.initials}
              </text>
            </svg>
          </div>

          <div className="flex flex-col">
            <h4
              className={`font-bold text-[18px] leading-snug ${
                isCenter ? 'text-white' : 'text-[#1A1A2E]'
              }`}
            >
              {testimonial.name}
            </h4>

            {/* Role: 11px uppercase PRIMARY COLOR */}
            <span
              className="text-[11px] font-bold uppercase tracking-wider mt-0.5"
              style={{ color: isCenter ? '#A5B4FC' : primaryColor }}
            >
              {testimonial.role}
            </span>

            {/* Star icon below role */}
            <div className="flex items-center gap-1 mt-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-current"
                  style={{ color: accentColor }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Before / After Badges */}
        <div className="space-y-2 mb-5">
          <div
            className={`p-2.5 rounded-xl text-xs leading-relaxed ${
              isCenter
                ? 'bg-white/5 border border-white/10 text-white/70'
                : 'bg-[#F8F8FC] border border-[#EBEBF5] text-[#555570]'
            }`}
          >
            <span className="font-semibold text-rose-500 mr-1.5">Before:</span>
            {testimonial.before.replace(/^Before:\s*/i, '')}
          </div>

          <div
            className={`p-2.5 rounded-xl text-xs leading-relaxed ${
              isCenter
                ? 'bg-emerald-950/30 border border-emerald-500/20 text-emerald-200'
                : 'bg-emerald-50/70 border border-emerald-200/60 text-emerald-800'
            }`}
          >
            <span className="font-semibold text-emerald-600 dark:text-emerald-400 mr-1.5">
              After:
            </span>
            {testimonial.after.replace(/^After:\s*/i, '')}
          </div>
        </div>

        {/* Italic quote text 16px */}
        <p
          className={`italic text-[16px] leading-[1.65] ${
            isCenter ? 'text-white/90' : 'text-[#4A4B65]'
          }`}
        >
          {testimonial.quote}
        </p>
      </div>
    </div>
  );
};
