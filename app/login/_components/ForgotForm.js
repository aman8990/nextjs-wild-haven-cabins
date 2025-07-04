'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../_components/Input';
import Button from '@/app/_components/Button';
import toast from 'react-hot-toast';
import SpinnerMini from '@/app/_components/SpinnerMini';
import { forgotPassword } from '@/app/_actions/forgotPassword';

function ForgotForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const result = await forgotPassword(data);

    if (result?.error) {
      toast.error(`❌ ${result.error}`);
    } else {
      toast.dismiss();
      toast.success('📧 Confirmation email sent. Please check your inbox.');
      reset();
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Email address"
        id="email"
        type="email"
        errors={errors}
        register={register}
        disabled={isSubmitting}
        validationRules={{
          required: '* This field is required',
        }}
      />

      <div>
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? <SpinnerMini /> : 'Submit'}
        </Button>
      </div>
    </form>
  );
}

export default ForgotForm;
