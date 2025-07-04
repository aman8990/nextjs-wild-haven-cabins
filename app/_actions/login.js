'use server';

import { createClient } from '@/app/_libs/_supabase/server';
import axios from 'axios';

export async function login(data) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error: 'Error in logging in' };
  }

  return { success: true };
}

export async function signup(data) {
  const supabase = await createClient();

  const { email, password, name } = data;

  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SERVICE_ROLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE;

  const { data: userData } = await axios.post(
    `${SUPABASE_URL}/rest/v1/rpc/get_user_by_email`,
    { exact_email: email },
    {
      headers: {
        apikey: SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (userData?.length > 0) {
    return { error: 'User already exists' };
  }

  const { data: data1, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: 'http://localhost:3000/auth/callback',
      data: {
        name,
      },
    },
  });

  if (error) {
    return { error: 'Error in signup' };
  }

  return { success: true };
}

export async function logout() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    return { error: 'Error in logging out' };
  }

  if (!user) {
    return { error: 'No user found' };
  }

  await supabase.auth.signOut();

  return { success: true };
}
