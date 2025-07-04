import { getCabins } from '@/app/_actions/cabin';
import Cabins from './_components/Cabins';

async function Page() {
  const cabins = await getCabins();

  if (cabins.length === 0)
    return (
      <h1 className="text-3xl text-center font-semibold mt-40">No Cabins</h1>
    );

  return (
    <div className="flex justify-center mt-10 mx-2">
      <Cabins cabins={cabins} />
    </div>
  );
}

export default Page;
