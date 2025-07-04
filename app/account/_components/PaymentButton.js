'use client';

import SpinnerMini from '@/app/_components/SpinnerMini';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

function PaymentButton({ bookingId }) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);

    try {
      const res = await axios.post('/api/checkout', { bookingId: bookingId });

      window.location.href = res.data.url;
    } catch (error) {
      toast.dismiss();
      toast.error(error.response.data || 'Error in payment');
    }

    setIsLoading(false);
  };
  return (
    <button
      onClick={handlePayment}
      className="border-2 md:border-0 md:border-l-2 border-primary-800 rounded-md mb-2 md:mb-0 h-full p-4 text-primary-100 font-bold hover:bg-accent-500 hover:text-white min-w-[10rem] flex justify-center items-center"
    >
      {isLoading ? <SpinnerMini /> : 'Make Payment'}
    </button>
  );
}

export default PaymentButton;
