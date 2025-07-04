'use server';

import { supabase } from '../_libs/_supabase/adminClient';

export async function updateUserBooking(bookingId, updateData, userEmail) {
  const { error } = await supabase
    .from('bookings')
    .update(updateData)
    .eq('id', bookingId)
    .eq('guestEmail', userEmail);

  if (error) return { error: 'Error in updating booking' };

  return { success: true };
}

export const getUserBooking = async (id, emailId) => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('id', id)
    .eq('guestEmail', emailId);

  if (error) return { error: 'Error in fetching user booking' };

  return data[0];
};
