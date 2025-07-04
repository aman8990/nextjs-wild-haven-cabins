'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function BookingHeader() {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  if (
    pathname !== '/adminPanel/bookings' &&
    pathname !== '/adminPanel/bookings/checkedIn'
  )
    return null;

  return (
    <div className="flex justify-center sm:justify-end">
      <div className="flex justify-between gap-5 mx-5 md:mx-10 sm:text-lg text-sm w-[14rem] sm:w-[16rem] border-2 p-1 rounded-md">
        <Link
          href="/adminPanel/bookings"
          className={`flex gap-3 px-3 py-1 ${
            isActive('/adminPanel/bookings')
              ? ' rounded-md bg-accent-50 text-primary-950'
              : ''
          }`}
        >
          Confirmed
        </Link>

        <Link
          href="/adminPanel/bookings/checkedIn"
          className={`flex gap-3 px-3 py-1 ${
            isActive('/adminPanel/bookings/checkedIn')
              ? ' rounded-md bg-accent-50 text-primary-950'
              : ''
          }`}
        >
          Checked-In
        </Link>
      </div>
    </div>
  );
}

export default BookingHeader;
