import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
    const cookies = request.cookies.getAll();

    // Filter out cookies that start with "AMP_"
    const filteredCookies = cookies
        .filter((cookie) => !cookie.name.startsWith("AMP_"))
        .map((cookie) => `${cookie.name}=${cookie.value}`)
        .join("; ");

    const modifiedHeaders = new Headers(request.headers);
    if (filteredCookies) {
        modifiedHeaders.set("cookie", filteredCookies); // Set the new cookies header
    }

    const modifiedRequest = new NextRequest(request.url, {
        method: request.method,
        headers: modifiedHeaders,
        body: request.body,
    });

    return NextResponse.next({
        request: {
            headers: modifiedRequest.headers,
        },
    });
}

export const config = {
    matcher: "/api/:path*",
};
