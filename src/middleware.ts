import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function getDeviceType(userAgent: string) {
  if (/mobi/i.test(userAgent)) {
    return 'mobile'
  }
  if (/tablet/i.test(userAgent)) {
    return 'tablet'
  }
  return 'desktop'
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Add a custom header to the response
  const userAgent = request.headers.get('user-agent')
  const deviceType = getDeviceType(userAgent)


  return NextResponse.next({
    headers: {
      'x-device-type': deviceType,
    },
  })
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}
