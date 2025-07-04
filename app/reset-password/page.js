'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/app/_libs/_supabase/client';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import Spinner from '../_components/Spinner';

function ResetPasswordPage() {
  const [token, setToken] = useState(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');
    const type = params.get('type');

    if (accessToken && type === 'recovery') {
      setToken(accessToken);

      supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: params.get('refresh_token'),
      });
    } else {
      router.push('/');
    }
  }, [supabase.auth, router]);

  const onSubmit = async (data) => {
    const newPassword = data.password;

    const { data: userData, error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      toast.dismiss();
      console.log(error);
      toast.error('Failed to update password');
    } else {
      toast.dismiss();
      toast.success('Password updated successfully!');
      router.push('/');
      router.refresh();
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password');

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-3xl text-center font-semibold mb-10 mt-10">
        Set New Password
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="password"
          placeholder="Enter new password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
          className="border p-2"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <input
          type="password"
          placeholder="Confirm password"
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: (value) => value === password || 'Passwords do not match',
          })}
          className="border p-2"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ResetPasswordPage), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <Spinner size={80} />
    </div>
  ),
});
