'use client';

import { deleteQuery } from '@/app/_actions/admin';
import SpinnerMini from '@/app/_components/SpinnerMini';
import { useState } from 'react';
import toast from 'react-hot-toast';

function UserQuery({ query }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);

    const id = query?.id;
    const res = await deleteQuery(id);

    if (res?.error) {
      toast.dismiss();
      toast.error('Error in deleting query');
    }
    if (res?.success) {
      toast.dismiss();
      toast.success('Query deleted successfully');
    }
  };

  return (
    <div className="space-y-3 border-2 border-primary-900 max-w-[70rem] mx-auto w-full p-4">
      <div className="space-x-2">
        <span className="text-white text-xl font-semibold">ID :</span>
        <span>{query?.id}</span>
      </div>
      <div className="space-x-2">
        <span className="text-white text-xl font-semibold">Name :</span>
        <span>{query?.name}</span>
      </div>
      <div className="space-x-2">
        <span className="text-white text-xl font-semibold">Email :</span>
        <span>{query?.email}</span>
      </div>
      <div className="space-x-2">
        <span className="text-white text-xl font-semibold">Subject :</span>
        <span>{query?.subject}</span>
      </div>
      <div className="space-x-2">
        <span className="text-white text-xl font-semibold">Description :</span>
        <span>{query?.description}</span>
      </div>
      <button
        onClick={() => handleDelete()}
        className="flex justify-center mt-3 bg-red-700 text-white w-[5rem] py-1 rounded-md"
      >
        {isLoading ? <SpinnerMini size={28} /> : 'Delete'}
      </button>
    </div>
  );
}

export default UserQuery;
