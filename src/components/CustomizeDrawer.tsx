import React, { useState } from 'react';
import { Settings, X, RotateCcw, Palette, Type, Video, Sliders } from 'lucide-react';
import { VSLPageData } from '../types/vsl';

interface CustomizeDrawerProps {
  data: VSLPageData;
  onChange: (updated: VSLPageData) => void;
  onReset: () => void;
}

export const CustomizeDrawer: React.FC<CustomizeDrawerProps> = ({
  data,
  onChange,
  onReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'colors' | 'copy' | 'video'>('colors');

  const colorPalettes = [
    {
      name: 'Indigo & Amber (Default)',
      primary: '#4F46E5',
      accent: '#FFBE1A',
    },
    {
      name: 'Royal Purple & Cyber Yellow',
      primary: '#7C3AED',
      accent: '#FACC15',
    },
    {
      name: 'Emerald Growth & Warm Gold',
      primary: '#059669',
      accent: '#F59E0B',
    },
    {
      name: 'Executive Navy & Flame Orange',
      primary: '#1E3A8A',
      accent: '#FB923C',
    },
    {
      name: 'Crimson Power & Electric Amber',
      primary: '#DC2626',
      accent: '#FBBF24',
    },
  ];

  return (
    <>
      {/* Discreet Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-40 bg-white/90 hover:bg-white text-[#1A1A2E] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#D5D5E2] shadow-sm backdrop-blur-md flex items-center gap-1.5 transition-all hover:shadow-md cursor-pointer"
        title="Customize Colors & Copy"
      >
        <Settings className="w-3.5 h-3.5 text-[#6B6B8A]" />
        <span className="hidden sm:inline">Customize Template</span>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="w-full max-w-[420px] bg-white h-full shadow-2xl flex flex-col border-l border-[#E8E8F0] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-[#E8E8F0] flex items-center justify-between bg-[#FBFBFE]">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-indigo-600" />
                <h3 className="font-bold text-sm text-[#1A1A2E]">
                  VSL Design & Copy Controls
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onReset}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                  title="Reset to Template Defaults"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-[#E8E8F0] bg-[#F8F8FC] p-1 gap-1">
              <button
                type="button"
                onClick={() => setActiveTab('colors')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === 'colors'
                    ? 'bg-white text-indigo-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                Colors
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('copy')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === 'copy'
                    ? 'bg-white text-indigo-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Type className="w-3.5 h-3.5" />
                Key Copy
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('video')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === 'video'
                    ? 'bg-white text-indigo-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                Media & Links
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs">
              {activeTab === 'colors' && (
                <div className="space-y-4">
                  <div>
                    <label className="font-bold text-[#1A1A2E] block mb-2">
                      High-Converting Palettes
                    </label>
                    <div className="space-y-2">
                      {colorPalettes.map((p) => (
                        <button
                          key={p.name}
                          type="button"
                          onClick={() => {
                            onChange({
                              ...data,
                              client: {
                                ...data.client,
                                primaryColor: p.primary,
                                accentColor: p.accent,
                              },
                            });
                          }}
                          className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                            data.client.primaryColor === p.primary &&
                            data.client.accentColor === p.accent
                              ? 'border-indigo-600 bg-indigo-50/40 ring-1 ring-indigo-600'
                              : 'border-[#E8E8F0] hover:bg-slate-50'
                          }`}
                        >
                          <span className="font-medium text-[#1A1A2E]">
                            {p.name}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span
                              className="w-5 h-5 rounded-full border border-black/10"
                              style={{ backgroundColor: p.primary }}
                              title="Primary color"
                            />
                            <span
                              className="w-5 h-5 rounded-full border border-black/10"
                              style={{ backgroundColor: p.accent }}
                              title="Accent color"
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#E8E8F0] space-y-3">
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">
                        Custom Primary Color (Headline hook, dots, highlights)
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={data.client.primaryColor}
                          onChange={(e) =>
                            onChange({
                              ...data,
                              client: {
                                ...data.client,
                                primaryColor: e.target.value,
                              },
                            })
                          }
                          className="w-8 h-8 rounded border cursor-pointer"
                        />
                        <input
                          type="text"
                          value={data.client.primaryColor}
                          onChange={(e) =>
                            onChange({
                              ...data,
                              client: {
                                ...data.client,
                                primaryColor: e.target.value,
                              },
                            })
                          }
                          className="flex-1 px-3 py-1.5 border border-[#D5D5E2] rounded-md font-mono text-xs uppercase"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">
                        Custom Accent Color (All CTA Buttons)
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={data.client.accentColor}
                          onChange={(e) =>
                            onChange({
                              ...data,
                              client: {
                                ...data.client,
                                accentColor: e.target.value,
                              },
                            })
                          }
                          className="w-8 h-8 rounded border cursor-pointer"
                        />
                        <input
                          type="text"
                          value={data.client.accentColor}
                          onChange={(e) =>
                            onChange({
                              ...data,
                              client: {
                                ...data.client,
                                accentColor: e.target.value,
                              },
                            })
                          }
                          className="flex-1 px-3 py-1.5 border border-[#D5D5E2] rounded-md font-mono text-xs uppercase"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'copy' && (
                <div className="space-y-4">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      Hero Badge Text
                    </label>
                    <input
                      type="text"
                      value={data.hero.badgeText}
                      onChange={(e) =>
                        onChange({
                          ...data,
                          hero: { ...data.hero, badgeText: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 border border-[#D5D5E2] rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      Hero Headline Line 1 (Dark #1A1A2E)
                    </label>
                    <textarea
                      rows={2}
                      value={data.hero.headlineLine1}
                      onChange={(e) =>
                        onChange({
                          ...data,
                          hero: { ...data.hero, headlineLine1: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 border border-[#D5D5E2] rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      Hero Headline Line 2 (Primary Color Hook)
                    </label>
                    <textarea
                      rows={2}
                      value={data.hero.headlineLine2}
                      onChange={(e) =>
                        onChange({
                          ...data,
                          hero: { ...data.hero, headlineLine2: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 border border-[#D5D5E2] rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      Hero Subheadline
                    </label>
                    <textarea
                      rows={3}
                      value={data.hero.subheadline}
                      onChange={(e) =>
                        onChange({
                          ...data,
                          hero: { ...data.hero, subheadline: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 border border-[#D5D5E2] rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      Main CTA Button Label
                    </label>
                    <input
                      type="text"
                      value={data.client.ctaText}
                      onChange={(e) =>
                        onChange({
                          ...data,
                          client: { ...data.client, ctaText: e.target.value },
                          hero: { ...data.hero, ctaBelowVideo: e.target.value },
                          stickyFooter: {
                            ...data.stickyFooter,
                            ctaText: e.target.value,
                          },
                        })
                      }
                      className="w-full px-3 py-2 border border-[#D5D5E2] rounded-lg text-xs"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'video' && (
                <div className="space-y-4">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      Wistia Media ID
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 29b0fbf547"
                      value={data.client.wistiaMediaId}
                      onChange={(e) =>
                        onChange({
                          ...data,
                          client: {
                            ...data.client,
                            wistiaMediaId: e.target.value,
                          },
                        })
                      }
                      className="w-full px-3 py-2 border border-[#D5D5E2] rounded-lg text-xs font-mono"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      Leave default for interactive video simulation or paste any Wistia media hash.
                    </p>
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      CTA Destination URL (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="#book-strategy-session or https://calendly.com/..."
                      value={data.client.ctaLink}
                      onChange={(e) =>
                        onChange({
                          ...data,
                          client: { ...data.client, ctaLink: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 border border-[#D5D5E2] rounded-lg text-xs"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      If starting with #, clicking opens the built-in qualification calendar modal.
                    </p>
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      Sticky Footer Timer Minutes
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={60}
                      value={data.stickyFooter.timerMinutes}
                      onChange={(e) =>
                        onChange({
                          ...data,
                          stickyFooter: {
                            ...data.stickyFooter,
                            timerMinutes: parseInt(e.target.value, 10) || 10,
                          },
                        })
                      }
                      className="w-full px-3 py-2 border border-[#D5D5E2] rounded-lg text-xs"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#E8E8F0] bg-[#FBFBFE] flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
                All changes save live
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-xs hover:bg-indigo-700 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
