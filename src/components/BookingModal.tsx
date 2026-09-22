import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, ShieldCheck, ArrowRight, Clock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  primaryColor: string;
  accentColor: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  primaryColor,
  accentColor,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    website: '',
    revenue: '$20K - $50K / month',
    primaryGoal: 'Scale outbound appointments without hiring an SDR team',
    selectedDate: 'Tomorrow at 2:00 PM EST',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }
    } catch {
      // Safe fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-[560px] bg-white rounded-[28px] border border-[#E8E8F0] shadow-2xl p-6 md:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F4F4F8] hover:bg-[#E8E8F0] flex items-center justify-center text-[#4A4B65] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <span
                className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-2"
                style={{ color: primaryColor }}
              >
                Step {step} of 2 · Priority Booking
              </span>
              <h3 className="font-extrabold text-[24px] md:text-[28px] text-[#1A1A2E] leading-tight">
                {step === 1 ? '1-on-1 Scale Strategy Session' : 'Confirm Your Session Time'}
              </h3>
              <p className="text-sm text-[#4A4B65] mt-1.5 max-w-md mx-auto">
                {step === 1
                  ? 'Complete this 45-second qualification to ensure mutual fit before booking.'
                  : 'Select your preferred time slot for a private screen-share consultation.'}
              </p>
            </div>

            {step === 1 ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(2);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[#D5D5E2] focus:border-indigo-600 focus:outline-none text-sm text-[#1A1A2E] bg-[#FAFAFC]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@yourcompany.com"
                    value={formData.workEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, workEmail: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[#D5D5E2] focus:border-indigo-600 focus:outline-none text-sm text-[#1A1A2E] bg-[#FAFAFC]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-1.5">
                    Company Website / URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://yourcompany.com"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[#D5D5E2] focus:border-indigo-600 focus:outline-none text-sm text-[#1A1A2E] bg-[#FAFAFC]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-1.5">
                    Current Monthly Revenue
                  </label>
                  <select
                    value={formData.revenue}
                    onChange={(e) =>
                      setFormData({ ...formData, revenue: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[#D5D5E2] focus:border-indigo-600 focus:outline-none text-sm text-[#1A1A2E] bg-[#FAFAFC]"
                  >
                    <option>$10K - $20K / month</option>
                    <option>$20K - $50K / month</option>
                    <option>$50K - $100K / month</option>
                    <option>$100K+ / month</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-[999px] font-bold text-[16px] text-[#1A1A2E] shadow-md transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    style={{ backgroundColor: accentColor }}
                  >
                    <span>Continue to Calendar Selection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-[#9090AA] pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Your information is 100% confidential. No spam ever.</span>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="bg-[#F8F8FC] p-4 rounded-2xl border border-[#E8E8F2] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A2E] block">
                    Available Fast-Track Slots:
                  </span>
                  {[
                    'Tomorrow at 11:00 AM EST',
                    'Tomorrow at 2:00 PM EST',
                    'Thursday at 1:30 PM EST',
                    'Friday at 10:00 AM EST',
                  ].map((slot) => (
                    <label
                      key={slot}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${
                        formData.selectedDate === slot
                          ? 'border-indigo-600 bg-white shadow-xs'
                          : 'border-[#E0E0EC] bg-[#FAFAFE] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Calendar
                          className="w-4 h-4"
                          style={{
                            color:
                              formData.selectedDate === slot
                                ? primaryColor
                                : '#6B6B8A',
                          }}
                        />
                        <span className="text-sm font-semibold text-[#1A1A2E]">
                          {slot}
                        </span>
                      </div>
                      <input
                        type="radio"
                        name="slot"
                        checked={formData.selectedDate === slot}
                        onChange={() =>
                          setFormData({ ...formData, selectedDate: slot })
                        }
                        className="accent-indigo-600"
                      />
                    </label>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-3 rounded-xl border border-[#D5D5E2] text-sm font-semibold text-[#4A4B65] hover:bg-slate-100 cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 rounded-[999px] font-bold text-[16px] text-[#1A1A2E] shadow-md transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    style={{ backgroundColor: accentColor }}
                  >
                    <span>Lock In My Reserved Strategy Session</span>
                    <Clock className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-extrabold text-[24px] text-[#1A1A2E] mb-2">
              Strategy Session Confirmed!
            </h3>
            <p className="text-sm text-[#4A4B65] max-w-sm mx-auto mb-4">
              We’ve reserved your slot for <strong>{formData.selectedDate}</strong>.
              A calendar invite and pre-call diagnostic checklist have been sent to{' '}
              <strong>{formData.workEmail}</strong>.
            </p>
            <div className="p-3.5 bg-[#F8F8FC] rounded-xl border border-[#E8E8F2] text-xs text-[#555570] mb-6">
              💡 <em>Tip:</em> Have your current pipeline metrics and conversion numbers ready so we can uncover high-leverage growth opportunities immediately.
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-3 rounded-full font-bold text-sm text-white bg-[#1A1A2E] hover:bg-black transition-colors cursor-pointer"
            >
              Return To Briefing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
