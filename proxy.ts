import { NextResponse, type NextRequest } from "next/server";

// Turkish is served at "/" (internally /tr), English at "/en", Arabic at "/ar".
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (/^\/(en|ar)(\/|$)/.test(pathname)) return;

  const url = request.nextUrl.clone();
  if (pathname === "/tr" || pathname.startsWith("/tr/")) {
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }
  url.pathname = `/tr${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
