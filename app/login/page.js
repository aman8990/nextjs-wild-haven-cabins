import { redirect } from 'next/navigation';
import { getSession } from '../_hooks/useSession';
import AuthForm from './_components/AuthForm';

export const metadata = {
  title: 'Login',
};

async function Page() {
  const { user } = await getSession();

  if (user !== null) return redirect('/account');

  return (
    <div>
      <AuthForm />
    </div>
  );
}

export default Page;
