import UpdateProfileForm from '../_components/UpdateProfileForm';
import { getSession } from '@/app/_hooks/useSession';

async function Page() {
  const { user, error } = await getSession();
  const userData = user.user_metadata;

  return (
    <div className="mt-10 flex flex-col items-center">
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm user={userData} />
    </div>
  );
}

export default Page;
