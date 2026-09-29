import { media } from './media';
import type { Article } from '../types/content';

export const articles: Article[] = [
{
  slug: 'the-art-of-pausing',
  title: 'The Art of Pausing: Why Transformation Starts With Stillness',
  excerpt: 'Before you can change direction, you need to know where you are standing. A short guide to the most underrated habit.',
  category: 'Mindfulness',
  readTime: '5 min read',
  date: 'September 2026',
  image: media.images.aware,
  imageAlt: 'A still lake at dawn',
  body: [
  { paragraphs: ['Most of us try to change our lives while moving at full speed. We set new goals on top of old habits and wonder why nothing seems to shift.', 'A pause is not a break from progress. It is where progress begins.'] },
  { heading: 'Noticing where you are', paragraphs: ['Take five quiet minutes today. Ask yourself: what am I carrying right now? What feels heavy, and what feels light? Write down whatever comes, without editing.'] },
  { heading: 'Choosing where you want to go', paragraphs: ['Awareness gives you choice. Once you see a pattern clearly, you can decide whether it still serves you — and gently choose a different response.'] }]

},
{
  slug: 'small-rituals-lasting-change',
  title: 'Small Rituals, Lasting Change',
  excerpt: 'Why the smallest daily practices often create the deepest transformation — and how to design yours.',
  category: 'Habits',
  readTime: '6 min read',
  date: 'August 2026',
  image: media.images.mindfulness,
  imageAlt: 'Journaling with a cup of tea',
  body: [
  { paragraphs: ['Grand resolutions fade. Small rituals, repeated with intention, quietly reshape who we are.'] },
  { heading: 'Start smaller than feels necessary', paragraphs: ['Two minutes of breathing. One line in a journal. A short walk without your phone. The goal is consistency, not intensity.'] },
  { heading: 'Anchor it to your day', paragraphs: ['Attach your ritual to something you already do — your morning tea, your commute, the moment you close your laptop.'] }]

},
{
  slug: 'success-that-feels-good-inside',
  title: 'When Success Looks Good Outside but Feels Empty Inside',
  excerpt: 'Many high achievers quietly feel disconnected. Here is how to begin reconnecting with meaning.',
  category: 'Purpose',
  readTime: '7 min read',
  date: 'July 2026',
  image: media.images.innerWorld,
  imageAlt: 'A professional looking out of an office window at dusk',
  body: [
  { paragraphs: ['It is possible to tick every box and still feel something is missing. That feeling is not failure — it is information.'] },
  { heading: 'Listen to the gap', paragraphs: ['Ask: what did I believe success would give me? What am I actually experiencing? The distance between the two often points directly to what matters most.'] },
  { heading: 'Realign, don’t restart', paragraphs: ['You rarely need a new life. More often, you need a new way of living the one you have — with clearer priorities and more presence.'] }]

}];