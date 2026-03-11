'use client';

import Image from 'next/image';

export interface PersonaInfo {
  key: string;
  fullName: string;
  title: string;
  color: string;
  photoSrc: string;
}

export const PERSONAS: PersonaInfo[] = [
  {
    key: 'carlos',
    fullName: 'Carlos Miranda Levy',
    title: 'Founder & Curator',
    color: '#0d9488', // teal-600
    photoSrc: '/assets/images/profile-photos/carlos-miranda-levy-white-shirt-04.png',
  },
  {
    key: 'billy',
    fullName: 'Billy Nakamura-Jensen',
    title: 'Former VP of Strategy, Nordic Financial Group',
    color: '#2563eb', // blue-600
    photoSrc: '/assets/images/profile-photos/billy-profile-photo.png',
  },
  {
    key: 'naila',
    fullName: 'Naila Okafor-Reyes',
    title: 'Director of Operations, Central American Logistics Consortium',
    color: '#dc2626', // red-600
    photoSrc: '/assets/images/profile-photos/naila-profile-photo.png',
  },
  {
    key: 'ainthony',
    fullName: 'Ainthony Moreau-Chen',
    title: 'Founder & CEO, Synaptic Ventures',
    color: '#16a34a', // green-600
    photoSrc: '/assets/images/profile-photos/ainthony-profile-photo.png',
  },
];

interface PersonaQuoteProps {
  persona: PersonaInfo;
  children: React.ReactNode;
}

export function PersonaQuote({ persona, children }: PersonaQuoteProps) {
  return (
    <blockquote
      className="rounded-xl bg-white border border-gray-200 p-5 sm:p-6"
      style={{ borderLeft: `4px solid ${persona.color}` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <Image
          src={persona.photoSrc}
          alt={persona.fullName}
          width={44}
          height={44}
          className="w-11 h-11 rounded-full object-cover flex-shrink-0"
          style={{ objectPosition: persona.key === 'carlos' ? 'top' : 'center' }}
        />
        <div>
          <strong className="text-sm" style={{ color: persona.color }}>
            {persona.fullName}
          </strong>
          <span className="block text-xs text-gray-400">{persona.title}</span>
        </div>
      </div>
      <div className="text-sm text-gray-600 leading-relaxed space-y-3">
        {children}
      </div>
    </blockquote>
  );
}

interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  date: string;
  readTime: string;
  children: React.ReactNode;
}

export function ArticleLayout({ title, subtitle, date, readTime, children }: ArticleLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-gray-500 mb-4">{subtitle}</p>
        )}
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span>{date}</span>
          <span>&middot;</span>
          <span>{readTime}</span>
        </div>
      </header>
      <div className="prose prose-gray max-w-none">
        {children}
      </div>
    </article>
  );
}
