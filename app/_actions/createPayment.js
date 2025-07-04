'use server';

import { supabase } from '../_libs/_supabase/adminClient';

export async function createPayment(payment) {
  const { data, error } = await supabase
    .from('payments')
    .insert([payment])
    .select();

  if (error) throw new Error('Error in creating payment');

  return data[0];
}
