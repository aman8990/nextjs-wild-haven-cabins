import { getAdmin } from '../_actions/admin';
import getUser from '../_actions/login';
import { getSession } from '../_hooks/useSession';
import UserInfo from './_components/UserInfo';

async function UserLayout({ children }) {
  const { user, error } = await getSession();
  const userData = user.user_metadata;
  const email = userData.email;
  const isAdmin = await getAdmin(email);

  return (
    <div className="scrollbar-none">
      <UserInfo user={userData} isAdmin={isAdmin} />
      <div className="scrollbar-none">{children}</div>
    </div>
  );
}

export default UserLayout;
