import {NextResponse, type NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
    // return NextResponse.redirect(new URL("/", request.url));
    if(request.nextUrl.pathname === "/profile")
        // return NextResponse.redirect(new URL("/hello", request.url));
        return NextResponse.rewrite(new URL("/hello", request.url));
}

// export const config = {
    // matcher: "/profile",
// };