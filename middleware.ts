import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {   
  const url = request.nextUrl.clone()   
  if (url.pathname === '/auth') {
    url.pathname = '/auth/login'
    return NextResponse.redirect(url)   
  } 
}