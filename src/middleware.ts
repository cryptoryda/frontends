import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/" && process.env.NEXT_PUBLIC_SCROLL_ENVIRONMENT === "Sepolia") {
    const response = NextResponse.rewrite(new URL("/portal", request.url))
    return response
  }

  // if (request.nextUrl.pathname === "/archive/20230308/terms-and-conditions") {
  //   const response = NextResponse.rewrite(new URL("/terms-and-conditions", request.url))
  //   return response
  // }

  const response = NextResponse.next()
  return response
}
