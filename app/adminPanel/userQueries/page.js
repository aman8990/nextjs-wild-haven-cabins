import { getQueries } from '@/app/_actions/admin';
import UserQueries from './_components/UserQueries';

async function Page() {
  const queries = await getQueries();

  if (queries.length === 0)
    return (
      <h1 className="text-3xl text-center font-semibold mt-40">No Queries</h1>
    );

  return (
    <div>
      <UserQueries queries={queries} />
    </div>
  );
}

export default Page;
