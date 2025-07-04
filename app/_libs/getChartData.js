function getChartData(initial, summaryByDate) {
  const today = new Date();
  const chartData = [];

  for (let i = initial; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const key = date.toISOString().split('T')[0];

    chartData.push({
      date: key,
      bookings: summaryByDate[key]?.count || 0,
      revenue: summaryByDate[key]?.total || 0,
    });
  }

  return chartData;
}

export default getChartData;
