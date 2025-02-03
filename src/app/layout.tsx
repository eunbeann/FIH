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
  description: 'FrontEnd Developer | Eunbean Kwon',
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
