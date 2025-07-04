'use client';

import Button from '@/app/_components/Button';
import Input from '@/app/_components/Input';
import Textarea from '@/app/_components/Textarea';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import Spinner from '@/app/_components/Spinner';
import SpinnerMini from '@/app/_components/SpinnerMini';
import { createCabin } from '@/app/_actions/admin';

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: '',
      name: '',
      maxCapacity: '',
      regularPrice: '',
      discount: '',
      description: '',
      image: '',
      location: '',
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    const res = await createCabin(data);

    if (res?.error) {
      toast.dismiss();
      toast.error(res?.error || 'Error in creating cabin');
    }
    if (res?.success) {
      toast.dismiss();
      toast.success(`Cabin created successfully with ID - ${res?.cabin?.id}`);
    }

    setIsLoading(false);
    reset();
  };

  return (
    <div
      className="mb-10 mt-10 border-2 border-primary-900 max-w-xl
     w-full mx-auto rounded-lg"
    >
      <div className="flex items-center flex-col my-10">
        <h1 className="text-4xl mb-8">Create New Cabin</h1>
        <div className="w-full px-6 md:px-16">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="ID"
              id="id"
              type="number"
              errors={errors}
              register={register}
              disabled={isLoading}
              validationRules={{
                required: '* This field is required',
              }}
            />

            <Input
              label="Name"
              id="name"
              type="number"
              errors={errors}
              register={register}
              disabled={isLoading}
              validationRules={{
                required: '* This field is required',
              }}
            />

            <Input
              label="Maximum Capacity"
              id="maxCapacity"
              type="number"
              errors={errors}
              register={register}
              disabled={isLoading}
              validationRules={{
                required: '* This field is required',
              }}
            />

            <Input
              label="Regular Price"
              id="regularPrice"
              type="number"
              errors={errors}
              register={register}
              disabled={isLoading}
              validationRules={{
                required: '* This field is required',
              }}
            />

            <Input
              label="Discount"
              id="discount"
              type="number"
              errors={errors}
              register={register}
              disabled={isLoading}
              validationRules={{
                required: '* This field is required',
              }}
            />

            <Input
              label="Image"
              id="image"
              type="url"
              errors={errors}
              register={register}
              disabled={isLoading}
              validationRules={{
                required: '* This field is required',
              }}
            />

            <Input
              label="Location"
              id="location"
              type="text"
              errors={errors}
              register={register}
              disabled={isLoading}
              validationRules={{
                required: '* This field is required',
              }}
            />

            <Textarea
              label="Description"
              id="description"
              type="text"
              errors={errors}
              register={register}
              disabled={isLoading}
              validationRules={{
                required: '* This field is required',
              }}
            />

            <div>
              <Button disabled={isLoading} type="submit">
                {isLoading ? <SpinnerMini size={28} /> : 'Submit'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// export default ContactForm;
export default dynamic(() => Promise.resolve(ContactForm), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <Spinner size={80} />
    </div>
  ),
});
