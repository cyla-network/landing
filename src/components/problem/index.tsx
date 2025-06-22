'use client';

import React from 'react'
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const card_style = "flex flex-1 flex-col gap-3 rounded-xl p-6 bg-[var(--accent-color)] shadow-sm hover:shadow-lg transition-shadow duration-300"
const card_value = "text-[var(--primary-color)] text-lg font-bold leading-tight"
const card_text = "text-[var(--primary-text-color)] font-medium leading-normal"

export default function Problem() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation();
  const { ref: card3Ref, isVisible: card3Visible } = useScrollAnimation();
  const { ref: card4Ref, isVisible: card4Visible } = useScrollAnimation();
  const { ref: card5Ref, isVisible: card5Visible } = useScrollAnimation();
  const { ref: card6Ref, isVisible: card6Visible } = useScrollAnimation();
  return (
    <section id="problem">
      <div className='py-4'>
<div ref={titleRef} className={`animate-text-reveal ${titleVisible ? 'visible' : ''}`}>
  <h2 className="text-[var(--primary-text-color)] text-3xl font-bold leading-tight tracking-tight px-4">The Problem</h2>
    <div ref={textRef} className={`animate-text-reveal ${textVisible ? 'visible' : ''}`}>
        <p className="text-[var(--secondary-text-color)] leading-relaxed pt-2 px-4">
        {`The following statistics were collated from the National Agency for Food and Drugs Administration and Control (NAFDAC), Industrial Pharmacists of Nigeria, National Center for Biotechnology Information (NCBI), and the Multidisciplinary Digital Publishing Institute (MDPI) amongst others.`}
        </p>
      </div>
</div>
<div className="p-4 space-y-4">
<div ref={card1Ref} className={`animate-fade-up ${card1Visible ? 'visible' : ''}`}>
  <div className={card_style}>
    <p className={card_text}> Billions of dollars worth of usable medicines are discarded globally every year.</p>
  </div>
</div>
<div ref={card2Ref} className={`animate-fade-up ${card2Visible ? 'visible' : ''}`}>
  <div className={card_style}>
    <p className={card_text}>Up to <span className={card_value}>30%</span> of medicines in low and middle-income countries (LMICs) are unavailable due to supply chain inefficiencies.</p>
  </div>
</div>
<div ref={card3Ref} className={`animate-fade-up ${card3Visible ? 'visible' : ''}`}>
  <div className={card_style}>
    <p className={card_text}>Estimatedly <span className={card_value}> 8 – 10%</span>  total healthcare waste is pharmaceutical waste, a growing environmental threat.</p>
  </div>
</div>
<div ref={card4Ref} className={`animate-fade-up ${card4Visible ? 'visible' : ''}`}>
  <div className={card_style}>
    <p className={card_text}>In Nigeria, Hospitals and pharmacies discard an estimated <span className={card_value}>₦15 – 20 billion</span> worth of expired drugs annually.</p>
  </div>
</div>
<div ref={card5Ref} className={`animate-fade-up ${card5Visible ? 'visible' : ''}`}>
  <div className={card_style}>
    <p className={card_text}>Over <span className={card_value}>1 trillion</span> worth of expired/substandard drugs seized in Nigeria in Q1 2025 alone.</p>
  </div>
</div>
<div ref={card6Ref} className={`animate-fade-up ${card6Visible ? 'visible' : ''}`}>
  <div className={card_style}>
    <p className={card_text}><span className={card_value}>20–25%</span> of pharmaceutical revenue lost annually to expiry.</p>
  </div>
</div>
</div>
</div>
</section>
  );
}


