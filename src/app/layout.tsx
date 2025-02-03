import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import NavBar from './components/common/NavBar';
import './globals.css';

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
  title: 'Eunbean Kwon',
  openGraph: {
    title: 'Eunbean Kwon',
    type: 'website',
    locale: 'en_US',
    url: 'https://eunbeann.site',
    siteName: 'Eunbean Kwon',
    images: [
      {
        url: '/og-thumbnail.png',
        alt: 'Eunbean Kwon',
      },
    ],
  },
  icons: [
    { url: '/favicon.ico', type: 'image/x-icon' },
    { url: '/favicon.webp', type: 'image/webp' },
    { url: '/favicon.png', type: 'image/png' },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  minimumScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#D4DAE3] font-pretendard tracking-tighter`}
      >
        <NavBar />
        <div className="flex h-[calc(100vh-6.5rem)] w-full justify-center">
          <div className="flex h-full w-[80%] justify-center">{children}</div>
        </div>
      </body>
    </html>
  );
}
