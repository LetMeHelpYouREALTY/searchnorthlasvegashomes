import { Metadata } from "next"
import Link from "next/link"

import { Button } from "components/Button/Button"
import { NEIGHBORHOODS } from "lib/neighborhoods"

export const metadata: Metadata = {
  title: "North Las Vegas Neighborhoods",
  description:
    "Guides to Aliante, Valley Vista, Villages at Tule Springs and Eldorado — master-planned communities inside North Las Vegas city limits.",
  alternates: { canonical: "https://searchnorthlasvegashomes.com/neighborhoods" },
}

export default function NeighborhoodsPage() {
  return (
    <div className="bg-ivory">
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <span className="eyebrow !text-gold-300">Neighborhood guides</span>
          <h1 className="mt-4 text-5xl md:text-7xl">North Las Vegas Communities</h1>
          <span className="gold-rule mt-6" />
          <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            Four master-planned communities, all inside North Las Vegas city limits. Compare acreage, amenities and
            location, then get current sales for the one you like.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {NEIGHBORHOODS.map((n) => (
            <Link
              key={n.slug}
              href={`/neighborhoods/${n.slug}`}
              className="group flex flex-col border border-gold-200 bg-white p-10 transition-colors hover:border-gold-400"
            >
              <span className="eyebrow">ZIP {n.zips.join(" · ")}</span>
              <h2 className="mt-3 text-4xl text-navy-900">{n.name}</h2>
              <span className="gold-rule mt-5" />
              <p className="mt-6 flex-1 text-gray-600">{n.tagline}</p>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-gold-100 pt-6">
                {n.facts.slice(0, 3).map((f) => (
                  <div key={f.label}>
                    <dt className="text-[0.65rem] uppercase tracking-[0.16em] text-gray-500">{f.label}</dt>
                    <dd className="mt-1 font-serif text-2xl font-semibold text-navy-900">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <span className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600 group-hover:text-navy-900">
                Explore {n.name} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-gold-200 bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="eyebrow">Not sure where to start?</span>
          <h2 className="mt-4 text-4xl text-navy-900">Compare communities with real sales data</h2>
          <p className="mt-6 text-lg text-gray-600">
            A 30-minute call covers recent sales, days on market and new-construction incentives across all four.
          </p>
          <div className="mt-10">
            <Button href="https://calendly.com/drjanduffy/buyer-consultation-30-min">Book a Buyer Consultation</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
