import { getBooking } from '@/app/_actions/admin';
import Booking from './_components/Booking';
import Error from '@/app/error';

async function Page({ params }) {
  const { bookingId } = await params;
  const data = await getBooking(bookingId);
  const booking = data.booking;

  if (booking === undefined)
    return <Error error={{ message: 'No such booking found' }} />;

  return (
    <div className="mt-10">
      <Booking booking={booking} />
    </div>
  );
}

export default Page;
