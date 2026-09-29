import { media } from './media';
import type { CoachingPath } from '../types/content';

export const coachingPaths: CoachingPath[] = [
{
  slug: 'happiness',
  name: 'Happiness Life Coaching',
  headline: 'Happiness is not a destination. It is a way of living.',
  summary:
  'Rediscover joy, gratitude and emotional wellbeing through practical coaching that helps you build a life that feels as good as it looks.',
  overview: [
  'Happiness Life Coaching helps you understand what genuinely brings you contentment — and what quietly takes it away.',
  'Together we build emotional resilience, healthier thought patterns and small daily practices that make happiness a steady presence rather than a fleeting moment.'],

  forYou: [
  'You feel flat or disconnected despite things going “well”',
  'You want more joy, gratitude and lightness in everyday life',
  'You are ready to let go of patterns that drain your energy'],

  explore: ['Emotional wellbeing and resilience', 'Gratitude and positive habits', 'Relationships and connection', 'Self-worth and self-care'],
  image: media.images.happiness,
  imageAlt: 'Three friends laughing together on a sunlit porch',
  relatedProgram: 'happiness-reset'
},
{
  slug: 'mindfulness',
  name: 'Mindfulness Coaching',
  headline: 'Step out of autopilot. Step into your life.',
  summary:
  'Learn to quieten the noise, manage stress and live with greater presence — using simple mindfulness practices that fit into a busy life.',
  overview: [
  'Mindfulness Coaching teaches you to notice your thoughts without being ruled by them, and to meet each moment with calm attention.',
  'We focus on practical, repeatable tools — breath, attention and reflection — that reduce overthinking and help you respond instead of react.'],

  forYou: [
  'Your mind rarely switches off',
  'You overthink decisions and replay conversations',
  'You want calm and focus without withdrawing from life'],

  explore: ['Breath and attention practices', 'Stress and overthinking', 'Mindful routines and rituals', 'Conscious communication'],
  image: media.images.mindfulness,
  imageAlt: 'Hands writing in a journal beside a cup of tea in morning light',
  relatedProgram: 'mindful-life'
},
{
  slug: 'personal-transformation',
  name: 'Personal Transformation Coaching',
  headline: 'Change that begins within — and lasts.',
  summary:
  'A deeper, structured journey for those ready to realign their life — mindset, habits, purpose and direction — around who they are becoming.',
  overview: [
  'Personal Transformation Coaching brings together all four stages of the Aware · Align · Awaken · Achieve method into one guided journey.',
  'It is designed for meaningful, sustainable change: clarifying purpose, rebuilding habits and creating a life that feels aligned from the inside out.'],

  forYou: [
  'You feel stuck or are moving through a major life transition',
  'You are searching for purpose and clearer direction',
  'You want lasting change rather than short bursts of motivation'],

  explore: ['Purpose and life direction', 'Mindset and limiting beliefs', 'Habit and routine redesign', 'Confidence and consistency'],
  image: media.images.personal,
  imageAlt: 'A woman walking down a sunlit forest trail',
  relatedProgram: 'total-life-transformation'
},
{
  slug: 'executive',
  name: 'Executive Transformation',
  headline: 'Lead with clarity. Live with balance.',
  summary:
  'For high-performing professionals and leaders who want sustained performance without sacrificing wellbeing, relationships or meaning.',
  overview: [
  'Executive Transformation supports leaders who carry significant responsibility and want to perform at their best without burning out.',
  'We work on clarity of thought, emotional steadiness, decision-making and work–life integration — so success feels as good on the inside as it looks on the outside.'],

  forYou: [
  'You are successful but feel stretched or unfulfilled',
  'Decisions weigh heavily and rest feels rare',
  'You want to lead from a calmer, more intentional place'],

  explore: ['Clarity and decision-making', 'Stress and energy management', 'Work–life integration', 'Purposeful leadership'],
  image: media.images.executive,
  imageAlt: 'A composed professional woman in a calm office with plants',
  relatedProgram: 'executive-transformation'
}];