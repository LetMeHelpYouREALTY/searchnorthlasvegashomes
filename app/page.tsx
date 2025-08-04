import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { SearchForm } from "components/SearchForm"

export const metadata: Metadata = {
  title: "Search North Las Vegas Homes | Find Your Dream Home",
  description: "Discover the best homes in North Las Vegas. Search properties, get instant valuations, and connect with local real estate experts. Find your perfect home today!",
  keywords: "North Las Vegas homes, real estate, property search, home valuation, Las Vegas real estate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://searchnorthlasvegashomes.com/",
    title: "Search North Las Vegas Homes | Find Your Dream Home",
    description: "Discover the best homes in North Las Vegas. Search properties, get instant valuations, and connect with local real estate experts.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/assets/north-las-vegas-hero.jpg",
        alt: "North Las Vegas Real Estate",
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Find Your Dream Home in
              <span className="block text-blue-200">North Las Vegas</span>
            </h1>
            <p className="mb-8 max-w-3xl mx-auto text-xl text-blue-100">
              Discover the best properties in North Las Vegas with instant valuations, 
              neighborhood insights, and expert guidance from local real estate professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/search" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
                Search Homes
              </Button>
              <Button href="/valuation" intent="secondary" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
                Get Home Valuation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Struggling to Find the Right Home?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The North Las Vegas real estate market is competitive and fast-moving. 
              Don't miss out on your perfect home due to outdated information or slow search tools.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Outdated Listings</h3>
              <p className="text-gray-600">Many homes are already sold before you see them online</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Limited Neighborhood Info</h3>
              <p className="text-gray-600">Hard to understand the area without local expertise</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Uncertain Valuations</h3>
              <p className="text-gray-600">Don't know if you're paying the right price for your dream home</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Complete North Las Vegas Real Estate Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with local expertise to give you the edge in finding your perfect home.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-Time Property Search</h3>
                    <p className="text-gray-600">Access the latest listings with instant updates and detailed property information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Instant Home Valuations</h3>
                    <p className="text-gray-600">Get accurate property valuations using advanced market analysis and AI technology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Neighborhood Insights</h3>
                    <p className="text-gray-600">Comprehensive area analysis including schools, amenities, and market trends</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Start Your Search Today</h3>
                <p className="text-gray-600 mb-6">Join thousands of happy homeowners who found their perfect home with us</p>
                <Button href="/search" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Search Properties Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Trusted by North Las Vegas Homebuyers
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See what our clients say about their experience finding their dream home
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                "Found our perfect home in just 2 weeks! The search tools and neighborhood insights were incredibly helpful."
              </p>
              <div className="font-semibold">- Sarah & Mike Johnson</div>
              <div className="text-blue-200 text-sm">North Las Vegas Residents</div>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                "The home valuation tool helped us negotiate a better price. We saved $15,000 on our purchase!"
              </p>
              <div className="font-semibold">- David Chen</div>
              <div className="text-blue-200 text-sm">First-time Homebuyer</div>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                "The neighborhood analysis was spot-on. We love our new community and the schools are excellent."
              </p>
              <div className="font-semibold">- Maria Rodriguez</div>
              <div className="text-blue-200 text-sm">Family of Four</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Try Our Interactive Home Search
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our powerful search tools and see how easy it is to find your perfect home
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Quick Property Search</h3>
                <SearchForm />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Featured Properties</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="bg-gray-200 h-32 rounded mb-3"></div>
                    <h4 className="font-semibold">Beautiful 3BR Home</h4>
                    <p className="text-gray-600 text-sm">North Las Vegas • $425,000</p>
                    <p className="text-sm text-gray-500">1,850 sq ft • 3 bed • 2 bath</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="bg-gray-200 h-32 rounded mb-3"></div>
                    <h4 className="font-semibold">Modern Townhouse</h4>
                    <p className="text-gray-600 text-sm">North Las Vegas • $350,000</p>
                    <p className="text-sm text-gray-500">1,600 sq ft • 2 bed • 2.5 bath</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objection Handling Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Concerns About Home Buying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand your worries. Here's how we address the most common concerns.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-red-600">"I'm worried about overpaying"</h3>
              <p className="text-gray-600 mb-4">
                Our advanced valuation tools use real-time market data and comparable sales to ensure you get the best price.
              </p>
              <div className="flex items-center text-green-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Instant market analysis</span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-red-600">"I don't know the neighborhoods"</h3>
              <p className="text-gray-600 mb-4">
                Get detailed neighborhood reports including schools, crime rates, amenities, and future development plans.
              </p>
              <div className="flex items-center text-green-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Comprehensive area insights</span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-red-600">"The process seems overwhelming"</h3>
              <p className="text-gray-600 mb-4">
                Our step-by-step guidance and dedicated support team make the home buying process simple and stress-free.
              </p>
              <div className="flex items-center text-green-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Personal guidance throughout</span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-red-600">"I'm not sure about timing"</h3>
              <p className="text-gray-600 mb-4">
                Our market timing analysis helps you understand the best time to buy based on seasonal trends and market conditions.
              </p>
              <div className="flex items-center text-green-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Market timing insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clear CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of happy homeowners who found their perfect home in North Las Vegas. 
            Start your search today and get instant access to the latest properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/search" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Searching Now
            </Button>
            <Button href="/contact" intent="secondary" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              Talk to an Expert
            </Button>
          </div>
          <p className="text-blue-200 mt-6 text-sm">
            No commitment required • Free property alerts • Expert guidance included
          </p>
        </div>
      </section>
    </>
  )
}
