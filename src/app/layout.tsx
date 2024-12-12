import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';
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
  const menuItems = [
    { href: '', label: 'Eunbean Kwon' },
    { href: '/info', label: 'Info' },
    { href: '/works', label: 'Works' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationMenu className="py-6">
          <NavigationMenuList className="flex justify-evenly">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index} className="">
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className="text-xl font-bold text-[#222B92]">
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {children}
      </body>
    </html>
  );
}
