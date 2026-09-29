import React, { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';

type AccordionProps = {items: {question: string;answer: string;}[];};

export function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${baseId}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left">
                
                <span className="font-serif text-2xl leading-snug text-charcoal md:text-[1.7rem]">{item.question}</span>
                <PlusIcon
                  aria-hidden
                  className={`h-5 w-5 shrink-0 text-gold transition-transform duration-200 ease-silk ${isOpen ? 'rotate-45' : ''}`} />
                
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen &&
              <motion.div
                id={`${baseId}-${i}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden">
                
                  <p className="max-w-3xl pb-7 text-[15px] leading-relaxed text-charcoal/70">{item.answer}</p>
                </motion.div>
              }
            </AnimatePresence>
          </div>);

      })}
    </div>);

}