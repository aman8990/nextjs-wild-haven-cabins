'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../_components/Input';
import Button from '@/app/_components/Button';
import toast from 'react-hot-toast';
import SpinnerMini from '@/app/_components/SpinnerMini';
import { signup } from '@/app/_actions/login';

function RegisterForm() {
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    setIsRegistering(true);

    const result = await signup(data);

    if (result?.error) {
      toast.error(`❌ ${result.error}`);
    } else {
      toast.dismiss();
      toast.success('📧 Confirmation email sent. Please check your inbox.');
      reset();
    }

    setIsRegistering(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Name"
        id="name"
        type="text"
        errors={errors}
        register={register}
        disabled={isSendingOtp || isRegistering}
        validationRules={{
          required: '* This field is required',
        }}
      />

      <Input
        label="Email address"
        id="email"
        type="email"
        errors={errors}
        register={register}
        disabled={isRegistering}
        validationRules={{
          required: '* This field is required',
        }}
      />

      <Input
        label="Password"
        id="password"
        type="password"
        errors={errors}
        register={register}
        disabled={isRegistering}
        validationRules={{
          required: '* This field is required',
        }}
      />

      <div>
        <Button disabled={isRegistering} type="submit">
          {isRegistering ? <SpinnerMini /> : 'Register'}
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
