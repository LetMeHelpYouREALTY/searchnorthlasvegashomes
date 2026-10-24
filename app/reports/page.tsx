import { Metadata } from "next"
import { NEIGHBORHOODS } from "lib/neighborhoods"

import { Button } from "../../components/Button/Button"

export const metadata: Metadata = {
  title: "Real Estate Reports - North Las Vegas Market Analysis",
  description: "Access comprehensive real estate reports, market analysis, and property insights for North Las Vegas. Get detailed market trends, neighborhood reports, and investment analysis.",
}

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Real Estate Reports
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Comprehensive market analysis, property reports, and investment insights for North Las Vegas real estate.
          </p>
        </div>
      </section>

      {/* Market Reports Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Market Reports & Analysis
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Monthly Market Report
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive monthly analysis of North Las Vegas real estate market trends, including sales data, inventory levels, and price movements.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Sales volume and trends</li>
                <li>• Median price analysis</li>
                <li>• Days on market data</li>
                <li>• Inventory levels</li>
                <li>• Market predictions</li>
              </ul>
              <Button href="/contact" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Request Report
              </Button>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                Quarterly Market Overview
              </h3>
              <p className="text-gray-600 mb-4">
                In-depth quarterly analysis with detailed insights into market performance, neighborhood comparisons, and future outlook.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Neighborhood performance</li>
                <li>• Investment opportunities</li>
                <li>• Economic indicators</li>
                <li>• Seasonal trends</li>
                <li>• Expert commentary</li>
              </ul>
              <Button href="/contact" className="w-full bg-green-600 text-white hover:bg-green-700">
                Download Report
              </Button>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">
                Annual Market Forecast
              </h3>
              <p className="text-gray-600 mb-4">
                Strategic annual forecast with long-term market predictions, investment strategies, and growth projections for North Las Vegas.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• 12-month predictions</li>
                <li>• Growth projections</li>
                <li>• Investment strategies</li>
                <li>• Risk assessment</li>
                <li>• Market opportunities</li>
              </ul>
              <Button href="/contact" className="w-full bg-purple-600 text-white hover:bg-purple-700">
                Get Forecast
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Reports Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Property Reports & Analysis
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Comparative Market Analysis (CMA)
              </h3>
              <p className="text-gray-600 mb-6">
                Detailed property valuation reports comparing your property to similar homes in the area with recent sales data and market analysis.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Recent comparable sales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Property condition analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Market value estimation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Pricing recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Days on market analysis</span>
                </div>
              </div>
              <Button href="/valuation" className="mt-6 bg-blue-600 text-white hover:bg-blue-700">
                Get CMA Report
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Investment Property Analysis
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive investment analysis including cash flow projections, ROI calculations, and market performance metrics.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Cash flow projections</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">ROI and cap rate analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Rental market analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Appreciation potential</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Risk assessment</span>
                </div>
              </div>
              <Button href="/tools/roi-calculator" className="mt-6 bg-green-600 text-white hover:bg-green-700">
                Investment Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Reports Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Neighborhood Reports
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEIGHBORHOODS.slice(0, 3).map((n) => (
              <div key={n.slug} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{n.name} Neighborhood Report</h3>
                <p className="text-gray-600 mb-4">{n.summary}</p>
                <div className="space-y-2 text-gray-600 mb-6">
                  {n.facts.slice(0, 3).map((f) => (
                    <p key={f.label}>
                      • {f.label}: {f.value}
                    </p>
                  ))}
                </div>
                <Button href={`/neighborhoods/${n.slug}`} className="w-full">
                  View Guide
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Reports Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Specialized Reports
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-red-600">
                First-Time Homebuyer Report
              </h3>
              <p className="text-gray-600 mb-6">
                Specialized analysis for first-time homebuyers, including affordable neighborhoods, financing options, and market entry strategies.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Affordable neighborhoods analysis</li>
                <li>• First-time buyer programs</li>
                <li>• Financing options comparison</li>
                <li>• Market entry timing</li>
                <li>• Common pitfalls to avoid</li>
                <li>• Success strategies</li>
              </ul>
              <Button href="/guides/home-buying" className="bg-red-600 text-white hover:bg-red-700">
                Access Report
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-orange-600">
                Luxury Market Report
              </h3>
              <p className="text-gray-600 mb-6">
                Exclusive analysis of North Las Vegas luxury real estate market, including high-end properties, amenities, and investment opportunities.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Luxury property inventory</li>
                <li>• High-end amenities analysis</li>
                <li>• Luxury market trends</li>
                <li>• Investment opportunities</li>
                <li>• Market performance metrics</li>
                <li>• Future development plans</li>
              </ul>
              <Button href="/contact" className="bg-orange-600 text-white hover:bg-orange-700">
                Request Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Report Request Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Request Custom Reports
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Need a specific report or analysis? Our team can create customized reports tailored to your unique needs.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="report-type" className="block text-sm font-medium text-gray-700 mb-2">
                  Report Type
                </label>
                <select
                  id="report-type"
                  name="report-type"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  suppressHydrationWarning
                >
                  <option value="">Select a report type</option>
                  <option value="market-analysis">Market Analysis</option>
                  <option value="property-valuation">Property Valuation</option>
                  <option value="investment-analysis">Investment Analysis</option>
                  <option value="neighborhood-report">Neighborhood Report</option>
                  <option value="custom">Custom Report</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Report Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Describe the specific information you need in your report..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  suppressHydrationWarning
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3">
                Request Custom Report
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Market Reports
          </h2>
          <p className="text-xl mb-8">
            Subscribe to receive monthly market reports and stay informed about North Las Vegas real estate trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Subscribe to Reports
            </Button>
            <Button href="/market-insights" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              View Market Insights
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 