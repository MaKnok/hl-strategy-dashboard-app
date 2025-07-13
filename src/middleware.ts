// middleware.ts or src/middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Example: Log all middleware hits
  console.log("Middleware ran for:", request.nextUrl.pathname);
  return NextResponse.next();
}

// 👇 This defines where the middleware will apply
export const config = {
  matcher: [
    "/admin/:path*", // Runs for /admin, /admin/settings, etc.
    "/dashboard/:path*", // Runs for /dashboard or any subpage
  ],
};
