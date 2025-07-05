'use client';

import React, { useState } from 'react';
import SpinnerMini from '@/app/_components/SpinnerMini';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import { updateBooking } from '@/app/_actions/admin';
import Input from '@/app/_components/Input';
import dynamic from 'next/dynamic';
import Spinner from '@/app/_components/Spinner';

function Booking({ booking }) {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(booking?.status);
  const [nationality, setNationality] = useState(booking?.nationality || '');
  const [nationalId, setNationalId] = useState(booking?.nationalId || '');
  const id = booking?.id;
  const startDate = format(new Date(booking?.startDate), 'dd MMMM yyyy');
  const endDate = format(new Date(booking?.endDate), 'dd MMMM yyyy');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const updatedData = {};

    if (booking?.nationality !== nationality)
      updatedData.nationality = nationality;
    if (booking.nationalId !== nationalId) updatedData.nationalId = nationalId;
    if (booking.status !== status) updatedData.status = status;

    if (Object.keys(updatedData).length === 0) {
      toast.dismiss();
      toast.error('No changes detected.');
      setIsLoading(false);
      return;
    }

    const res = await updateBooking(id, updatedData);

    if (res?.error) {
      toast.dismiss();
      toast.error(res?.error || 'Error in updating booking');
    }
    if (res?.success) {
      toast.dismiss();
      toast.success('Booking Updated');
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

      <Input
        label="Nationality"
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
      />

      <Input
        label="National ID"
        value={nationalId}
        onChange={(e) => setNationalId(e.target.value)}
      />

      <div className="flex flex-col gap-1">
        <label className="text-xl">Update Status</label>

        <select
          className="text-black border-none p-2"
          id="status"
          value={status}
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

// export default Booking;

export default dynamic(() => Promise.resolve(Booking), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <Spinner size={60} />
    </div>
  ),
});
