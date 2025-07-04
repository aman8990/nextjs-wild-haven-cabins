import { getCabins } from '@/app/_actions/cabin';
import CabinCard from './CabinCard';

async function CabinList() {
  const cabins = await getCabins();

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
