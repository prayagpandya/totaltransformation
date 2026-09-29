import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type WordRevealProps = {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
};

export function WordReveal({ text, as = 'h2', className = '', delay = 0, stagger = 0.05, immediate = false }: WordRevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as] as typeof motion.h2;
  const lines = text.split('\n');
  const container = { hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } };
  const word = {
    hidden: { y: '110%' },
    visible: { y: '0%', transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] } }
  };

  return (
    <Tag
      aria-label={text.replace(/\n/g, ' ')}
      className={className}
      variants={container}
      initial={reduce ? 'visible' : 'hidden'}
      animate={immediate ? 'visible' : undefined}
      whileInView={immediate ? undefined : 'visible'}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}>
      
      {lines.map((line, li) =>
      <React.Fragment key={li}>
          {line.split(' ').map((w, i) =>
        <React.Fragment key={`${li}-${i}`}>
              <span aria-hidden className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span className="inline-block" variants={word}>
                  {w}
                </motion.span>
              </span>{' '}
            </React.Fragment>
        )}
          {li < lines.length - 1 && <br />}
        </React.Fragment>
      )}
    </Tag>);

}