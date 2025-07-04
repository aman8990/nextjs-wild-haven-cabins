import { updateSession } from '@/app/_libs/_supabase/middleware';

export async function middleware(request) {
  return await updateSession(request);
}

export const config = {
  matcher: ['/account/:path*'],
};
