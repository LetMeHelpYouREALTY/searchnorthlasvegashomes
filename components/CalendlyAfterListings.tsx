"use client"

import { usePathname } from "next/navigation"
import { calendlyEventForPath, calendlyUrl } from "../lib/calendly"

// Booking strip placed directly after the sitewide RealScout office listings.
export function CalendlyAfterListings() {
  const pathname = usePathname() || "/"
  if (pathname.startsWith("/contact")) return null
  const href = calendlyUrl(calendlyEventForPath(pathname), "after-listings", pathname)

  return (
    <div className="container mx-auto px-4 pb-8 max-w-7xl">
      <div className="flex flex-col items-center justify-between gap-4 rounded-lg border border-gray-200 bg-gray-50 p-6 text-center md:flex-row md:text-left">
        <p className="text-lg font-semibold text-gray-900">See a home you like? Pick a time with Dr. Jan Duffy.</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Schedule time with me
        </a>
      </div>
    </div>
  )
}
