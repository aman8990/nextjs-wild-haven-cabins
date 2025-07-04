import Image from 'next/image';
import Link from 'next/link';
import { HiUsers } from 'react-icons/hi2';

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col sm:flex-row border border-primary-800 rounded-md">
      <div className="flex justify-center">
        <Image
          src={image}
          width={300}
          height={300}
          alt="cabin"
          className="w-full sm:w-48 h-60 sm:h-60 rounded-md"
        />
      </div>

      <div className="flex flex-col justify-around w-full h-full">
        <div className="flex flex-col justify-around h-full px-6 py-4">
          <h1 className="text-accent-500 text-2xl font-semibold">
            Cabin {name}
          </h1>

          <div className="flex gap-3 items-center text-lg font-semibold text-primary-200">
            <HiUsers />
            <p>For up to {maxCapacity} guests</p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-lg sm:text-3xl">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-lg sm:text-3xl">${regularPrice}</span>
            )}
            <span>/ night</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right text-lg sm:text-2xl py-4">
          <Link
            href={`/cabins/${id}`}
            className="px-4 py-5 border-l border-primary-800 hover:bg-accent-600 hover:text-primary-900"
          >
            Details & reservations &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
