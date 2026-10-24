"use client"

import Link from "next/link"
import { useState } from "react"

import { NEIGHBORHOODS } from "lib/neighborhoods"

type NavLink = { href: string; label: string }
type NavGroup = { key: string; label: string; links: NavLink[] }

const BOOK_URL = "https://calendly.com/drjanduffy/buyer-consultation-30-min"

const GROUPS: NavGroup[] = [
  {
    key: "search",
    label: "Search",
    links: [
      { href: "/search", label: "Property Search" },
      { href: "/valuation", label: "Home Valuation" },
    ],
  },
  {
    key: "neighborhoods",
    label: "Neighborhoods",
    links: [
      { href: "/neighborhoods", label: "All Neighborhoods" },
      ...NEIGHBORHOODS.map((n) => ({ href: `/neighborhoods/${n.slug}`, label: n.name })),
    ],
  },
  {
    key: "tools",
    label: "Tools",
    links: [
      { href: "/tools/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/tools/roi-calculator", label: "ROI Calculator" },
      { href: "/tools/affordability", label: "Affordability Calculator" },
      { href: "/tools/closing-costs", label: "Closing Costs Calculator" },
      { href: "/tools/refinance", label: "Refinance Calculator" },
      { href: "/tools/rent-vs-buy", label: "Rent vs Buy Calculator" },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    links: [
      { href: "/guides", label: "Buying & Selling Guides" },
      { href: "/guides/first-time-buyer", label: "First-Time Buyer Guide" },
      { href: "/market-insights", label: "Market Insights" },
      { href: "/reports", label: "Market Reports" },
      { href: "/blog", label: "Blog" },
      { href: "/videos", label: "Videos" },
      { href: "/webinars", label: "Webinars" },
    ],
  },
]

const SINGLE_LINKS: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const linkClass =
  "whitespace-nowrap px-2 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy-900 transition-colors hover:text-gold-600 xl:px-3"

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`ml-1 h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (key: string) => setActiveDropdown(activeDropdown === key ? null : key)
  const closeAll = () => {
    setActiveDropdown(null)
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-gold-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Wordmark */}
          <Link href="/" className="flex flex-col leading-none" onClick={closeAll}>
            <span className="whitespace-nowrap font-serif text-xl font-semibold text-navy-900 sm:text-2xl lg:text-xl 2xl:text-2xl">
              Search North Las Vegas Homes
            </span>
            <span className="mt-1.5 whitespace-nowrap text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold-600">
              Dr. Jan Duffy · REALTOR®
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden items-center xl:flex">
            {GROUPS.map((g) => (
              <div key={g.key} className="relative">
                <button
                  onClick={() => toggleDropdown(g.key)}
                  aria-expanded={activeDropdown === g.key}
                  className={`${linkClass} flex items-center`}
                >
                  {g.label}
                  <Chevron open={activeDropdown === g.key} />
                </button>
                {activeDropdown === g.key && (
                  <div className="absolute left-0 z-50 mt-3 w-60 border border-gold-200 bg-white py-2 shadow-xl">
                    {g.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={closeAll}
                        className="block px-5 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gold-50 hover:text-navy-900"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {SINGLE_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass} onClick={closeAll}>
                {l.label}
              </Link>
            ))}
            <a
              href={BOOK_URL}
              className="ml-3 whitespace-nowrap border border-navy-900 bg-navy-900 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-gold-500 hover:bg-gold-500"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="inline-flex items-center justify-center p-2 text-navy-900 focus:ring-2 focus:ring-gold-400 focus:outline-none xl:hidden"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-gold-200 bg-white xl:hidden">
          <div className="space-y-1 px-4 py-4">
            {GROUPS.map((g) => (
              <div key={g.key}>
                <button
                  onClick={() => toggleDropdown(`m-${g.key}`)}
                  aria-expanded={activeDropdown === `m-${g.key}`}
                  className="flex w-full items-center justify-between py-3 text-left text-xs font-semibold uppercase tracking-[0.18em] text-navy-900"
                >
                  {g.label}
                  <Chevron open={activeDropdown === `m-${g.key}`} />
                </button>
                {activeDropdown === `m-${g.key}` && (
                  <div className="mb-2 border-l border-gold-300 pl-4">
                    {g.links.map((l) => (
                      <Link key={l.href} href={l.href} onClick={closeAll} className="block py-2 text-sm text-gray-700">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {SINGLE_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeAll}
                className="block py-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy-900"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={BOOK_URL}
              className="mt-3 block bg-navy-900 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
