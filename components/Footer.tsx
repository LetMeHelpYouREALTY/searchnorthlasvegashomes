import Link from "next/link"

import { NEIGHBORHOODS } from "lib/neighborhoods"

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { href: "/search", label: "Property Search" },
      { href: "/valuation", label: "Home Valuation" },
      { href: "/market-insights", label: "Market Insights" },
      { href: "/about", label: "About Dr. Jan Duffy" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Neighborhoods",
    links: [
      { href: "/neighborhoods", label: "All Neighborhoods" },
      ...NEIGHBORHOODS.map((n) => ({ href: `/neighborhoods/${n.slug}`, label: n.name })),
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/guides", label: "Buying & Selling Guides" },
      { href: "/tools/mortgage-calculator", label: "Mortgage Calculator" },
      { href: "/tools/affordability", label: "Affordability Calculator" },
      { href: "/reports", label: "Market Reports" },
      { href: "/blog", label: "Blog" },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-serif text-3xl font-semibold text-white">Search North Las Vegas Homes</p>
            <span className="gold-rule mt-5" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              Dr. Jan Duffy, REALTOR®, guides North Las Vegas buyers and sellers with subdivision-level sales data and
              one point of contact from first call to closing.
            </p>
            <a
              href="https://calendly.com/drjanduffy/buyer-consultation-30-min"
              className="mt-8 inline-block border border-gold-400 px-6 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold-300 transition-colors hover:bg-gold-400 hover:text-navy-950"
            >
              Book a Consultation
            </a>
          </div>

          {COLUMNS.map((c) => (
            <div key={c.title}>
              <h3 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold-300">
                {c.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-xs md:flex-row md:items-center md:justify-between">
          <div className="space-y-1.5">
            <p>
              Dr. Jan Duffy, REALTOR® · Berkshire Hathaway HomeServices Nevada Properties · Nevada License
              S.0197614.LLC
            </p>
            <p>8850 W. Sunset Rd, Suite 200, Las Vegas, NV 89148</p>
            <p>&copy; {year} Search North Las Vegas Homes. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2" title="Equal Housing Opportunity">
              <svg className="h-5 w-5 text-white/60" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2 1 9.5V11h2v10h18V11h2V9.5L12 2Zm6 17H6v-8.4L12 6.4l6 4.2V19ZM8 12h8v1.6H8V12Zm0 3h8v1.6H8V15Z" />
              </svg>
              Equal Housing Opportunity
            </span>
            <Link href="/sitemap" className="transition-colors hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
