'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function DashboardHeader() {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <div className="flex justify-center sm:justify-end mt-10">
      <div className="flex text-center justify-between mx-5 md:mx-10 sm:text-lg text-xs w-[18rem] sm:w-[20rem] border-2 p-1 rounded-md">
        <Link
          href="/adminPanel/dashboard"
          className={`flex gap-3 px-3 py-1 ${
            isActive('/adminPanel/dashboard')
              ? ' rounded-md bg-accent-50 text-primary-950'
              : ''
          }`}
        >
          7 Days
        </Link>

        <Link
          href="/adminPanel/dashboard/lastThirtyDays"
          className={`flex gap-3 px-3 py-1 ${
            isActive('/adminPanel/dashboard/lastThirtyDays')
              ? ' rounded-md bg-accent-50 text-primary-950'
              : ''
          }`}
        >
          30 Days
        </Link>

        <Link
          href="/adminPanel/dashboard/lastSixtyDays"
          className={`flex gap-3 px-3 py-1 ${
            isActive('/adminPanel/dashboard/lastSixtyDays')
              ? ' rounded-md bg-accent-50 text-primary-950'
              : ''
          }`}
        >
          60 Days
        </Link>
      </div>
    </div>
  );
}

export default DashboardHeader;
