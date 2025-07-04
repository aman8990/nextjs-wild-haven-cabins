'use client';

import { useDateRange } from '@/app/_hooks/useDateRange';
import {
  differenceInDays,
  isPast,
  isBefore,
  addDays,
  isAfter,
  format,
} from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function DateSelector({ cabin, settings, bookedDates }) {
  const { range, setRange, resetRange } = useDateRange();
  const { regularPrice, discount } = cabin;
  const numNights = range ? differenceInDays(range.to, range.from) : null;
  const cabinPrice = numNights * (regularPrice - discount);
  const { minBookingLength, maxBookingLength } = settings;

  const getDatesInRange = (sd, ed) => {
    const dateArray = [];
    let cd = new Date(sd);

    while (!isAfter(cd, ed)) {
      dateArray.push(new Date(cd));
      cd = addDays(cd, 1);
    }

    return dateArray.map((d) => format(d, 'yyyy-MM-dd'));
  };

  const disabled = (date) => {
    const today = new Date();

    const formattedDate = format(date, 'yyyy-MM-dd');
    const formattedBookedDates = bookedDates.map((d) =>
      format(new Date(d), 'yyyy-MM-dd')
    );

    const isBooked = formattedBookedDates.includes(formattedDate);

    if (isPast(date) || isBooked) return true;

    if (range.from && !range.to) {
      const maxDate = addDays(range.from, maxBookingLength);
      const minDate = addDays(range.from, minBookingLength);

      const allMinDates = getDatesInRange(range.from, minDate);

      const hasBookedDateInMinRange = allMinDates.some((d) =>
        formattedBookedDates.includes(d)
      );

      if (hasBookedDateInMinRange) {
        return true;
      }

      const allMaxDates = getDatesInRange(minDate, maxDate);

      const hasBookedDateInMaxRange = allMaxDates.find((d) =>
        formattedBookedDates.includes(d)
      );

      if (hasBookedDateInMaxRange) {
        return isAfter(date, new Date(hasBookedDateInMaxRange));
      }

      return isBefore(date, minDate) || isAfter(date, maxDate);
    }

    return false;
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex justify-center max-w-40 md:max-w-full mx-auto md:mx-0">
        <DayPicker
          animate
          mode="range"
          numberOfMonths={2}
          onSelect={setRange}
          selected={range}
          min={minBookingLength}
          max={maxBookingLength}
          disabled={disabled}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row justify-between items-center text-xl font-semibold text-primary-900 px-5 py-4 bg-accent-500 rounded-md max-w-[40rem] min-w-[10rem] w-full">
        <h1>
          {discount > 0 ? (
            <>
              <span>${regularPrice - discount}</span>
              <span className="line-through text-primary-700 text-base ml-2">
                ${regularPrice}
              </span>
              <span> /night</span>
            </>
          ) : (
            <span>${regularPrice} / night</span>
          )}
        </h1>

        {numNights ? (
          <>
            <h1 className="bg-accent-600 rounded-md p-2">x {numNights}</h1>
            <h1>TOTAL ${cabinPrice}</h1>
          </>
        ) : null}

        {range.from && (
          <button
            onClick={resetRange}
            className="border-2 border-primary-900 p-2 rounded-md"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default DateSelector;
