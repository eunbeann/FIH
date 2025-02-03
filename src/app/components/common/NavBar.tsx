'use client';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Main' },
    { href: '/projects', label: 'Projects' },
    { href: '/volunteer', label: `Volunteer` },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <NavigationMenu className="flex w-full justify-between px-3 py-6 xl:px-10">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="">BEAN</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList className="hidden items-center justify-end text-center antialiased xl:flex">
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={`ml-1.5 xl:ml-10 ${
                  pathname === item.href ? 'text-black' : 'text-gray4'
                }`}
              >
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
