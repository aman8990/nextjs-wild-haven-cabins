'use server';

import { createClient } from '../_libs/_supabase/server';

export async function updateGuest(data) {
  const supabase = await createClient();

  const { data: result, error } = await supabase.auth.updateUser({
    data: {
      data,
    },
  });

  if (error) {
    return { error: 'Error in updating user' };
  }

  return result;
}
