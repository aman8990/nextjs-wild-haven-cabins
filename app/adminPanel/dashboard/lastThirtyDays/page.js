import getSummaryByDate from '@/app/_libs/getSummaryByDate';
import getChartData from '@/app/_libs/getChartData';
import Chart from '../_components/Chart';
import { getLastThirtyDaysBookings } from '@/app/_actions/admin';

async function Page() {
  const bookings = await getLastThirtyDaysBookings();

  const totalPrice = bookings
    .map((booking) => booking.totalPrice || 0)
    .reduce((sum, price) => sum + price, 0);

  const totalBookings = bookings.length;

  const summaryByDate = getSummaryByDate(bookings);
  const chartData = getChartData(30, summaryByDate);

  return (
    <div>
      <Chart
        chartData={chartData}
        totalBookings={totalBookings}
        totalPrice={totalPrice}
      />
    </div>
  );
}

export default Page;
