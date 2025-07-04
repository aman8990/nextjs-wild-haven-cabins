import { createClient } from '../_libs/_supabase/client';

const supabase = createClient();

export default async function oAuth(action, redirectTo) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: action,
    options: {
      redirectTo,
    },
  });

  if (error) {
    throw new Error('Error in google sign-in');
  }

  return { data };
}
