import { getUserBookings } from '@/app/_actions/userBookings';
import UserReservations from '../_components/UserReservations';

async function Page() {
  const bookings = await getUserBookings();
  return (
    <div className="mt-10">
      <h1 className="text-center text-4xl text-accent-400">
        Your Reservations
      </h1>
      <UserReservations bookings={bookings} />
    </div>
  );
}

export default Page;
