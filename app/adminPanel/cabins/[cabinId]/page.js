import { getCabin } from '@/app/_actions/cabin';
import UpdateCabin from './_components/UpdateCabin';
import Error from '@/app/error';

async function Page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  if (cabin === undefined)
    return <Error error={{ message: 'No such cabin found' }} />;

  return (
    <div>
      <UpdateCabin cabin={cabin} />
    </div>
  );
}

export default Page;
