import type { Metadata } from 'next';
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
        <div className="flex h-[calc(100vh-6.5rem)] items-center">
          <div className="mx-10 flex h-full justify-center">{children}</div>
        </div>
      </body>
    </html>
  );
}
