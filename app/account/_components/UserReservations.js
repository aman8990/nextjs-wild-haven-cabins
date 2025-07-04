import UserReservation from './UserReservation';

function UserReservations({ bookings }) {
  if (bookings.length === 0)
    return (
      <div className="text-center mt-10 text-xl">
        <h1>❗No records found</h1>
      </div>
    );

  return (
    <div>
      <div className="space-y-5 mt-5">
        {bookings.map((booking) => (
          <UserReservation key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
}

export default UserReservations;
