'use client';

import { useRouter } from 'next/navigation';

function Cabins({ cabins }) {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/adminPanel/cabins/${id}`);
  };

  return (
    <div className="overflow-x-auto w-full">
      <h1 className="mb-10 text-3xl font-bold text-center">Cabins</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-white text-center text-black">
            <th className="px-4 py-3 border">Cabin ID</th>
            <th className="px-4 py-3 border">Regular Price</th>
            <th className="px-4 py-3 border">Max Capacity</th>
            <th className="px-4 py-3 border">Location</th>
          </tr>
        </thead>
        <tbody>
          {cabins.map((cabin) => (
            <tr
              className="text-center hover:bg-white hover:text-black cursor-pointer"
              key={cabin?.id}
              onClick={() => handleClick(cabin?.id)}
            >
              <td className="px-4 py-2 border">{cabin?.id}</td>
              <td className="px-4 py-2 border">$ {cabin?.regularPrice}</td>
              <td className="px-4 py-2 border">{cabin?.maxCapacity}</td>
              <td className="px-4 py-2 border">{cabin?.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cabins;
