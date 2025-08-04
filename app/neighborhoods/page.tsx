import { Metadata } from "next"
import { Button } from "../../components/Button/Button"

export const metadata: Metadata = {
  title: "North Las Vegas Neighborhoods",
  description: "Explore the best neighborhoods in North Las Vegas. Find detailed information about schools, amenities, and property values in each area.",
}

export default function NeighborhoodsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            North Las Vegas Neighborhoods
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover the perfect neighborhood for your lifestyle. Explore schools, amenities, and market insights.
          </p>
        </div>
      </section>

      {/* Featured Neighborhoods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Featured Neighborhoods
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Aliante
                </h3>
                <p className="text-gray-600 mb-4">
                  A master-planned community with excellent schools, parks, and shopping centers.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>🏠 Average Home Price: $450,000</p>
                  <p>🎓 Top-Rated Schools</p>
                  <p>🛒 Shopping & Dining</p>
                </div>
                <Button href="/neighborhoods/aliante" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Centennial Hills
                </h3>
                <p className="text-gray-600 mb-4">
                  Family-friendly area with mountain views and excellent recreational opportunities.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>🏠 Average Home Price: $520,000</p>
                  <p>🏔️ Mountain Views</p>
                  <p>🚴 Outdoor Recreation</p>
                </div>
                <Button href="/neighborhoods/centennial-hills" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Skye Canyon
                </h3>
                <p className="text-gray-600 mb-4">
                  Modern development with innovative amenities and sustainable living features.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>🏠 Average Home Price: $580,000</p>
                  <p>🌱 Sustainable Living</p>
                  <p>🏊 Community Amenities</p>
                </div>
                <Button href="/neighborhoods/skye-canyon" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            North Las Vegas Market Overview
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                $485,000
              </h3>
              <p className="text-gray-600">Median Home Price</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                +8.5%
              </h3>
              <p className="text-gray-600">Price Growth (YoY)</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">
                45 days
              </h3>
              <p className="text-gray-600">Average Days on Market</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">
                2,847
              </h3>
              <p className="text-gray-600">Active Listings</p>
            </div>
          </div>
        </div>
      </section>

      {/* School Districts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Top School Districts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Clark County School District
              </h3>
              <p className="text-gray-600 mb-4">
                The largest school district in Nevada, serving North Las Vegas with diverse educational programs.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📚 300+ Schools</p>
                <p>🎓 Advanced Placement Programs</p>
                <p>🏆 Award-Winning Teachers</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Charter Schools
              </h3>
              <p className="text-gray-600 mb-4">
                Innovative charter schools offering specialized curriculum and smaller class sizes.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>🎯 Specialized Programs</p>
                <p>👥 Small Class Sizes</p>
                <p>📈 High Academic Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Local Amenities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Shopping & Dining
              </h3>
              <p className="text-gray-600">
                Access to major retail centers, restaurants, and entertainment venues throughout North Las Vegas.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Healthcare
              </h3>
              <p className="text-gray-600">
                Quality healthcare facilities including hospitals, urgent care centers, and medical offices.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">🚗</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Transportation
              </h3>
              <p className="text-gray-600">
                Easy access to major highways, public transportation, and proximity to McCarran International Airport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl mb-8">
            Let us help you find the perfect neighborhood for your lifestyle and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/search" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Search Properties
            </Button>
            <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 