import React from 'react';

interface SectionPillProps {
  label: string;
  primaryColor: string;
  className?: string;
  dark?: boolean;
}

export const SectionPill: React.FC<SectionPillProps> = ({
  label,
  primaryColor,
  className = '',
  dark = false,
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-[999px] px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
        dark
          ? 'bg-[#181829] border border-[#2D2D45] text-[#A5A5C0]'
          : 'bg-white border border-[#E8E8F0] text-[#6B6B8A] shadow-xs'
      } ${className}`}
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: primaryColor }}
        aria-hidden="true"
      />
      <span>{label}</span>
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: primaryColor }}
        aria-hidden="true"
      />
    </div>
  );
};
