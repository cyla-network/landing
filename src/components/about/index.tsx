'use client';

import { useScrollAnimation } from '@/lib/useScrollAnimation';

export default function About() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();

  return (
    <section id="about">
      <div className="py-4">
      <div ref={titleRef} className={`animate-text-reveal ${titleVisible ? 'visible' : ''}`}>
        <h2 className="text-[var(--primary-text-color)] text-3xl font-bold leading-tight tracking-tight px-4">Our Vision & Mission</h2>
      </div>
      <div ref={textRef} className={`animate-text-reveal ${textVisible ? 'visible' : ''}`}>
        <p className="text-[var(--secondary-text-color)] leading-relaxed pt-2 px-4">
        Our vision is to become the leading force in transforming drug redistribution into a standard of care, ensuring no viable medicine goes to waste.
        <br />
        <br />
        Our mission is to create a seamless, tech-enabled redistribution system for short-dated but viable medications.
        </p>
      </div>
    </div>
    </section>
  );
}
