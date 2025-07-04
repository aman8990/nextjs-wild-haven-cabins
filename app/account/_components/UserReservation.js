import { format, isAfter, isEqual } from 'date-fns';
import Image from 'next/image';
import PaymentButton from './PaymentButton';
import hasFiveMinutesPassed from '@/app/_libs/hasFiveMinutesPassed';
import { getCabinImage } from '@/app/_actions/cabin';

async function UserReservation({ booking }) {
  const cabinImage = await getCabinImage(booking.cabinId);
  const startDate = format(booking.startDate, 'MMMM d, yyyy');
  const endDate = format(booking.endDate, 'MMMM d, yyyy');
  const createdAt = format(booking.created_at, 'EEE, MMM dd yyyy, hh:mm a');

  const isUpcoming = isAfter(booking.startDate, new Date());
  const showPaymentButton = hasFiveMinutesPassed(booking.created_at);
  const bookingId = booking.id;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch md:justify-between border border-primary-700 rounded-md">
      <div className="flex flex-col md:flex-row items-center md:items-stretch">
        <Image
          src={cabinImage}
          alt="cabin-image"
          width={150}
          height={150}
          className="w-full md:w-auto"
        />

        <div className="my-4 md:ml-5 space-y-1 flex flex-col items-center md:items-start">
          {isUpcoming ? (
            <h1 className="bg-green-700 font-bold inline px-2 pb-1 pt-2 text-primary-100 rounded-sm">
              UPCOMING
            </h1>
          ) : (
            <h1 className="bg-red-700 font-bold inline px-2 pb-1 pt-2 text-primary-100 rounded-sm">
              EXPIRED
            </h1>
          )}

          <h1 className="text-xl font-semibold">Booking ID : {booking?.id}</h1>
          <h1 className="text-xl text-white">
            {booking.numNights} nights in Cabin 00{booking.cabinId}
          </h1>

          <div className="flex text-lg">
            <h1>{startDate}</h1>
            <h1>&nbsp; - &nbsp;</h1>
            <h1>{endDate}</h1>
          </div>

          <div className="flex gap-4 text-lg">
            <h1>${booking.totalPrice}</h1>
            <h1>&bull;</h1>
            <h1>
              {booking.numGuests} {booking.numGuests > 1 ? 'guests' : 'guest'}
            </h1>
          </div>

          <div className="text-lg flex gap-2">
            <h1>Payment Status :</h1>
            {booking.isPaid ? (
              <h1 className="text-green-500">Paid</h1>
            ) : (
              <h1 className="text-red-500">Not Paid</h1>
            )}
          </div>

          <h1 className="text-primary-500">Booked on {createdAt}</h1>
        </div>
      </div>
      {showPaymentButton && (
        <div>
          {booking.isPaid === false && <PaymentButton bookingId={bookingId} />}
        </div>
      )}
    </div>
  );
}

export default UserReservation;
