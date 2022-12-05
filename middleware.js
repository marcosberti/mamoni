import { NextResponse } from 'next/server'
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'

const protectedPages = [{ exact: true, path: '/' },
  {exact: false, path: '/accounts'},
  {exact: false, path: '/settings'}
];

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient ({ req, res })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (protectedPages.find(p => p.exact ? p.path === req.nextUrl.pathname : req.nextUrl.pathname.startsWith(p.path)) && !session) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/signin'
    redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }
  
  if (req.nextUrl.pathname === '/signin' && session) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/'
    return NextResponse.redirect(redirectUrl)
  }
}