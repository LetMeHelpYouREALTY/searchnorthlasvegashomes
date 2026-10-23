import { Metadata } from "next"
import { Button } from "../../components/Button/Button"

export const metadata: Metadata = {
  title: "Real Estate Webinars - North Las Vegas Live Events & Educational Sessions",
  description: "Join live real estate webinars, educational sessions, and virtual events for North Las Vegas. Learn from experts about buying, selling, investing, and market trends.",
}

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Real Estate Webinars
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Join live educational sessions, expert panels, and virtual events to learn about North Las Vegas real estate from industry professionals.
          </p>
        </div>
      </section>

      {/* Upcoming Webinars Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Upcoming Webinars
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 border-l-4 border-blue-500">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="bg-blue-600 text-white rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold">DEC</div>
                    <div className="text-5xl font-bold">20</div>
                    <div className="text-lg">2024</div>
                    <div className="text-sm mt-2">2:00 PM PST</div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Live Event</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-500">90 minutes</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    2025 Market Predictions & Investment Strategies
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Join our expert panel as we discuss market predictions for 2025, investment opportunities, and strategies for buyers and sellers in North Las Vegas.
                  </p>
                  <div className="space-y-2 text-gray-600 mb-6">
                    <p>• Market trend analysis and predictions</p>
                    <p>• Investment opportunities in emerging neighborhoods</p>
                    <p>• Q&A session with real estate experts</p>
                    <p>• Free market report for attendees</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="/webinars/register/2025-market-predictions" className="bg-blue-600 text-white hover:bg-blue-700">
                      Register Now
                    </Button>
                    <Button href="/webinars/details/2025-market-predictions" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8 border-l-4 border-green-500">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="bg-green-600 text-white rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold">DEC</div>
                    <div className="text-5xl font-bold">27</div>
                    <div className="text-lg">2024</div>
                    <div className="text-sm mt-2">6:00 PM PST</div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">First-Time Buyers</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-500">75 minutes</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    First-Time Homebuyer Masterclass
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Everything you need to know about buying your first home in North Las Vegas, from pre-approval to closing and beyond.
                  </p>
                  <div className="space-y-2 text-gray-600 mb-6">
                    <p>• Understanding the buying process</p>
                    <p>• Financing options and mortgage types</p>
                    <p>• Working with real estate agents</p>
                    <p>• Common pitfalls to avoid</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="/webinars/register/first-time-buyer-masterclass" className="bg-green-600 text-white hover:bg-green-700">
                      Register Now
                    </Button>
                    <Button href="/webinars/details/first-time-buyer-masterclass" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-8 border-l-4 border-purple-500">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="bg-purple-600 text-white rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold">JAN</div>
                    <div className="text-5xl font-bold">10</div>
                    <div className="text-lg">2025</div>
                    <div className="text-sm mt-2">3:00 PM PST</div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">Investment</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-500">120 minutes</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Real Estate Investment Strategies for 2025
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn advanced investment strategies, market analysis techniques, and how to build a profitable real estate portfolio in North Las Vegas.
                  </p>
                  <div className="space-y-2 text-gray-600 mb-6">
                    <p>• Market analysis and due diligence</p>
                    <p>• Financing strategies for investors</p>
                    <p>• Property management best practices</p>
                    <p>• Tax implications and benefits</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="/webinars/register/investment-strategies-2025" className="bg-purple-600 text-white hover:bg-purple-700">
                      Register Now
                    </Button>
                    <Button href="/webinars/details/investment-strategies-2025" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Webinar Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Market Updates</h3>
              <p className="text-gray-600 mb-4">
                Stay informed with regular market updates, trend analysis, and expert predictions for North Las Vegas real estate.
              </p>
              <Button href="/webinars/category/market-updates" className="text-blue-600 hover:text-blue-700">
                View Webinars →
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Buying Guides</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides for homebuyers, from first-time buyers to experienced investors looking to expand their portfolio.
              </p>
              <Button href="/webinars/category/buying-guides" className="text-green-600 hover:text-green-700">
                View Webinars →
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Investment Strategies</h3>
              <p className="text-gray-600 mb-4">
                Advanced investment strategies, market analysis, and portfolio building techniques for real estate investors.
              </p>
              <Button href="/webinars/category/investment-strategies" className="text-purple-600 hover:text-purple-700">
                View Webinars →
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Selling Strategies</h3>
              <p className="text-gray-600 mb-4">
                Expert tips and strategies for selling your home quickly and for maximum value in the North Las Vegas market.
              </p>
              <Button href="/webinars/category/selling-strategies" className="text-orange-600 hover:text-orange-700">
                View Webinars →
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Financing & Mortgages</h3>
              <p className="text-gray-600 mb-4">
                Understanding mortgage options, financing strategies, and how to get the best rates for your real estate purchase.
              </p>
              <Button href="/webinars/category/financing-mortgages" className="text-red-600 hover:text-red-700">
                View Webinars →
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Neighborhood Guides</h3>
              <p className="text-gray-600 mb-4">
                In-depth exploration of North Las Vegas neighborhoods, amenities, schools, and community features.
              </p>
              <Button href="/webinars/category/neighborhood-guides" className="text-teal-600 hover:text-teal-700">
                View Webinars →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Past Webinars Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Past Webinars (Recordings Available)
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-blue-600 font-medium">Market Update</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">Dec 15, 2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  November 2024 Market Analysis
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analysis of November market trends, sales data, and predictions for December.
                </p>
                <Button href="/webinars/recording/november-2024-market-analysis" className="text-blue-600 hover:text-blue-700">
                  Watch Recording →
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-green-600 font-medium">Buying Guide</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">Dec 8, 2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  Winter Home Buying Strategies
                </h3>
                <p className="text-gray-600 mb-4">
                  How to navigate the winter real estate market and find great deals during the off-season.
                </p>
                <Button href="/webinars/recording/winter-home-buying-strategies" className="text-green-600 hover:text-green-700">
                  Watch Recording →
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-purple-600 font-medium">Investment</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">Dec 1, 2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  Tax Benefits for Real Estate Investors
                </h3>
                <p className="text-gray-600 mb-4">
                  Understanding tax deductions, depreciation, and other benefits available to real estate investors.
                </p>
                <Button href="/webinars/recording/tax-benefits-real-estate-investors" className="text-purple-600 hover:text-purple-700">
                  Watch Recording →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Registration Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Register for Upcoming Webinars
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Join our live webinars and get your questions answered by real estate experts.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  suppressHydrationWarning
                />
              </div>
              
              <div>
                <label htmlFor="webinar" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Webinar
                </label>
                <select
                  id="webinar"
                  name="webinar"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  suppressHydrationWarning
                >
                  <option value="">Choose a webinar</option>
                  <option value="2025-market-predictions">2025 Market Predictions & Investment Strategies (Dec 20)</option>
                  <option value="first-time-buyer-masterclass">First-Time Homebuyer Masterclass (Dec 27)</option>
                  <option value="investment-strategies-2025">Real Estate Investment Strategies for 2025 (Jan 10)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="questions" className="block text-sm font-medium text-gray-700 mb-2">
                  Questions or Topics of Interest
                </label>
                <textarea
                  id="questions"
                  name="questions"
                  rows={4}
                  placeholder="What specific topics would you like us to cover in the webinar?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  suppressHydrationWarning
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  suppressHydrationWarning
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-900">
                  Subscribe to our newsletter for future webinar announcements
                </label>
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3">
                Register for Webinar
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Expert Speakers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Meet Our Expert Speakers
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">JD</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Dr. Jan Duffy</h3>
              <p className="text-blue-600 mb-2">Principal Broker & Market Analyst</p>
              <p className="text-gray-600 text-sm">
                Expert in North Las Vegas market trends, in real estate since 1983, with experience in residential and investment real estate.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">ML</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Mike Lopez</h3>
              <p className="text-green-600 mb-2">Investment Specialist</p>
              <p className="text-gray-600 text-sm">
                Specializes in investment properties, market analysis, and helping investors build profitable real estate portfolios.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">SG</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Sarah Garcia</h3>
              <p className="text-purple-600 mb-2">First-Time Buyer Specialist</p>
              <p className="text-gray-600 text-sm">
                Dedicated to helping first-time homebuyers navigate the complex process of purchasing their first home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Webinar Announcements
          </h2>
          <p className="text-xl mb-8">
            Get notified about upcoming webinars, expert panels, and educational events in North Las Vegas real estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Subscribe to Updates
            </Button>
            <Button href="/webinars" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              View All Webinars
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 