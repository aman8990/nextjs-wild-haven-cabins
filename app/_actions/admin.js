'use server';

import { revalidatePath } from 'next/cache';
import { getSession } from '../_hooks/useSession';
import { supabase } from '../_libs/_supabase/adminClient';

export async function getAdmin(emailId) {
  if (emailId === undefined) return false;

  const { data, error } = await supabase
    .from('admins')
    .select('*')
    .eq('email', emailId);

  if (error) return false;
  if (data.length === 0) return false;

  return true;
}

export const createCabin = async (cabinData) => {
  const { user } = await getSession();
  const emailId = user?.email;
  const isAdmin = await getAdmin(emailId);

  if (!isAdmin) return { error: 'You are not a admin' };

  const { data, error } = await supabase
    .from('cabins')
    .insert([cabinData])
    .select();

  if (error) return { error: 'Error in creating cabin' };

  return { success: true, cabin: data[0] };
};

export async function updateCabin(id, updatedData) {
  const { user } = await getSession();
  const emailId = user?.email;
  const isAdmin = await getAdmin(emailId);

  if (!isAdmin) return { error: 'You are not a admin' };

  const { error } = await supabase
    .from('cabins')
    .update(updatedData)
    .eq('id', id);

  if (error) return { error: 'Error in database' };

  revalidatePath(`/adminPanel/cabins/${id}`);
  revalidatePath(`/cabins`);

  return { success: true };
}

export const deleteCabin = async (id) => {
  const { user } = await getSession();
  const emailId = user?.email;
  const isAdmin = await getAdmin(emailId);

  if (!isAdmin) return { error: 'You are not a admin' };

  const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)
    .select();

  if (error) return { error: 'Error in creating cabin' };

  revalidatePath('/adminPanel/cabins');

  return { success: true };
};

export async function updateSettings(updatedData) {
  const { user } = await getSession();
  const emailId = user?.email;
  const isAdmin = await getAdmin(emailId);

  if (!isAdmin) return { error: 'You are not a admin' };

  const { error } = await supabase
    .from('settings')
    .update(updatedData)
    .eq('id', 1);

  if (error) return { error: 'Error in updating settings' };

  revalidatePath(`/adminPanel/settings`);

  return { success: true };
}

export async function getPayment(id) {
  const { user } = await getSession();
  const emailId = user?.email;
  const isAdmin = await getAdmin(emailId);

  if (!isAdmin) return { error: 'You are not a admin' };

  const { data, error } = await supabase
    .from('payments')
    .select('*')
    .eq('id', id);

  if (error) return { error: 'Error in fetching payment info' };

  if (data[0] === undefined && error === null)
    return { error: 'No such payment found' };

  return { success: true, payment: data[0] };
}

export async function getQueries() {
  const { user } = await getSession();
  const emailId = user?.email;
  const isAdmin = await getAdmin(emailId);

  if (!isAdmin) throw new Error('You are not a admin');

  const { data, error } = await supabase.from('queries').select('*');

  if (error) throw new Error('Error in fetching queries');

  return data;
}

export async function deleteQuery(id) {
  const { user } = await getSession();
  const emailId = user?.email;
  const isAdmin = await getAdmin(emailId);

  if (!isAdmin) return { error: 'You are not a admin' };

  const { error } = await supabase.from('queries').delete().eq('id', id);

  if (error) return { error: 'Error in deleting query' };

  revalidatePath('/adminPanel/userQueries');

  return { success: true };
}

export const getLastThirtyDaysBookings = async () => {
  const { user } = await getSession();
  const emailId = user?.email;
  const isAdmin = await getAdmin(emailId);

  if (!isAdmin) throw new Error('You are not a admin');

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .gte(
      'created_at',
      new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
    )
    .order('created_at', { ascending: false });

  if (error) throw new Error('Error in fetching bookings');

  return data;
};

export const getLastSixtyDaysBookings = async () => {
  const { user } = await getSession();
  const emailId = user?.email;
  const isAdmin = await getAdmin(emailId);

  if (!isAdmin) throw new Error('You are not a admin');

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .gte(
      'created_at',
      new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString()
    )
    .order('created_at', { ascending: false });

  if (error) throw new Error('Error in fetching bookings');

  return data;
};

export const getLastSevenDaysBookings = async () => {
  const { user } = await getSession();
  const emailId = user?.email;
  const isAdmin = await getAdmin(emailId);

  if (!isAdmin) throw new Error('You are not a admin');

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .gte(
      'created_at',
      new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    )
    .order('created_at', { ascending: false });

  if (error) throw new Error('Error in fetching bookings');

  return data;
};

export async function getConfirmedBookings() {
  const { user } = await getSession();
  const emailId = user?.email;
  const isAdmin = await getAdmin(emailId);

  if (!isAdmin) throw new Error('You are not a admin');

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('isPaid', true)
    .eq('status', 'confirmed');

  if (error) throw new Error('Error in fetching bookings');

  return data;
}

export async function getCheckedInBookings() {
  const { user } = await getSession();
  const emailId = user?.email;
  const isAdmin = await getAdmin(emailId);

  if (!isAdmin) throw new Error('You are not a admin');

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('isPaid', true)
    .eq('status', 'checked-in');

  if (error) throw new Error('Error in fetching bookings');

  return data;
}

export async function getBooking(id) {
  const { user } = await getSession();
  const emailId = user?.email;
  const isAdmin = await getAdmin(emailId);

  if (!isAdmin) return { error: 'You are not a admin' };

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('id', id);

  if (error) return { error: 'Error in fetching booking' };

  return { success: true, booking: data[0] };
}

export async function updateBooking(id, updatedData) {
  console.log(updatedData);
  const { user } = await getSession();
  const emailId = user?.email;
  const isAdmin = await getAdmin(emailId);

  if (!isAdmin) return { error: 'You are not a admin' };

  const { error } = await supabase
    .from('bookings')
    .update(updatedData)
    .eq('id', id);

  if (error) return { error: 'Error in updating booking' };

  revalidatePath(`/adminPanel/bookings/${id}`);

  return { success: true };
}
