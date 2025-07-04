import { getLastSevenDaysBookings } from '@/app/_actions/admin';
import Chart from './_components/Chart';
import getSummaryByDate from '@/app/_libs/getSummaryByDate';
import getChartData from '@/app/_libs/getChartData';

async function Page() {
  const bookings = await getLastSevenDaysBookings();

  const totalPrice = bookings
    .map((booking) => booking.totalPrice || 0)
    .reduce((sum, price) => sum + price, 0);

  const totalBookings = bookings.length;

  const summaryByDate = getSummaryByDate(bookings);
  const chartData = getChartData(7, summaryByDate);

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
