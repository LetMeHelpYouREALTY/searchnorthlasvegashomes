import { Metadata } from "next"
import Link from "next/link"

import { Button } from "components/Button/Button"
import { NEIGHBORHOODS } from "lib/neighborhoods"

const BUYER_CONSULT_URL = "https://calendly.com/drjanduffy/buyer-consultation-30-min"
const LISTING_CONSULT_URL = "https://calendly.com/drjanduffy/listing-consultation"

export const metadata: Metadata = {
  title: "North Las Vegas Homes for Sale | Dr. Jan Duffy, REALTOR®",
  description:
    "Search North Las Vegas homes and compare Aliante, Valley Vista, Villages at Tule Springs and Eldorado with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.",
  twitter: { card: "summary_large_image" },
  openGraph: {
    url: "https://searchnorthlasvegashomes.com/",
    title: "North Las Vegas Homes for Sale | Dr. Jan Duffy, REALTOR®",
    description:
      "Search North Las Vegas homes and compare the city's master-planned communities with real sales data.",
  },
}

const STATS = [
  { value: "35", label: "Years in Las Vegas real estate" },
  { value: "4", label: "Master-planned communities guided" },
  { value: "7", label: "North Las Vegas residential ZIP codes" },
]

const APPROACH = [
  {
    title: "Street-level numbers",
    body: "Recent sales, days on market and list-to-sale ratios for the subdivision you are considering, not citywide averages.",
  },
  {
    title: "One agent, start to finish",
    body: "The person you speak with on the first call is the person who negotiates your offer and walks you to closing.",
  },
  {
    title: "New-construction leverage",
    body: "Builder incentives, lot premiums and upgrade pricing compared side by side before you sign with a sales office.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #c2a46b 0, #c2a46b 1px, transparent 1px, transparent 26px)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-36 lg:px-8">
          <span className="eyebrow !text-gold-300">North Las Vegas Real Estate</span>
          <h1 className="mt-6 max-w-4xl text-5xl leading-[1.05] md:text-7xl lg:text-[5.5rem]">
            The right home in North Las Vegas starts with the right numbers.
          </h1>
          <span className="gold-rule mt-8" />
          <p className="mt-8 max-w-2xl text-lg text-white/75 md:text-xl">
            Search every active listing, then compare Aliante, Valley Vista, Villages at Tule Springs and Eldorado with
            Dr. Jan Duffy, REALTOR®.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button href="/search" intent="gold">
              Search Homes
            </Button>
            <Button href={BUYER_CONSULT_URL} intent="secondary" className="border-white/60 text-white hover:border-gold-500">
              Book a Consultation
            </Button>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <dl className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
            {STATS.map((s) => (
              <div key={s.label} className="py-8 sm:px-8 sm:first:pl-0">
                <dd className="font-serif text-4xl font-semibold text-gold-300">{s.value}</dd>
                <dt className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Communities */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Neighborhood guides</span>
              <h2 className="mt-3 text-4xl text-navy-900 md:text-5xl">North Las Vegas communities</h2>
              <span className="gold-rule mt-5" />
            </div>
            <Link
              href="/neighborhoods"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600 hover:text-navy-900"
            >
              View all guides →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {NEIGHBORHOODS.map((n) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="group flex flex-col border border-gold-200 bg-white p-8 transition-colors hover:border-gold-400"
              >
                <span className="text-[0.65rem] uppercase tracking-[0.18em] text-gray-500">ZIP {n.zips[0]}</span>
                <h3 className="mt-3 text-3xl text-navy-900">{n.name}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">{n.tagline}</p>
                <span className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600 group-hover:text-navy-900">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-gold-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">How Dr. Jan works</span>
            <h2 className="mt-3 text-4xl text-navy-900 md:text-5xl">Advice built on real sales, not estimates</h2>
            <span className="gold-rule mt-5" />
          </div>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {APPROACH.map((a, i) => (
              <div key={a.title}>
                <span className="font-serif text-5xl font-semibold text-gold-400">0{i + 1}</span>
                <h3 className="mt-4 text-2xl text-navy-900">{a.title}</h3>
                <p className="mt-4 leading-relaxed text-gray-600">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyers & sellers */}
      <section className="bg-ivory py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="bg-navy-900 p-10 text-white md:p-14">
            <span className="eyebrow !text-gold-300">Buying</span>
            <h2 className="mt-4 text-4xl">Get ahead of other buyers</h2>
            <p className="mt-6 text-white/75">
              A 30-minute call on what you want, what is selling in your target community this week, and your clear
              next step.
            </p>
            <div className="mt-10">
              <Button href={BUYER_CONSULT_URL} intent="gold">
                Book a Buyer Consultation
              </Button>
            </div>
          </div>
          <div className="border border-gold-200 bg-white p-10 md:p-14">
            <span className="eyebrow">Selling</span>
            <h2 className="mt-4 text-4xl text-navy-900">Uncover your home&apos;s true market value</h2>
            <p className="mt-6 text-gray-600">
              Comparable sales from your own subdivision and three pricing strategies, with the showing activity to
              expect from each.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={LISTING_CONSULT_URL}>Book a Listing Consultation</Button>
              <Button href="/valuation" intent="secondary">
                Home Valuation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Agent */}
      <section className="border-t border-gold-200 bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="eyebrow">Your agent</span>
          <h2 className="mt-4 text-4xl text-navy-900 md:text-5xl">Dr. Jan Duffy, REALTOR®</h2>
          <span className="gold-rule mx-auto mt-6" />
          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            Berkshire Hathaway HomeServices Nevada Properties · Nevada License S.0197614.LLC. Thirty-five years in Las
            Vegas real estate, now focused on helping North Las Vegas buyers and sellers make decisions with real numbers.
          </p>
          <div className="mt-10">
            <Button href="/about" intent="secondary">
              About Dr. Jan
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
