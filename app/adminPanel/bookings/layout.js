import BookingHeader from './_components/BookingHeader';

async function BookingLayout({ children }) {
  return (
    <div>
      <h1 className="mb-10 text-3xl font-bold text-center mt-10">Bookings</h1>
      <BookingHeader />
      <div>{children}</div>
    </div>
  );
}

export default BookingLayout;
