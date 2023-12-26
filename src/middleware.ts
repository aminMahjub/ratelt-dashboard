import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isAuthenticated } from "./constant";

export const config = {
  matcher: ["/dashboard/:path*"],
};

export const middleware = (request: NextRequest) => {
  if (!isAuthenticated) {
    const url = request.nextUrl;
    url.pathname = "/login";
    url.searchParams.set(
      "msg",
      btoa("You must first logged in to visit this page"),
    );

    return NextResponse.redirect(url);
  }
};
