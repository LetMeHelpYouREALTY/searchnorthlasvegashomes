import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Skye Canyon Neighborhood | North Las Vegas Real Estate",
  description: "Discover Skye Canyon, a modern master-planned community in North Las Vegas. Learn about homes, amenities, schools, and real estate market trends in this growing neighborhood.",
  keywords: "Skye Canyon neighborhood, North Las Vegas homes, Skye Canyon real estate, master-planned community, Las Vegas homes",
  openGraph: {
    title: "Skye Canyon Neighborhood | North Las Vegas Real Estate",
    description: "Discover Skye Canyon, a modern master-planned community in North Las Vegas. Learn about homes, amenities, schools, and real estate market trends.",
    url: "https://searchnorthlasvegashomes.com/neighborhoods/skye-canyon",
  },
}

export default function SkyeCanyonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Skye Canyon Neighborhood
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            A modern master-planned community featuring sustainable design, outdoor recreation, and family-friendly amenities in North Las Vegas
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
              <div className="text-3xl font-bold text-green-600 mb-2">$500K</div>
              <div className="text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1,800+</div>
              <div className="text-gray-600">Homes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">9.0/10</div>
              <div className="text-gray-600">School Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Owner Occupied</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Skye Canyon */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              About Skye Canyon
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Skye Canyon is a contemporary master-planned community that emphasizes outdoor living, sustainability, and modern design. Built with a focus on preserving the natural desert landscape, this neighborhood offers residents a unique blend of urban convenience and outdoor adventure.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The community features energy-efficient homes, extensive trail systems, and a commitment to environmental stewardship, making it an ideal choice for families who value both comfort and outdoor recreation.
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
                Outdoor Recreation
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 50+ miles of hiking trails</li>
                <li>• Skye Canyon Regional Park</li>
                <li>• Mountain biking trails</li>
                <li>• Rock climbing areas</li>
                <li>• Community gardens</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Community Features
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Skye Canyon Village Center</li>
                <li>• Community pools & spas</li>
                <li>• Fitness center</li>
                <li>• Dog parks</li>
                <li>• Event spaces</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Sustainability
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Solar-ready homes</li>
                <li>• Water conservation</li>
                <li>• Native landscaping</li>
                <li>• Energy-efficient design</li>
                <li>• EV charging stations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schools in Skye Canyon */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Schools in Skye Canyon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Elementary Schools
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Skye Canyon Elementary</div>
                  <div className="text-sm text-gray-500">Grades K-5 • 9.2/10 Rating</div>
                </li>
                <li>
                  <div className="font-medium">Canyon Springs Elementary</div>
                  <div className="text-sm text-gray-500">Grades K-5 • 8.8/10 Rating</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Middle Schools
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Skye Canyon Middle</div>
                  <div className="text-sm text-gray-500">Grades 6-8 • 9.0/10 Rating</div>
                </li>
                <li>
                  <div className="font-medium">Canyon Springs Middle</div>
                  <div className="text-sm text-gray-500">Grades 6-8 • 8.5/10 Rating</div>
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
                  <div className="text-sm text-gray-500">Grades 9-12 • 8.8/10 Rating</div>
                </li>
                <li>
                  <div className="font-medium">Legacy High School</div>
                  <div className="text-sm text-gray-500">Grades 9-12 • 8.9/10 Rating</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Market in Skye Canyon */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Real Estate Market in Skye Canyon
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Market Overview
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Skye Canyon's real estate market has experienced strong growth since its development, with home values appreciating significantly. The neighborhood's focus on sustainability and outdoor recreation has attracted buyers seeking a modern, environmentally conscious lifestyle.
                </p>
                <p>
                  Properties in Skye Canyon are highly sought after, with homes typically selling quickly and often above asking price. The community's amenities and school ratings make it particularly attractive to families.
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
                  <div className="text-sm text-gray-600">$450K - $750K • 3-5 bedrooms</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Townhomes</div>
                  <div className="text-sm text-gray-600">$400K - $550K • 2-4 bedrooms</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Luxury Homes</div>
                  <div className="text-sm text-gray-600">$750K+ • 4-6 bedrooms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Home in Skye Canyon?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our local experts help you find the perfect home in this modern, sustainable North Las Vegas neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/search" className="bg-white text-green-900 hover:bg-gray-100">
              Search Skye Canyon Homes
            </Button>
            <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-green-900">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 