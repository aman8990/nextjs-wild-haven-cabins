import Cabin from './_components/Cabin';
import Reservation from './_components/Reservation';
import { getCabin, getCabins } from '@/app/_actions/cabin';
import { Suspense } from 'react';
import Spinner from '@/app/_components/Spinner';
import { getSettings } from '@/app/_actions/settings';
import { getBookedDatesByCabinId } from '@/app/_actions/getBookingDatesByCabinId';

export const metadata = {
  title: 'Cabin',
};

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  return ids;
}

async function Page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);
  const settings = await getSettings();
  const bookedDates = await getBookedDatesByCabinId(cabinId);

  return (
    <div>
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-3xl sm:text-5xl font-semibold text-center mt-10 mb-10 text-accent-400">
          Reserve {cabin.name} today.
        </h2>
      </div>

      <Suspense fallback={<Spinner />}>
        <Reservation
          cabin={cabin}
          settings={settings}
          bookedDates={bookedDates}
        />
      </Suspense>
    </div>
  );
}

export default Page;
