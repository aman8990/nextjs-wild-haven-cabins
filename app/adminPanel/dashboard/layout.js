import DashboardUI from './_components/DashboardUI';
import { getConfirmedBookings, getQueries } from '@/app/_actions/admin';
import DashboardHeader from './_components/DashboardHeader';

async function DashboardLayout({ children }) {
  const bookings = await getConfirmedBookings();
  const queries = await getQueries();
  const noOfBooking = bookings.length;
  const noOfQueries = queries.length;

  return (
    <div>
      <h1 className="mb-10 text-3xl font-bold text-center mt-10">Dashboard</h1>
      <DashboardUI noOfBooking={noOfBooking} noOfQueries={noOfQueries} />
      <DashboardHeader />
      <div>{children}</div>
    </div>
  );
}

export default DashboardLayout;
