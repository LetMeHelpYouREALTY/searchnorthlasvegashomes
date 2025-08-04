import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Skye Canyon Neighborhood | North Las Vegas Real Estate Guide & Market Data",
  description: "Comprehensive guide to Skye Canyon neighborhood in North Las Vegas. Median home price: $500K, school ratings 9.0/10, sustainable design, outdoor recreation, and real estate market trends. Expert insights for buyers and sellers.",
  keywords: "Skye Canyon neighborhood, North Las Vegas homes, Skye Canyon real estate, median home price $500K, sustainable design, outdoor recreation, school ratings, market trends, buyer guide, seller guide",
  openGraph: {
    title: "Skye Canyon Neighborhood | North Las Vegas Real Estate Guide & Market Data",
    description: "Comprehensive guide to Skye Canyon neighborhood in North Las Vegas. Median home price: $500K, school ratings 9.0/10, sustainable design, outdoor recreation, and real estate market trends.",
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
            Skye Canyon Neighborhood Guide
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Complete guide to Skye Canyon, North Las Vegas: Median home price $500K, 9.0/10 school rating, sustainable design, 50+ miles of trails, 35-minute commute to downtown, modern master-planned community
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Skye Canyon Quick Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$500,000</div>
              <div className="text-gray-600">Median Home Price</div>
              <div className="text-sm text-gray-500">+15% YoY growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1,800+</div>
              <div className="text-gray-600">Total Homes</div>
              <div className="text-sm text-gray-500">Built 2015-present</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">9.0/10</div>
              <div className="text-gray-600">School Rating</div>
              <div className="text-sm text-gray-500">Clark County District</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">35 min</div>
              <div className="text-gray-600">Downtown Commute</div>
              <div className="text-sm text-gray-500">Via US-95</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Skye Canyon */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              About Skye Canyon Neighborhood
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Skye Canyon is a contemporary master-planned community that emphasizes outdoor living, sustainability, and modern design. Built with a focus on preserving the natural desert landscape, this neighborhood offers residents a unique blend of urban convenience and outdoor adventure.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The community features energy-efficient homes, extensive trail systems, and a commitment to environmental stewardship, making it an ideal choice for families who value both comfort and outdoor recreation.
              </p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">Key Neighborhood Facts</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Location:</strong> Northwest North Las Vegas, Nevada (89129 zip code)</li>
                <li>• <strong>Development Period:</strong> 2015-present (ongoing)</li>
                <li>• <strong>Home Styles:</strong> Single-family homes, townhomes, luxury homes</li>
                <li>• <strong>Lot Sizes:</strong> 4,000-12,000 square feet typical</li>
                <li>• <strong>Home Sizes:</strong> 1,400-4,200 square feet</li>
                <li>• <strong>Architecture:</strong> Modern desert contemporary</li>
                <li>• <strong>HOA:</strong> Yes, typical fees $45-75/month</li>
                <li>• <strong>Elevation:</strong> 2,900-3,100 feet above sea level</li>
                <li>• <strong>Trail System:</strong> 50+ miles of hiking and biking trails</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Amenities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Skye Canyon Community Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Outdoor Recreation
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>50+ miles of hiking trails</strong> - Extensive trail network</li>
                <li>• <strong>Skye Canyon Regional Park</strong> - 200-acre park</li>
                <li>• <strong>Mountain biking trails</strong> - Dedicated bike paths</li>
                <li>• <strong>Rock climbing areas</strong> - Natural rock formations</li>
                <li>• <strong>Community gardens</strong> - Organic gardening spaces</li>
                <li>• <strong>Dog parks</strong> - Multiple off-leash areas</li>
                <li>• <strong>Fitness stations</strong> - Outdoor workout equipment</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Community Features
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Skye Canyon Village Center</strong> - Shopping and dining</li>
                <li>• <strong>Community pools & spas</strong> - 4 heated pools</li>
                <li>• <strong>Fitness center</strong> - 24/7 access</li>
                <li>• <strong>Event spaces</strong> - Community gathering areas</li>
                <li>• <strong>Sports courts</strong> - Tennis, basketball, volleyball</li>
                <li>• <strong>Playgrounds</strong> - 8 neighborhood playgrounds</li>
                <li>• <strong>Community center</strong> - Meeting rooms and activities</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Sustainability Features
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Solar-ready homes</strong> - Pre-wired for solar panels</li>
                <li>• <strong>Water conservation</strong> - Drought-resistant landscaping</li>
                <li>• <strong>Native landscaping</strong> - Desert-appropriate plants</li>
                <li>• <strong>Energy-efficient design</strong> - LEED-certified homes</li>
                <li>• <strong>EV charging stations</strong> - Multiple charging points</li>
                <li>• <strong>Smart home technology</strong> - Energy monitoring systems</li>
                <li>• <strong>Recycling programs</strong> - Comprehensive waste management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schools in Skye Canyon */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Schools in Skye Canyon Neighborhood
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Elementary Schools (K-5)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Skye Canyon Elementary School</div>
                  <div className="text-sm text-gray-500">Grades K-5 • 9.2/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 16:1</div>
                  <div className="text-sm text-gray-500">Distance: 0.4 miles</div>
                </li>
                <li>
                  <div className="font-medium">Canyon Springs Elementary</div>
                  <div className="text-sm text-gray-500">Grades K-5 • 8.8/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 17:1</div>
                  <div className="text-sm text-gray-500">Distance: 1.8 miles</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Middle Schools (6-8)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Skye Canyon Middle School</div>
                  <div className="text-sm text-gray-500">Grades 6-8 • 9.0/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 18:1</div>
                  <div className="text-sm text-gray-500">Distance: 0.6 miles</div>
                </li>
                <li>
                  <div className="font-medium">Canyon Springs Middle</div>
                  <div className="text-sm text-gray-500">Grades 6-8 • 8.5/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 19:1</div>
                  <div className="text-sm text-gray-500">Distance: 2.3 miles</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                High Schools (9-12)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Canyon Springs High School</div>
                  <div className="text-sm text-gray-500">Grades 9-12 • 8.8/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 20:1</div>
                  <div className="text-sm text-gray-500">Distance: 2.5 miles</div>
                </li>
                <li>
                  <div className="font-medium">Legacy High School</div>
                  <div className="text-sm text-gray-500">Grades 9-12 • 8.9/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 21:1</div>
                  <div className="text-sm text-gray-500">Distance: 4.2 miles</div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">School District Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>District:</strong> Clark County School District (CCSD)</li>
              <li>• <strong>Overall District Rating:</strong> 7.5/10</li>
              <li>• <strong>Special Programs:</strong> Gifted & Talented, ESL, Special Education</li>
              <li>• <strong>Extracurricular:</strong> Sports, music, arts, clubs</li>
              <li>• <strong>College Readiness:</strong> 75% of graduates attend college</li>
              <li>• <strong>Advanced Placement:</strong> 20+ AP courses available</li>
              <li>• <strong>Career Technical Education:</strong> STEM and vocational programs</li>
            </ul>
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
                  Skye Canyon's real estate market has experienced strong growth since its development, with home values appreciating significantly at an average of 15% annually. The neighborhood's focus on sustainability and outdoor recreation has attracted buyers seeking a modern, environmentally conscious lifestyle.
                </p>
                <p>
                  Properties in Skye Canyon are highly sought after, with homes typically selling quickly and often above asking price. The community's amenities and school ratings make it particularly attractive to families.
                </p>
                
                <h4 className="text-lg font-semibold mt-6 mb-3">Market Statistics</h4>
                <ul className="space-y-2">
                  <li>• <strong>Median Home Price:</strong> $500,000</li>
                  <li>• <strong>Average Days on Market:</strong> 28 days</li>
                  <li>• <strong>Price per Square Foot:</strong> $210</li>
                  <li>• <strong>Annual Appreciation:</strong> 15%</li>
                  <li>• <strong>Inventory Level:</strong> Very Low (1.8 months supply)</li>
                  <li>• <strong>Owner Occupancy Rate:</strong> 98%</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Home Types & Prices
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Single-Family Homes</div>
                  <div className="text-sm text-gray-600">$450,000 - $750,000</div>
                  <div className="text-sm text-gray-500">3-5 bedrooms, 2-4 bathrooms</div>
                  <div className="text-sm text-gray-500">1,400-3,200 sq ft</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Townhomes</div>
                  <div className="text-sm text-gray-600">$400,000 - $550,000</div>
                  <div className="text-sm text-gray-500">2-4 bedrooms, 2-3 bathrooms</div>
                  <div className="text-sm text-gray-500">1,200-2,400 sq ft</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Luxury Homes</div>
                  <div className="text-sm text-gray-600">$750,000+</div>
                  <div className="text-sm text-gray-500">4-6 bedrooms, premium features</div>
                  <div className="text-sm text-gray-500">3,000-4,200 sq ft</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commute Times & Transportation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Commute Times & Transportation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Major Destinations</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Downtown Las Vegas</div>
                  <div className="text-sm text-gray-500">35 minutes via US-95</div>
                  <div className="text-sm text-gray-500">25 miles</div>
                </li>
                <li>
                  <div className="font-medium">Las Vegas Strip</div>
                  <div className="text-sm text-gray-500">30 minutes via I-15</div>
                  <div className="text-sm text-gray-500">20 miles</div>
                </li>
                <li>
                  <div className="font-medium">McCarran Airport (LAS)</div>
                  <div className="text-sm text-gray-500">25 minutes via US-95</div>
                  <div className="text-sm text-gray-500">18 miles</div>
                </li>
                <li>
                  <div className="font-medium">North Las Vegas Airport</div>
                  <div className="text-sm text-gray-500">15 minutes via US-95</div>
                  <div className="text-sm text-gray-500">10 miles</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Public Transportation</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">RTC Bus Routes</div>
                  <div className="text-sm text-gray-500">Routes 104, 105, 106</div>
                  <div className="text-sm text-gray-500">25-40 minute frequency</div>
                </li>
                <li>
                  <div className="font-medium">Express Routes</div>
                  <div className="text-sm text-gray-500">Route 111 to downtown</div>
                  <div className="text-sm text-gray-500">Limited stops</div>
                </li>
                <li>
                  <div className="font-medium">Park & Ride</div>
                  <div className="text-sm text-gray-500">Skye Canyon Station</div>
                  <div className="text-sm text-gray-500">Free parking available</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Road Access</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">US-95 Freeway</div>
                  <div className="text-sm text-gray-500">4 minutes to access</div>
                  <div className="text-sm text-gray-500">North/South travel</div>
                </li>
                <li>
                  <div className="font-medium">I-215 Beltway</div>
                  <div className="text-sm text-gray-500">6 minutes to access</div>
                  <div className="text-sm text-gray-500">East/West travel</div>
                </li>
                <li>
                  <div className="font-medium">Surface Streets</div>
                  <div className="text-sm text-gray-500">Well-maintained roads</div>
                  <div className="text-sm text-gray-500">Bike-friendly lanes</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions About Skye Canyon
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the average home price in Skye Canyon?</h3>
              <p className="text-gray-700">The median home price in Skye Canyon is $500,000, with single-family homes ranging from $450,000 to $750,000. Townhomes typically sell for $400,000-$550,000, while luxury homes can exceed $750,000.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How are the schools in Skye Canyon?</h3>
              <p className="text-gray-700">Skye Canyon has excellent schools with an average rating of 9.0/10. Skye Canyon Elementary (9.2/10), Skye Canyon Middle School (9.0/10), and Canyon Springs High School (8.8/10) are all highly rated within the Clark County School District.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the commute time to downtown Las Vegas?</h3>
              <p className="text-gray-700">The average commute time from Skye Canyon to downtown Las Vegas is 35 minutes via US-95 freeway (25 miles). During peak traffic hours, this can extend to 45-50 minutes.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Are there HOA fees in Skye Canyon?</h3>
              <p className="text-gray-700">Yes, most homes in Skye Canyon have HOA fees ranging from $45 to $75 per month. These fees typically cover common area maintenance, pool access, trail maintenance, and some utilities.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What amenities are available in Skye Canyon?</h3>
              <p className="text-gray-700">Skye Canyon offers extensive amenities including 50+ miles of hiking and biking trails, Skye Canyon Regional Park, community pools and spas, fitness center, Skye Canyon Village Center, sports courts, playgrounds, and sustainable features like solar-ready homes and EV charging stations.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Is Skye Canyon a good investment for real estate?</h3>
              <p className="text-gray-700">Yes, Skye Canyon has shown exceptional appreciation with 15% annual growth. The neighborhood's modern design, sustainability features, excellent schools, and outdoor recreation opportunities make it a highly desirable investment with properties typically selling within 28 days.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the crime rate in Skye Canyon?</h3>
              <p className="text-gray-700">Skye Canyon has a very low crime rate, approximately 50% below the city average. The neighborhood's 98% owner-occupancy rate, modern security features, and active community contribute to its excellent safety record.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How far is Skye Canyon from the airport?</h3>
              <p className="text-gray-700">McCarran International Airport (LAS) is approximately 25 minutes from Skye Canyon via US-95 freeway (18 miles). North Las Vegas Airport is even closer at just 15 minutes away (10 miles).</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What makes Skye Canyon unique?</h3>
              <p className="text-gray-700">Skye Canyon is unique for its focus on sustainability and outdoor recreation, featuring 50+ miles of trails, solar-ready homes, EV charging stations, modern desert architecture, and a commitment to preserving the natural landscape while offering urban convenience.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Are the homes in Skye Canyon energy efficient?</h3>
              <p className="text-gray-700">Yes, Skye Canyon homes are designed with energy efficiency in mind. Features include solar-ready wiring, energy-efficient appliances, smart home technology, LEED certification, and sustainable building materials that help reduce utility costs and environmental impact.</p>
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
            Let our local experts help you find the perfect home in this modern, sustainable North Las Vegas neighborhood. Get current market data and expert guidance.
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