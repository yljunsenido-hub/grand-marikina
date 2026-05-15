import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// 1. Tell the bouncer which rooms are off-limits
const isProtectedRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
  // 2. If someone tries to enter a protected room, force them to show ID (log in)
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

// 3. This tells Next.js to run the bouncer on every route EXCEPT static files
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}