import { Metadata } from "next"
import { Button } from "../../components/Button/Button"

export const metadata: Metadata = {
  title: "Real Estate Videos - North Las Vegas Property Tours & Market Updates",
  description: "Watch property tours, market updates, and educational real estate videos for North Las Vegas. Get virtual tours of homes, neighborhood guides, and expert insights.",
}

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Real Estate Videos
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Virtual property tours, market updates, and educational content to help you explore North Las Vegas real estate.
          </p>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Featured Videos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-blue-600 font-medium">Property Tour</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">5:32</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Luxury Home Tour in Aliante
                </h3>
                <p className="text-gray-600 mb-4">
                  Take a virtual tour of this stunning 4-bedroom luxury home in the prestigious Aliante master-planned community.
                </p>
                <Button href="/videos/luxury-home-tour-aliante" className="text-blue-600 hover:text-blue-700">
                  Watch Video →
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-green-600 font-medium">Market Update</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">3:45</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  December 2024 Market Update
                </h3>
                <p className="text-gray-600 mb-4">
                  Get the latest insights on North Las Vegas real estate market trends, prices, and inventory levels.
                </p>
                <Button href="/videos/december-2024-market-update" className="text-green-600 hover:text-green-700">
                  Watch Video →
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-purple-600 font-medium">Neighborhood Guide</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">7:18</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Centennial Hills Neighborhood Tour
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore the family-friendly Centennial Hills neighborhood with its amenities, schools, and mountain views.
                </p>
                <Button href="/videos/centennial-hills-neighborhood-tour" className="text-purple-600 hover:text-purple-700">
                  Watch Video →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Tours Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Property Tours
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-blue-600 font-medium">Luxury Home</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">8:45</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Stunning 5-Bedroom Home in Skye Canyon
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Experience this magnificent 5-bedroom, 4-bathroom home featuring modern design, high-end finishes, and breathtaking mountain views in the new Skye Canyon development.
                  </p>
                  <div className="space-y-2 text-gray-600 mb-6">
                    <p>• 3,200 sq ft of living space</p>
                    <p>• Gourmet kitchen with quartz countertops</p>
                    <p>• Primary suite with spa-like bathroom</p>
                    <p>• Outdoor living area with pool</p>
                    <p>• 3-car garage</p>
                  </div>
                  <Button href="/videos/skye-canyon-5-bedroom-tour" className="bg-blue-600 text-white hover:bg-blue-700">
                    Watch Full Tour
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-green-600 font-medium">Family Home</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">6:22</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Beautiful 4-Bedroom Family Home in Aliante
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tour this spacious 4-bedroom family home featuring an open floor plan, updated kitchen, and large backyard perfect for entertaining and family activities.
                  </p>
                  <div className="space-y-2 text-gray-600 mb-6">
                    <p>• 2,800 sq ft of living space</p>
                    <p>• Updated kitchen with stainless appliances</p>
                    <p>• Large family room with fireplace</p>
                    <p>• Spacious backyard with covered patio</p>
                    <p>• Excellent school district</p>
                  </div>
                  <Button href="/videos/aliante-4-bedroom-family-home" className="bg-green-600 text-white hover:bg-green-700">
                    Watch Full Tour
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-purple-600 font-medium">Investment Property</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">5:18</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Investment Opportunity: 3-Bedroom Rental Property
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Explore this excellent investment opportunity - a well-maintained 3-bedroom home with strong rental potential and positive cash flow projections.
                  </p>
                  <div className="space-y-2 text-gray-600 mb-6">
                    <p>• 1,850 sq ft of living space</p>
                    <p>• Recently updated kitchen and bathrooms</p>
                    <p>• Low-maintenance landscaping</p>
                    <p>• Strong rental market demand</p>
                    <p>• Excellent ROI potential</p>
                  </div>
                  <Button href="/videos/investment-3-bedroom-rental" className="bg-purple-600 text-white hover:bg-purple-700">
                    Watch Full Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Videos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Educational Content
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                First-Time Homebuyer Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Essential tips and strategies for first-time homebuyers in North Las Vegas, from pre-approval to closing.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">12:45</span>
                <Button href="/videos/first-time-homebuyer-guide" className="text-orange-600 hover:text-orange-700">
                  Watch Now
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Home Staging Tips
              </h3>
              <p className="text-gray-600 mb-4">
                Professional staging techniques to help your home sell faster and for more money in the competitive market.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">8:32</span>
                <Button href="/videos/home-staging-tips" className="text-red-600 hover:text-red-700">
                  Watch Now
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Mortgage Rate Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Understanding mortgage rates, how they affect your buying power, and strategies for getting the best rates.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">10:15</span>
                <Button href="/videos/mortgage-rate-guide" className="text-teal-600 hover:text-teal-700">
                  Watch Now
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-32 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Investment Property Analysis
              </h3>
              <p className="text-gray-600 mb-4">
                How to analyze investment properties, calculate ROI, and identify the best opportunities in North Las Vegas.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">15:28</span>
                <Button href="/videos/investment-property-analysis" className="text-indigo-600 hover:text-indigo-700">
                  Watch Now
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-32 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Negotiation Strategies
              </h3>
              <p className="text-gray-600 mb-4">
                Expert tips for negotiating the best price when buying or selling a home in North Las Vegas.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">9:42</span>
                <Button href="/videos/negotiation-strategies" className="text-pink-600 hover:text-pink-700">
                  Watch Now
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Home Inspection Guide
              </h3>
              <p className="text-gray-600 mb-4">
                What to expect during a home inspection and how to use the results to make informed decisions.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">11:05</span>
                <Button href="/videos/home-inspection-guide" className="text-yellow-600 hover:text-yellow-700">
                  Watch Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Market Updates & News
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Weekly Market Update
              </h3>
              <p className="text-gray-600 mb-4">
                Stay informed with our weekly market updates covering the latest trends, new listings, and market insights for North Las Vegas.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Updated every Monday</span>
                <Button href="/videos/weekly-market-update" className="text-blue-600 hover:text-blue-700">
                  Watch Latest
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Monthly Market Analysis
              </h3>
              <p className="text-gray-600 mb-4">
                In-depth monthly analysis of market performance, price trends, and predictions for the North Las Vegas real estate market.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Updated monthly</span>
                <Button href="/videos/monthly-market-analysis" className="text-green-600 hover:text-green-700">
                  Watch Latest
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Request Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Request a Custom Video
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Need a specific property tour or educational video? Let us know what you'd like to see!
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
                <label htmlFor="video-type" className="block text-sm font-medium text-gray-700 mb-2">
                  Video Type
                </label>
                <select
                  id="video-type"
                  name="video-type"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  suppressHydrationWarning
                >
                  <option value="">Select video type</option>
                  <option value="property-tour">Property Tour</option>
                  <option value="neighborhood-guide">Neighborhood Guide</option>
                  <option value="educational">Educational Content</option>
                  <option value="market-update">Market Update</option>
                  <option value="custom">Custom Request</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Video Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Describe the specific video content you'd like to see..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  suppressHydrationWarning
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3">
                Request Video
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Subscribe to Our Video Channel
          </h2>
          <p className="text-xl mb-8">
            Get notified when we publish new property tours, market updates, and educational content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Subscribe to Channel
            </Button>
            <Button href="/search" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Search Properties
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 