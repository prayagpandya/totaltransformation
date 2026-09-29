import { media } from './media';
import type { Pillar } from '../types/content';

export const pillars: Pillar[] = [
{
  id: 'aware',
  number: '01',
  word: 'Aware',
  tagline: 'See Yourself Clearly.',
  description:
  'Every transformation begins with honest awareness — of your thoughts, emotions, habits and the patterns quietly shaping your days. We help you pause and see where you truly are, without judgement.',
  practices: ['Reflective self-inquiry', 'Pattern and habit mapping', 'Emotional awareness practices'],
  image: media.images.aware,
  imageAlt: 'A still mountain lake at dawn reflecting pine trees',
  tone: 'emerald'
},
{
  id: 'align',
  number: '02',
  word: 'Align',
  tagline: 'Bring Your Life Closer to What Matters.',
  description:
  'Once you can see clearly, we explore what genuinely matters to you — your values, priorities and the life you want to build — and gently realign your choices around them.',
  practices: ['Values and priorities clarity', 'Purpose and direction work', 'Intentional life design'],
  image: media.images.align,
  imageAlt: 'A mossy stone path winding through a green forest',
  tone: 'cream'
},
{
  id: 'awaken',
  number: '03',
  word: 'Awaken',
  tagline: 'Become More Present. More Conscious. More Intentional.',
  description:
  'Mindfulness moves from an idea to a way of being. Through simple, practical tools you learn to respond rather than react, and to experience your life as it is happening.',
  practices: ['Mindfulness and breath practices', 'Conscious response training', 'Presence in everyday moments'],
  image: media.images.awaken,
  imageAlt: 'A woman breathing deeply with eyes closed in warm sunlight',
  tone: 'forest'
},
{
  id: 'achieve',
  number: '04',
  word: 'Achieve',
  tagline: 'Turn Insight Into Action.',
  description:
  'Insight becomes powerful when it becomes practice. We translate everything you have discovered into sustainable routines, meaningful goals and consistent action.',
  practices: ['Goal and habit architecture', 'Accountability and follow-through', 'Sustainable daily rituals'],
  image: media.images.achieve,
  imageAlt: 'A person walking along a mountain ridge at sunrise',
  tone: 'ivory'
}];