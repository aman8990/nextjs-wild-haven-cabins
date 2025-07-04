'use server';

import { createClient } from '@/app/_libs/_supabase/server';

export async function getUserBookings() {
  const supabase = await createClient();

  const { data: bookings, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error('Error in fetching user bookings');

  return bookings;
}
