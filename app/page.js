'use client';

import Image from 'next/image';
import bg from '@/public/bg.png';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const type = params.get('type');

    if (type === 'recovery') {
      router.replace(`/reset-password#${hash}`);
    }
  }, [router]);

  return (
    <div className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        alt="Mountains and forests with two cabins"
        className="object-cover object-top"
      />

      <div className="z-10 text-center relative">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-primary-50 mb-10 tracking-tight">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-4 sm:px-8 py-3 sm:py-6 text-primary-800 text-md sm:text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}

export default Page;
