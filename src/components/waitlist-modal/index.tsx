'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, userType }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setUserType('');
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 2000);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Something went wrong');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network error. Please try again.');
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-2">Join Our Waitlist</h2>
        <p className="text-gray-600 mb-4">Be the first to know when we launch!</p>

        {status === 'success' ? (
          <div className="text-center py-4">
            <div className="text-green-600 font-medium">{`✓ You're on the list!`}</div>
            <p className="text-sm text-gray-600 mt-1">{`We'll notify you when we launch.`}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent mb-3"
              disabled={status === 'loading'}
            >
              <option value="">Join CDN Waitlist as...</option>
              <option value="manufacturer">Manufacturer</option>
              <option value="distributor">Distributor</option>
              <option value="healthcare_provider">Healthcare Provider</option>
            </select>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
              disabled={status === 'loading'}
            />
            {status === 'error' && (
              <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={status === 'loading' || !email || !userType}
              className="w-full mt-3 bg-[var(--primary-color)] text-white py-2 rounded-md hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}