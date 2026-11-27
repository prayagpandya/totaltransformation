import { media } from './media';
import type { Program } from '../types/content';

// NOTE: descriptions and inclusions should be replaced with the exact wording from
// the TRANSFORMATIONq brief once supplied.
export const programs: Program[] = [
{
  slug: 'happiness-reset',
  name: 'Happiness Reset',
  duration: '4 Weeks',
  price: '₹32,000',
  tagline: 'A gentle reset for your emotional wellbeing.',
  description:
  'A focused four-week programme to pause, reconnect with what brings you joy and build simple daily practices for a lighter, more positive state of mind.',
  idealFor: 'Anyone feeling flat, drained or in need of a fresh start.',
  inclusions: ['One-to-one coaching sessions', 'Happiness and wellbeing reflection', 'Guided gratitude and positivity practices', 'Personalised daily routine'],
  outcomes: ['Greater emotional lightness', 'A clearer sense of what drains and restores you', 'Simple practices you can sustain'],
  image: media.images.happiness,
  imageAlt: 'Friends laughing together outdoors'
},
{
  slug: 'mindful-life',
  name: 'Mindful Life',
  duration: '8 Weeks',
  price: '₹64,000',
  tagline: 'Presence, calm and focus — built into everyday life.',
  description:
  'An eight-week journey into practical mindfulness: managing stress and overthinking, building attention and creating rituals that keep you grounded.',
  idealFor: 'Busy minds seeking calm, focus and better responses to stress.',
  inclusions: ['One-to-one coaching sessions', 'Guided mindfulness and breath practices', 'Stress and overthinking toolkit', 'Mindful routine design'],
  outcomes: ['Reduced overthinking', 'Calmer responses to pressure', 'A sustainable mindfulness practice'],
  image: media.images.mindfulness,
  imageAlt: 'Journaling with tea by a window'
},
{
  slug: 'total-life-transformation',
  name: 'Total Transformation',
  duration: '12 Weeks',
  price: '₹72,000',
  tagline: 'Our signature journey through Aware, Align, Awaken and Achieve.',
  description:
  'A comprehensive twelve-week transformation that moves through every stage of our method — from honest awareness to lasting, integrated action across mindset, habits and purpose.',
  idealFor: 'Those ready for deep, lasting change in how they live.',
  inclusions: ['One-to-one coaching across all four pillars', 'Life clarity and values assessment', 'Personal transformation roadmap', 'Habit and routine architecture', 'Progress reviews and integration support'],
  outcomes: ['Clarity of purpose and direction', 'Healthier, consistent routines', 'Confidence in everyday decisions', 'A life that feels aligned'],
  image: media.images.personal,
  imageAlt: 'A woman walking down a sunlit forest trail',
  featured: true
},
{
  slug: 'executive-transformation',
  name: 'Executive Transformation',
  duration: '12 Weeks',
  price: '₹96,000',
  tagline: 'Sustained performance, without losing yourself.',
  description:
  'A twelve-week programme for leaders and high-performing professionals focused on clarity, emotional steadiness, energy and meaningful work–life integration.',
  idealFor: 'Leaders, founders and senior professionals.',
  inclusions: ['Executive one-to-one coaching', 'Leadership clarity and values work', 'Stress, energy and focus management', 'Work–life integration plan', 'Confidential progress reviews'],
  outcomes: ['Clearer decision-making', 'Sustainable energy and focus', 'Balanced, purposeful leadership'],
  image: media.images.executive,
  imageAlt: 'A professional woman in a calm office'
}];


export const programDisclaimer =
'Program fees are indicative and may vary depending on the final personalised coaching plan. An initial consultation is recommended before enrolment.';