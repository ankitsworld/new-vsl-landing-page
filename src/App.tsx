import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { defaultVslData } from './data/defaultVslData';
import { VSLPageData } from './types/vsl';
import { HeroBadge } from './components/HeroBadge';
import { SectionPill } from './components/SectionPill';
import { VSLVideoPlayer } from './components/VSLVideoPlayer';
import { VSLButton } from './components/VSLButton';
import { TestimonialCard } from './components/TestimonialCard';
import { StatCard } from './components/StatCard';
import { FAQAccordion } from './components/FAQAccordion';
import { StickyFooter } from './components/StickyFooter';
import { BookingModal } from './components/BookingModal';
import { CustomizeDrawer } from './components/CustomizeDrawer';

export default function App() {
  const [data, setData] = useState<VSLPageData>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vsl_landing_page_data');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return defaultVslData;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDataChange = (updated: VSLPageData) => {
    setData(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('vsl_landing_page_data', JSON.stringify(updated));
    }
  };

  const handleResetData = () => {
    setData(defaultVslData);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('vsl_landing_page_data');
    }
  };

  const handleCtaClick = () => {
    // Both tracking and modal opening
    try {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'AddToCart');
      }
    } catch {
      // Safe fallback
    }

    if (data.client.ctaLink && data.client.ctaLink.startsWith('http')) {
      window.open(data.client.ctaLink, '_blank', 'noopener,noreferrer');
    } else {
      setIsModalOpen(true);
    }
  };

  // Synchronize document title with company proposition
  useEffect(() => {
    document.title = `${data.hero.headlineLine1} | High-Converting VSL`;
  }, [data.hero.headlineLine1]);

  return (
    <div className="min-h-screen bg-white text-[#1A1A2E] flex flex-col items-center w-full selection:bg-indigo-100 selection:text-indigo-900">
      {/* Discreet Design & Copy customization drawer */}
      <CustomizeDrawer
        data={data}
        onChange={handleDataChange}
        onReset={handleResetData}
      />

      {/* ========================================================
          1. HERO SECTION (badge + headline + subheadline + VSL + CTA)
          Padding: 80px top & bottom. Background: Cream gradient #FFFDF0 to #FFFFFF.
          Desktop Left/Right Padding: 48px.
          ======================================================== */}
      <section
        id="hero"
        className="w-full pt-[80px] pb-[80px] px-6 md:px-[48px] flex flex-col items-center"
        style={{
          background: 'linear-gradient(180deg, #FFFDF0 0%, #FFFFFF 100%)',
        }}
      >
        <motion.div
          className="w-full flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge: Hero Top */}
          <HeroBadge
            text={data.hero.badgeText}
            primaryColor={data.client.primaryColor}
            className="mb-[28px]"
          />

          {/* Headline: 72-80px desktop, extrabold, centered, line height 1.05. Max width 1100px.
              First part: #1A1A2E. Emotional hook second line: PRIMARY COLOR */}
          <h1 className="w-full max-w-[1100px] font-extrabold text-[40px] sm:text-[54px] md:text-[76px] lg:text-[80px] leading-[1.05] tracking-tight mb-[24px] text-center text-balance">
            <span className="text-[#1A1A2E] block">
              {data.hero.headlineLine1}
            </span>
            <span
              className="block mt-1 sm:mt-2"
              style={{ color: data.client.primaryColor }}
            >
              {data.hero.headlineLine2}
            </span>
          </h1>

          {/* Subheadline: 19px, #4A4B65, centered, line height 1.75. Max width 680px */}
          <p className="w-full max-w-[680px] text-[17px] md:text-[19px] text-[#4A4B65] leading-[1.75] mb-[48px] text-center">
            {data.hero.subheadline}
          </p>

          {/* 2. VSL Video: full width centered, max width 960px.
              Aspect ratio 16/9, border radius 20px, 3px solid white, shadow 0 20px 60px */}
          <div className="w-full mb-[36px]">
            <VSLVideoPlayer
              mediaId={data.client.wistiaMediaId}
              primaryColor={data.client.primaryColor}
              accentColor={data.client.accentColor}
            />
          </div>

          {/* 3. CTA button below video: auto width centered, not full width (full width on mobile).
              Background ACCENT COLOR, text #1A1A2E bold 16px, padding 18px 52px */}
          <VSLButton
            text={data.hero.ctaBelowVideo}
            accentColor={data.client.accentColor}
            onClick={handleCtaClick}
          />
        </motion.div>
      </section>

      {/* ========================================================
          4. SOCIAL PROOF SECTION
          Odd section: #F8F8FB. Padding: 80px top & bottom. Desktop LR: 48px.
          ======================================================== */}
      <section
        id="social-proof"
        className="w-full bg-[#F8F8FB] pt-[80px] pb-[80px] px-6 md:px-[48px] flex flex-col items-center"
      >
        <motion.div
          className="w-full flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label pill: 10px uppercase bold tracking 0.2em */}
          <SectionPill
            label={data.socialProof.sectionLabel}
            primaryColor={data.client.primaryColor}
            className="mb-[20px]"
          />

          {/* Section headline: 48-56px extrabold centered #1A1A2E, max width 960px */}
          <h2 className="w-full max-w-[960px] font-extrabold text-[32px] sm:text-[42px] md:text-[52px] leading-[1.12] text-[#1A1A2E] tracking-tight mb-[28px] text-center text-balance">
            {data.socialProof.sectionHeadline}
          </h2>

          {/* Testimonial card grid: max width 1000px, 3 column desktop, 1 column mobile, gap 24px */}
          <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-3 gap-[24px] items-stretch text-left">
            {data.socialProof.testimonials.map((t, idx) => (
              <TestimonialCard
                key={t.id}
                testimonial={t}
                isCenter={idx === 1}
                primaryColor={data.client.primaryColor}
                accentColor={data.client.accentColor}
              />
            ))}
          </div>

          {/* CTA button after testimonials (Body text to CTA button: 44px) */}
          <div className="mt-[44px]">
            <VSLButton
              text={data.socialProof.ctaText}
              accentColor={data.client.accentColor}
              onClick={handleCtaClick}
            />
          </div>
        </motion.div>
      </section>

      {/* ========================================================
          5. PROBLEM SECTION
          Background: #0F0F1A. Padding: 80px top & bottom. Desktop LR: 48px.
          Headline: white, 48px extrabold, centered, max width 960px.
          Body: #9090AA, 17px, centered, max width 680px.
          Key emotional phrases: PRIMARY COLOR. Paragraph gap: 20px.
          ======================================================== */}
      <section
        id="problem"
        className="w-full bg-[#0F0F1A] pt-[80px] pb-[80px] px-6 md:px-[48px] flex flex-col items-center"
      >
        <motion.div
          className="w-full flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label pill */}
          <SectionPill
            label={data.problem.sectionLabel}
            primaryColor={data.client.primaryColor}
            dark={true}
            className="mb-[20px]"
          />

          {/* Headline: white 48px extrabold */}
          <h2 className="w-full max-w-[960px] font-extrabold text-[32px] sm:text-[42px] md:text-[48px] leading-[1.15] text-white tracking-tight mb-[28px] text-center text-balance">
            {data.problem.headline}
          </h2>

          {/* Body paragraphs: #9090AA, 17px, centered, max width 680px, gap 20px */}
          <div className="w-full max-w-[680px] space-y-[20px] text-[17px] text-[#9090AA] leading-[1.8] text-center">
            {data.problem.paragraphs.map((p, index) => {
              let content: React.ReactNode = p.text;
              if (p.highlightPhrases && p.highlightPhrases.length > 0) {
                // Highlight emotional phrases in PRIMARY COLOR
                const regex = new RegExp(`(${p.highlightPhrases.join('|')})`, 'gi');
                const parts = p.text.split(regex);
                content = parts.map((part, i) => {
                  const isMatch = p.highlightPhrases?.some(
                    (phrase) => phrase.toLowerCase() === part.toLowerCase()
                  );
                  if (isMatch) {
                    return (
                      <span
                        key={i}
                        className="font-bold"
                        style={{ color: data.client.primaryColor }}
                      >
                        {part}
                      </span>
                    );
                  }
                  return part;
                });
              }

              return (
                <p key={index} className="leading-[1.8]">
                  {content}
                </p>
              );
            })}
          </div>

          {/* CTA button in problem section (Body text to CTA button: 44px) */}
          <div className="mt-[44px]">
            <VSLButton
              text={data.problem.ctaText}
              accentColor={data.client.accentColor}
              onClick={handleCtaClick}
            />
          </div>
        </motion.div>
      </section>

      {/* ========================================================
          6. ABOUT SECTION
          Background: #FFFFFF. Padding: 80px top & bottom. Desktop LR: 48px.
          3 stat cards in a row (max-width 900px, gap 20px).
          Pull quote: max-width 800px, background #F8F8FF, border-radius 24px, padding 40px, italic 20px #1A1A2E.
          ======================================================== */}
      <section
        id="about"
        className="w-full bg-[#FFFFFF] pt-[80px] pb-[80px] px-6 md:px-[48px] flex flex-col items-center"
      >
        <motion.div
          className="w-full flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label pill */}
          <SectionPill
            label={data.about.sectionLabel}
            primaryColor={data.client.primaryColor}
            className="mb-[20px]"
          />

          {/* Headline: 48-56px extrabold #1A1A2E */}
          <h2 className="w-full max-w-[960px] font-extrabold text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-[#1A1A2E] tracking-tight mb-[28px] text-center text-balance">
            {data.about.headline}
          </h2>

          {/* Body text: 17px, #4A4B65, line height 1.8, max width 700px */}
          <p className="w-full max-w-[700px] text-[17px] text-[#4A4B65] leading-[1.8] mb-[36px] text-center">
            {data.about.body}
          </p>

          {/* 3 stat cards in a row, max width 900px, centered, gap 20px */}
          <div className="w-full max-w-[900px] grid grid-cols-1 sm:grid-cols-3 gap-[20px] mb-[36px]">
            {data.about.stats.map((stat) => (
              <StatCard
                key={stat.id}
                stat={stat}
                primaryColor={data.client.primaryColor}
              />
            ))}
          </div>

          {/* Pull quote: max width 800px, centered, background #F8F8FF, border-radius 24px, padding 40px, large italic text 20px #1A1A2E */}
          <div className="w-full max-w-[800px] bg-[#F8F8FF] rounded-[24px] p-6 sm:p-[40px] border border-[#EEEEFA] text-center mb-[44px]">
            <p className="italic text-[18px] sm:text-[20px] leading-[1.65] text-[#1A1A2E] font-medium">
              {data.about.pullQuote}
            </p>
          </div>

          {/* CTA button in about section */}
          <VSLButton
            text={data.about.ctaText}
            accentColor={data.client.accentColor}
            onClick={handleCtaClick}
          />
        </motion.div>
      </section>

      {/* ========================================================
          7. FAQ SECTION
          Background: #F8F8FB. Padding: 80px top & bottom. Desktop LR: 48px.
          FAQ cards max width: 860px. Gap between cards: 12px.
          No extra space before first or after last card.
          ======================================================== */}
      <section
        id="faq"
        className="w-full bg-[#F8F8FB] pt-[80px] pb-[80px] px-6 md:px-[48px] flex flex-col items-center"
      >
        <motion.div
          className="w-full flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label pill */}
          <SectionPill
            label={data.faq.sectionLabel}
            primaryColor={data.client.primaryColor}
            className="mb-[20px]"
          />

          {/* Section headline */}
          <h2 className="w-full max-w-[960px] font-extrabold text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-[#1A1A2E] tracking-tight mb-[28px] text-center text-balance">
            {data.faq.headline}
          </h2>

          {/* FAQ Accordion list: max-width 860px, gap 12px */}
          <div className="w-full">
            <FAQAccordion
              items={data.faq.items}
              primaryColor={data.client.primaryColor}
            />
          </div>
        </motion.div>
      </section>

      {/* ========================================================
          8. FINAL CTA SECTION
          White background. Padding top: 80px, padding bottom: 110px only to clear sticky footer.
          Headline line 1: extrabold, centered, #1A1A2E, max width 960px.
          Headline line 2: same size, PRIMARY or ACCENT color.
          Body: grey, centered, max width 600px.
          CTA button centered.
          Small italic text below: 14px grey, max width 600px.
          Zero extra space after last element.
          Page ends immediately after final CTA text.
          ======================================================== */}
      <section
        id="final-cta"
        className="w-full bg-[#FFFFFF] pt-[80px] pb-[110px] px-6 md:px-[48px] flex flex-col items-center"
      >
        <motion.div
          className="w-full flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Headline line 1 + line 2 */}
          <h2 className="w-full max-w-[960px] font-extrabold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight mb-[24px] text-center text-balance">
            <span className="text-[#1A1A2E] block">
              {data.finalCta.headlineLine1}
            </span>
            <span
              className="block mt-1 sm:mt-2"
              style={{ color: data.client.primaryColor }}
            >
              {data.finalCta.headlineLine2}
            </span>
          </h2>

          {/* Body: grey, centered, max width 600px */}
          <p className="w-full max-w-[600px] text-[17px] text-[#6B6B8A] leading-[1.75] mb-[44px] text-center">
            {data.finalCta.body}
          </p>

          {/* CTA button centered */}
          <div className="mb-[20px]">
            <VSLButton
              text={data.finalCta.ctaText}
              accentColor={data.client.accentColor}
              onClick={handleCtaClick}
            />
          </div>

          {/* Small italic text below: 14px grey, max width 600px */}
          <p className="w-full max-w-[600px] italic text-[14px] text-[#9090AA] text-center leading-normal">
            {data.finalCta.smallTextBelow}
          </p>
        </motion.div>
      </section>

      {/* ========================================================
          9. STICKY FOOTER ALWAYS VISIBLE AT BOTTOM
          Fixed bottom 0, full width, height 80px.
          Left: 48px circle, lightning bolt, clock icon, timer "9:58" in monospace, "LIMITED-TIME OFFER"
          Right: CTA button with padding 18px 52px, ACCENT COLOR background, #1A1A2E text, hover scale 1.03
          Tracking: (window as any).fbq('track', 'AddToCart')
          ======================================================== */}
      <StickyFooter
        primaryColor={data.client.primaryColor}
        accentColor={data.client.accentColor}
        ctaText={data.stickyFooter.ctaText}
        timerMinutes={data.stickyFooter.timerMinutes}
        timerLabel={data.stickyFooter.timerLabel}
        onCtaClick={handleCtaClick}
      />

      {/* Interactive Booking Qualification & Calendar Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        primaryColor={data.client.primaryColor}
        accentColor={data.client.accentColor}
      />
    </div>
  );
}
