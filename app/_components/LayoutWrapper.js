'use client';

import { usePathname } from 'next/navigation';

function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/adminPanel');

  return (
    <div className={isAdmin ? '' : 'px-2 sm:px-8 py-12'}>
      <main className={isAdmin ? '' : 'max-w-7xl mx-auto w-full'}>
        {children}
      </main>
    </div>
  );
}

export default LayoutWrapper;
