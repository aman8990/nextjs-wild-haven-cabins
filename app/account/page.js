import UserSettings from './_components/UserSettings';

export const metadata = {
  title: 'Account',
};

async function page() {
  return (
    <div>
      <UserSettings />
    </div>
  );
}

export default page;
