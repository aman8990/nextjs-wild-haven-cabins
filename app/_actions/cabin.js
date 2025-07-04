import { createClient } from '@/app/_libs/_supabase/client';

export const getCabins = async () => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('cabins')
    .select('*')
    .order('name');

  // await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    throw new Error('Cabins could not be loaded');
  }

  return data;
};

export const getCabin = async (id) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('cabins')
    .select('*')
    .eq('id', id);

  if (error) {
    throw new Error('Cabin could not be loaded');
  }

  return data[0];
};

export const getCabinImage = async (id) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('cabins')
    .select('image')
    .eq('id', id);

  if (error) {
    throw new Error('Cabins image could not be loaded');
  }

  return data[0].image;
};
