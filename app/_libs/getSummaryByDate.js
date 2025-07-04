function getSummaryByDate(bookings) {
  const summaryByDate = {};

  for (const booking of bookings) {
    const date = new Date(booking.created_at).toISOString().split('T')[0];

    if (!summaryByDate[date]) {
      summaryByDate[date] = {
        date,
        count: 1,
        total: booking.totalPrice || 0,
      };
    } else {
      summaryByDate[date].count += 1;
      summaryByDate[date].total += booking.totalPrice || 0;
    }
  }

  return summaryByDate;
}

export default getSummaryByDate;
