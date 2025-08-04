import { Metadata } from "next"
import { Button } from "../../components/Button/Button"

export const metadata: Metadata = {
  title: "Real Estate Blog - North Las Vegas Market News & Insights",
  description: "Stay informed with the latest real estate news, market updates, and expert insights for North Las Vegas. Read articles on buying, selling, investing, and market trends.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Real Estate Blog
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Expert insights, market updates, and real estate tips for North Las Vegas homebuyers, sellers, and investors.
          </p>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Featured Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-blue-600 font-medium">Market Update</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">December 15, 2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  North Las Vegas Market Trends: December 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the latest market trends, including price movements, inventory levels, and what to expect in the coming months.
                </p>
                <Button href="/blog/north-las-vegas-market-trends-december-2024" className="text-blue-600 hover:text-blue-700">
                  Read More →
                </Button>
              </div>
            </article>

            <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-green-600 font-medium">Buying Guide</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">December 12, 2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  First-Time Homebuyer Tips for North Las Vegas
                </h3>
                <p className="text-gray-600 mb-4">
                  Essential tips and strategies for first-time homebuyers navigating the North Las Vegas real estate market.
                </p>
                <Button href="/blog/first-time-homebuyer-tips-north-las-vegas" className="text-green-600 hover:text-green-700">
                  Read More →
                </Button>
              </div>
            </article>

            <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-purple-600 font-medium">Investment</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">December 10, 2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Investment Opportunities in North Las Vegas
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore the best investment opportunities and emerging neighborhoods in North Las Vegas for real estate investors.
                </p>
                <Button href="/blog/investment-opportunities-north-las-vegas" className="text-purple-600 hover:text-purple-700">
                  Read More →
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Latest Articles
          </h2>
          
          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-md p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg"></div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-orange-600 font-medium">Selling Guide</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">December 8, 2024</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    How to Stage Your Home for Maximum Value in North Las Vegas
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn professional staging techniques that can help you sell your home faster and for more money in the competitive North Las Vegas market.
                  </p>
                  <div className="flex items-center justify-between">
                    <Button href="/blog/stage-home-maximum-value-north-las-vegas" className="text-orange-600 hover:text-orange-700">
                      Read Full Article →
                    </Button>
                    <span className="text-sm text-gray-500">5 min read</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 rounded-lg"></div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-red-600 font-medium">Market Analysis</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">December 5, 2024</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    North Las Vegas vs. Las Vegas: Which Market is Right for You?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Compare the real estate markets of North Las Vegas and Las Vegas to determine which area offers the best value and opportunities for your needs.
                  </p>
                  <div className="flex items-center justify-between">
                    <Button href="/blog/north-las-vegas-vs-las-vegas-market-comparison" className="text-red-600 hover:text-red-700">
                      Read Full Article →
                    </Button>
                    <span className="text-sm text-gray-500">8 min read</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg"></div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-teal-600 font-medium">Financing</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">December 3, 2024</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Mortgage Rate Trends and What They Mean for North Las Vegas Buyers
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Stay informed about current mortgage rate trends and understand how they impact your home buying power in North Las Vegas.
                  </p>
                  <div className="flex items-center justify-between">
                    <Button href="/blog/mortgage-rate-trends-north-las-vegas-buyers" className="text-teal-600 hover:text-teal-700">
                      Read Full Article →
                    </Button>
                    <span className="text-sm text-gray-500">6 min read</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Article Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Browse by Category
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Market Updates</h3>
              <p className="text-gray-600 mb-4">Latest market trends and analysis</p>
              <Button href="/blog/category/market-updates" className="text-blue-600 hover:text-blue-700">
                View Articles
              </Button>
            </div>

            <div className="bg-green-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Buying Guides</h3>
              <p className="text-gray-600 mb-4">Tips and strategies for buyers</p>
              <Button href="/blog/category/buying-guides" className="text-green-600 hover:text-green-700">
                View Articles
              </Button>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Investment</h3>
              <p className="text-gray-600 mb-4">Real estate investment insights</p>
              <Button href="/blog/category/investment" className="text-purple-600 hover:text-purple-700">
                View Articles
              </Button>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Selling Tips</h3>
              <p className="text-gray-600 mb-4">Strategies for successful selling</p>
              <Button href="/blog/category/selling-tips" className="text-orange-600 hover:text-orange-700">
                View Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-xl mb-8">
            Get the latest real estate news, market updates, and expert insights delivered to your inbox.
          </p>
          
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  suppressHydrationWarning
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  suppressHydrationWarning
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                suppressHydrationWarning
              />
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3">
                Subscribe to Newsletter
              </Button>
            </form>
            <p className="text-sm text-gray-600 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Tags Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Popular Topics
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/blog/tag/north-las-vegas" className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-2 rounded-full">
              North Las Vegas
            </Button>
            <Button href="/blog/tag/market-trends" className="bg-green-100 text-green-800 hover:bg-green-200 px-4 py-2 rounded-full">
              Market Trends
            </Button>
            <Button href="/blog/tag/first-time-buyers" className="bg-purple-100 text-purple-800 hover:bg-purple-200 px-4 py-2 rounded-full">
              First-Time Buyers
            </Button>
            <Button href="/blog/tag/investment" className="bg-orange-100 text-orange-800 hover:bg-orange-200 px-4 py-2 rounded-full">
              Investment
            </Button>
            <Button href="/blog/tag/mortgage" className="bg-red-100 text-red-800 hover:bg-red-200 px-4 py-2 rounded-full">
              Mortgage
            </Button>
            <Button href="/blog/tag/home-staging" className="bg-teal-100 text-teal-800 hover:bg-teal-200 px-4 py-2 rounded-full">
              Home Staging
            </Button>
            <Button href="/blog/tag/neighborhoods" className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 px-4 py-2 rounded-full">
              Neighborhoods
            </Button>
            <Button href="/blog/tag/tips" className="bg-pink-100 text-pink-800 hover:bg-pink-200 px-4 py-2 rounded-full">
              Tips & Advice
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Start Your Real Estate Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Connect with our experienced real estate agents and get personalized guidance for your North Las Vegas real estate needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/search" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3">
              Search Homes
            </Button>
            <Button href="/contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3">
              Contact an Agent
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 