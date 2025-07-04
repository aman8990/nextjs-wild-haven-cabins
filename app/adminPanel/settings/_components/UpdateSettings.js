'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/app/_components/Input';
import Button from '@/app/_components/Button';
import toast from 'react-hot-toast';
import SpinnerMini from '@/app/_components/SpinnerMini';
import dynamic from 'next/dynamic';
import Spinner from '@/app/_components/Spinner';
import { updateSettings } from '@/app/_actions/admin';

function UpdateSettings({ settings }) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      minBookingLength: settings.minBookingLength,
      maxBookingLength: settings.maxBookingLength,
      breakfastPrice: settings.breakfastPrice,
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    const updatedData = {};

    if (data.minBookingLength !== settings.minBookingLength)
      updatedData.minBookingLength = data.minBookingLength;
    if (data.maxBookingLength !== settings.maxBookingLength)
      updatedData.maxBookingLength = data.maxBookingLength;
    if (data.breakfastPrice !== settings.breakfastPrice)
      updatedData.breakfastPrice = data.breakfastPrice;

    if (Object.keys(updatedData).length === 0) {
      toast.dismiss();
      toast.error('No changes detected.');
      setIsLoading(false);
      return;
    }

    const res = await updateSettings(updatedData);

    if (res?.error) {
      toast.dismiss();
      toast.error(res?.error || 'Error in updating settings');
    }
    if (res?.success) {
      toast.dismiss();
      toast.success('Settings updated successfully');
    }

    setIsLoading(false);
  };

  return (
    <>
      <div
        className="mt-10 mb-32 border-2 border-primary-700 max-w-lg
      w-full mx-auto rounded-lg"
      >
        <div className="flex items-center flex-col my-10">
          <h1 className="text-3xl md:text-4xl mb-8">Update Settings</h1>
          <div className="w-full px-6 md:px-16">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label="Minimum Booking Length"
                id="minBookingLength"
                type="number"
                placeholder="3"
                errors={errors}
                register={register}
                disabled={isLoading}
                validationRules={{
                  required: '* This field is required',
                }}
              />

              <Input
                label="Maximum Booking Length"
                id="maxBookingLength"
                type="number"
                placeholder="6"
                errors={errors}
                register={register}
                disabled={isLoading}
                validationRules={{
                  required: '* This field is required',
                }}
              />

              <Input
                label="Breakfast Price"
                id="breakfastPrice"
                type="number"
                placeholder="400"
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
    </>
  );
}

export default dynamic(() => Promise.resolve(UpdateSettings), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center mt-[20rem] h-full">
      <Spinner size={80} />
    </div>
  ),
});
