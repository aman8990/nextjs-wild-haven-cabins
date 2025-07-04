'use client';

import LogoutButton from '@/app/account/_components/LogoutButton';
import Link from 'next/link';

function UserSettings() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-20">
      <h1 className="text-3xl underline mb-10">User Settings</h1>
      <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-10 sm:gap-y-10 text-center text-lg sm:text-xl md:text-3xl">
        <Link
          href="/account/updateProfile"
          className="flex justify-center items-center border-2 border-white p-3 hover:bg-accent-500 hover:text-primary-900 rounded-md"
        >
          Update Profile
        </Link>

        <Link
          href="/account/reservations"
          className="flex justify-center items-center border-2 border-white p-3 hover:bg-accent-500 hover:text-primary-900 rounded-md"
        >
          Reservations
        </Link>
      </div>

      <LogoutButton />
    </div>
  );
}

export default UserSettings;
