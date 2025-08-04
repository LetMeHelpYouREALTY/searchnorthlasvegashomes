import { Metadata } from "next"
import { Button } from "../../components/Button/Button"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive real estate services for buyers, sellers, and investors in North Las Vegas. Expert guidance every step of the way.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Our Services
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Comprehensive real estate services tailored to your needs. From buying and selling to investing, we're here to help.
          </p>
        </div>
      </section>

      {/* Buyer Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Buyer Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Property Search
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced search tools and personalized property recommendations based on your criteria.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Custom search criteria</li>
                <li>• New listing alerts</li>
                <li>• Market analysis</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Home Tours
              </h3>
              <p className="text-gray-600 mb-4">
                Professional guided tours of properties that match your requirements and budget.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Virtual and in-person tours</li>
                <li>• Expert property insights</li>
                <li>• Neighborhood exploration</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Negotiation Support
              </h3>
              <p className="text-gray-600 mb-4">
                Expert negotiation to help you get the best possible deal on your new home.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Market value analysis</li>
                <li>• Offer strategy</li>
                <li>• Counter-offer guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seller Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Seller Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Home Valuation
              </h3>
              <p className="text-gray-600 mb-4">
                Accurate market analysis and pricing strategy to maximize your home's value.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Comparative market analysis</li>
                <li>• Pricing strategy</li>
                <li>• Market timing advice</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">📸</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Marketing & Staging
              </h3>
              <p className="text-gray-600 mb-4">
                Professional photography, virtual tours, and staging to showcase your home.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Professional photography</li>
                <li>• Virtual tours</li>
                <li>• Staging consultation</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Transaction Management
              </h3>
              <p className="text-gray-600 mb-4">
                Complete transaction support from listing to closing, ensuring a smooth process.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Contract management</li>
                <li>• Closing coordination</li>
                <li>• Legal compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Investment Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Investment Property Analysis
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive analysis of potential investment properties including ROI calculations and market trends.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Cash flow analysis</p>
                <p>• Market appreciation potential</p>
                <p>• Tax implications</p>
                <p>• Property management options</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Portfolio Management
              </h3>
              <p className="text-gray-600 mb-4">
                Strategic management of your real estate investment portfolio for optimal returns.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Portfolio diversification</p>
                <p>• Performance tracking</p>
                <p>• Exit strategy planning</p>
                <p>• Market timing advice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Specialized Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Commercial Real Estate
              </h3>
              <p className="text-gray-600 text-sm">
                Office, retail, and industrial property transactions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                New Construction
              </h3>
              <p className="text-gray-600 text-sm">
                Pre-construction sales and builder relationships.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🏘️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Luxury Properties
              </h3>
              <p className="text-gray-600 text-sm">
                High-end residential properties and estates.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Relocation Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full-service relocation support for families and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Technology & Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Advanced Search Platform
              </h3>
              <p className="text-gray-600 mb-4">
                State-of-the-art property search with advanced filters and real-time updates.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• AI-powered recommendations</p>
                <p>• Saved searches and alerts</p>
                <p>• Mobile-optimized interface</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Virtual Tours & 3D Walkthroughs
              </h3>
              <p className="text-gray-600 mb-4">
                Immersive virtual experiences to explore properties from anywhere.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• 360-degree virtual tours</p>
                <p>• Interactive floor plans</p>
                <p>• VR-compatible experiences</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Digital Transaction Management
              </h3>
              <p className="text-gray-600 mb-4">
                Streamlined digital processes for faster, more secure transactions.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Electronic document signing</p>
                <p>• Real-time status updates</p>
                <p>• Secure file sharing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Service Guarantee
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Commitment to Excellence
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900">What We Promise</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Personalized service tailored to your needs</li>
                  <li>• Transparent communication throughout the process</li>
                  <li>• Expert market knowledge and insights</li>
                  <li>• Professional representation and negotiation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Our Standards</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 24-hour response time to all inquiries</li>
                  <li>• Regular progress updates and reports</li>
                  <li>• Access to our full network of professionals</li>
                  <li>• Ongoing support after closing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss your real estate goals and how our services can help you achieve them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Schedule Consultation
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