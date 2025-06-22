'use client';

import { Mail, Phone } from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

export default function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();

  return (
    <section id="contact">
        <div className='px-4'>
      <div ref={titleRef} className={`animate-text-reveal ${titleVisible ? 'visible' : ''}`}>
        <h2 className="text-[var(--primary-text-color)] text-3xl font-bold leading-tight tracking-tight">Contact Us</h2>
      </div>
      <div ref={textRef} className={`animate-text-reveal ${textVisible ? 'visible' : ''}`}>
        <p className="text-[var(--secondary-text-color)] leading-relaxed py-4">{`For inquiries, partnerships, or support, please reach out to us via the channels below. We're here to help prevent pharmaceutical wastage.`}</p>
      </div>
      <div ref={cardRef} className={`animate-fade-up ${cardVisible ? 'visible' : ''}`}>
        <div className="p-4 flex flex-col gap-x-6 border rounded-xl shadow-sm bg-white">
        <div className="space-x-9 flex flex-wrap border-t border-t-[var(--border-color)] py-6">
          <div className="gap-2 text-[var(--secondary-text-color)] text-base font-medium leading-normal flex items-center">
            <Mail size={20} className="text-[var(--primary-color)]" /> Email
          </div>
          <a href="mailto:info@cyladrugnetwork.com" className="text-[var(--primary-text-color)] text-base font-normal leading-normal hover:text-[var(--primary-color)] transition-colors">info@cyladrugnetwork.com</a>
        </div>
        <div className="space-x-6 flex flex-wrap border-t border-t-[var(--border-color)] py-6">
          <div className="text-[var(--secondary-text-color)] text-base font-medium leading-normal flex items-center gap-2">
            <Phone size={20} className="text-[var(--primary-color)]" /> Mobile
          </div>
          <a href="tel:+2348031234567" className="text-[var(--primary-text-color)] text-base font-normal leading-normal hover:text-[var(--primary-color)] transition-colors">+234 816 605 6543</a>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}
