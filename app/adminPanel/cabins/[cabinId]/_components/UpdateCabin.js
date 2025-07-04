'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/app/_components/Input';
import Button from '@/app/_components/Button';
import toast from 'react-hot-toast';
import axios from 'axios';
import SpinnerMini from '@/app/_components/SpinnerMini';
import dynamic from 'next/dynamic';
import Textarea from '@/app/_components/Textarea';
import Spinner from '@/app/_components/Spinner';
import { IoClose } from 'react-icons/io5';
import { deleteCabin, updateCabin } from '@/app/_actions/admin';
import { useRouter } from 'next/navigation';

function UpdateCabin({ cabin }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: cabin.name,
      maxCapacity: cabin.maxCapacity,
      regularPrice: cabin.regularPrice,
      discount: cabin.discount,
      description: cabin.description,
      image: cabin.image,
      location: cabin.location,
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    const updatedData = {};

    if (data.name !== cabin.name) updatedData.name = data.name;
    if (data.maxCapacity !== cabin.maxCapacity)
      updatedData.maxCapacity = data.maxCapacity;
    if (data.regularPrice !== cabin.regularPrice)
      updatedData.regularPrice = data.regularPrice;
    if (data.discount !== cabin.discount) updatedData.discount = data.discount;
    if (data.description !== cabin.description)
      updatedData.description = data.description;
    if (data.image !== cabin.image) updatedData.image = data.image;
    if (data.location !== cabin.location) updatedData.location = data.location;

    if (Object.keys(updatedData).length === 0) {
      toast.dismiss();
      toast.error('No changes detected.');
      setIsLoading(false);
      return;
    }

    const id = cabin?.id;

    const res = await updateCabin(id, updatedData);

    if (res?.error) {
      toast.dismiss();
      toast.error(res?.error || 'Error in updating cabin');
    }
    if (res?.success) {
      toast.dismiss();
      toast.success('Cabin updated successfully');
    }

    setIsLoading(false);
  };

  const handleDelete = async () => {
    setIsDeleting(true);

    const id = cabin?.id;

    const res = await deleteCabin(id);

    if (res?.error) {
      toast.dismiss();
      toast.error(res?.error || 'Error in deleting cabin');
    }
    if (res?.success) {
      toast.dismiss();
      toast.success('Cabin deleted successfully');
    }

    setIsDeleting(false);
    router.push('/adminPanel/cabins');
  };

  return (
    <>
      <div
        className="mt-10 mb-32 border-2 border-primary-700 max-w-lg
      w-full mx-auto rounded-lg"
      >
        <div className="flex items-center flex-col my-10">
          <h1 className="text-3xl md:text-4xl mb-8">Update Cabin</h1>
          <div className="w-full px-6 md:px-16">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label="Name"
                id="name"
                type="text"
                placeholder="001"
                errors={errors}
                register={register}
                disabled={isLoading}
                validationRules={{
                  required: '* This field is required',
                }}
              />

              <Input
                label="Max Capacity"
                id="maxCapacity"
                type="number"
                placeholder="4"
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
                placeholder="400"
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
                placeholder="50"
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
                placeholder="Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque ..."
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
                placeholder="https://upxphzfnqgsyaxabgluw.supabase.co/storage/v1/object/public/cabins//cabin-001.webp"
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
                placeholder="Dolomites, Italy"
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

              <button
                type="button"
                onClick={handleDelete}
                className="bg-red-700 text-white py-1 w-[7rem] rounded-md flex justify-center"
              >
                {isDeleting ? <SpinnerMini size={24} /> : 'Delete Cabin'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(UpdateCabin), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center mt-[20rem] h-full">
      <Spinner size={80} />
    </div>
  ),
});
