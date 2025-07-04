'use client';

import Input from '@/app/_components/Input';
import Spinner from '@/app/_components/Spinner';
import SpinnerMini from '@/app/_components/SpinnerMini';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import dynamic from 'next/dynamic';
import { updateGuest } from '@/app/_actions/updateGuest';

function UpdateProfileForm({ user }) {
  const { name, email, data } = user || {};
  const nationality = data?.nationality || '';
  const nationalID = data?.nationalID || '';

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nationality: nationality,
      nationalID: nationalID,
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    const result = await updateGuest(data);

    if (result?.error) {
      toast.error(`❌ ${result.error}`);
    } else {
      toast.dismiss();
      toast.success('Updated');
    }

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-[40rem] w-full"
    >
      <Input value={name} id="fullName" label="Full Name" disabled />
      <Input value={email} id="email" label="Email Address" disabled />
      <Input
        label="Nationality"
        id="nationality"
        type="text"
        errors={errors}
        register={register}
        disabled={isLoading}
        validationRules={{
          required: '* This field is required',
        }}
      />
      <Input
        label="National ID"
        id="nationalID"
        type="text"
        errors={errors}
        register={register}
        disabled={isLoading}
        validationRules={{
          required: '* This field is required',
        }}
      />

      <button
        disabled={isLoading}
        type="submit"
        className="bg-accent-500 w-full py-2 text-2xl text-primary-900"
      >
        {isLoading ? <SpinnerMini /> : 'Update Profile'}
      </button>
    </form>
  );
}

export default UpdateProfileForm;

// export default dynamic(() => Promise.resolve(UpdateProfileForm), {
//   ssr: false,
//   loading: () => (
//     <div className="flex items-center justify-center h-full">
//       <Spinner size={80} />
//     </div>
//   ),
// });
