import { Metadata } from "next"
import { Button } from "../../components/Button/Button"

export const metadata: Metadata = {
  title: "About Dr. Jan Duffy",
  description: "Meet Dr. Jan Duffy, North Las Vegas REALTOR® with Berkshire Hathaway HomeServices Nevada Properties.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            About Dr. Jan Duffy
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            North Las Vegas buyers and sellers, guided with real local numbers.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Empowering Homebuyers and Sellers
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                We believe everyone deserves to find their perfect home in North Las Vegas. Our mission is to provide 
                exceptional real estate services that make the buying and selling process seamless, transparent, and successful.
              </p>
              <p className="text-lg text-gray-700">
                With deep local knowledge and cutting-edge technology, we help our clients navigate the North Las Vegas 
                real estate market with confidence and achieve their property goals.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Why Choose Us?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Local market expertise
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Advanced technology tools
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Personalized service approach
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Transparent communication
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Your North Las Vegas Agent
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Dr. Jan Duffy, REALTOR®</h3>
            <p className="text-blue-600 font-medium mb-1">Berkshire Hathaway HomeServices Nevada Properties</p>
            <p className="text-gray-500 mb-4">Nevada License S.0197614.LLC</p>
            <p className="text-gray-700">
              35 years in Las Vegas real estate. Buyers and sellers get subdivision-level sales data,
              not online estimates, and one agent who handles their move from first call to closing.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Integrity
              </h3>
              <p className="text-gray-600">
                We conduct business with honesty, transparency, and ethical practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in every transaction and client interaction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Local Expertise
              </h3>
              <p className="text-gray-600">
                Deep knowledge of North Las Vegas neighborhoods and market conditions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Innovation
              </h3>
              <p className="text-gray-600">
                Leveraging technology to provide better service and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss your real estate goals and how we can help you achieve them.
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