import { redirect } from 'next/navigation';
import { getAdmin } from '../_actions/admin';
import AdminSidebar from '../_components/AdminSidebar';
import { getSession } from '../_hooks/useSession';

export const metadata = {
  title: 'Admin Panel',
};

async function AdminLayout({ children }) {
  const { user } = await getSession();
  const emailId = user?.email;
  const isAdmin = await getAdmin(emailId);

  if (!isAdmin) redirect('/');

  return (
    <div className="flex overflow-hidden max-h-[86vh]">
      <div className="md:max-w-[16rem] hidden md:flex flex-1 overflow-y-auto scrollbar-thin">
        <AdminSidebar />
      </div>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}

export default AdminLayout;
