import { getSettings } from '@/app/_actions/settings';
import UpdateSettings from './_components/UpdateSettings';

async function Page() {
  const settings = await getSettings();

  return (
    <div>
      <UpdateSettings settings={settings} />
    </div>
  );
}

export default Page;
