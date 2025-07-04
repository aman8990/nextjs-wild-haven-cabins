'use client';

import React, { useState } from 'react';
import SpinnerMini from '@/app/_components/SpinnerMini';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import { updateBooking } from '@/app/_actions/admin';

function Booking({ booking }) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState(booking?.status);
  const id = booking?.id;
  const startDate = format(new Date(booking?.startDate), 'dd MMMM yyyy');
  const endDate = format(new Date(booking?.endDate), 'dd MMMM yyyy');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const res = await updateBooking(id, selectedValue);

    if (res?.error) {
      toast.dismiss();
      toast.error(res?.error || 'Error in updating status');
    }
    if (res?.success) {
      toast.dismiss();
      toast.success('Status Updated');
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-[60rem] mx-auto border-2 rounded-md mb-5 p-3 md:p-6 md:text-lg space-y-2">
      <div className="text-3xl text-white text-center">
        Booking ID : {booking?.id}
      </div>
      <div className="md:text-xl">
        <div>Start Date : {startDate}</div>
        <div>End Date : {endDate}</div>
        <div>No of Nights : {booking?.numNights}</div>
        <div className="text-blue-500">
          Total Price : $ {booking?.totalPrice}
        </div>
        <div>Email : {booking?.guestEmail}</div>
        <div>Name : {booking?.guestName}</div>
        <div>Nationality : {booking?.nationality}</div>
        <div>National ID : {booking?.nationalId}</div>
        <div>Observations : {booking?.observations}</div>
        <div>Has Breakfast : {booking?.hasBreakfast ? 'Yes' : 'No'}</div>
        <div>Payment ID : {booking?.paymentId}</div>
        <div className="flex gap-2 text-blue-500">
          Payment Status :{' '}
          {booking?.isPaid ? (
            <h1 className="text-green-500">Paid</h1>
          ) : (
            <h1 className="text-red-500">Not Paid</h1>
          )}
        </div>
        <div>Status : {booking?.status}</div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xl">Update Status</label>

        <select
          className="text-black border-none p-2"
          id="status"
          value={selectedValue}
          onChange={handleChange}
        >
          <option disabled value="">
            Select a Option
          </option>
          <option value="confirmed">confirmed</option>
          <option value="checked-in">checked-in</option>
          <option value="checked-out">checked-out</option>
        </select>

        <button
          className="flex justify-center bg-accent-500 hover:bg-accent-600 text-primary-950 font-semibold rounded-md mx-auto w-[6rem] pt-1 pb-0.5 mt-1"
          onClick={() => handleSubmit()}
        >
          {isLoading ? <SpinnerMini size={28} /> : 'Submit'}
        </button>
      </div>
    </div>
  );
}

export default Booking;
