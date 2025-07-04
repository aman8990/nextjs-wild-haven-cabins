import { createClient } from '@/app/_libs/_supabase/client';

export const getSettings = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.from('settings').select('*');

  if (error) {
    throw new Error('Settings could not be loaded');
  }

  return data[0];
};
