'use client';

import { useState } from 'react';
import Logo from './_components/Logo';
import Navigation from './_components/Navigation';
import NavigationMobile from './_components/NavigationMobile';
import NavButton from './_components/NavButton';
import { usePathname } from 'next/navigation';
import NavigationAdmin from './_components/NavigationAdmin';

function Header() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/adminPanel');

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-primary-900 px-2 sm:px-8 py-2 sm:py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <NavButton setIsOpen={setIsOpen} />
        <Navigation />
        {isAdmin ? (
          <NavigationAdmin isOpen={isOpen} setIsOpen={setIsOpen} />
        ) : (
          <NavigationMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </header>
  );
}

export default Header;
