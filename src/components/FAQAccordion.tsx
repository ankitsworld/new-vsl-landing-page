import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types/vsl';

interface FAQAccordionProps {
  items: FAQItem[];
  primaryColor: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, primaryColor }) => {
  // First item open by default for immediate engagement
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [items[0]?.id || '']: true,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full max-w-[860px] mx-auto space-y-[12px]">
      {items.map((item) => {
        const isOpen = !!openIds[item.id];
        return (
          <div
            key={item.id}
            className="bg-white rounded-[16px] border border-[#E8E8F0] p-[24px_28px] transition-shadow duration-200 hover:shadow-xs"
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between text-left gap-4 cursor-pointer select-none group"
              aria-expanded={isOpen}
            >
              {/* Question: bold 17px #1A1A2E */}
              <span className="font-bold text-[17px] text-[#1A1A2E] leading-snug group-hover:text-black transition-colors">
                {item.question}
              </span>

              {/* Plus/minus icon right aligned */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200"
                style={{
                  backgroundColor: isOpen ? `${primaryColor}15` : '#F4F4F8',
                  color: isOpen ? primaryColor : '#1A1A2E',
                }}
              >
                {isOpen ? (
                  <Minus className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                )}
              </div>
            </button>

            {/* Answer: 16px #4A4B65, padding-top 16px */}
            {isOpen && (
              <div className="pt-4 text-[16px] text-[#4A4B65] leading-[1.75] border-t border-[#F2F2F7] mt-3">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
