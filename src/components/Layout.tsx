import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className = '', id, dark = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-24 px-6 md:px-12 lg:px-24 ${dark ? 'bg-brand-navy text-white' : 'bg-brand-cream'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
}
