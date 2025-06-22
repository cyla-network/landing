'use client';

import { useScrollAnimation } from '@/lib/useScrollAnimation';

export default function Hero() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation();

  return (
    <div id="hero" className="flex flex-col items-center justify-center text-center min-h-[540px] bg-cover bg-center shadow-xl"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('/bg.png')`,
      }}
    >
      <div ref={titleRef} className={`animate-text-reveal ${titleVisible ? 'visible' : ''}`}>
        <h1 className="text-white md:text-5xl text-3xl font-extrabold">Smart Redistribution. Safe Healthcare.</h1>
      </div>
      <div ref={textRef} className={`animate-text-reveal ${textVisible ? 'visible' : ''}`}>
        <p className="text-slate-100 md:text-lg max-w-2xl mt-4">
         {`Cyla's Drug Network (CDN) is a collaborative platform created to reduce pharmaceutical wastage and improve access to essential medicines.`}
        </p>
      </div>
      <div ref={buttonRef} className={`animate-fade-up ${buttonVisible ? 'visible' : ''}`}>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[var(--primary-color)] text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors mt-6">
        <a href="mailto:info@cyladrugnetwork.com">Learn more</a>
      </button>
      </div>
    </div>
  );
}
