import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "components/Button/Button"
import { getNeighborhood, NEIGHBORHOODS } from "lib/neighborhoods"

const BUYER_CONSULT_URL = "https://calendly.com/drjanduffy/buyer-consultation-30-min"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return NEIGHBORHOODS.map((n) => ({ slug: n.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const n = getNeighborhood(slug)
  if (!n) return {}
  const title = `${n.name}, North Las Vegas | Neighborhood Guide`
  return {
    title,
    description: `${n.summary} Guide by Dr. Jan Duffy, REALTOR®, Berkshire Hathaway HomeServices Nevada Properties.`,
    alternates: { canonical: `https://searchnorthlasvegashomes.com/neighborhoods/${n.slug}` },
    openGraph: { title, url: `https://searchnorthlasvegashomes.com/neighborhoods/${n.slug}` },
  }
}

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params
  const n = getNeighborhood(slug)
  if (!n) notFound()

  const others = NEIGHBORHOODS.filter((o) => o.slug !== n.slug)

  return (
    <div className="bg-ivory">
      {/* Hero */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs uppercase tracking-[0.2em] text-gold-300">
            <Link href="/neighborhoods" className="hover:text-white">
              Neighborhoods
            </Link>
            <span className="mx-2 text-gold-500">/</span>
            <span className="text-white/80">{n.name}</span>
          </nav>
          <span className="eyebrow !text-gold-300">North Las Vegas</span>
          <h1 className="mt-4 text-5xl md:text-7xl">{n.name}</h1>
          <span className="gold-rule mt-6" />
          <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">{n.tagline}</p>
        </div>
      </section>

      {/* Facts band */}
      <section className="border-b border-gold-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {n.facts.map((f) => (
            <div key={f.label} className="py-10 text-center">
              <div className="font-serif text-4xl font-semibold text-navy-900 md:text-5xl">{f.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-gray-500">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <span className="eyebrow">Overview</span>
            <h2 className="mt-3 text-4xl text-navy-900">About {n.name}</h2>
            <span className="gold-rule mt-5" />
            <p className="mt-8 text-lg leading-relaxed text-gray-700">{n.summary}</p>

            <h3 className="mt-12 text-2xl text-navy-900">Highlights</h3>
            <ul className="mt-6 space-y-4">
              {n.highlights.map((h) => (
                <li key={h} className="flex gap-4 text-gray-700">
                  <span className="mt-2.5 h-px w-6 flex-none bg-gold-400" aria-hidden />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-8 lg:col-span-2">
            <div className="border border-gold-200 bg-white p-8">
              <span className="eyebrow">Location</span>
              <p className="mt-3 text-gray-700">{n.location}</p>
              <p className="mt-4 text-sm text-gray-500">ZIP {n.zips.join(" · ")}</p>
            </div>
            <div className="border border-gold-200 bg-white p-8">
              <span className="eyebrow">Buyer insight</span>
              <p className="mt-3 text-gray-700">{n.buyerNote}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="eyebrow !text-gold-300">Current numbers</span>
          <h2 className="mt-4 text-4xl md:text-5xl">What is selling in {n.name} this month?</h2>
          <p className="mt-6 text-lg text-white/75">
            Get recent sales, days on market and list-to-sale ratios for the exact street you are considering.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={BUYER_CONSULT_URL} intent="gold">
              Book a Buyer Consultation
            </Button>
            <Button href="/valuation" intent="secondary" className="border-white/60 text-white hover:border-gold-400">
              Value My Home
            </Button>
          </div>
        </div>
      </section>

      {/* Other neighborhoods */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="eyebrow">Explore more</span>
          <h2 className="mt-3 text-3xl text-navy-900">Other North Las Vegas communities</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/neighborhoods/${o.slug}`}
                className="group border border-gold-200 bg-white p-8 transition-colors hover:border-gold-400"
              >
                <h3 className="text-2xl text-navy-900">{o.name}</h3>
                <p className="mt-3 text-sm text-gray-600">{o.tagline}</p>
                <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold-600 group-hover:text-navy-900">
                  View guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
