import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

// Dynamic service mapping based on sidebarMenu
const serviceRoutes: Record<string, string> = {
  '/docs/api-reference/payoutapi': 'API User Payout',
  '/docs/api-reference/mobileapi': 'Mobile Recharge',
  '/docs/api-reference/dthRecharge': 'DTH Recharge',
  '/docs/api-reference/bbpsapi': 'API User Bill Payments',
  '/docs/api-reference/bbpsapionline': 'BBPS Online',
  '/docs/api-reference/ccbpapi': 'Credit Card Bill Payment',
  '/docs/api-reference/pgapi': 'Payment Gateway',
  '/docs/api-reference/aepsapi': 'AEPS',
};

export async function middleware(request: NextRequest) {
  const session = request.cookies.get('AUTH_SESSION');
  const { pathname } = request.nextUrl;

  // 1. Redirect to login if not authenticated and trying to access protected docs
  if (!session && pathname.startsWith('/docs')) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // 2. Service-based access control
  if (session && pathname.startsWith('/docs')) {
    try {
      const userData = JSON.parse(session.value);
      const services = userData?.[0]?.Services || [];

      // Check if the current route has a service requirement
      const requiredService = serviceRoutes[pathname];

      if (requiredService) {
        const hasActiveService = services.some(
          (s: any) => s.ServiceName === requiredService && s.IsActive === true
        );

        if (!hasActiveService) {
          // Redirect to a default doc page or specific "unauthorized" page
          // For now, redirecting to the getting started introduction
          const introUrl = new URL('/docs/getting-started/introduction', request.url);
          return NextResponse.redirect(introUrl);
        }
      }
    } catch (error) {
      console.error('Middleware: Error parsing session cookie', error);
      // If session is corrupt, logout might be better, but for now redirect to login
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // 3. Redirect authenticated users away from login page
  if (session && pathname === '/login') {
    return NextResponse.redirect(new URL('/docs/getting-started/introduction', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/login'],
};
