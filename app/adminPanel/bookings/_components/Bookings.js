'use client';

import { useRouter } from 'next/navigation';

function Bookings({ bookings }) {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/adminPanel/bookings/${id}`);
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-white text-center text-black">
            <th className="px-4 py-3 border">Booking ID</th>
            <th className="px-4 py-3 border">Guest Email</th>
            <th className="px-4 py-3 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr
              className="text-center hover:bg-white hover:text-black cursor-pointer"
              key={booking.id}
              onClick={() => handleClick(booking?.id)}
            >
              <td className="px-4 py-2 border">{booking?.id}</td>
              <td className="px-4 py-2 border">{booking?.guestEmail}</td>
              <td className="px-4 py-2 border">{booking?.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Bookings;
