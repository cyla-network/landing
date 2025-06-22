'use client'

export default function Footer() {
  return (
    <footer className="flex justify-center border-t border-[var(--border-color)] bg-slate-100 py-8">
      <p className="text-[var(--secondary-text-color)] text-sm">&copy; {new Date().getFullYear()} {`Cyla's Drug Network. All rights reserved.`}</p>
    </footer>
  );
}
