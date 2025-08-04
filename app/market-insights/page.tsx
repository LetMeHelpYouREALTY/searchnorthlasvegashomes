import { Metadata } from "next"
import { Button } from "../../components/Button/Button"

export const metadata: Metadata = {
  title: "Market Insights",
  description: "Stay informed with the latest North Las Vegas real estate market trends, data, and insights from our expert analysis.",
}

export default function MarketInsightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Market Insights
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Expert analysis and real-time data to help you make informed real estate decisions in North Las Vegas.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Current Market Overview
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                $485,000
              </h3>
              <p className="text-gray-600 font-medium">Median Sale Price</p>
              <p className="text-green-600 text-sm mt-2">+8.5% vs last year</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-2">
                45 days
              </h3>
              <p className="text-gray-600 font-medium">Days on Market</p>
              <p className="text-red-600 text-sm mt-2">-12 days vs last year</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">
                2,847
              </h3>
              <p className="text-gray-600 font-medium">Active Listings</p>
              <p className="text-blue-600 text-sm mt-2">+15% vs last month</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">
                98.2%
              </h3>
              <p className="text-gray-600 font-medium">Sale to List Ratio</p>
              <p className="text-green-600 text-sm mt-2">+2.1% vs last year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Market Trends
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Price Trends
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Single Family Homes</span>
                  <span className="text-green-600 font-semibold">+12.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Townhouses</span>
                  <span className="text-green-600 font-semibold">+9.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Condos</span>
                  <span className="text-green-600 font-semibold">+7.2%</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Inventory Levels
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Under $400K</span>
                  <span className="text-red-600 font-semibold">-5.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">$400K - $600K</span>
                  <span className="text-blue-600 font-semibold">+8.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Over $600K</span>
                  <span className="text-green-600 font-semibold">+15.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Performance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Top Performing Neighborhoods
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Aliante
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>🏠 Median Price: $450,000</p>
                <p>📈 Price Growth: +15.2%</p>
                <p>⏱️ Avg DOM: 38 days</p>
                <p>🏆 Market Rating: Hot</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Centennial Hills
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>🏠 Median Price: $520,000</p>
                <p>📈 Price Growth: +11.8%</p>
                <p>⏱️ Avg DOM: 42 days</p>
                <p>🏆 Market Rating: Active</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Skye Canyon
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>🏠 Median Price: $580,000</p>
                <p>📈 Price Growth: +18.5%</p>
                <p>⏱️ Avg DOM: 35 days</p>
                <p>🏆 Market Rating: Very Hot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Predictions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Market Predictions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Short-Term Outlook (3-6 months)
              </h3>
              <p className="text-gray-600 mb-4">
                We expect continued price appreciation in North Las Vegas, driven by strong demand and limited inventory in desirable neighborhoods.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 5-8% price growth expected</li>
                <li>• Inventory levels to remain tight</li>
                <li>• Strong buyer demand continues</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Long-Term Outlook (1-2 years)
              </h3>
              <p className="text-gray-600 mb-4">
                North Las Vegas is positioned for sustained growth due to its affordability, quality of life, and economic development.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 10-15% cumulative growth expected</li>
                <li>• New development projects planned</li>
                <li>• Continued population growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Investment Opportunities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Rental Properties
              </h3>
              <p className="text-gray-600 mb-4">
                Strong rental demand with average ROI of 6-8% in North Las Vegas.
              </p>
              <p className="text-green-600 font-semibold">Avg Rent: $2,200/month</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Fix & Flip
              </h3>
              <p className="text-gray-600 mb-4">
                Opportunities in older neighborhoods with renovation potential.
              </p>
              <p className="text-blue-600 font-semibold">Avg Profit: $45,000</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                New Construction
              </h3>
              <p className="text-gray-600 mb-4">
                Pre-construction opportunities in developing areas.
              </p>
              <p className="text-orange-600 font-semibold">Avg Appreciation: 12%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Expert Market Analysis
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              North Las Vegas Market Report - Q4 2024
            </h3>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                North Las Vegas continues to be one of the most dynamic real estate markets in the Las Vegas Valley. 
                With its combination of affordability, quality of life, and economic growth, the area is attracting 
                both first-time homebuyers and investors.
              </p>
              <p className="mb-4">
                Key factors driving the market include strong job growth in the region, continued population influx 
                from California and other states, and the development of new amenities and infrastructure projects.
              </p>
              <p>
                For buyers, we recommend acting quickly on desirable properties as inventory remains tight in popular 
                neighborhoods. For sellers, this is an excellent time to list with strong buyer demand and competitive 
                offers becoming more common.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Informed
          </h2>
          <p className="text-xl mb-8">
            Get the latest market insights and property alerts delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/search" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Search Properties
            </Button>
            <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Get Market Updates
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 