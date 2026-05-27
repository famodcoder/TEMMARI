import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ADMIN_PASSWORD = process.env.STUDIO_PASSWORD ?? 'temmari-admin'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/studio')) {
    const basicAuth = request.headers.get('authorization')

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1]
      const [user, password] = atob(authValue).split(':')

      if (user === 'admin' && password === ADMIN_PASSWORD) {
        return NextResponse.next()
      }
    }

    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Temmari Studio"',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/studio/:path*',
}