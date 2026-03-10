import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'skaills',
  description: 'skaills — Intelligent skills evaluation platform',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'skaills — Intelligent Skills',
    description: 'AI-powered competency evaluation platform. Assess professional skills, cognitive abilities, personality, DISC behavioral styles, and more.',
    images: [{ url: '/og-image.png', width: 1800, height: 900 }],
    type: 'website',
    siteName: 'skaills',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'skaills — Intelligent Skills',
    description: 'AI-powered competency evaluation platform.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
