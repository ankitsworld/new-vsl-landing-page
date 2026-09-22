import React from 'react';
import { TrendingUp, Target, Zap, ShieldCheck, Users, DollarSign } from 'lucide-react';
import { StatItem } from '../types/vsl';

interface StatCardProps {
  stat: StatItem;
  primaryColor: string;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, primaryColor }) => {
  const getIcon = () => {
    switch (stat.iconName) {
      case 'trending-up':
        return <TrendingUp className="w-5 h-5" style={{ color: primaryColor }} />;
      case 'target':
        return <Target className="w-5 h-5" style={{ color: primaryColor }} />;
      case 'zap':
        return <Zap className="w-5 h-5" style={{ color: primaryColor }} />;
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5" style={{ color: primaryColor }} />;
      case 'users':
        return <Users className="w-5 h-5" style={{ color: primaryColor }} />;
      case 'dollar-sign':
        return <DollarSign className="w-5 h-5" style={{ color: primaryColor }} />;
      default:
        return <TrendingUp className="w-5 h-5" style={{ color: primaryColor }} />;
    }
  };

  return (
    <div className="bg-white border border-[#E8E8F0] rounded-[20px] p-[28px] text-center flex flex-col items-center justify-center shadow-xs transition-transform duration-200 hover:-translate-y-1">
      {/* Icon box: PRIMARY COLOR at 10% opacity */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shrink-0"
        style={{ backgroundColor: `${primaryColor}1A` }}
      >
        {getIcon()}
      </div>

      {/* Label: uppercase PRIMARY COLOR 11px */}
      <span
        className="text-[11px] font-bold uppercase tracking-wider mb-2 text-center"
        style={{ color: primaryColor }}
      >
        {stat.label}
      </span>

      {/* Value: bold 22px #1A1A2E */}
      <span className="font-extrabold text-[22px] md:text-[24px] text-[#1A1A2E] leading-tight mb-1 tabular-nums">
        {stat.value}
      </span>

      {/* Sub-label: 13px #9090AA */}
      <span className="text-[13px] text-[#9090AA] leading-snug">
        {stat.subLabel}
      </span>
    </div>
  );
};
