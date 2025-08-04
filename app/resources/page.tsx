import { Metadata } from "next"
import { Button } from "../../components/Button/Button"

export const metadata: Metadata = {
  title: "Real Estate Resources",
  description: "Comprehensive real estate resources, guides, and tools to help you navigate the North Las Vegas housing market.",
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Real Estate Resources
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Everything you need to know about buying, selling, and investing in North Las Vegas real estate.
          </p>
        </div>
      </section>

      {/* Buyer Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Buyer Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Mortgage Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Calculate your monthly payments, estimate closing costs, and understand your buying power.
              </p>
              <Button href="/tools/mortgage-calculator" className="text-blue-600 hover:text-blue-700">
                Calculate Now →
              </Button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Home Buying Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Step-by-step guide to buying your first home in North Las Vegas.
              </p>
              <Button href="/guides/home-buying" className="text-green-600 hover:text-green-700">
                Read Guide →
              </Button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Lender Directory
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with trusted mortgage lenders and get pre-approved quickly.
              </p>
              <Button href="/lenders" className="text-purple-600 hover:text-purple-700">
                Find Lenders →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seller Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Seller Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Home Valuation Tool
              </h3>
              <p className="text-gray-600 mb-4">
                Get an instant estimate of your home's current market value.
              </p>
              <Button href="/valuation" className="text-orange-600 hover:text-orange-700">
                Get Valuation →
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Selling Strategy Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to maximize your home's value and sell quickly.
              </p>
              <Button href="/guides/selling-strategy" className="text-red-600 hover:text-red-700">
                Read Guide →
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 text-xl">📸</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Home Staging Tips
              </h3>
              <p className="text-gray-600 mb-4">
                Professional tips to make your home more attractive to buyers.
              </p>
              <Button href="/guides/home-staging" className="text-indigo-600 hover:text-indigo-700">
                View Tips →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Investment Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                ROI Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Calculate potential returns on investment properties in North Las Vegas.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Rental income projections</p>
                <p>• Cash flow analysis</p>
                <p>• Property appreciation estimates</p>
              </div>
              <Button href="/tools/roi-calculator" className="mt-4 text-blue-600 hover:text-blue-700">
                Calculate ROI →
              </Button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Investment Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guide to real estate investing in North Las Vegas.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Market analysis</p>
                <p>• Investment strategies</p>
                <p>• Tax considerations</p>
              </div>
              <Button href="/guides/investment" className="mt-4 text-green-600 hover:text-green-700">
                Read Guide →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Educational Content
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Market Reports
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Monthly and quarterly market analysis reports.
              </p>
              <Button href="/reports" className="text-blue-600 hover:text-blue-700 text-sm">
                View Reports →
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Blog Articles
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Expert insights and real estate tips.
              </p>
              <Button href="/blog" className="text-green-600 hover:text-green-700 text-sm">
                Read Blog →
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Video Library
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Educational videos and property tours.
              </p>
              <Button href="/videos" className="text-purple-600 hover:text-purple-700 text-sm">
                Watch Videos →
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Webinars
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Live and recorded educational sessions.
              </p>
              <Button href="/webinars" className="text-orange-600 hover:text-orange-700 text-sm">
                Join Webinars →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Calculators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Tools & Calculators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Affordability Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Determine how much house you can afford based on your income and expenses.
              </p>
              <Button href="/tools/affordability" className="text-blue-600 hover:text-blue-700">
                Calculate →
              </Button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Closing Cost Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Estimate all the costs associated with closing on your new home.
              </p>
              <Button href="/tools/closing-costs" className="text-green-600 hover:text-green-700">
                Calculate →
              </Button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Refinance Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                See if refinancing your mortgage makes financial sense.
              </p>
              <Button href="/tools/refinance" className="text-purple-600 hover:text-purple-700">
                Calculate →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Tax Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Legal & Tax Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Real Estate Law Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Understanding Nevada real estate laws and regulations.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Property rights and ownership</p>
                <p>• Contract requirements</p>
                <p>• Dispute resolution</p>
              </div>
              <Button href="/legal/real-estate-law" className="mt-4 text-blue-600 hover:text-blue-700">
                Read Guide →
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Tax Benefits Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Maximize your tax benefits as a homeowner or investor.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Mortgage interest deductions</p>
                <p>• Property tax benefits</p>
                <p>• Investment property tax strategies</p>
              </div>
              <Button href="/tax/benefits" className="mt-4 text-green-600 hover:text-green-700">
                Read Guide →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Personalized Help?
          </h2>
          <p className="text-xl mb-8">
            Our real estate experts are here to answer your questions and guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Contact Us
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