'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

function UserInfo({ user, isAdmin }) {
  const router = useRouter();
  const { avatar_url, name, email, data } = user || {};

  const nationality = data?.nationality || '';
  const nationalID = data?.nationalID || '';

  return (
    <div className="flex flex-col items-center">
      <div>
        <Image
          src={avatar_url || '/default.jpg'}
          alt="user-photo"
          width={100}
          height={100}
          className="rounded-full h-24 w-24"
        />
      </div>
      <div className="text-center mt-3 text-md md:text-lg">
        <div className="uppercase">{name}</div>
        <div>Email : {email}</div>
        {nationality && <div>Nationality : {nationality}</div>}
        {nationalID && <div>National ID : {nationalID}</div>}
        {isAdmin && (
          <button
            onClick={() => router.push('/adminPanel/dashboard')}
            className="bg-accent-500 text-primary-950 rounded-md py-1 px-2 font-semibold mt-2"
          >
            Admin Panel
          </button>
        )}
      </div>
    </div>
  );
}

export default UserInfo;
