import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeftIcon, RotateCcwIcon } from 'lucide-react';
import { areaReflections, assessmentQuestions, assessmentScale } from '../../data/assessment';
import type { AssessmentArea } from '../../types/content';
import { Button } from '../ui/Button';

const areas: AssessmentArea[] = ['Clarity', 'Balance', 'Mindfulness', 'Consistency'];

export function AssessmentFlow({ tone = 'light' }: {tone?: 'light' | 'dark';}) {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const total = assessmentQuestions.length;
  const done = step >= total;
  const dark = tone === 'dark';

  const scores = useMemo(
    () =>
    areas.map((area) => {
      const qs = assessmentQuestions.filter((q) => q.area === area);
      const sum = qs.reduce((acc, q) => acc + (answers[q.id] ?? 0), 0);
      return { area, pct: Math.round(sum / (qs.length * 4) * 100) };
    }),
    [answers]
  );
  const focus = [...scores].sort((a, b) => a.pct - b.pct)[0];

  const choose = (id: string, value: number) => {
    setAnswers((a) => ({ ...a, [id]: value }));
    window.setTimeout(() => setStep((s) => s + 1), 180);
  };

  const panel = dark ? 'bg-emerald text-ivory' : 'bg-ivory text-charcoal ring-1 ring-charcoal/10';
  const muted = dark ? 'text-ivory/60' : 'text-charcoal/55';
  const t = { duration: 0.25, ease: [0.23, 1, 0.32, 1] as const };

  return (
    <div className={`relative overflow-hidden rounded-[2rem] p-7 md:p-12 ${panel}`}>
      {step >= 0 && !done &&
      <div className="mb-10">
          <div className={`flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] ${muted}`}>
            <span>{assessmentQuestions[step].area}</span>
            <span>{step + 1} / {total}</span>
          </div>
          <div className={`mt-3 h-px w-full ${dark ? 'bg-ivory/15' : 'bg-charcoal/10'}`}>
            <motion.div className="h-px bg-gold" animate={{ width: `${(step + 1) / total * 100}%` }} transition={t} />
          </div>
        </div>
      }

      <AnimatePresence mode="wait">
        {step === -1 &&
        <motion.div key="intro" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={t}>
            <p className={`text-sm ${muted}`}>8 reflections · about 2 minutes</p>
            <h3 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Notice where you are across four areas of life.</h3>
            <ul className="mt-8 flex flex-wrap gap-2">
              {areas.map((a) =>
            <li key={a} className={`rounded-full border px-4 py-2 text-sm ${dark ? 'border-ivory/20' : 'border-charcoal/15'}`}>{a}</li>
            )}
            </ul>
            <p className={`mt-8 text-xs leading-relaxed ${muted}`}>This is a self-reflection tool, not a medical or psychological diagnostic test.</p>
            <div className="mt-8">
              <Button onClick={() => setStep(0)} variant={dark ? 'gold' : 'dark'}>Begin reflection</Button>
            </div>
          </motion.div>
        }

        {step >= 0 && !done &&
        <motion.fieldset key={assessmentQuestions[step].id} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={t}>
            <legend className="font-serif text-3xl leading-snug md:text-4xl">{assessmentQuestions[step].prompt}</legend>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {assessmentScale.map((opt) => {
              const selected = answers[assessmentQuestions[step].id] === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => choose(assessmentQuestions[step].id, opt.value)}
                  className={`rounded-2xl border px-5 py-4 text-left text-[15px] transition-[background-color,border-color,color] duration-150 ${
                  selected ?
                  'border-gold bg-gold text-emerald' :
                  dark ?
                  'border-ivory/20 hover:border-gold' :
                  'border-charcoal/15 hover:border-forest'}`
                  }>
                  
                    {opt.label}
                  </button>);

            })}
            </div>
            <button type="button" onClick={() => setStep((s) => s - 1)} className={`mt-8 inline-flex items-center gap-2 text-sm ${muted} hover:underline`}>
              <ArrowLeftIcon className="h-4 w-4" aria-hidden /> Back
            </button>
          </motion.fieldset>
        }

        {done &&
        <motion.div key="summary" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={t} aria-live="polite">
            <p className={`text-sm ${muted}`}>Your reflection</p>
            <h3 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">A gentle place to begin: {focus.area}.</h3>
            <p className={`mt-4 max-w-xl leading-relaxed ${dark ? 'text-ivory/80' : 'text-charcoal/75'}`}>{areaReflections[focus.area]}</p>
            <dl className="mt-10 space-y-5">
              {scores.map((s, i) =>
            <div key={s.area}>
                  <div className="flex justify-between text-sm">
                    <dt className={s.area === focus.area ? 'font-semibold' : ''}>{s.area}</dt>
                    <dd className={muted}>{s.pct}%</dd>
                  </div>
                  <div className={`mt-2 h-1.5 rounded-full ${dark ? 'bg-ivory/10' : 'bg-charcoal/10'}`}>
                    <motion.div
                  className={`h-1.5 rounded-full ${s.area === focus.area ? 'bg-gold' : dark ? 'bg-sage' : 'bg-forest'}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${s.pct}%` }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05, ease: [0.23, 1, 0.32, 1] }} />
                
                  </div>
                </div>
            )}
            </dl>
            <p className={`mt-8 text-xs ${muted}`}>A self-reflection snapshot only — not a diagnosis.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/contact" variant={dark ? 'gold' : 'dark'}>Book a discovery session</Button>
              <button type="button" onClick={() => {setAnswers({});setStep(-1);}} className={`inline-flex items-center gap-2 text-sm ${muted} hover:underline`}>
                <RotateCcwIcon className="h-4 w-4" aria-hidden /> Start again
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}