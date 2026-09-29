export type NavLinkItem = {label: string;to: string;description?: string;};
export type NavGroup = {label: string;to: string;children?: NavLinkItem[];};

export type Pillar = {
  id: string;
  number: string;
  word: string;
  tagline: string;
  description: string;
  practices: string[];
  image: string;
  imageAlt: string;
  tone: 'forest' | 'cream' | 'emerald' | 'ivory';
};

export type CoachingPath = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  overview: string[];
  forYou: string[];
  explore: string[];
  image: string;
  imageAlt: string;
  relatedProgram: string;
};

export type Program = {
  slug: string;
  name: string;
  duration: string;
  price: string;
  tagline: string;
  description: string;
  idealFor: string;
  inclusions: string[];
  outcomes: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export type Audience = {title: string;description: string;image: string;imageAlt: string;};
export type JourneyStep = {number: string;title: string;description: string;detail: string;};

export type Founder = {
  name: string;
  role: string;
  initials: string;
  bio: string | null;
  portrait: string | null;
};

export type Testimonial = {quote: string;name: string;context: string;isPlaceholder: boolean;};
export type Faq = {question: string;answer: string;category: string;};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  imageAlt: string;
  body: {heading?: string;paragraphs: string[];}[];
};

export type AssessmentArea = 'Clarity' | 'Balance' | 'Mindfulness' | 'Consistency';
export type AssessmentQuestion = {id: string;area: AssessmentArea;prompt: string;};