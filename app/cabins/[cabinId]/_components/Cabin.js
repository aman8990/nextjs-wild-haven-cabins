import Image from 'next/image';
import { HiUsers } from 'react-icons/hi2';
import { IoLocation } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';

function Cabin({ cabin }) {
  const {
    id,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
    location,
  } = cabin;

  return (
    <div className="flex flex-col md:flex-row gap-5 border-2 border-primary-800 rounded-md">
      <div className="w-full md:w-[40%]">
        <Image
          src={image}
          height={400}
          width={400}
          alt="cabin"
          className="h-full w-full rounded-l-md"
        />
      </div>

      <div className="w-full md:w-[60%] space-y-5 p-2 md:p-5">
        <h1 className="text-4xl font-bold">Cabin {name}</h1>
        <p className="text-lg">{description}</p>

        <div className="flex gap-3 items-center text-lg font-semibold text-primary-200">
          <HiUsers />
          <p>For up to {maxCapacity} guests</p>
        </div>

        <div className="flex gap-3 items-center text-lg font-semibold text-primary-200">
          <IoLocation />
          <p>Located in the hearts of the {location}</p>
        </div>

        <div className="flex gap-3 items-center text-lg font-semibold text-primary-200">
          <FaEyeSlash />
          <p>Privacy 100% guranteed</p>
        </div>
      </div>
    </div>
  );
}

export default Cabin;
