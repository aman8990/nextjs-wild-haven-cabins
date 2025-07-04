'use client';

import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
} from 'recharts';

function Chart({ chartData, totalBookings, totalPrice }) {
  return (
    <div className="space-y-10 mb-20">
      <div>
        <h1 className="mb-2 text-2xl font-semibold text-center mt-10">
          Total Bookings : {totalBookings}
        </h1>
        <h2 className="text-lg font-semibold mb-2">📦 Bookings per Day</h2>
        <ResponsiveContainer width="90%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="0" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bookings" fill="#8884d8" name="Bookings" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h1 className="mb-2 text-2xl font-semibold text-center mt-10">
          Total Revenue : ${totalPrice}
        </h1>
        <h2 className="text-lg font-semibold mb-2">💰 Revenue per Day</h2>
        <ResponsiveContainer width="90%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="0" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip formatter={(value) => `$${value}`} />
            <Bar dataKey="revenue" fill="#82ca9d" name="Revenue" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
