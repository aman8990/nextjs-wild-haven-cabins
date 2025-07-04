import { getConfirmedBookings } from '@/app/_actions/admin';
import Bookings from './_components/Bookings';

async function Page() {
  const bookings = await getConfirmedBookings();

  if (bookings.length === 0)
    return (
      <h1 className="text-3xl text-center font-semibold mt-40">
        No Confirmed Bookings
      </h1>
    );

  return (
    <div className="flex justify-center mt-10 mx-2">
      <Bookings bookings={bookings} />
    </div>
  );
}

export default Page;
