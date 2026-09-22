export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  before: string;
  after: string;
  quote: string;
  avatarSeed: string;
  initials: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  subLabel: string;
  iconName: 'trending-up' | 'shield-check' | 'zap' | 'users' | 'target' | 'dollar-sign';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface VSLPageData {
  client: {
    primaryColor: string; // e.g. #4F46E5
    accentColor: string; // e.g. #FFC107
    ctaText: string;
    ctaLink: string;
    wistiaMediaId: string;
  };
  hero: {
    badgeText: string;
    headlineLine1: string;
    headlineLine2: string; // Emotional hook in primary color
    subheadline: string;
    ctaBelowVideo: string;
  };
  socialProof: {
    sectionLabel: string;
    sectionHeadline: string;
    testimonials: [TestimonialItem, TestimonialItem, TestimonialItem];
    ctaText: string;
  };
  problem: {
    sectionLabel: string;
    headline: string;
    paragraphs: {
      text: string;
      highlightPhrases?: string[];
    }[];
    ctaText: string;
  };
  about: {
    sectionLabel: string;
    headline: string;
    body: string;
    stats: [StatItem, StatItem, StatItem];
    pullQuote: string;
    ctaText: string;
  };
  faq: {
    sectionLabel: string;
    headline: string;
    items: FAQItem[];
  };
  finalCta: {
    headlineLine1: string;
    headlineLine2: string;
    body: string;
    ctaText: string;
    smallTextBelow: string;
  };
  stickyFooter: {
    timerMinutes: number;
    timerLabel: string;
    ctaText: string;
  };
}
