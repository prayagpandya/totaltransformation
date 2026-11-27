import type { NavGroup, NavLinkItem } from '../types/content';

export const navigation: NavGroup[] = [
{
  label: 'About',
  to: '/about',
  children: [
  { label: 'About Total Transformation', to: '/about', description: 'Who we are and why we exist' },
  { label: 'The Method', to: '/method', description: 'Aware · Align · Awaken · Achieve' },
  { label: 'Your Journey', to: '/journey', description: 'Discover to integrate' },
  { label: 'Founders', to: '/founders', description: 'The people behind the practice' }]

},
{
  label: 'Coaching',
  to: '/coaching/happiness',
  children: [
  { label: 'Happiness Life Coaching', to: '/coaching/happiness', description: 'Joy as a daily practice' },
  { label: 'Mindfulness Coaching', to: '/coaching/mindfulness', description: 'Presence over autopilot' },
  { label: 'Personal Transformation', to: '/coaching/personal-transformation', description: 'Change that lasts' },
  { label: 'Executive Transformation', to: '/coaching/executive', description: 'Lead from a clearer place' }]

},
{
  label: 'Programs',
  to: '/programs',
  children: [
  { label: 'All Signature Programs', to: '/programs', description: 'Compare every pathway' },
  { label: 'Happiness Reset', to: '/programs/happiness-reset', description: '4 weeks' },
  { label: 'Mindful Life', to: '/programs/mindful-life', description: '8 weeks' },
  { label: 'Total Transformation', to: '/programs/total-life-transformation', description: '12 weeks' },
  { label: 'Executive Transformation', to: '/programs/executive-transformation', description: '12 weeks' }]

},
{
  label: 'Resources',
  to: '/resources',
  children: [
  { label: 'Journal & Resources', to: '/resources', description: 'Reflections and practices' },
  { label: 'Free Assessment', to: '/assessment', description: 'Where are you right now?' },
  { label: 'Testimonials', to: '/testimonials', description: 'Real journeys' },
  { label: 'FAQs', to: '/faqs', description: 'Answers before you begin' }]

},
{ label: 'Contact', to: '/contact' }];


export const legalLinks: NavLinkItem[] = [
{ label: 'Privacy Policy', to: '/legal/privacy' },
{ label: 'Terms & Conditions', to: '/legal/terms' },
{ label: 'Disclaimer', to: '/legal/disclaimer' }];