import type { AssessmentArea, AssessmentQuestion } from '../types/content';

export const assessmentQuestions: AssessmentQuestion[] = [
{ id: 'c1', area: 'Clarity', prompt: 'I have a clear sense of what I want from the next chapter of my life.' },
{ id: 'c2', area: 'Clarity', prompt: 'My daily choices reflect what genuinely matters to me.' },
{ id: 'b1', area: 'Balance', prompt: 'I make time for rest, relationships and myself — not only work.' },
{ id: 'b2', area: 'Balance', prompt: 'I end most days with energy left for the things I enjoy.' },
{ id: 'm1', area: 'Mindfulness', prompt: 'I can notice my thoughts without getting carried away by them.' },
{ id: 'm2', area: 'Mindfulness', prompt: 'I feel present in everyday moments, rather than on autopilot.' },
{ id: 's1', area: 'Consistency', prompt: 'I follow through on the healthy routines I set for myself.' },
{ id: 's2', area: 'Consistency', prompt: 'I feel confident that I can keep promises I make to myself.' }];


export const assessmentScale = [
{ value: 1, label: 'Rarely true' },
{ value: 2, label: 'Sometimes true' },
{ value: 3, label: 'Often true' },
{ value: 4, label: 'Almost always true' }];


export const areaReflections: Record<AssessmentArea, string> = {
  Clarity: 'You may benefit from slowing down to reconnect with your values and the direction you truly want.',
  Balance: 'Some areas of life may be receiving more of you than others. Restoring balance could free real energy.',
  Mindfulness: 'Your mind may be working overtime. Simple presence practices could bring noticeable calm.',
  Consistency: 'You know what helps you — the opportunity is turning it into routines that hold.'
};