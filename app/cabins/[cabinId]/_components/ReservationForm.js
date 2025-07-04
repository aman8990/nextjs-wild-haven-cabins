'use client';

import { createBooking } from '@/app/_actions/createBooking';
import SpinnerMini from '@/app/_components/SpinnerMini';
import { useDateRange } from '@/app/_hooks/useDateRange';
import { differenceInDays } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function ReservationForm({ cabin }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { range, resetRange } = useDateRange();
  const { maxCapacity, regularPrice, discount, id } = cabin;
  const startDate = range.from;
  const endDate = range.to;
  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);

    console.log(startDate, endDate);

    if (!startDate || !endDate) {
      toast.dismiss();
      toast.error('Please select date');
      setIsLoading(false);
      return;
    }

    const bookingData = {
      ...data,
      startDate,
      endDate,
      numNights,
      cabinPrice,
      cabinId: id,
    };

    const result = await createBooking(bookingData);

    if (result?.error) {
      toast.error(`❌ ${result.error}`);
    } else {
      toast.dismiss();
      toast.success('Pls pay within 5 minutes');
      toast.success('Booking created successfully.');
      reset();
      resetRange();
      router.push('/account/reservations');
    }

    setIsLoading(false);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[50rem] flex flex-col min-w-[10rem] space-y-6"
      >
        <div className="space-y-2">
          <label className="text-xl" htmlFor="numGuests">
            How many guests?
          </label>
          <select
            id="numGuests"
            {...register('numGuests', {
              required: 'Please select number of guests',
            })}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-md"
          >
            <option value="">Select number of guests...</option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
          {errors.numGuests && (
            <p className="text-red-500 text-sm">{errors.numGuests.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xl" htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            id="observations"
            placeholder="Any pets, allergies, special requirements, etc.?"
            {...register('observations')}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold py-1.5 rounded-md flex justify-center"
        >
          {isLoading ? <SpinnerMini size={25} /> : 'Reserve Now'}
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;
