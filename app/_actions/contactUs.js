'use server';

import { createClient } from '../_libs/_supabase/server';

export default async function createQuery(queryData) {
  const supabase = await createClient();

  const { error } = await supabase.from('queries').insert([queryData]);

  if (error) return { error: 'Error in creating query in database' };

  return { success: true };
}
