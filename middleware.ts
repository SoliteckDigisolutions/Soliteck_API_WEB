import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const serviceRoutes: Record<string, number | string> = {
  "/docs/api-reference/payoutapi": 47,
  "/docs/api-reference/mobileapi": 43,
  "/docs/api-reference/dthRecharge": 45,
  "/docs/api-reference/bbpsapi": 63,
  "/docs/api-reference/bbpsapionline": 44,
  "/docs/api-reference/ccbpapi": 59,
  "/docs/api-reference/pgapi": 54,
  "/docs/api-reference/aepsapi": "AEPS",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionValue = request.cookies.get("AUTH_SESSION")?.value;

  // 1. Check for protected routes
  const isDocsRoute = pathname.startsWith("/docs");
  const isLoginRoute = pathname === "/login";

  // 2. Redirect to login if not authenticated
  if (!sessionValue && isDocsRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 3. Handle authenticated users
  if (sessionValue) {
    // Prevent access to login page if already logged in
    if (isLoginRoute) {
      return NextResponse.redirect(new URL("/docs/getting-started/introduction", request.url));
    }

    // Check for service-based access on specific routes
    if (isDocsRoute) {
      try {
        let userData = JSON.parse(sessionValue);
        if (typeof userData === "string") {
          userData = JSON.parse(userData);
        }
        const services = userData?.[0]?.Services || [];

        // Find the specific route requirement (Exact match or base path match)
        const matchedRoute = Object.keys(serviceRoutes).find((route) =>
          pathname === route || pathname.startsWith(route + "/")
        );

        if (matchedRoute) {
          const requiredServiceId = serviceRoutes[matchedRoute];

          const hasService = services.some(
            (s: any) =>
              s.ServiceAuthId == requiredServiceId && s.IsActive == true
          );

          if (!hasService) {
            // Redirect to introduction if the specific service is not active
            return NextResponse.redirect(
              new URL("/docs/getting-started/introduction", request.url)
            );
          }
        }
      } catch (err) {
        // If session is invalid, redirect to login
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/docs/:path*", "/login"],
};