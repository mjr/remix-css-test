import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

export default function Root() {
  return (
    <html>
      <head>
        <Links />
        <Meta />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
