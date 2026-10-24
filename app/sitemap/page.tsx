import { Metadata } from "next"
import Link from "next/link"

import { NEIGHBORHOODS } from "lib/neighborhoods"

export const metadata: Metadata = {
  title: "Sitemap | Search North Las Vegas Homes",
  description: "Complete sitemap of all pages on Search North Las Vegas Homes. Find property search tools, neighborhood guides, calculators, and real estate resources.",
  keywords: "sitemap, North Las Vegas real estate, property search, neighborhood guides, real estate tools",
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Website Sitemap</h1>
            <p className="text-xl text-blue-100">
              Complete directory of all pages and resources on Search North Las Vegas Homes
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Main Pages */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Main Pages</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">Home</Link>
                  <p className="text-gray-600 text-sm">Main landing page with property search and featured content</p>
                </li>
                <li>
                  <Link href="/search" className="text-blue-600 hover:text-blue-800 font-medium">Property Search</Link>
                  <p className="text-gray-600 text-sm">Advanced property search with filters and listings</p>
                </li>
                <li>
                  <Link href="/valuation" className="text-blue-600 hover:text-blue-800 font-medium">Home Valuation</Link>
                  <p className="text-gray-600 text-sm">Get instant home valuations and market analysis</p>
                </li>
                <li>
                  <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium">About Us</Link>
                  <p className="text-gray-600 text-sm">Learn about our team and mission</p>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">Contact</Link>
                  <p className="text-gray-600 text-sm">Get in touch with our real estate experts</p>
                </li>
                <li>
                  <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium">Services</Link>
                  <p className="text-gray-600 text-sm">Comprehensive real estate services for buyers and sellers</p>
                </li>
              </ul>
            </div>

            {/* Neighborhoods */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Neighborhoods</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/neighborhoods" className="text-blue-600 hover:text-blue-800 font-medium">All Neighborhoods</Link>
                  <p className="text-gray-600 text-sm">Overview of all North Las Vegas neighborhoods</p>
                </li>
                {NEIGHBORHOODS.map((n) => (
                  <li key={n.slug}>
                    <Link href={`/neighborhoods/${n.slug}`} className="text-blue-600 hover:text-blue-800 font-medium">{n.name}</Link>
                    <p className="text-gray-600 text-sm">{n.tagline}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Real Estate Tools</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/tools/mortgage-calculator" className="text-blue-600 hover:text-blue-800 font-medium">Mortgage Calculator</Link>
                  <p className="text-gray-600 text-sm">Calculate monthly mortgage payments</p>
                </li>
                <li>
                  <Link href="/tools/roi-calculator" className="text-blue-600 hover:text-blue-800 font-medium">ROI Calculator</Link>
                  <p className="text-gray-600 text-sm">Calculate return on investment for real estate</p>
                </li>
                <li>
                  <Link href="/tools/affordability" className="text-blue-600 hover:text-blue-800 font-medium">Affordability Calculator</Link>
                  <p className="text-gray-600 text-sm">Determine how much home you can afford</p>
                </li>
                <li>
                  <Link href="/tools/closing-costs" className="text-blue-600 hover:text-blue-800 font-medium">Closing Costs Calculator</Link>
                  <p className="text-gray-600 text-sm">Estimate closing costs for your home purchase</p>
                </li>
                <li>
                  <Link href="/tools/refinance" className="text-blue-600 hover:text-blue-800 font-medium">Refinance Calculator</Link>
                  <p className="text-gray-600 text-sm">Calculate refinancing options and savings</p>
                </li>
                <li>
                  <Link href="/tools/rent-vs-buy" className="text-blue-600 hover:text-blue-800 font-medium">Rent vs Buy Calculator</Link>
                  <p className="text-gray-600 text-sm">Compare renting vs buying costs</p>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources & Guides</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/guides" className="text-blue-600 hover:text-blue-800 font-medium">Buying & Selling Guides</Link>
                  <p className="text-gray-600 text-sm">Comprehensive guides for real estate transactions</p>
                </li>
                <li>
                  <Link href="/guides/first-time-buyer" className="text-blue-600 hover:text-blue-800 font-medium">First-Time Buyer Guide</Link>
                  <p className="text-gray-600 text-sm">Essential information for first-time homebuyers</p>
                </li>
                <li>
                  <Link href="/guides/home-buying" className="text-blue-600 hover:text-blue-800 font-medium">Home Buying Guide</Link>
                  <p className="text-gray-600 text-sm">Step-by-step home buying process</p>
                </li>
                <li>
                  <Link href="/guides/selling-strategy" className="text-blue-600 hover:text-blue-800 font-medium">Selling Strategy Guide</Link>
                  <p className="text-gray-600 text-sm">Maximize your home's value when selling</p>
                </li>
                <li>
                  <Link href="/guides/home-staging" className="text-blue-600 hover:text-blue-800 font-medium">Home Staging Guide</Link>
                  <p className="text-gray-600 text-sm">Tips for staging your home for sale</p>
                </li>
                <li>
                  <Link href="/guides/investment" className="text-blue-600 hover:text-blue-800 font-medium">Investment Guide</Link>
                  <p className="text-gray-600 text-sm">Real estate investment strategies and tips</p>
                </li>
              </ul>
            </div>

            {/* Market Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Information</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/market-insights" className="text-blue-600 hover:text-blue-800 font-medium">Market Insights</Link>
                  <p className="text-gray-600 text-sm">Current market trends and analysis</p>
                </li>
                <li>
                  <Link href="/reports" className="text-blue-600 hover:text-blue-800 font-medium">Market Reports</Link>
                  <p className="text-gray-600 text-sm">Detailed market reports and statistics</p>
                </li>
                <li>
                  <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">Blog</Link>
                  <p className="text-gray-600 text-sm">Real estate news, tips, and insights</p>
                </li>
                <li>
                  <Link href="/blog/market-update-2024" className="text-blue-600 hover:text-blue-800 font-medium">Market Update 2024</Link>
                  <p className="text-gray-600 text-sm">Latest market trends and predictions</p>
                </li>
                <li>
                  <Link href="/videos" className="text-blue-600 hover:text-blue-800 font-medium">Videos</Link>
                  <p className="text-gray-600 text-sm">Educational and informative real estate videos</p>
                </li>
                <li>
                  <Link href="/webinars" className="text-blue-600 hover:text-blue-800 font-medium">Webinars</Link>
                  <p className="text-gray-600 text-sm">Live and recorded real estate webinars</p>
                </li>
              </ul>
            </div>

            {/* Additional Resources */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources" className="text-blue-600 hover:text-blue-800 font-medium">Resources</Link>
                  <p className="text-gray-600 text-sm">Comprehensive resource library</p>
                </li>
                <li>
                  <Link href="/lenders" className="text-blue-600 hover:text-blue-800 font-medium">Lenders</Link>
                  <p className="text-gray-600 text-sm">Recommended mortgage lenders and financing options</p>
                </li>
                <li>
                  <Link href="/legal/real-estate-law" className="text-blue-600 hover:text-blue-800 font-medium">Real Estate Law</Link>
                  <p className="text-gray-600 text-sm">Legal information for real estate transactions</p>
                </li>
                <li>
                  <Link href="/tax/benefits" className="text-blue-600 hover:text-blue-800 font-medium">Tax Benefits</Link>
                  <p className="text-gray-600 text-sm">Tax benefits and deductions for homeowners</p>
                </li>
              </ul>
            </div>

          </div>

          {/* XML Sitemap Link */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">XML Sitemap</h3>
              <p className="text-gray-600 mb-4">
                For search engines and developers, our XML sitemap is available at:
              </p>
              <a 
                href="/sitemap.xml" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View XML Sitemap
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 