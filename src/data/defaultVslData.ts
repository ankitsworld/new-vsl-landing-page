import { VSLPageData } from '../types/vsl';

export const defaultVslData: VSLPageData = {
  client: {
    primaryColor: '#4F46E5', // Deep Royal Indigo for emotional hook, highlights, dots, timer
    accentColor: '#FFBE1A', // High-contrast radiant Amber/Gold for CTA buttons with #1A1A2E text
    ctaText: 'Claim Your Free Scale Blueprint & Strategy Session',
    ctaLink: '#book-strategy-session',
    wistiaMediaId: '29b0fbf547',
  },
  hero: {
    badgeText: '★ Over 1,420+ B2B Founders Scaled Past $100K/Mo in 2026',
    headlineLine1: 'The Automated Acquisition System That Fills Your Calendar',
    headlineLine2: 'Without Cold Calling, High Ad Spend, Or Burning Out Your Team',
    subheadline:
      'Watch this short 12-minute breakdown to discover the exact 3-phase infrastructure high-growth founders use to predictably book 45+ qualified sales appointments every single month on complete autopilot.',
    ctaBelowVideo: 'Claim Your Free Scale Blueprint & Strategy Session',
  },
  socialProof: {
    sectionLabel: 'REAL VERIFIED RESULTS',
    sectionHeadline: 'From Feasting & Famine To Consistent $120K+ Months',
    testimonials: [
      {
        id: 't-1',
        name: 'Marcus Vance',
        role: 'FOUNDER & CEO, VANCE LOGIC',
        before: 'Stuck at $22K/month with inconsistent outbound and 60-hour workweeks.',
        after: 'Closed $118,000 in recurring revenue in 75 days with 38 qualified appointments.',
        quote:
          '“We stopped wasting budget on spray-and-pray outbound. Within 60 days our calendar was packed with enterprise buyers who already knew our pricing and process.”',
        avatarSeed: 'marcus',
        initials: 'MV',
      },
      {
        id: 't-2',
        name: 'Elena Rostova',
        role: 'MANAGING PARTNER, NEXUS CONSULTING',
        before: 'Reliant purely on unpredictable word-of-mouth referrals and dry spells.',
        after: 'Scaled from $35K/mo to $185K/mo in 90 days with a 4.2x ROAS.',
        quote:
          '“This single funnel completely changed our economics. Our cost per qualified acquisition dropped by 64% while our average deal size doubled.”',
        avatarSeed: 'elena',
        initials: 'ER',
      },
      {
        id: 't-3',
        name: 'David Sterling',
        role: 'CO-FOUNDER, STERLING SAAS',
        before: 'Spending $14,000/mo on SDR agencies generating low-intent tire kickers.',
        after: '48 booked demo calls per month with an 81% show-up rate and zero SDR overhead.',
        quote:
          '“The clarity of the conversion architecture is unlike anything on the market. It paid for itself in the first 14 days of going live.”',
        avatarSeed: 'david',
        initials: 'DS',
      },
    ],
    ctaText: 'Apply For The Growth Infrastructure Today',
  },
  problem: {
    sectionLabel: 'THE HARD TRUTH',
    headline: 'The Traditional Way Of Growing B2B Revenue Is Completely Broken',
    paragraphs: [
      {
        text: 'Most founders are trapped on an exhausting hamster wheel: hiring expensive lead generation agencies that blast thousands of generic spam emails, wasting hours pitching unqualified prospects who cannot afford your service, and crossing your fingers for referral luck.',
        highlightPhrases: ['exhausting hamster wheel', 'wasting hours pitching unqualified prospects'],
      },
      {
        text: 'The brutal reality is that prospect attention spans have cratered, spam filters are stricter than ever, and buyers are skeptical of old-school high-pressure sales pitches. If your customer acquisition requires your personal time to sustain, you do not own a scalable business — you own an exhausting job.',
        highlightPhrases: ['prospect attention spans have cratered', 'you do not own a scalable business — you own an exhausting job'],
      },
      {
        text: 'Until you build an asset-backed conversion machine that pre-sells your authority, filters out tire-kickers, and delivers warm, qualified decision-makers straight to your calendar, you will remain trapped in feast-and-famine cycles.',
        highlightPhrases: ['asset-backed conversion machine', 'pre-sells your authority', 'feast-and-famine cycles'],
      },
    ],
    ctaText: 'Break The Cycle & Build Your Machine',
  },
  about: {
    sectionLabel: 'PROVEN METHODOLOGY',
    headline: 'Engineered By Operators Who Have Built & Scaled 8-Figure Pipelines',
    body: 'We spent the last seven years refining one singular objective: eliminating customer acquisition risk for high-ticket service companies and software leaders. Our methodology removes guesswork by pairing algorithmic demand capture with frictionless qualification.',
    stats: [
      {
        id: 's-1',
        label: 'TOTAL PIPELINE GENERATED',
        value: '$48.5M+',
        subLabel: 'Across 34 distinct B2B verticals',
        iconName: 'trending-up',
      },
      {
        id: 's-2',
        label: 'AVERAGE QUALIFIED CALL RATE',
        value: '82.4%',
        subLabel: 'Show-up rate on prospect discovery',
        iconName: 'target',
      },
      {
        id: 's-3',
        label: 'AVERAGE PAYBACK PERIOD',
        value: '21 Days',
        subLabel: 'From deployment to capital recovery',
        iconName: 'zap',
      },
    ],
    pullQuote:
      '“True scale is never achieved by working harder on broken channels. It is achieved by installing an automated mechanism that turns cold attention into committed high-ticket clients with absolute mathematical certainty.”',
    ctaText: 'Install The Acquisition Engine',
  },
  faq: {
    sectionLabel: 'FREQUENTLY ASKED QUESTIONS',
    headline: 'Everything You Need To Know Before Booking',
    items: [
      {
        id: 'faq-1',
        question: 'Who is this system specifically engineered for?',
        answer:
          'This system is tailored for B2B founders, agency owners, consultants, and SaaS executives selling high-value offerings ($3,000 to $50,000+ LTV) who have a proven offer and want predictable, scalable customer acquisition without relying on word-of-mouth.',
      },
      {
        id: 'faq-2',
        question: 'How much time does my team need to invest to get this live?',
        answer:
          'Virtually zero heavy lifting is required on your end. Our team handles the core technical deployment, VSL script architecture, tracking integrations, and appointment funnel build within 14 business days. Your team only needs to attend a 60-minute onboarding strategy kickoff.',
      },
      {
        id: 'faq-3',
        question: 'How is this different from hiring an SDR or appointment setting agency?',
        answer:
          'SDRs burn through domains, spam thousands of people with cold messages, and produce low-intent leads with dismal show-up rates. Our VSL acquisition engine uses high-intent inbound attraction and automated qualification, meaning every lead on your calendar has already watched your presentation and is ready to buy.',
      },
      {
        id: 'faq-4',
        question: 'What kind of ad spend or capital is required to start seeing booked calls?',
        answer:
          'The architecture is designed to validate profitably with lean budgets. Most partners begin with modest test campaigns ($30–$50/day) which routinely produce an immediate return on ad spend within the first 2 to 3 weeks.',
      },
      {
        id: 'faq-5',
        question: 'What happens during the Strategy Session when I click the button?',
        answer:
          'On our 1-on-1 strategy session, we audit your current unit economics, identify where your pipeline leaks are costing you revenue, and map out the exact customized blueprint to install this acquisition engine into your company.',
      },
      {
        id: 'faq-6',
        question: 'Is there a performance guarantee or risk reversal?',
        answer:
          'Yes. If we review your business and decide to partner, we tie our incentives to your success. If we do not hit the agreed-upon qualified appointment milestones within 60 days, we work completely free until we do.',
      },
    ],
  },
  finalCta: {
    headlineLine1: 'Stop Leaving Your Company’s Growth To Chance',
    headlineLine2: 'Reserve Your Private Strategy Session Today',
    body: 'Spaces are strictly limited to 5 new client deployments per month to ensure dedicated white-glove engineering and maximum attention for every partner.',
    ctaText: 'Claim Your Free Strategy Session Now',
    smallTextBelow: '100% Free · No obligation · Takes less than 60 seconds to qualify',
  },
  stickyFooter: {
    timerMinutes: 10,
    timerLabel: 'LIMITED-TIME OFFER',
    ctaText: 'Claim Scale Blueprint',
  },
};
