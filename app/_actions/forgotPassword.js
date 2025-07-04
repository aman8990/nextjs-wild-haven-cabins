import axios from 'axios';

export async function forgotPassword(data) {
  const { email } = data;

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
    await axios.post(
      `${SUPABASE_URL}/auth/v1/recover`,
      { email },
      {
        headers: {
          apikey: SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    //   redirectTo: 'http://localhost:3000/reset-password',
    // });

    // if (error) return { error: 'Error in sending email' };

    return { success: 'Email sent successfully' };
  } else {
    return { error: 'No user exists with this email' };
  }
}
