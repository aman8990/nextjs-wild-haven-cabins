'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/app/_components/Input';
import Button from '@/app/_components/Button';
import SpinnerMini from '@/app/_components/SpinnerMini';
import dynamic from 'next/dynamic';
import Spinner from '@/app/_components/Spinner';
import { useRouter } from 'next/navigation';
import PaymentDetails from './PaymentDetails';
import { getPayment } from '@/app/_actions/admin';
import toast from 'react-hot-toast';

function SearchPayment() {
  const [isLoading, setIsLoading] = useState(false);
  const [payment, setPayment] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: '',
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    const res = await getPayment(data.id);

    if (res?.error) {
      toast.dismiss();
      toast.error(res?.error || 'Error in database');
      setPayment(null);
    }
    if (res?.success) {
      toast.dismiss();
      toast.success('Payment fetched');
      setPayment(res.payment);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div
        className="mt-10 mb-10 border-2 border-primary-700 max-w-lg
      w-full mx-auto rounded-lg"
      >
        <div className="flex items-center flex-col my-10">
          <h1 className="text-3xl md:text-4xl mb-8">Payment Details</h1>
          <div className="w-full px-6 md:px-16">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label="Payment ID"
                id="id"
                type="text"
                errors={errors}
                register={register}
                disabled={isLoading}
                validationRules={{
                  required: '* This field is required',
                }}
              />

              <div className="flex justify-center">
                <Button type="submit">
                  {isLoading ? <SpinnerMini /> : 'Submit'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {payment && <PaymentDetails payment={payment} />}
    </>
  );
}

// export default SearchPayment;

export default dynamic(() => Promise.resolve(SearchPayment), {
  ssr: false,
  loading: () => (
    <div>
      <Spinner size={60} />
    </div>
  ),
});
