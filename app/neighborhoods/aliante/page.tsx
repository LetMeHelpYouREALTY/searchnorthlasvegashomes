import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Aliante Neighborhood | North Las Vegas Real Estate",
  description: "Discover Aliante, a master-planned community in North Las Vegas. Learn about homes, amenities, schools, and real estate market trends in this desirable neighborhood.",
  keywords: "Aliante neighborhood, North Las Vegas homes, Aliante real estate, master-planned community, Las Vegas homes",
  openGraph: {
    title: "Aliante Neighborhood | North Las Vegas Real Estate",
    description: "Discover Aliante, a master-planned community in North Las Vegas. Learn about homes, amenities, schools, and real estate market trends.",
    url: "https://searchnorthlasvegashomes.com/neighborhoods/aliante",
  },
}

export default function AliantePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Aliante Neighborhood
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            A master-planned community offering modern homes, excellent amenities, and a family-friendly environment in North Las Vegas
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quick Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$450K</div>
              <div className="text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-gray-600">Homes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8.5/10</div>
              <div className="text-gray-600">School Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Owner Occupied</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Aliante */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              About Aliante
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Aliante is a master-planned community located in the northern part of Las Vegas, offering a perfect blend of suburban tranquility and urban convenience. This well-designed neighborhood features modern architecture, tree-lined streets, and a strong sense of community.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Built in the early 2000s, Aliante has grown into one of North Las Vegas's most desirable neighborhoods, attracting families, professionals, and retirees who appreciate the area's amenities, schools, and quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Amenities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Community Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Parks & Recreation
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Aliante Nature Discovery Park</li>
                <li>• Community swimming pools</li>
                <li>• Tennis courts</li>
                <li>• Walking trails</li>
                <li>• Playgrounds</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Shopping & Dining
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Aliante Casino + Hotel</li>
                <li>• Aliante Marketplace</li>
                <li>• Grocery stores</li>
                <li>• Restaurants & cafes</li>
                <li>• Retail shops</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Transportation
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Easy freeway access</li>
                <li>• Public transportation</li>
                <li>• Bike-friendly streets</li>
                <li>• Close to airport</li>
                <li>• Downtown access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schools in Aliante */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Schools in Aliante
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Elementary Schools
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Aliante Elementary</div>
                  <div className="text-sm text-gray-500">Grades K-5 • 8.2/10 Rating</div>
                </li>
                <li>
                  <div className="font-medium">Cox Elementary</div>
                  <div className="text-sm text-gray-500">Grades K-5 • 7.8/10 Rating</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Middle Schools
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Aliante Middle School</div>
                  <div className="text-sm text-gray-500">Grades 6-8 • 8.0/10 Rating</div>
                </li>
                <li>
                  <div className="font-medium">Canyon Springs</div>
                  <div className="text-sm text-gray-500">Grades 6-8 • 7.5/10 Rating</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                High Schools
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Canyon Springs High</div>
                  <div className="text-sm text-gray-500">Grades 9-12 • 7.8/10 Rating</div>
                </li>
                <li>
                  <div className="font-medium">Legacy High School</div>
                  <div className="text-sm text-gray-500">Grades 9-12 • 8.1/10 Rating</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Market in Aliante */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Real Estate Market in Aliante
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Market Overview
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Aliante's real estate market has shown consistent growth over the past decade, with home values appreciating steadily. The neighborhood offers a mix of single-family homes, townhomes, and condominiums to suit various lifestyles and budgets.
                </p>
                <p>
                  Recent market data shows strong demand for homes in Aliante, with properties typically selling within 30-45 days and often receiving multiple offers, especially for well-maintained homes in desirable locations.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Home Types & Prices
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Single-Family Homes</div>
                  <div className="text-sm text-gray-600">$400K - $600K • 3-5 bedrooms</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Townhomes</div>
                  <div className="text-sm text-gray-600">$350K - $450K • 2-3 bedrooms</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Condominiums</div>
                  <div className="text-sm text-gray-600">$250K - $400K • 1-3 bedrooms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Home in Aliante?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our local experts help you find the perfect home in this desirable North Las Vegas neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/search" className="bg-white text-blue-900 hover:bg-gray-100">
              Search Aliante Homes
            </Button>
            <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-900">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 