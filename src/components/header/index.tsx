'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import WaitlistModal from '@/components/waitlist-modal';

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId.replace('#', ''));
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#problem', label: 'The Problem' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-color)] bg-slate-50/80 backdrop-blur-md" role="banner">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <div className="flex items-center gap-3 text-[var(--primary-text-color)]">
          <div className="w-8 h-8 text-[var(--primary-color)]">
            <Image 
              src="/logo.png" 
              alt="Cyla's Drug Network - Safe Pharmaceutical Redistribution" 
              width={32} 
              height={32}
              priority
            />
          </div>
          <h1 className="font-bold tracking-tight text-xl">{`Cyla's Drug Network`}</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button 
              key={link.href} 
              onClick={() => smoothScrollTo(link.href)} 
              className="text-[var(--primary-text-color)] text-sm font-medium leading-normal hover:text-[var(--primary-color)] transition-colors"
              aria-label={`Navigate to ${link.label} section`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => setShowWaitlist(true)}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[var(--primary-color)] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors"
            aria-label="Join our waitlist for early access"
          >
            Join Waitlist
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded text-[var(--primary-color)]"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav 
          id="mobile-menu"
          className="md:hidden px-6 pb-4 space-y-3" 
          role="navigation" 
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                smoothScrollTo(link.href);
                setIsOpen(false);
              }}
              className="block text-[var(--primary-text-color)] text-sm font-medium hover:text-[var(--primary-color)] w-full text-left"
              aria-label={`Navigate to ${link.label} section`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => setShowWaitlist(true)}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[var(--primary-color)] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors w-full mt-2"
            aria-label="Join our waitlist for early access"
          >
            Join Waitlist
          </button>
        </nav>
      )}
      
      <WaitlistModal 
        isOpen={showWaitlist} 
        onClose={() => setShowWaitlist(false)} 
      />
    </header>
  );
}
