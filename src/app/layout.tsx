// layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Itab Ghazouani | Front-End Developer',
  description:
    'Front-end developer specializing in React, Next.js, and TypeScript. Creating fast, accessible, and beautiful web experiences.',
  keywords: [
    'Itab Ghazouani',
    'Front-end Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Web Developer',
    'Software Engineer',
    'Frontend Development',
    'UI Development',
    'JavaScript Developer',
  ],
  authors: [{ name: 'Itab Ghazouani' }],
  creator: 'Itab Ghazouani',
  publisher: 'Itab Ghazouani',
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL('https://itab-portfolio.vercel.app/'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://itab-portfolio.vercel.app/',
    title: 'Itab Ghazouani | Front-End Developer',
    description:
      'Front-end developer specializing in React, Next.js, and TypeScript. Creating fast, accessible, and beautiful web experiences.',
    siteName: 'Itab Ghazouani Portfolio',
    images: [
      {
        url: '../../public/assets/opengraph.jpeg',
        width: 1200,
        height: 630,
        alt: 'Itab Ghazouani - Front-end Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Itab Ghazouani | Front-End Developer',
    description:
      'Front-end developer specializing in React, Next.js, and TypeScript. Creating fast, accessible, and beautiful web experiences.',
    images: ['../../public/assets/opengraph.jpeg'],
    creator: '@YourTwitterHandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://itab-portfolio.vercel.app/',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
