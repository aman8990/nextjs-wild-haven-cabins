'use server';

import { revalidatePath } from 'next/cache';
import { getSession } from '../_hooks/useSession';
import { createClient } from '../_libs/_supabase/server';

function toISTMidnight(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return new Date(d.getTime() + 330 * 60 * 1000);
}

export async function createBooking(bookingData) {
  const supabase = await createClient();

  const session = await getSession();
  if (!session) throw new Error('You must be logged in');

  const startDate = toISTMidnight(bookingData.startDate);
  const endDate = toISTMidnight(bookingData.endDate);

  const startDateStr = startDate.toISOString().split('Z')[0];
  const endDateStr = endDate.toISOString().split('Z')[0];

  const filter = `and(startDate.lte.${startDateStr},endDate.gte.${endDateStr}),and(startDate.gte.${startDateStr},startDate.lte.${endDateStr}),and(startDate.lte.${startDateStr},endDate.gte.${startDateStr}),endDate.eq.${startDateStr},startDate.eq.${endDateStr}`;

  const { data: conflict, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('cabinId', bookingData.cabinId)
    .or(filter);

  if (error) {
    return { error: 'Failed to check booking conflicts' };
  }
  if (conflict.length !== 0) {
    return { error: 'Booking for these dates not available' };
  } else {
    const newBooking = {
      startDate: startDate,
      endDate: endDate,
      numNights: bookingData.numNights,
      numGuests: Number(bookingData.numGuests),
      cabinId: bookingData.cabinId,
      cabinPrice: bookingData.cabinPrice,
      extrasPrice: 0,
      totalPrice: bookingData.cabinPrice,
      isPaid: false,
      hasBreakfast: false,
      status: 'unconfirmed',
      observations: bookingData.observations.slice(0, 1000),
      guestId: session.user.id,
      guestName: session.user.user_metadata.full_name,
      guestEmail: session.user.email,
      nationalId: session.user.user_metadata?.data?.nationalID || '',
      nationality: session.user.user_metadata?.data?.nationality || '',
    };

    const { error: insertError } = await supabase
      .from('bookings')
      .insert([newBooking]);

    if (insertError) return { error: 'Failed to create booking' };

    revalidatePath(`/cabin/${bookingData.cabinId}`);

    return { success: true };
  }
}

// const { data: conflict, error } = await supabase
//   .from('bookings')
//   .select('*')
//   .eq('cabinId', bookingData.cabinId)
//   .lte('startDate', startDateStr)
//   .gte('endDate', endDateStr);

// const { data: conflict1, error1 } = await supabase
//   .from('bookings')
//   .select('*')
//   .eq('cabinId', bookingData.cabinId)
//   .or(`endDate.eq.${startDateStr}, startDate.eq.${endDateStr}`);

// const { data: conflict2, error2 } = await supabase
//   .from('bookings')
//   .select('*')
//   .eq('cabinId', bookingData.cabinId)
//   .gte('startDate', startDateStr)
//   .lte('startDate', endDateStr);

// const { data: conflict3, error3 } = await supabase
//   .from('bookings')
//   .select('*')
//   .eq('cabinId', bookingData.cabinId)
//   .lte('startDate', startDateStr)
//   .gte('endDate', startDateStr);
