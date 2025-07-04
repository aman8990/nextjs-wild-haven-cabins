'use client';

import { useRouter } from 'next/navigation';

function DashboardUI({ noOfBooking, noOfQueries }) {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-center mt-10 gap-3 md:gap-10 md:text-xl">
        <button
          onClick={() => router.push('/adminPanel/bookings')}
          className="border-2 py-2 px-3 rounded-md hover:bg-accent-500 hover:text-primary-950"
        >
          New Bookings : {noOfBooking}
        </button>
        <button
          onClick={() => router.push('/adminPanel/userQueries')}
          className="border-2 py-2 px-3 rounded-md hover:bg-accent-500 hover:text-primary-950"
        >
          New Queries : {noOfQueries}
        </button>
      </div>
    </div>
  );
}

export default DashboardUI;
